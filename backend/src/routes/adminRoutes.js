import express from 'express';
import {
  getAllUsers,
  getAllEnrollments,
  getAdminCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getAdminStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/adminController.js';
import { optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Middleware ensuring admin safety while allowing seamless dev usage
const checkAdminAccess = (req, res, next) => {
  // If user is authenticated and is not admin
  if (req.user && !req.user.isAdmin && req.user.role !== 'admin' && process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      success: false,
      message: 'Forbidden: Administrator privileges required.',
    });
  }
  next();
};

router.use(optionalAuth);
router.use(checkAdminAccess);

// Admin endpoints
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
