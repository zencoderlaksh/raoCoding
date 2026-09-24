import mongoose from 'mongoose';
import Placement from '../models/Placement.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { initialPlacements, placementStatsData } from '../data/placementData.js';

// Helper to check DB connection
const isDbConnected = () => mongoose.connection.readyState === 1;

// @desc    Get all placements with optional search and filtering
// @route   GET /api/placements
// @access  Public
export const getPlacements = asyncHandler(async (req, res) => {
  const { year, search, company, role } = req.query;

  if (isDbConnected()) {
    try {
      // Auto-seed if empty
      const count = await Placement.countDocuments();
      if (count === 0) {
        await Placement.insertMany(initialPlacements);
      }

      // Build query filter
      const filter = {};

      if (year && year !== 'All') {
        const parsedYear = Number(year);
        if (!isNaN(parsedYear)) {
          filter.year = parsedYear;
        }
      }

      if (company) {
        filter.company = { $regex: company, $options: 'i' };
      }

      if (role) {
        filter.role = { $regex: role, $options: 'i' };
      }

      if (search && search.trim() !== '') {
        const searchRegex = { $regex: search.trim(), $options: 'i' };
        filter.$or = [
          { name: searchRegex },
          { company: searchRegex },
          { role: searchRegex },
          { location: searchRegex },
        ];
      }

      const placements = await Placement.find(filter).sort({ year: -1, createdAt: -1 });

      return res
        .status(200)
        .json(new ApiResponse(200, placements, 'Placements fetched successfully'));
    } catch (err) {
      console.warn('DB query failed, falling back to local dataset:', err.message);
    }
  }

  // Fallback for offline / disconnected development mode
  let filtered = [...initialPlacements];

  if (year && year !== 'All') {
    const parsedYear = Number(year);
    if (!isNaN(parsedYear)) {
      filtered = filtered.filter((p) => p.year === parsedYear);
    }
  }

  if (company) {
    filtered = filtered.filter((p) =>
      p.company.toLowerCase().includes(company.toLowerCase())
    );
  }

  if (role) {
    filtered = filtered.filter((p) =>
      p.role.toLowerCase().includes(role.toLowerCase())
    );
  }

  if (search && search.trim() !== '') {
    const term = search.trim().toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.company.toLowerCase().includes(term) ||
        p.role.toLowerCase().includes(term) ||
        (p.location && p.location.toLowerCase().includes(term))
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, filtered, 'Placements fetched successfully'));
});

// @desc    Get placement statistics and overview metrics
// @route   GET /api/placements/stats
// @access  Public
export const getPlacementStats = asyncHandler(async (req, res) => {
  let stats = { ...placementStatsData };

  if (isDbConnected()) {
    try {
      const totalCount = await Placement.countDocuments();
      if (totalCount > 0) {
        stats.totalPlaced = totalCount;
      }
    } catch (err) {
      console.warn('DB stats query error, using baseline stats:', err.message);
    }
  }

  return res
    .status(200)
    .json(new ApiResponse(200, stats, 'Placement statistics fetched successfully'));
});

// @desc    Get single placement record by ID
// @route   GET /api/placements/:id
// @access  Public
export const getPlacementById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, 'Placement ID is required');
  }

  if (isDbConnected()) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        const placement = await Placement.findById(id);
        if (placement) {
          return res
            .status(200)
            .json(new ApiResponse(200, placement, 'Placement details fetched successfully'));
        }
      } catch (err) {
        console.warn('DB findById error, checking local fallback:', err.message);
      }
    }
  }

  // Fallback matching by _id or string ID
  const placement = initialPlacements.find((p) => String(p._id) === String(id));

  if (!placement) {
    throw new ApiError(404, 'Placement record not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, placement, 'Placement details fetched successfully'));
});
