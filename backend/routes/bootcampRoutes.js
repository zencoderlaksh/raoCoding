import express from 'express';
import {
  getBootcampInfo,
  getBootcampFormats,
  getBootcampFormatById,
  registerForBootcamp,
  getBootcampRegistrations,
} from '../controllers/bootcampController.js';

const router = express.Router();

// General bootcamp information, stats, campus partners
router.get('/', getBootcampInfo);

// All program delivery formats
router.get('/formats', getBootcampFormats);

// Specific format by ID/slug
router.get('/formats/:id', getBootcampFormatById);

// Bootcamp registration / application endpoints
router.post('/register', registerForBootcamp);
router.post('/apply', registerForBootcamp);
router.post('/enquiry', registerForBootcamp);

// List registrations (for admin/review)
router.get('/registrations', getBootcampRegistrations);

// Format by ID alias (e.g. /api/bootcamp/fast-track)
router.get('/:id', getBootcampFormatById);

export default router;
