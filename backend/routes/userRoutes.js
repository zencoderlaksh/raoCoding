import express from 'express';
import { onboardUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();

// Apply requireAuth middleware to routes
router.post('/onboarding', requireAuth(), onboardUser);
router.get('/profile', requireAuth(), getUserProfile);
router.put('/profile', requireAuth(), updateUserProfile);

export default router;
