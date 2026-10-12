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

let isConnecting = false;

/**
 * Connect to MongoDB Atlas
 * @returns {Promise<typeof mongoose>}
 */
let reconnectTimer = null;

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

  // Prevent multiple simultaneous connection attempts
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (isConnecting) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        cleanup();
        if (mongoose.connection.readyState === 1) {
          resolve(mongoose);
        } else {
          reject(new Error('Connection attempt timed out.'));
        }
      }, 12000);

      const onDone = () => {
        clearTimeout(timer);
        cleanup();
        resolve(mongoose);
      };

      const onError = (err) => {
        clearTimeout(timer);
        cleanup();
        reject(err);
      };

      const cleanup = () => {
        mongoose.connection.removeListener('connected', onDone);
        mongoose.connection.removeListener('open', onDone);
        mongoose.connection.removeListener('error', onError);
      };

      mongoose.connection.once('connected', onDone);
      mongoose.connection.once('open', onDone);
      mongoose.connection.once('error', onError);
    });
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

  try {
    isConnecting = true;

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

    isConnecting = false;
    if (reconnectTimer) {
      clearInterval(reconnectTimer);
      reconnectTimer = null;
    }
    console.log(`✅ [MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    isConnecting = false;
    console.error(`❌ [MongoDB Atlas] Connection failed: ${error.message}`);
    scheduleReconnect();
    throw error;
  }
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
