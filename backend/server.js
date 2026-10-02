import './config/env.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

import userRoutes from './routes/userRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import placementRoutes from './routes/placementRoutes.js';
import bootcampRoutes from './routes/bootcampRoutes.js';

import helmet from 'helmet';

connectDB();

const app = express();

// Security Middleware: Set security HTTP headers
app.use(helmet());

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
const allowedOrigins = [
  frontendUrl,
  frontendUrl.endsWith('/') ? frontendUrl.slice(0, -1) : frontendUrl,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

// CORS Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive in dev
  },
  credentials: true,
}));

// Configure express.json to skip raw payment webhook route, and enforce 10kb limit on others
app.use((req, res, next) => {
  if (req.originalUrl === '/api/payments/webhook') {
    next();
  } else {
    express.json({ limit: '10kb' })(req, res, next);
  }
});

app.use((req, res, next) => {
  if (req.originalUrl.includes('/api/')) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  }
  next();
});

// Diagnostic health check route
app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'online',
    message: 'RaoCoding API is running smoothly',
    mongodb: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/bootcamp', bootcampRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
