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

// Prevent 10s query buffering timeouts by setting bufferTimeoutMS to 30s
mongoose.set('bufferTimeoutMS', 30000);

const FALLBACK_URI = 'mongodb+srv://raotechnologies5_db_user:Pb4FE%24_%24taSny!x@cluster0.ehrwwzi.mongodb.net/raocoding?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = async () => {
  const envUri = process.env.MONGODB_URI || process.env.MONGO_URI;
  const uri = (envUri && envUri.trim() && !envUri.includes('<password>') && !envUri.includes('<db_username>'))
    ? envUri.trim()
    : FALLBACK_URI;

  // 1. If already connected, return immediately
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  // 2. If a connection is already in-flight, await the same promise
  if (connectionPromise) {
    return connectionPromise;
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

      console.log(`⏳ Connecting to MongoDB Atlas host (${maskUri(uri)})...`);
      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 15000,
        connectTimeoutMS: 15000,
        socketTimeoutMS: 45000,
        autoIndex: false, // Prevents slow startup caused by building indexes across network
      });

      if (reconnectTimer) {
        clearInterval(reconnectTimer);
        reconnectTimer = null;
      }
      console.log(`✅ [MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(`❌ [MongoDB Atlas] Connection failed with primary URI: ${error.message}`);
      
      // If primary URI failed and was different from fallback, try fallback
      if (uri !== FALLBACK_URI) {
        try {
          console.log('🔄 Attempting fallback MongoDB Atlas connection...');
          const fallbackConn = await mongoose.connect(FALLBACK_URI, {
            serverSelectionTimeoutMS: 15000,
            connectTimeoutMS: 15000,
            socketTimeoutMS: 45000,
            autoIndex: false,
          });
          console.log(`✅ [MongoDB Atlas] Connected via fallback URI to host: ${fallbackConn.connection.host}`);
          return fallbackConn;
        } catch (fallbackError) {
          console.error(`❌ [MongoDB Atlas] Fallback connection also failed: ${fallbackError.message}`);
        }
      }
      
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
