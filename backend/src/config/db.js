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
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  // Prevent multiple simultaneous connection attempts
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (isConnecting) {
    return new Promise((resolve, reject) => {
      mongoose.connection.once('connected', () => resolve(mongoose));
      mongoose.connection.once('error', reject);
    });
  }

  if (!uri || uri.trim() === '' || uri.includes('<password>') || uri.includes('<db_username>')) {
    const warningMsg = `
========================================================================
⚠️  [MongoDB Atlas Configuration Notice]
MONGODB_URI is not set or contains placeholder credentials in backend/.env.

Please open 'backend/.env' and paste your MongoDB Atlas connection string:
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
========================================================================
`;
    console.warn(warningMsg);
    throw new Error('MONGODB_URI is not configured in backend/.env');
  }

  try {
    isConnecting = true;

    // Attach lifecycle event listeners once
    if (mongoose.connection.listenerCount('error') === 0) {
      mongoose.connection.on('error', (err) => {
        console.error('❌ [MongoDB] Runtime connection error:', err.message);
      });

      mongoose.connection.on('disconnected', () => {
        console.warn('⚠️  [MongoDB] Connection lost. Attempting reconnection...');
      });

      mongoose.connection.on('reconnected', () => {
        console.log('✅ [MongoDB] Reconnected successfully.');
      });
    }

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      autoIndex: true,
    });

    isConnecting = false;
    console.log(`✅ [MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    isConnecting = false;
    console.error(`❌ [MongoDB Atlas] Connection failed: ${error.message}`);
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
