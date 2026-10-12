import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload local file to Cloudinary with fallback to local path
 */
export const uploadOnCloudinary = async (localFilePath, folderName = 'raocoding_assets/misc') => {
  try {
    if (!localFilePath) return null;

    // Check if Cloudinary is configured
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      console.warn('⚠️ Cloudinary is not configured in .env. Returning local static file reference.');
      return {
        secure_url: `/uploads/${localFilePath.split(/[/\\]/).pop()}`,
        public_id: localFilePath,
        format: 'local',
        bytes: fs.statSync(localFilePath).size,
        resource_type: 'image',
      };
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
      folder: folderName,
    });

    // Cleanup local temp file
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error('Cloudinary upload error:', error.message);
    return null;
  }
};

export default uploadOnCloudinary;
