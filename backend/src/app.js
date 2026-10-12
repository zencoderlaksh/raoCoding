import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import mongoose from 'mongoose';
import { clerkMiddleware } from '@clerk/express';

import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

const app = express();

// 1. HTTP Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// 2. CORS Configuration
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
const allowedOrigins = [
  frontendUrl,
  frontendUrl.endsWith('/') ? frontendUrl.slice(0, -1) : frontendUrl,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.includes('localhost') ||
        origin.includes('127.0.0.1')
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in development
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

// 3. Body Parsers (Exclude raw body for payment webhooks)
app.use((req, res, next) => {
  if (req.originalUrl === '/api/payments/webhook') {
    next();
  } else {
    express.json({ limit: '10kb' })(req, res, next);
  }
});
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 4. Static files (for uploads fallback)
app.use('/uploads', express.static(path.resolve('public/temp')));

// 5. Clerk Auth Middleware (safely registered)
if (process.env.CLERK_PUBLISHABLE_KEY) {
  try {
    app.use(
      clerkMiddleware({
        secretKey: process.env.CLERK_SECRET_KEY,
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      })
    );
  } catch (err) {
    console.warn('⚠️ Clerk middleware notice:', err.message);
  }
}

// 6. Request Logging in development
app.use((req, res, next) => {
  if (req.originalUrl.includes('/api/')) {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  }
  next();
});

// 7. Health Check Endpoints
const healthHandler = (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.status(isDbConnected ? 200 : 503).json({
    success: true,
    status: isDbConnected ? 'healthy' : 'degraded',
    message: isDbConnected
      ? 'RAO Technologies API is running and connected to MongoDB'
      : 'RAO Technologies API is running, but database connection is pending',
    mongodb: isDbConnected ? 'connected' : 'disconnected',
    databaseHost: mongoose.connection.host || 'none',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())} seconds`,
  });
};

app.get('/', healthHandler);
app.get('/api/health', healthHandler);

// Middleware: Ensure MongoDB connection is initialized before processing API routes
app.use('/api', async (req, res, next) => {
  if (req.path === '/health') return next();

  if (mongoose.connection.readyState === 1) {
    return next();
  }

  try {
    await connectDB();
  } catch (err) {
    console.warn('⚠️ [API Middleware] MongoDB connection attempt error:', err.message);
  }

  if (mongoose.connection.readyState === 1) {
    return next();
  }

  return res.status(503).json({
    success: false,
    statusCode: 503,
    message: 'Server is establishing database connection. Please retry in a few seconds.',
  });
});

// 8. Application API Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);

// 9. Centralized Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
