import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

/**
 * @desc    Upload media/file
 * @route   POST /api/upload
 * @access  Private
 */
export const uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, 'No file was provided for upload.');
  }

  const localFilePath = req.file.path;
  const { folderName } = req.body;

  const result = await uploadOnCloudinary(
    localFilePath,
    folderName ? `raocoding_assets/${folderName}` : 'raocoding_assets/uploads'
  );

  if (!result) {
    throw new ApiError(500, 'Failed to process file upload.');
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        bytes: result.bytes,
      },
      'File uploaded successfully.'
    )
  );
});

export default {
  uploadFile,
};
