import express from 'express';
import {
  submitContact,
  getAllContacts,
  updateContactStatus,
} from '../controllers/contactController.js';
import { verifyAuth, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public submission
router.post('/', submitContact);

// Admin endpoints
router.get('/', verifyAuth, requireAdmin, getAllContacts);
router.put('/:id', verifyAuth, requireAdmin, updateContactStatus);

export default router;
