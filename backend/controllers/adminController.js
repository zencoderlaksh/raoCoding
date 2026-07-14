import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import Course from '../models/Course.js';
import Student from '../models/Student.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select('-__v');
    return res.status(200).json(new ApiResponse(200, users, "Users fetched successfully"));
});

// @desc    Get all enrollments/purchases
// @route   GET /api/admin/enrollments
// @access  Private/Admin
const getAllEnrollments = asyncHandler(async (req, res) => {
    const enrollments = await Purchase.find({})
        .populate('user', 'username email role')
        .populate('course', 'title price');
    return res.status(200).json(new ApiResponse(200, enrollments, "Enrollments fetched successfully"));
});

// @desc    Get all courses for admin
// @route   GET /api/admin/courses
// @access  Private/Admin
const getAdminCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    return res.status(200).json(new ApiResponse(200, courses, "Courses fetched successfully"));
});

// @desc    Create a course
// @route   POST /api/admin/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
    const course = await Course.create(req.body);
    return res.status(201).json(new ApiResponse(201, course, "Course created successfully"));
});

// @desc    Update a course
// @route   PUT /api/admin/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) throw new ApiError(404, 'Course not found');
    return res.status(200).json(new ApiResponse(200, course, "Course updated successfully"));
});

// @desc    Delete a course
// @route   DELETE /api/admin/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) throw new ApiError(404, 'Course not found');
    return res.status(200).json(new ApiResponse(200, null, "Course deleted successfully"));
});

// @desc    Get all students for admin
// @route   GET /api/admin/students
// @access  Private/Admin
const getAdminStudents = asyncHandler(async (req, res) => {
    const students = await Student.find({});
    return res.status(200).json(new ApiResponse(200, students, "Students fetched successfully"));
});

// @desc    Create a student
// @route   POST /api/admin/students
// @access  Private/Admin
const createStudent = asyncHandler(async (req, res) => {
    const student = await Student.create(req.body);
    return res.status(201).json(new ApiResponse(201, student, "Student created successfully"));
});

// @desc    Update a student
// @route   PUT /api/admin/students/:id
// @access  Private/Admin
const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) throw new ApiError(404, 'Student not found');
    return res.status(200).json(new ApiResponse(200, student, "Student updated successfully"));
});

// @desc    Delete a student
// @route   DELETE /api/admin/students/:id
// @access  Private/Admin
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) throw new ApiError(404, 'Student not found');
    return res.status(200).json(new ApiResponse(200, null, "Student deleted successfully"));
});

export { getAllUsers, getAllEnrollments, getAdminCourses, createCourse, updateCourse, deleteCourse, getAdminStudents, createStudent, updateStudent, deleteStudent };
