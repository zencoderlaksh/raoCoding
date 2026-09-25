import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        businessType: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
            default: '',
        },
        status: {
            type: String,
            enum: ['new', 'contacted', 'resolved'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
