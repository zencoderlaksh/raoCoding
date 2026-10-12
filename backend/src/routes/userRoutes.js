import express from 'express';
import {
  registerUser,
  loginUser,
  syncClerkUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { verifyAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public auth endpoints
router.post('/register', registerUser);
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/clerk-sync', syncClerkUser);
router.post('/onboarding', syncClerkUser);

// Protected user endpoints
router.get('/profile', verifyAuth, getUserProfile);
router.put('/profile', verifyAuth, updateUserProfile);

export default router;
