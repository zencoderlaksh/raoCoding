import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

/**
 * @desc    Get all active courses (public catalog view)
 * @route   GET /api/courses
 * @access  Public
 */
export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({})
    .select('-notes -classTimings -joinLink -recordedVideos')
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, courses, 'Courses fetched successfully.')
  );
});

/**
 * @desc    Get course public details by slug
 * @route   GET /api/courses/slug/:slug
 * @access  Public
 */
export const getCourseBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const course = await Course.findOne({ slug: slug.toLowerCase() }).select(
    '-notes -classTimings -joinLink -recordedVideos'
  );

  if (!course) {
    throw new ApiError(404, `Course with slug '${slug}' not found.`);
  }

  return res.status(200).json(
    new ApiResponse(200, course, 'Course details fetched successfully.')
  );
});

/**
 * @desc    Get logged in user's enrolled / purchased courses
 * @route   GET /api/courses/my-courses
 * @access  Private
 */
export const getMyCourses = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(401, 'Please sign in to view your courses.');
  }

  const purchases = await Purchase.find({
    user: user._id,
    status: 'completed',
  }).populate('course');

  const courses = purchases
    .map((p) => p.course)
    .filter((c) => Boolean(c));

  return res.status(200).json(
    new ApiResponse(200, courses, 'Your enrolled courses fetched successfully.')
  );
});

/**
 * @desc    Get specific course full private content (Requires enrollment or Admin)
 * @route   GET /api/courses/:id/content
 * @access  Private
 */
export const getCourseContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  if (!user) {
    throw new ApiError(401, 'Authentication required to access course content.');
  }

  const course = await Course.findById(id);
  if (!course) {
    throw new ApiError(404, 'Course not found.');
  }

  // Check enrollment
  const purchase = await Purchase.findOne({
    user: user._id,
    course: course._id,
    status: 'completed',
  });

  if (!purchase && !user.isAdmin && user.role !== 'admin') {
    throw new ApiError(
      403,
      'Access denied. You have not enrolled in this course yet.'
    );
  }

  // Return full course including private materials
  return res.status(200).json(
    new ApiResponse(200, course, 'Course content unlocked successfully.')
  );
});

export default {
  getAllCourses,
  getCourseBySlug,
  getMyCourses,
  getCourseContent,
};
