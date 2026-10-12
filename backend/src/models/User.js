import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Name / Username is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    phoneNo: {
      type: String,
      required: [true, 'Phone number is mandatory'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is mandatory'],
      trim: true,
    },
    requirementType: {
      type: String,
      enum: ['project', 'course', 'counselling'],
      default: 'course',
      required: [true, 'Requirement type is mandatory'],
    },
    authProvider: {
      type: String,
      enum: ['normal', 'clerk'],
      default: 'normal',
    },
    clerkId: {
      type: String,
      sparse: true,
      index: true,
    },
    role: {
      type: String,
      enum: ['user', 'student', 'client', 'admin'],
      default: 'user',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ phoneNo: 1 });

const User = mongoose.model('User', userSchema);
export default User;
