import express from 'express';
import { getAllUsers, getAllEnrollments, getAdminCourses, createCourse, updateCourse, deleteCourse, getAdminStudents, createStudent, updateStudent, deleteStudent } from '../controllers/adminController.js';
import { requireAuth } from '@clerk/express';
import { requireAdmin } from '../utils/authMiddleware.js';

const router = express.Router();

// Apply auth and admin checks to all admin routes
router.use(requireAuth(), requireAdmin);

router.get('/users', getAllUsers);
router.get('/enrollments', getAllEnrollments);
router.get('/courses', getAdminCourses);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

router.get('/students', getAdminStudents);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
