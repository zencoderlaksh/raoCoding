import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            default: 'guest@raocoding.com',
        },
        username: {
            type: String,
            default: 'Guest User',
        },
        city: {
            type: String,
            default: '',
        },
        phoneNo: {
            type: String,
            default: '',
        },
        role: {
            type: String,
            default: 'admin', // Default to admin for full access
        },
        isAdmin: {
            type: Boolean,
            default: true, // Default to true so all admin actions work seamlessly
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
export default User;
