import User from '../models/User.js';
import { asyncHandler } from './asyncHandler.js';
import { ApiError } from './ApiError.js';
import { getAuth } from '@clerk/express';

export const requireAdmin = asyncHandler(async (req, res, next) => {
    const clerkId = getAuth(req).userId;
    
    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    const user = await User.findOne({ clerkId });
    
    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    if (!user.isAdmin) {
        throw new ApiError(403, 'Forbidden: Admin access required');
    }

    next();
});
