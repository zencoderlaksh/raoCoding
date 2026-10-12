import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import Course from '../models/Course.js';
import Student from '../models/Student.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

/**
 * @desc    Get all registered users for Admin Dashboard
 * @route   GET /api/admin/users
 * @access  Private/Admin
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password -__v').sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, users, 'Users fetched successfully.'));
});

/**
 * @desc    Get all course enrollments / purchases
 * @route   GET /api/admin/enrollments
 * @access  Private/Admin
 */
export const getAllEnrollments = asyncHandler(async (req, res) => {
  const enrollments = await Purchase.find({})
    .populate('user', 'username email phoneNo role')
    .populate('course', 'title price slug')
    .sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, enrollments, 'Enrollments fetched successfully.'));
});

/**
 * @desc    Get all courses (including private fields) for Admin
 * @route   GET /api/admin/courses
 * @access  Private/Admin
 */
export const getAdminCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, courses, 'Courses fetched successfully.'));
});

/**
 * @desc    Create a new course
 * @route   POST /api/admin/courses
 * @access  Private/Admin
 */
export const createCourse = asyncHandler(async (req, res) => {
  const courseData = req.body;
  if (!courseData.title || !courseData.slug || !courseData.price) {
    throw new ApiError(400, 'Title, slug, and price are required.');
  }

  const existingCourse = await Course.findOne({ slug: courseData.slug.toLowerCase().trim() });
  if (existingCourse) {
    throw new ApiError(409, `Course with slug '${courseData.slug}' already exists.`);
  }

  const course = await Course.create({
    ...courseData,
    slug: courseData.slug.toLowerCase().trim(),
  });

  return res.status(201).json(new ApiResponse(201, course, 'Course created successfully.'));
});

/**
 * @desc    Update an existing course
 * @route   PUT /api/admin/courses/:id
 * @access  Private/Admin
 */
export const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!course) {
    throw new ApiError(404, 'Course not found.');
  }

  return res.status(200).json(new ApiResponse(200, course, 'Course updated successfully.'));
});

/**
 * @desc    Delete a course
 * @route   DELETE /api/admin/courses/:id
 * @access  Private/Admin
 */
export const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) {
    throw new ApiError(404, 'Course not found.');
  }

  return res.status(200).json(new ApiResponse(200, null, 'Course deleted successfully.'));
});

/**
 * @desc    Get all students for Admin
 * @route   GET /api/admin/students
 * @access  Private/Admin
 */
export const getAdminStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({}).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, students, 'Students fetched successfully.'));
});

/**
 * @desc    Create a student profile
 * @route   POST /api/admin/students
 * @access  Private/Admin
 */
export const createStudent = asyncHandler(async (req, res) => {
  const studentData = req.body;
  if (!studentData.name || !studentData.slug) {
    throw new ApiError(400, 'Name and slug are required.');
  }

  const existing = await Student.findOne({ slug: studentData.slug.toLowerCase().trim() });
  if (existing) {
    throw new ApiError(409, `Student with slug '${studentData.slug}' already exists.`);
  }

  const student = await Student.create({
    ...studentData,
    slug: studentData.slug.toLowerCase().trim(),
  });

  return res.status(201).json(new ApiResponse(201, student, 'Student created successfully.'));
});

/**
 * @desc    Update a student profile
 * @route   PUT /api/admin/students/:id
 * @access  Private/Admin
 */
export const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    throw new ApiError(404, 'Student not found.');
  }

  return res.status(200).json(new ApiResponse(200, student, 'Student updated successfully.'));
});

/**
 * @desc    Delete a student profile
 * @route   DELETE /api/admin/students/:id
 * @access  Private/Admin
 */
export const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    throw new ApiError(404, 'Student not found.');
  }

  return res.status(200).json(new ApiResponse(200, null, 'Student deleted successfully.'));
});

export default {
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
};
