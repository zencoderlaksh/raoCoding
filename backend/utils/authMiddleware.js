import User from '../models/User.js';
import { asyncHandler } from './asyncHandler.js';
import { ApiError } from './ApiError.js';
import { getAuth } from '@clerk/express';
import { syncClerkUserToDB } from '../controllers/userController.js';

export const requireAdmin = asyncHandler(async (req, res, next) => {
    const clerkId = getAuth(req).userId;
    
    if (!clerkId) {
        throw new ApiError(401, 'Unauthorized');
    }

    let user = await User.findOne({ clerkId });
    
    // Auto-sync user into MongoDB if they exist in Clerk but not yet in DB
    if (!user) {
        try {
            user = await syncClerkUserToDB(clerkId);
        } catch (e) {
            console.error("Error auto-syncing admin user:", e.message);
        }
    }

    if (!user) {
        throw new ApiError(404, 'User not found in database');
    }

    // Auto-promote if user email matches ADMIN_EMAIL configured in .env
    if (!user.isAdmin && process.env.ADMIN_EMAIL) {
        const adminEmails = process.env.ADMIN_EMAIL
            .split(',')
            .map(e => e.trim().toLowerCase())
            .filter(Boolean);

        if (user.email && adminEmails.includes(user.email.toLowerCase())) {
            user.isAdmin = true;
            user.role = 'admin';
            await user.save();
        }
    }

    if (!user.isAdmin) {
        throw new ApiError(403, 'Forbidden: Admin access required');
    }

    req.user = user;
    next();
});
