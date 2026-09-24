import mongoose from 'mongoose';

const bootcampRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Contact / Student name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    collegeName: {
      type: String,
      required: [true, 'College or Institution name is required'],
      trim: true,
    },
    role: {
      type: String,
      enum: ['Student', 'Faculty', 'Placement Officer / TPO', 'Dean / Principal', 'Other'],
      default: 'Student',
    },
    program: {
      type: String,
      default: '4-Week Summer / Winter Break',
      trim: true,
    },
    expectedStudents: {
      type: Number,
      default: 1,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const BootcampRegistration = mongoose.model('BootcampRegistration', bootcampRegistrationSchema);
export default BootcampRegistration;
