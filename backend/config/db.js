import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<db_username>') || uri.includes('<username>')) {
    console.warn("\n⚠️  [MongoDB] Notice: MONGO_URI in .env is missing or contains placeholder values (<db_username>).");
    console.warn("👉 Please open backend/.env and set your MongoDB Atlas connection string (or mongodb://127.0.0.1:27017/raocoding).\n");
    return;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ [MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ [MongoDB] Connection error: ${error.message}`);
    console.warn("⚠️  Server will continue running, but database features will be unavailable until MONGO_URI is valid.\n");
  }
};

export default connectDB;
