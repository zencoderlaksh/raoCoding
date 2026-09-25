import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact - Submit inquiry / lead form
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, businessType, message } = req.body;

        if (!name || !email || !phone || !businessType) {
            return res.status(400).json({
                success: false,
                message: 'Please provide Name, Email, Phone, and Type of Business.',
            });
        }

        const newContact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            businessType: businessType.trim(),
            message: message ? message.trim() : '',
        });

        return res.status(201).json({
            success: true,
            message: 'Inquiry received successfully! Our team will contact you shortly.',
            data: newContact,
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error processing your inquiry. Please try again later.',
        });
    }
});

// GET /api/contact - Fetch all inquiries
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
