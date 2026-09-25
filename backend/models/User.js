import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            default: 'User',
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

const User = mongoose.model('User', userSchema);
export default User;
