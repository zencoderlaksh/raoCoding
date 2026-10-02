import express from 'express';
import { uploadFile } from '../controllers/uploadController.js';
import { upload } from '../middlewares/multer.js';

const router = express.Router();

// Direct file upload route
router.post('/', upload.single('file'), uploadFile);

export default router;
