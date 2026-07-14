import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { getAuth } from '@clerk/express';

// @desc    Get all courses (public details only)
// @route   GET /api/courses
// @access  Public
const getAllCourses = asyncHandler(async (req, res) => {
    // Select only public fields, omit notes, classTimings, joinLink, recordedVideos
    const courses = await Course.find({}).select('-notes -classTimings -joinLink -recordedVideos');
    
    return res.status(200).json(
        new ApiResponse(200, courses, "Courses fetched successfully")
    );
});

// @desc    Get logged in user's purchased courses
// @route   GET /api/courses/my-courses
// @access  Private
const getMyCourses = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;
    
    const user = await User.findOne({ clerkId });
    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    const purchases = await Purchase.find({ user: user._id, status: 'completed' })
                                    .populate({
                                        path: 'course',
                                        select: 'title description price' // public details
                                    });

    const courses = purchases.map(p => p.course);

    return res.status(200).json(
        new ApiResponse(200, courses, "Purchased courses fetched successfully")
    );
});

// @desc    Get specific course content (auth & purchase required)
// @route   GET /api/courses/:id/content
// @access  Private
const getCourseContent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const clerkId = getAuth(req).userId;

    const user = await User.findOne({ clerkId });
    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    const course = await Course.findById(id);
    if (!course) {
        throw new ApiError(404, 'Course not found');
    }

    // Verify purchase
    const purchase = await Purchase.findOne({ user: user._id, course: course._id, status: 'completed' });

    if (!purchase && !user.isAdmin) {
        throw new ApiError(403, 'You have not purchased this course');
    }

    // Return the full course including sensitive fields
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
