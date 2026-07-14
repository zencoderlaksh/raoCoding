import express from 'express';
import { getAllCourses, getMyCourses, getCourseContent, getCourseBySlug } from '../controllers/courseController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();

router.get('/', getAllCourses);
router.get('/slug/:slug', getCourseBySlug);
router.get('/my-courses', requireAuth(), getMyCourses);
router.get('/:id/content', requireAuth(), getCourseContent);

export default router;
