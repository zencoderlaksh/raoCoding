import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { getAuth, clerkClient } from '@clerk/express';

// @desc    Complete user onboarding
// @route   POST /api/users/onboarding
// @access  Private
const onboardUser = asyncHandler(async (req, res) => {
    const { email, username, city, phoneNo, role } = req.body;
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    if (!email || !username || !city || !phoneNo || !role) {
        throw new ApiError(400, 'All fields are required');
    }

    // Check if user already exists
    let user = await User.findOne({ clerkId });

    if (user) {
        // Update existing user if they somehow try to onboard again
        user.email = email;
        user.username = username;
        user.city = city;
        user.phoneNo = phoneNo;
        user.role = role;
        await user.save();
    } else {
        // Create new user
        user = await User.create({
            clerkId,
            email,
            username,
            city,
            phoneNo,
            role,
        });
    }

    // Update Clerk user's profile and public metadata
    try {
        // 1. Guarantee metadata is updated to mark onboarding as complete
        await clerkClient.users.updateUser(clerkId, {
            publicMetadata: {
                onboardingComplete: true,
                role: role,
                city: city,
                phoneNo: phoneNo
            }
        });

        // 2. Attempt to update name fields (this can fail if Clerk restricts certain fields)
        try {
            let firstName = username;
            let lastName = '';
            
            if (firstName && firstName.includes(' ')) {
                const parts = firstName.split(' ');
                firstName = parts[0];
                lastName = parts.slice(1).join(' ');
            }
            
            let clerkUsername = undefined;
            if (username) {
                clerkUsername = username.toLowerCase().replace(/[^a-z0-9_]/g, '');
            }

            await clerkClient.users.updateUser(clerkId, {
                firstName: firstName,
                lastName: lastName,
                ...(clerkUsername && { username: clerkUsername })
            });
        } catch (profileError) {
            console.error("Failed to update Clerk profile details (ignored):", profileError.message || profileError);
        }

    } catch (error) {
        console.error("Failed to update Clerk metadata:", error.message || error);
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User onboarded successfully")
    );
});


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    const user = await User.findOne({ clerkId });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User profile fetched successfully")
    );
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const clerkId = getAuth(req).userId;
    const { username, city, phoneNo } = req.body;

    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    const user = await User.findOne({ clerkId });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    // Attempt to sync all details to Clerk
    try {
        let firstName = username || user.username;
        let lastName = '';
        
        // Handle names with spaces for Clerk's firstName/lastName fields
        if (firstName && firstName.includes(' ')) {
            const parts = firstName.split(' ');
            firstName = parts[0];
            lastName = parts.slice(1).join(' ');
        }
        
        // Ensure username is safe for Clerk (lowercase, no spaces)
        let clerkUsername = undefined;
        if (username) {
            clerkUsername = username.toLowerCase().replace(/[^a-z0-9_]/g, '');
        }

        const metadata = {
            city: city || user.city,
            phoneNo: phoneNo || user.phoneNo,
            role: user.role
        };

        await clerkClient.users.updateUser(clerkId, {
            firstName: firstName,
            lastName: lastName,
            ...(clerkUsername && { username: clerkUsername }),
            publicMetadata: metadata
        });
        
    } catch (error) {
        console.error("Clerk update error (ignored):", error.message || error);
        // We log but don't throw, to ensure local DB still saves
    }

    if (username) user.username = username;

    if (city) user.city = city;
    if (phoneNo) user.phoneNo = phoneNo;

    await user.save();

    return res.status(200).json(
        new ApiResponse(200, user, "User profile updated successfully")
    );
});

export { onboardUser, getUserProfile, updateUserProfile };
