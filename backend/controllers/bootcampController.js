import mongoose from 'mongoose';
import Bootcamp from '../models/Bootcamp.js';
import BootcampRegistration from '../models/BootcampRegistration.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { bootcampOverview, bootcampFormats } from '../data/bootcampData.js';

// In-memory registrations store for offline / development fallback
const inMemoryRegistrations = [];

const isDbConnected = () => mongoose.connection.readyState === 1;

// @desc    Get bootcamp general information, stats, and campus partners
// @route   GET /api/bootcamp
// @access  Public
export const getBootcampInfo = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, bootcampOverview, 'Bootcamp information fetched successfully'));
});

// @desc    Get all bootcamp delivery formats / programs
// @route   GET /api/bootcamp/formats
// @access  Public
export const getBootcampFormats = asyncHandler(async (req, res) => {
  if (isDbConnected()) {
    try {
      const count = await Bootcamp.countDocuments();
      if (count === 0) {
        await Bootcamp.insertMany(bootcampFormats);
      }
      const formats = await Bootcamp.find({ isActive: true });
      return res
        .status(200)
        .json(new ApiResponse(200, formats, 'Bootcamp formats fetched successfully'));
    } catch (err) {
      console.warn('DB query error for bootcamp formats, using fallback:', err.message);
    }
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bootcampFormats, 'Bootcamp formats fetched successfully'));
});

// @desc    Get single bootcamp format by ID or slug
// @route   GET /api/bootcamp/formats/:id
// @access  Public
export const getBootcampFormatById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, 'Bootcamp format ID is required');
  }

  if (isDbConnected()) {
    try {
      let format = null;
      if (mongoose.Types.ObjectId.isValid(id)) {
        format = await Bootcamp.findById(id);
      }
      if (!format) {
        format = await Bootcamp.findOne({ formatId: id });
      }

      if (format) {
        return res
          .status(200)
          .json(new ApiResponse(200, format, 'Bootcamp format fetched successfully'));
      }
    } catch (err) {
      console.warn('DB find format error, checking local fallback:', err.message);
    }
  }

  const format = bootcampFormats.find(
    (f) => f.formatId === id || String(f._id) === String(id)
  );

  if (!format) {
    throw new ApiError(404, 'Bootcamp program format not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, format, 'Bootcamp format fetched successfully'));
});

// @desc    Register or enquire for a college bootcamp program
// @route   POST /api/bootcamp/register
// @access  Public
export const registerForBootcamp = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    collegeName,
    role,
    program,
    expectedStudents,
    message,
  } = req.body;

  // Validation
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Full name is required and must be at least 2 characters');
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required');
  }

  const phoneClean = phone ? String(phone).replace(/\s+/g, '') : '';
  if (!phone || phoneClean.length < 7) {
    errors.push('A valid phone number with at least 7 digits is required');
  }

  if (!collegeName || typeof collegeName !== 'string' || collegeName.trim().length < 2) {
    errors.push('College or Institution name is required');
  }

  if (errors.length > 0) {
    throw new ApiError(400, 'Validation failed for registration input', errors);
  }

  const cleanData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phoneClean,
    collegeName: collegeName.trim(),
    role: role || 'Student',
    program: program || '4-Week Summer / Winter Break',
    expectedStudents: Number(expectedStudents) > 0 ? Number(expectedStudents) : 1,
    message: message ? message.trim() : '',
    status: 'pending',
  };

  // Check for duplicate recent submissions
  if (isDbConnected()) {
    try {
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
      const existing = await BootcampRegistration.findOne({
        email: cleanData.email,
        program: cleanData.program,
        createdAt: { $gte: fifteenMinutesAgo },
      });

      if (existing) {
        throw new ApiError(
          409,
          'A registration for this program with this email address was recently submitted. Our team will contact you shortly.'
        );
      }

      const registration = await BootcampRegistration.create(cleanData);

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            registration,
            'Bootcamp registration submitted successfully. Our team will get in touch with you shortly.'
          )
        );
    } catch (err) {
      if (err instanceof ApiError) throw err;
      console.warn('DB create error for bootcamp registration, fallback to memory:', err.message);
    }
  }

  // Memory fallback
  const isDuplicate = inMemoryRegistrations.some(
    (r) =>
      r.email === cleanData.email &&
      r.program === cleanData.program &&
      Date.now() - new Date(r.createdAt).getTime() < 15 * 60 * 1000
  );

  if (isDuplicate) {
    throw new ApiError(
      409,
      'A registration for this program with this email address was recently submitted. Our team will contact you shortly.'
    );
  }

  const savedRecord = {
    _id: 'reg_' + Date.now(),
    ...cleanData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  inMemoryRegistrations.unshift(savedRecord);

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        savedRecord,
        'Bootcamp registration submitted successfully. Our team will get in touch with you shortly.'
      )
    );
});

// @desc    Get all bootcamp registrations (for admin/monitoring)
// @route   GET /api/bootcamp/registrations
// @access  Public / Admin
export const getBootcampRegistrations = asyncHandler(async (req, res) => {
  if (isDbConnected()) {
    try {
      const registrations = await BootcampRegistration.find({}).sort({ createdAt: -1 });
      return res
        .status(200)
        .json(
          new ApiResponse(200, registrations, 'Bootcamp registrations fetched successfully')
        );
    } catch (err) {
      console.warn('DB error fetching registrations, using memory:', err.message);
    }
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        inMemoryRegistrations,
        'Bootcamp registrations fetched successfully'
      )
    );
});
