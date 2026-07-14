import express from 'express';
import { getStudents, getStudentBySlug } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getStudents);
router.get('/:slug', getStudentBySlug);

export default router;
