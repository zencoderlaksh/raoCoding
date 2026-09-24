import mongoose from 'mongoose';

const bootcampFormatSchema = new mongoose.Schema(
  {
    formatId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    badge: {
      type: String,
      default: 'Program',
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    hours: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    curriculum: [
      {
        title: String,
        topics: [String],
      },
    ],
    eligibility: {
      type: String,
      default: 'Engineering, BCA, MCA, and Polytechnic students',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bootcamp = mongoose.model('Bootcamp', bootcampFormatSchema);
export default Bootcamp;
