import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Graduation / placement year is required'],
      index: true,
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
      index: true,
    },
    role: {
      type: String,
      required: [true, 'Job role is required'],
      trim: true,
    },
    logo: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: 'Remote',
      trim: true,
    },
    salary: {
      type: String,
      trim: true,
    },
    packageAmount: {
      type: Number, // In LPA or equivalent numeric for sorting
    },
    testimonial: {
      type: String,
      trim: true,
    },
    story: {
      type: String,
      trim: true,
    },
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    linkedin: {
      type: String,
      default: '#',
    },
    image: {
      type: String,
      default: '',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Placement = mongoose.model('Placement', placementSchema);
export default Placement;
