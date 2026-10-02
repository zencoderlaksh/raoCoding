import express from 'express';
import { getAllCourses, getMyCourses, getCourseContent, getCourseBySlug } from '../controllers/courseController.js';

const router = express.Router();

router.get('/', getAllCourses);
router.get('/slug/:slug', getCourseBySlug);
router.get('/my-courses', getMyCourses);
router.get('/:id/content', getCourseContent);

export default router;
