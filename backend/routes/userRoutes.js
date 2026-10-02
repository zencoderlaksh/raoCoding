import express from 'express';
import { 
    syncUser, 
    onboardUser, 
    getUserProfile, 
    updateUserProfile 
} from '../controllers/userController.js';

const router = express.Router();

// User profile & data routes (Direct access)
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.post('/onboarding', onboardUser);
router.get('/sync', syncUser);
router.post('/sync', syncUser);

export default router;
