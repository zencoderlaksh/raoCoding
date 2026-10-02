import express from 'express';
import { createCheckout, handleWebhook } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/checkout', createCheckout);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;
