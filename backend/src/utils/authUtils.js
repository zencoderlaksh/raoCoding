import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'raocoding_jwt_super_secret_key_2026_enterprise';
const JWT_EXPIRES_IN = '30d';

/**
 * Hash plain password using bcrypt
 */
export const hashPassword = async (password) => {
  if (!password) return '';
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Compare plain password with stored hash
 */
export const verifyPassword = async (plainPassword, hashedPassword) => {
  if (!plainPassword || !hashedPassword) return false;
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error('Password comparison error:', error.message);
    return false;
  }
};

/**
 * Generate standard JWT auth token
 */
export const generateToken = (userId, additionalPayload = {}) => {
  return jwt.sign(
    { id: userId.toString(), ...additionalPayload },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

/**
 * Verify JWT token
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export default {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
};
