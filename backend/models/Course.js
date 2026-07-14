import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true, unique: true },
        image: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }, // Keep as cents/INR base units
        originalPrice: { type: Number },
        discount: { type: String },
        tags: [{ type: String }],
        duration: { type: String },
        lectures: { type: String },
        projects: { type: String },
        
        curriculum: [
            {
                title: String,
                topics: [String],
            }
        ],
        learnings: [{ type: String }],
        prerequisites: [{ type: String }],
        technologies: [
            {
                name: String,
                icon: String,
                color: String
            }
        ],
        certificateText: { type: String },
        certificateImage: { type: String },
        
        teacher: {
            name: String,
            role: String,
            image: String,
            experience: String,
            students: String,
            rating: String,
            bio: String,
            badges: [String]
        },
        feedbacks: [
            {
                name: String,
                role: String,
                image: String,
                rating: Number,
                message: String
            }
        ],
        faqs: [
            {
                question: String,
                answer: String
            }
        ],

        dodoProductId: { type: String }, // ID from Dodo Payments if needed
        
        // Private Content delivered after purchase
        notes: [
            {
                title: String,
                content: String, // Markdown or text
                fileUrl: String, // Uploaded PDF or Image URL
            }
        ],
        classTimings: { type: String },
        joinLink: { type: String },
        recordedVideos: [
            {
                title: String,
                url: String, // Video URL
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
