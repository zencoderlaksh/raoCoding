import express from 'express';
import {
  getAllCourses,
  getCourseBySlug,
  getMyCourses,
  getCourseContent,
} from '../controllers/courseController.js';
import { verifyAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllCourses);
router.get('/slug/:slug', getCourseBySlug);

// Private authenticated routes
router.get('/my-courses', verifyAuth, getMyCourses);
router.get('/:id/content', verifyAuth, getCourseContent);

export default router;
