import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const getDefaultUser = async () => {
    let user = await User.findOne({});
    if (!user) {
        user = await User.create({
            email: 'admin@raocoding.com',
            username: 'RaoCoding Admin',
            city: 'Hyderabad',
            phoneNo: '+91 9999999999',
            role: 'admin',
            isAdmin: true,
        });
    }
    return user;
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public / Open
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await getDefaultUser();
    return res.status(200).json(
        new ApiResponse(200, user, "User profile fetched successfully")
    );
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Public / Open
const updateUserProfile = asyncHandler(async (req, res) => {
    const { username, city, phoneNo, email } = req.body;
    let user = await getDefaultUser();

    if (username) user.username = username;
    if (city !== undefined) user.city = city;
    if (phoneNo !== undefined) user.phoneNo = phoneNo;
    if (email) user.email = email;

    await user.save();

    return res.status(200).json(
        new ApiResponse(200, user, "User profile updated successfully")
    );
});

// @desc    Complete user onboarding (optional / compatibility)
// @route   POST /api/users/onboarding
// @access  Public / Open
const onboardUser = asyncHandler(async (req, res) => {
    const { email, username, city, phoneNo, role } = req.body;
    let user = await getDefaultUser();

    if (email) user.email = email;
    if (username) user.username = username;
    if (city) user.city = city;
    if (phoneNo) user.phoneNo = phoneNo;
    if (role) user.role = role;

    await user.save();

    return res.status(200).json(
        new ApiResponse(200, user, "User onboarded successfully")
    );
});

// @desc    Compatibility sync endpoint
// @route   GET/POST /api/users/sync
const syncUser = asyncHandler(async (req, res) => {
    const user = await getDefaultUser();
    return res.status(200).json(
        new ApiResponse(200, user, "User synchronized successfully")
    );
});

export { 
    syncUser,
    onboardUser, 
    getUserProfile, 
    updateUserProfile 
};
