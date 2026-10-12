import { getAuth } from '@clerk/express';
import User from '../models/User.js';
import { verifyToken } from '../utils/authUtils.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/**
 * Universal authentication middleware supporting both custom JWT and Clerk tokens
 */
export const verifyAuth = asyncHandler(async (req, res, next) => {
  let user = null;

  // 1. Check Bearer Token (Custom JWT)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (decoded && decoded.id) {
      user = await User.findById(decoded.id).select('-password');
    }
  }

  // 2. Fallback to Clerk Auth if no custom JWT user found
  if (!user) {
    try {
      const clerkAuth = getAuth(req);
      if (clerkAuth && clerkAuth.userId) {
        user = await User.findOne({ clerkId: clerkAuth.userId }).select('-password');
      }
    } catch {
      // Clerk not active or token missing
    }
  }

  if (!user) {
    throw new ApiError(401, 'Authentication required. Please sign in to continue.');
  }

  req.user = user;
  next();
});

/**
 * Optional authentication middleware: attaches user if authenticated, continues anyway if not
 */
export const optionalAuth = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (decoded && decoded.id) {
      req.user = await User.findById(decoded.id).select('-password');
      return next();
    }
  }

  try {
    const clerkAuth = getAuth(req);
    if (clerkAuth && clerkAuth.userId) {
      req.user = await User.findOne({ clerkId: clerkAuth.userId }).select('-password');
      return next();
    }
  } catch {
    // Non-blocking
  }

  req.user = null;
  next();
});

/**
 * Admin authorization middleware
 */
export const requireAdmin = asyncHandler(async (req, res, next) => {
  // If verifyAuth hasn't run yet, resolve user first
  if (!req.user) {
    await new Promise((resolve, reject) => {
      verifyAuth(req, res, (err) => (err ? reject(err) : resolve()));
    });
  }

  if (!req.user?.isAdmin && req.user?.role !== 'admin') {
    throw new ApiError(403, 'Forbidden: Administrator privileges required.');
  }

  next();
});

export default {
  verifyAuth,
  optionalAuth,
  requireAdmin,
};
