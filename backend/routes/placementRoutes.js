import express from 'express';
import {
  getPlacements,
  getPlacementStats,
  getPlacementById,
} from '../controllers/placementController.js';

const router = express.Router();

// Placement statistics
router.get('/stats', getPlacementStats);

// All placements with optional query filters (?year, ?search, ?company, ?role)
router.get('/', getPlacements);

// Single placement by ID
router.get('/:id', getPlacementById);

export default router;
