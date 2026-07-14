import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Upload a file to Cloudinary
// @route   POST /api/upload
// @access  Private (Admin or Teacher)
const uploadFile = asyncHandler(async (req, res) => {
    // req.file is available because of multer middleware
    if (!req.file) {
        throw new ApiError(400, "No file provided");
    }

    const localFilePath = req.file.path;
    const { folderName } = req.body; // allow dynamic folder name inside raocoding_assets, e.g. "raocoding_assets/videos"

    const cloudinaryResponse = await uploadOnCloudinary(
        localFilePath, 
        folderName ? `raocoding_assets/${folderName}` : "raocoding_assets/misc"
    );

    if (!cloudinaryResponse) {
        throw new ApiError(500, "Error uploading file to Cloudinary");
    }

    return res.status(200).json(
        new ApiResponse(200, {
            url: cloudinaryResponse.secure_url,
            public_id: cloudinaryResponse.public_id,
            format: cloudinaryResponse.format,
            bytes: cloudinaryResponse.bytes,
            resource_type: cloudinaryResponse.resource_type
        }, "File uploaded successfully")
    );
});

export { uploadFile };
