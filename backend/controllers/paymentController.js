import DodoPayments from 'dodopayments';
import Course from '../models/Course.js';
import { getAuth } from '@clerk/express';
import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Dodo Payments client will be instantiated lazily inside the controller

// @desc    Create a checkout session for a course
// @route   POST /api/payments/checkout
// @access  Private
const createCheckout = asyncHandler(async (req, res) => {
    const { courseId } = req.body;
    const clerkId = getAuth(req).userId;

    if (!courseId) {
        throw new ApiError(400, 'Course ID is required');
    }

    const user = await User.findOne({ clerkId });
    console.log("Checkout requested by user:", user?.email, "clerkId:", clerkId);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    console.log("Checkout requested for courseId:", courseId);
    const course = await Course.findById(courseId);
    console.log("Course found:", !!course);
    if (!course) {
        throw new ApiError(404, 'Course not found');
    }

    // Check if already purchased
    const existingPurchase = await Purchase.findOne({
        user: user._id,
        course: course._id,
        status: 'completed'
    });

    if (existingPurchase) {
        throw new ApiError(400, 'You have already purchased this course');
    }

    // Initialize Dodo Payments client lazily to avoid ESM import hoisting issues
    const dodoClient = new DodoPayments({
        bearerToken: process.env.DODO_PAYMENTS_API_KEY,
        environment: 'test_mode', 
    });

    try {
        let dodoProductId = course.dodoProductId;
        
        if (!dodoProductId) {
            // Create product in DodoPayments first since we don't have one
            const product = await dodoClient.products.create({
                name: course.title || 'Course',
                description: course.description || `Purchase for course: ${course.title || courseId}`,
                tax_category: 'digital_products',
                price: {
                    currency: 'INR',
                    discount: 0,
                    price: course.price,
                    purchasing_power_parity: false,
                    type: 'one_time_price'
                },
            });
            dodoProductId = product.product_id;
            
            // Save it so we don't create it again
            course.dodoProductId = dodoProductId;
            await course.save();
        }

        // Create the checkout payment session
        const paymentSession = await dodoClient.payments.create({
            customer: {
                email: user.email,
                name: user.username,
            },
            billing: {
                city: user.city || "N/A",
                country: "US", // Default to US if not collected
                state: "N/A",
                street: "N/A",
                zipcode: "00000"
            },
            product_cart: [{
                product_id: dodoProductId,
                quantity: 1
            }],
            return_url: `${req.headers.origin}/profile?payment=success`,
            payment_link: true,
            metadata: {
                userId: user._id.toString(),
                courseId: course._id.toString()
            }
        });

        // Store pending purchase
        await Purchase.create({
            user: user._id,
            course: course._id,
            dodoPaymentId: paymentSession.payment_id,
            status: 'pending'
        });

        // Send payment link to frontend
        return res.status(200).json(
            new ApiResponse(200, { checkoutUrl: paymentSession.payment_link }, "Checkout created")
        );
    } catch (error) {
        console.error("Dodo Payments Error:", error);
        throw new ApiError(500, 'Failed to initialize payment gateway');
    }
});

// @desc    Handle Dodo Payments Webhook
// @route   POST /api/payments/webhook
// @access  Public
const handleWebhook = asyncHandler(async (req, res) => {
    const dodoClient = new DodoPayments({
        bearerToken: process.env.DODO_PAYMENTS_API_KEY,
        environment: 'test_mode',
    });

    let event;

    try {
        const webhookSecret = process.env.DODO_PAYMENTS_WEBHOOK_KEY;
        event = dodoClient.webhooks.unwrap(req.body.toString(), {
            headers: req.headers,
            key: webhookSecret
        });
    } catch (err) {
        console.error("Webhook Error:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'payment.succeeded') {
        const payment = event.data;
        const paymentId = payment.payment_id;

        // Find the pending purchase
        const purchase = await Purchase.findOne({ dodoPaymentId: paymentId });
        
        if (purchase) {
            purchase.status = 'completed';
            await purchase.save();
            console.log(`Payment successful for purchase ${purchase._id}`);
        }
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });
});

export { createCheckout, handleWebhook };
