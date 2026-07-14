import express from 'express';
import { uploadFile } from '../controllers/uploadController.js';
import { upload } from '../middlewares/multer.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();

// The field name must be "file" in the multipart/form-data request
router.post('/', requireAuth(), upload.single('file'), uploadFile);

export default router;
