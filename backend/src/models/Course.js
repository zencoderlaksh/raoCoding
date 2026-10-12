import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Course slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Course price is required'],
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: String,
      default: '',
    },
    tags: [{ type: String }],
    duration: { type: String, default: '3 Months' },
    lectures: { type: String, default: '45+ Live Sessions' },
    projects: { type: String, default: '5+ Capstones' },
    curriculum: [
      {
        title: String,
        topics: [String],
      },
    ],
    learnings: [{ type: String }],
    prerequisites: [{ type: String }],
    technologies: [
      {
        name: String,
        icon: String,
        color: String,
      },
    ],
    certificateText: { type: String, default: '' },
    certificateImage: { type: String, default: '' },
    teacher: {
      name: { type: String, default: 'Laksh Rao' },
      role: { type: String, default: 'Lead Architect & Founder' },
      image: { type: String, default: '' },
      experience: { type: String, default: '8+ Years' },
      students: { type: String, default: '5,000+' },
      rating: { type: String, default: '4.9' },
      bio: { type: String, default: '' },
      badges: [{ type: String }],
    },
    feedbacks: [
      {
        name: String,
        role: String,
        image: String,
        rating: { type: Number, default: 5 },
        message: String,
      },
    ],
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],
    dodoProductId: { type: String, default: '' },
    // Private Content delivered after purchase
    notes: [
      {
        title: String,
        content: String,
        fileUrl: String,
      },
    ],
    classTimings: { type: String, default: '' },
    joinLink: { type: String, default: '' },
    recordedVideos: [
      {
        title: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
