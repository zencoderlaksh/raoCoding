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
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!uri || uri.trim() === '' || uri.includes('<password>') || uri.includes('<db_username>')) {
    console.warn(`
========================================================================
⚠️  [RAO Technologies - Database Setup Required]
MongoDB Atlas connection string is not yet configured in backend/.env.

👉 Please open 'backend/.env' and paste your connection string:
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/raocoding?retryWrites=true&w=majority

⚡ Starting Express server in readiness mode on port ${PORT}...
   Check health status anytime at: http://localhost:${PORT}/api/health
========================================================================
`);
    // Start listening in readiness mode so user can verify server and health endpoint
    server = app.listen(PORT, () => {
      console.log(`📡 Server running on http://localhost:${PORT} (Waiting for MongoDB Atlas credentials)`);
    });
    return;
  }

  try {
    console.log('⏳ Connecting to MongoDB Atlas...');
    await connectDB();

    // Auto-seed initial data if collections are empty
    await seedInitialData();

    // Start server ONLY after MongoDB connection succeeds
    server = app.listen(PORT, () => {
      console.log(`
========================================================================
🚀 RAO Technologies Backend is Live & Ready!
🌐 Server URL:     http://localhost:${PORT}
🩺 Health Check:   http://localhost:${PORT}/api/health
📦 MongoDB Atlas:  Connected & Initialized
========================================================================
`);
    });
  } catch (error) {
    console.error(`\n❌ Failed to establish MongoDB Atlas connection: ${error.message}`);
    console.warn('👉 If "bad auth", check the password for database user "raotechnologies5_db_user" in MongoDB Atlas > Database Access.');
    console.warn('👉 Also verify IP Whitelist in Atlas > Network Access (0.0.0.0/0).\n');

    // Start Express server in degraded mode so developer has live diagnostics
    if (!server) {
      server = app.listen(PORT, () => {
        console.log(`📡 Server running on http://localhost:${PORT} in degraded mode (MongoDB not connected)`);
      });
    }
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
