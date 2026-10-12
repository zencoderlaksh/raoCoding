import mongoose from 'mongoose';

/**
 * Mask sensitive credentials from MongoDB URI for safe logging
 */
const maskUri = (uri) => {
  if (!uri) return '';
  try {
    return uri.replace(/:([^@]+)@/, ':****@');
  } catch {
    return 'mongodb://****';
  }
};

let reconnectTimer = null;
let connectionPromise = null;

/**
 * Schedule background reconnection attempts until MongoDB is connected
 */
export const scheduleReconnect = (intervalMs = 5000) => {
  if (reconnectTimer) return;
  reconnectTimer = setInterval(async () => {
    if (mongoose.connection.readyState === 1) {
      clearInterval(reconnectTimer);
      reconnectTimer = null;
      return;
    }
    console.log('🔄 [MongoDB] Background reconnection check executing...');
    try {
      await connectDB();
      clearInterval(reconnectTimer);
      reconnectTimer = null;
      console.log('✅ [MongoDB] Background reconnection successful.');
    } catch (err) {
      console.warn(`⏳ [MongoDB] Retrying connection in ${intervalMs / 1000}s (${err.message})`);
    }
  }, intervalMs);
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  // 1. If already connected, return immediately
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  // 2. If a connection is already in-flight, await the same promise
  if (connectionPromise) {
    return connectionPromise;
  }

  if (!uri || uri.trim() === '' || uri.includes('<password>') || uri.includes('<db_username>')) {
    const warningMsg = `
========================================================================
⚠️  [MongoDB Atlas Configuration Notice]
MONGODB_URI is not set or contains placeholder credentials in environment.

Please set MONGODB_URI in your environment or backend/.env:
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
========================================================================
`;
    console.warn(warningMsg);
    throw new Error('MONGODB_URI is not configured in environment');
  }

  connectionPromise = (async () => {
    try {
      // Attach lifecycle event listeners once
      if (mongoose.connection.listenerCount('error') === 0) {
        mongoose.connection.on('error', (err) => {
          console.error('❌ [MongoDB] Runtime connection error:', err.message);
          scheduleReconnect();
        });

        mongoose.connection.on('disconnected', () => {
          console.warn('⚠️  [MongoDB] Connection disconnected. Scheduling reconnection...');
          scheduleReconnect();
        });

        mongoose.connection.on('reconnected', () => {
          console.log('✅ [MongoDB] Reconnected successfully.');
        });
      }

      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 20000,
        autoIndex: true,
      });

      if (reconnectTimer) {
        clearInterval(reconnectTimer);
        reconnectTimer = null;
      }
      console.log(`✅ [MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(`❌ [MongoDB Atlas] Connection failed: ${error.message}`);
      scheduleReconnect();
      throw error;
    } finally {
      connectionPromise = null;
    }
  })();

  return connectionPromise;
};

/**
 * Disconnect from MongoDB gracefully
 */
export const disconnectDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log('🔌 [MongoDB] Disconnected gracefully.');
  }
};

export default connectDB;
