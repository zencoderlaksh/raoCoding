import { ApiError } from '../utils/ApiError.js';

/**
 * 404 Not Found Middleware
 */
export const notFound = (req, res, next) => {
  const error = new ApiError(404, `Resource not found: ${req.originalUrl}`);
  next(error);
};

/**
 * Centralized Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
  let error = err;

  // If error is not an instance of ApiError, convert it
  if (!(error instanceof ApiError)) {
    let statusCode = error.statusCode || 500;
    let message = error.message || 'Internal Server Error';

    // Mongoose bad ObjectId / CastError
    if (error.name === 'CastError') {
      statusCode = 400;
      message = `Invalid resource identifier: ${error.value}`;
    }

    // Mongoose duplicate key error (E11000)
    else if (error.code === 11000) {
      statusCode = 409;
      const field = Object.keys(error.keyValue || {})[0] || 'field';
      message = `A record with this ${field} already exists.`;
    }

    // Mongoose validation error
    else if (error.name === 'ValidationError') {
      statusCode = 400;
      const validationErrors = Object.values(error.errors || {}).map((e) => e.message);
      message = validationErrors.join(', ') || 'Validation error occurred';
    }

    // JWT errors
    else if (error.name === 'JsonWebTokenError') {
      statusCode = 401;
      message = 'Invalid authentication token. Please sign in again.';
    } else if (error.name === 'TokenExpiredError') {
      statusCode = 401;
      message = 'Authentication token expired. Please sign in again.';
    }

    error = new ApiError(statusCode, message, error?.errors || [], err.stack);
  }

  // Consistent response structure
  const response = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  };

  return res.status(error.statusCode).json(response);
};

export default {
  notFound,
  errorHandler,
};
