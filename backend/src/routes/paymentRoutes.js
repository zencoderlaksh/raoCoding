import express from 'express';
import { createCheckout, handleWebhook } from '../controllers/paymentController.js';
import { verifyAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/checkout', verifyAuth, createCheckout);
router.post('/webhook', handleWebhook);

export default router;
