import User from '../models/User.js';
import { asyncHandler } from './asyncHandler.js';

// Default active/admin user helper
const getOrCreateDefaultUser = async () => {
    let user = await User.findOne({ email: 'admin@raocoding.com' });
    if (!user) {
        user = await User.create({
            email: 'admin@raocoding.com',
            username: 'Admin',
            role: 'admin',
            isAdmin: true,
        });
    }
    return user;
};

// Pass-through requireAuth middleware (no login barriers)
export const requireAuth = () => asyncHandler(async (req, res, next) => {
    try {
        req.user = await getOrCreateDefaultUser();
    } catch (e) {
        req.user = { _id: 'default_admin_id', email: 'admin@raocoding.com', username: 'Admin', isAdmin: true, role: 'admin' };
    }
    next();
});

// Pass-through requireAdmin middleware (no admin barriers)
export const requireAdmin = asyncHandler(async (req, res, next) => {
    try {
        req.user = await getOrCreateDefaultUser();
    } catch (e) {
        req.user = { _id: 'default_admin_id', email: 'admin@raocoding.com', username: 'Admin', isAdmin: true, role: 'admin' };
    }
    next();
});
