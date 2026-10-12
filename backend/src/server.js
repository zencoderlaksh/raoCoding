import dotenv from 'dotenv';
import path from 'path';

// Load environment variables before any other imports
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import app from './app.js';
import { connectDB, disconnectDB } from './config/db.js';
import { seedInitialData } from './services/seedService.js';

const PORT = process.env.PORT || 5000;

let server = null;

const startServer = async () => {
  // 1. Start listening immediately so cloud hosting (Render) binds PORT without delay
  server = app.listen(PORT, () => {
    console.log(`
========================================================================
🚀 RAO Technologies Backend is Live on Port ${PORT}
🩺 Health Check:   http://localhost:${PORT}/api/health
========================================================================
`);
  });

  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!uri || uri.trim() === '' || uri.includes('<password>') || uri.includes('<db_username>')) {
    console.warn('⚠️ [MongoDB Atlas] MONGODB_URI is not set. Express running in readiness mode.');
    return;
  }

  // 2. Connect to MongoDB Atlas
  try {
    console.log('⏳ Connecting to MongoDB Atlas...');
    await connectDB();
    console.log('📦 MongoDB Atlas: Connected & Initialized.');

    // Auto-seed initial data if collections are empty
    await seedInitialData();
  } catch (error) {
    console.error(`❌ Initial MongoDB connection attempt: ${error.message}`);
  }
};

// Graceful shutdown
const handleShutdown = async (signal) => {
  console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
  if (server) {
    server.close(async () => {
      console.log('HTTP server closed.');
      await disconnectDB();
      process.exit(0);
    });
  } else {
    await disconnectDB();
    process.exit(0);
  }
};

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));

startServer();
