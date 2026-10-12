import Student from '../models/Student.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

/**
 * @desc    Get all students (for gallery & placement wall)
 * @route   GET /api/students
 * @access  Public
 */
export const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({}).sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, students, 'Students fetched successfully.')
  );
});

/**
 * @desc    Get single student profile by slug
 * @route   GET /api/students/:slug
 * @access  Public
 */
export const getStudentBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const student = await Student.findOne({ slug: slug.toLowerCase() });

  if (!student) {
    throw new ApiError(404, `Student with slug '${slug}' not found.`);
  }

  return res.status(200).json(
    new ApiResponse(200, student, 'Student profile fetched successfully.')
  );
});

export default {
  getStudents,
  getStudentBySlug,
};
