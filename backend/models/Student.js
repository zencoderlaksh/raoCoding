import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  tags: [{ type: String }],
  demoLink: { type: String },
  githubLink: { type: String }
});

const studentSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  projectsCount: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  skills: [{ type: String }],
  socials: {
    github: { type: String, default: "#" },
    linkedin: { type: String, default: "#" },
    website: { type: String, default: "#" }
  },
  projects: [projectSchema],
  review: {
    type: String
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
