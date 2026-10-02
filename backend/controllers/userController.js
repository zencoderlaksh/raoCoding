import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { getAuth, clerkClient } from '@clerk/express';
import { Webhook } from 'svix';

/**
 * Helper to ensure a Clerk user is synchronized into MongoDB.
 * Safely fetches latest profile data from Clerk, creates/updates the User document,
 * and sets admin rights if the email matches ADMIN_EMAIL or publicMetadata.
 */
export const syncClerkUserToDB = async (clerkId) => {
    let clerkUser = null;
    try {
        if (process.env.CLERK_SECRET_KEY && !process.env.CLERK_SECRET_KEY.includes('YOUR_CLERK_SECRET_KEY')) {
            clerkUser = await clerkClient.users.getUser(clerkId);
        }
    } catch (e) {
        console.warn(`[Clerk Sync] Notice: Could not fetch user ${clerkId} from Clerk API:`, e.message);
    }

    const primaryEmail = clerkUser?.emailAddresses?.find(e => e.id === clerkUser.primaryEmailAddressId)?.emailAddress
        || clerkUser?.emailAddresses?.[0]?.emailAddress
        || '';

    const name = clerkUser?.username 
        || [clerkUser?.firstName, clerkUser?.lastName].filter(Boolean).join(' ')
        || (primaryEmail ? primaryEmail.split('@')[0] : 'User');

    const adminEmails = (process.env.ADMIN_EMAIL || '')
        .split(',')
        .map(e => e.trim().toLowerCase())
        .filter(Boolean);

    const isTargetAdmin = (primaryEmail && adminEmails.includes(primaryEmail.toLowerCase())) ||
        clerkUser?.publicMetadata?.isAdmin === true ||
        clerkUser?.publicMetadata?.role === 'admin';

    let user = await User.findOne({ clerkId });

    if (user) {
        let modified = false;
        if (primaryEmail && user.email !== primaryEmail) {
            user.email = primaryEmail;
            modified = true;
        }
        if (name && user.username === 'User' && name !== 'User') {
            user.username = name;
            modified = true;
        }
        if (isTargetAdmin && !user.isAdmin) {
            user.isAdmin = true;
            user.role = 'admin';
            modified = true;
        }
        if (modified) {
            await user.save();
        }
        return user;
    }

    // Unique fallback email if Clerk email is empty or unavailable
    const finalEmail = primaryEmail || `user_${clerkId.slice(-8)}@raocoding.local`;

    // Check if a document already exists with this email (e.g. created prior to Clerk ID linking)
    user = await User.findOne({ email: finalEmail });
    if (user) {
        user.clerkId = clerkId;
        if (isTargetAdmin) {
            user.isAdmin = true;
            user.role = 'admin';
        }
        await user.save();
        return user;
    }

    // Create user in MongoDB
    user = await User.create({
        clerkId,
        email: finalEmail,
        username: name || 'User',
        city: (clerkUser?.publicMetadata?.city) || '',
        phoneNo: (clerkUser?.publicMetadata?.phoneNo) || '',
        role: isTargetAdmin ? 'admin' : ((clerkUser?.publicMetadata?.role) || 'user'),
        isAdmin: isTargetAdmin,
    });

    console.log(`✅ [Clerk Sync] User ${user.email} synchronized to MongoDB.`);
    return user;
};

// @desc    Explicitly sync authenticated user from Clerk into MongoDB
// @route   GET /api/users/sync
// @route   POST /api/users/sync
// @access  Private
const syncUser = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    const user = await syncClerkUserToDB(clerkId);

    return res.status(200).json(
        new ApiResponse(200, user, "User synchronized successfully with MongoDB")
    );
});

// @desc    Handle Clerk Webhooks for real-time user lifecycle syncing
// @route   POST /api/users/webhook
// @access  Public
const handleClerkWebhook = asyncHandler(async (req, res) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.warn("[Clerk Webhook] CLERK_WEBHOOK_SECRET not set in .env. Skipping webhook.");
        return res.status(200).json({ received: true, note: "Webhook secret not configured" });
    }

    const svix_id = req.headers['svix-id'];
    const svix_timestamp = req.headers['svix-timestamp'];
    const svix_signature = req.headers['svix-signature'];

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).send('Error: Missing Svix signature headers');
    }

    const wh = new Webhook(webhookSecret);
    let evt;

    try {
        const payload = req.body.toString();
        evt = wh.verify(payload, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        });
    } catch (err) {
        console.error('[Clerk Webhook] Signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const { id, type } = { id: evt.data?.id, type: evt.type };

    if (type === 'user.created' || type === 'user.updated') {
        const { email_addresses, username, first_name, last_name, public_metadata } = evt.data;
        const primaryEmail = email_addresses?.find(e => e.id === evt.data.primary_email_address_id)?.email_address
            || email_addresses?.[0]?.email_address
            || '';
        const name = username || [first_name, last_name].filter(Boolean).join(' ') || (primaryEmail ? primaryEmail.split('@')[0] : 'User');

        const adminEmails = (process.env.ADMIN_EMAIL || '')
            .split(',')
            .map(e => e.trim().toLowerCase())
            .filter(Boolean);

        const isAdmin = Boolean(public_metadata?.isAdmin || (primaryEmail && adminEmails.includes(primaryEmail.toLowerCase())));

        await User.findOneAndUpdate(
            { clerkId: id },
            {
                clerkId: id,
                email: primaryEmail || `user_${id.slice(-8)}@raocoding.local`,
                username: name,
                role: isAdmin ? 'admin' : (public_metadata?.role || 'user'),
                isAdmin,
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log(`✅ [Clerk Webhook] User ${id} (${primaryEmail}) synced to MongoDB`);
    } else if (type === 'user.deleted') {
        await User.findOneAndDelete({ clerkId: id });
        console.log(`🗑️ [Clerk Webhook] User ${id} deleted from MongoDB`);
    }

    return res.status(200).json({ received: true });
});

// @desc    Complete user onboarding
// @route   POST /api/users/onboarding
// @access  Private
const onboardUser = asyncHandler(async (req, res) => {
    const { email, username, city, phoneNo, role } = req.body;
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    if (!email || !username || !city || !phoneNo || !role) {
        throw new ApiError(400, 'All fields are required');
    }

    // Check if user already exists
    let user = await User.findOne({ clerkId });

    if (user) {
        user.email = email;
        user.username = username;
        user.city = city;
        user.phoneNo = phoneNo;
        user.role = role;
        await user.save();
    } else {
        user = await User.create({
            clerkId,
            email,
            username,
            city,
            phoneNo,
            role,
        });
    }

    // Update Clerk user's profile and public metadata
    try {
        if (process.env.CLERK_SECRET_KEY && !process.env.CLERK_SECRET_KEY.includes('YOUR_CLERK_SECRET_KEY')) {
            await clerkClient.users.updateUser(clerkId, {
                publicMetadata: {
                    onboardingComplete: true,
                    role: role,
                    city: city,
                    phoneNo: phoneNo
                }
            });

            try {
                let firstName = username;
                let lastName = '';
                
                if (firstName && firstName.includes(' ')) {
                    const parts = firstName.split(' ');
                    firstName = parts[0];
                    lastName = parts.slice(1).join(' ');
                }
                
                let clerkUsername = undefined;
                if (username) {
                    clerkUsername = username.toLowerCase().replace(/[^a-z0-9_]/g, '');
                }

                await clerkClient.users.updateUser(clerkId, {
                    firstName: firstName,
                    lastName: lastName,
                    ...(clerkUsername && { username: clerkUsername })
                });
            } catch (profileError) {
                console.error("Failed to update Clerk profile details (ignored):", profileError.message || profileError);
            }
        }
    } catch (error) {
        console.error("Failed to update Clerk metadata:", error.message || error);
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User onboarded successfully")
    );
});

// @desc    Get user profile (auto-syncs with Clerk)
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    const user = await syncClerkUserToDB(clerkId);

    return res.status(200).json(
        new ApiResponse(200, user, "User profile fetched successfully")
    );
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;
    const { username, city, phoneNo } = req.body;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    let user = await syncClerkUserToDB(clerkId);

    // Attempt to sync details to Clerk
    try {
        if (process.env.CLERK_SECRET_KEY && !process.env.CLERK_SECRET_KEY.includes('YOUR_CLERK_SECRET_KEY')) {
            let firstName = username || user.username;
            let lastName = '';
            
            if (firstName && firstName.includes(' ')) {
                const parts = firstName.split(' ');
                firstName = parts[0];
                lastName = parts.slice(1).join(' ');
            }
            
            let clerkUsername = undefined;
            if (username) {
                clerkUsername = username.toLowerCase().replace(/[^a-z0-9_]/g, '');
            }

            const metadata = {
                city: city || user.city,
                phoneNo: phoneNo || user.phoneNo,
                role: user.role
            };

            await clerkClient.users.updateUser(clerkId, {
                firstName: firstName,
                lastName: lastName,
                ...(clerkUsername && { username: clerkUsername }),
                publicMetadata: metadata
            });
        }
    } catch (error) {
        console.error("Clerk update error (ignored):", error.message || error);
    }

    if (username) user.username = username;
    if (city !== undefined) user.city = city;
    if (phoneNo !== undefined) user.phoneNo = phoneNo;

    await user.save();

    return res.status(200).json(
        new ApiResponse(200, user, "User profile updated successfully")
    );
});

export { 
    syncUser, 
    handleClerkWebhook, 
    onboardUser, 
    getUserProfile, 
    updateUserProfile 
};
