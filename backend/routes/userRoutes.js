import express from 'express';
import { 
    syncUser, 
    handleClerkWebhook, 
    onboardUser, 
    getUserProfile, 
    updateUserProfile 
} from '../controllers/userController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();

// Clerk Webhook endpoint for automated real-time synchronization
// Uses raw body for Svix signature verification
router.post('/webhook', express.raw({ type: 'application/json' }), handleClerkWebhook);

// Explicit user synchronization endpoints (syncs active Clerk session into MongoDB)
router.get('/sync', requireAuth(), syncUser);
router.post('/sync', requireAuth(), syncUser);

// User profile & onboarding routes
router.post('/onboarding', requireAuth(), onboardUser);
router.get('/profile', requireAuth(), getUserProfile);
router.put('/profile', requireAuth(), updateUserProfile);

export default router;
