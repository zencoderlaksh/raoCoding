import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { hashPassword, verifyPassword, generateToken } from '../utils/authUtils.js';

/**
 * @desc    Register a new user (Normal Email/Password Auth)
 * @route   POST /api/users/register
 * @access  Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phoneNo, city, requirementType } = req.body;

  if (!username || !email || !password) {
    throw new ApiError(400, 'Username, email, and password are required.');
  }

  // Mandatory fields validation
  if (!phoneNo || !phoneNo.trim()) {
    throw new ApiError(400, 'Phone number is mandatory.');
  }

  const cleanPhone = phoneNo.replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    throw new ApiError(400, 'Please enter a valid 10-digit mobile number.');
  }

  if (!city || !city.trim()) {
    throw new ApiError(400, 'City is mandatory.');
  }

  const validRequirements = ['project', 'course', 'counselling'];
  const formattedReq = (requirementType || 'course').toLowerCase();
  if (!validRequirements.includes(formattedReq)) {
    throw new ApiError(400, 'Requirement type must be one of: project, course, counselling.');
  }

  // Check duplicate user
  const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email address already exists. Please log in.');
  }

  const hashedPassword = await hashPassword(password);
  const defaultAvatar = req.body.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(username.trim())}&background=ea580c&color=fff&bold=true`;

  const user = await User.create({
    username: username.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    avatar: defaultAvatar,
    phoneNo: phoneNo.trim(),
    city: city.trim(),
    requirementType: formattedReq,
    authProvider: 'normal',
    role: 'user',
    isAdmin: false,
  });

  const token = generateToken(user._id);

  const safeUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    imageUrl: user.avatar,
    phoneNo: user.phoneNo,
    city: user.city,
    requirementType: user.requirementType,
    authProvider: user.authProvider,
    role: user.role,
    isAdmin: user.isAdmin,
    token,
  };

  return res.status(201).json(
    new ApiResponse(201, safeUserData, 'Account created successfully!')
  );
});

/**
 * @desc    Authenticate user & return JWT token (Normal Auth)
 * @route   POST /api/users/login
 * @access  Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { identifier, email, phoneNo, password } = req.body;

  const loginId = (identifier || email || phoneNo || '').trim();
  if (!loginId || !password) {
    throw new ApiError(400, 'Email/Phone and password are required.');
  }

  // Allow login by email or phone number
  const user = await User.findOne({
    $or: [{ email: loginId.toLowerCase() }, { phoneNo: loginId }],
  });

  if (!user) {
    throw new ApiError(401, 'Invalid credentials. User not found.');
  }

  // If user signed up with social Clerk and never set a password
  if (user.authProvider === 'clerk' && !user.password) {
    throw new ApiError(
      400,
      'This account was registered using Clerk / Google SSO. Please use the "Clerk / Google" button to sign in.'
    );
  }

  const isMatch = await verifyPassword(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials. Incorrect password.');
  }

  const token = generateToken(user._id);

  const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username || 'User')}&background=ea580c&color=fff&bold=true`;

  const safeUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: avatarUrl,
    imageUrl: avatarUrl,
    phoneNo: user.phoneNo,
    city: user.city,
    requirementType: user.requirementType,
    authProvider: user.authProvider,
    role: user.role,
    isAdmin: user.isAdmin,
    token,
  };

  return res.status(200).json(
    new ApiResponse(200, safeUserData, `Welcome back, ${user.username}!`)
  );
});

/**
 * @desc    Sync or Onboard Clerk user with mandatory fields
 * @route   POST /api/users/clerk-sync
 * @access  Public
 */
export const syncClerkUser = asyncHandler(async (req, res) => {
  const { clerkId, email, username, phoneNo, city, requirementType, avatar, imageUrl } = req.body;
  const userAvatar = avatar || imageUrl || (username ? `https://ui-avatars.com/api/?name=${encodeURIComponent(username.trim())}&background=ea580c&color=fff&bold=true` : '');

  if (!email) {
    throw new ApiError(400, 'Email is required.');
  }

  if (!phoneNo || !phoneNo.trim()) {
    throw new ApiError(400, 'Phone number is mandatory.');
  }

  if (!city || !city.trim()) {
    throw new ApiError(400, 'City is mandatory.');
  }

  let user = null;
  if (clerkId) {
    user = await User.findOne({ clerkId });
  }

  if (!user) {
    user = await User.findOne({ email: email.toLowerCase().trim() });
  }

  const validRequirements = ['project', 'course', 'counselling'];
  const formattedReq = (requirementType || 'course').toLowerCase();

  if (user) {
    // Update existing user
    if (clerkId) user.clerkId = clerkId;
    user.phoneNo = phoneNo.trim();
    user.city = city.trim();
    if (userAvatar) user.avatar = userAvatar;
    if (validRequirements.includes(formattedReq)) {
      user.requirementType = formattedReq;
    }
    if (username && !user.username) {
      user.username = username.trim();
    }
    await user.save();
  } else {
    // Create new user for Clerk login
    user = await User.create({
      clerkId: clerkId || '',
      email: email.toLowerCase().trim(),
      username: (username || email.split('@')[0] || 'User').trim(),
      avatar: userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent((username || email.split('@')[0] || 'User').trim())}&background=ea580c&color=fff&bold=true`,
      phoneNo: phoneNo.trim(),
      city: city.trim(),
      requirementType: validRequirements.includes(formattedReq) ? formattedReq : 'course',
      authProvider: 'clerk',
      role: 'user',
      isAdmin: false,
    });
  }

  const token = generateToken(user._id);

  const safeUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    imageUrl: user.avatar,
    phoneNo: user.phoneNo,
    city: user.city,
    requirementType: user.requirementType,
    authProvider: user.authProvider,
    role: user.role,
    isAdmin: user.isAdmin,
    token,
  };

  return res.status(200).json(
    new ApiResponse(200, safeUserData, 'Profile synced successfully!')
  );
});

/**
 * @desc    Get logged in user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(404, 'User profile not found.');
  }

  const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username || 'User')}&background=ea580c&color=fff&bold=true`;

  const safeUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: avatarUrl,
    imageUrl: avatarUrl,
    phoneNo: user.phoneNo,
    city: user.city,
    requirementType: user.requirementType,
    authProvider: user.authProvider,
    role: user.role,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
  };

  return res.status(200).json(
    new ApiResponse(200, safeUserData, 'User profile fetched successfully.')
  );
});

/**
 * @desc    Update logged in user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;
  const { username, city, phoneNo, avatar } = req.body;

  if (!user) {
    throw new ApiError(404, 'User profile not found.');
  }

  if (username && username.trim()) user.username = username.trim();
  if (city && city.trim()) user.city = city.trim();
  if (phoneNo && phoneNo.trim()) user.phoneNo = phoneNo.trim();
  if (avatar !== undefined) user.avatar = avatar.trim();

  await user.save();

  const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username || 'User')}&background=ea580c&color=fff&bold=true`;

  const safeUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: avatarUrl,
    imageUrl: avatarUrl,
    phoneNo: user.phoneNo,
    city: user.city,
    requirementType: user.requirementType,
    authProvider: user.authProvider,
    role: user.role,
    isAdmin: user.isAdmin,
  };

  return res.status(200).json(
    new ApiResponse(200, safeUserData, 'Profile updated successfully!')
  );
});

export default {
  registerUser,
  loginUser,
  syncClerkUser,
  getUserProfile,
  updateUserProfile,
};
