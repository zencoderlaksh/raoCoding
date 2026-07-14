import express from 'express';
import { createCheckout, handleWebhook } from '../controllers/paymentController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();

router.post('/checkout', requireAuth(), createCheckout);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;
