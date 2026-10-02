import Course from '../models/Course.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Get all courses (public details only)
// @route   GET /api/courses
// @access  Public
const getAllCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({}).select('-notes -classTimings -joinLink -recordedVideos');
    
    return res.status(200).json(
        new ApiResponse(200, courses, "Courses fetched successfully")
    );
});

// @desc    Get all courses accessible directly
// @route   GET /api/courses/my-courses
// @access  Public
const getMyCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    return res.status(200).json(
        new ApiResponse(200, courses, "Courses fetched successfully")
    );
});

// @desc    Get specific course content (Open access)
// @route   GET /api/courses/:id/content
// @access  Public
const getCourseContent = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const course = await Course.findById(id);
    if (!course) {
        throw new ApiError(404, 'Course not found');
    }

    // Return the full course including materials
    return res.status(200).json(
        new ApiResponse(200, course, "Course content fetched successfully")
    );
});

// @desc    Get course public details by slug
// @route   GET /api/courses/slug/:slug
// @access  Public
const getCourseBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const course = await Course.findOne({ slug }).select('-notes -classTimings -joinLink -recordedVideos');
    
    if (!course) {
        throw new ApiError(404, 'Course not found');
    }

    return res.status(200).json(
        new ApiResponse(200, course, "Course fetched successfully")
    );
});

export { getAllCourses, getMyCourses, getCourseContent, getCourseBySlug };
