import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './models/Course.js';
dotenv.config();

const coursesToSeed = [
    {
        slug: "full-stack",
        title: "Full Stack + Generative AI",
        description: "Master React, Node.js and Generative AI. Ship production-grade applications with real-world mentorship from industry engineers.",
        price: 2499900, // stored in cents/paise format depending on the backend logic, earlier we saw price 1000 in test. Wait, Dodo payments uses standard currency subunits. ₹24,999 = 2499900
        originalPrice: 2999900,
        image: "https://dummyimage.com/400x250/111/fff?text=Full+Stack",
        duration: "6 Months",
        lectures: "120+ Hrs",
        projects: "5+ Real World",
        tags: ["Most Popular", "Web Dev"],
        curriculum: [
            { title: "Frontend Mastery", topics: ["React", "Tailwind", "Framer Motion"] },
            { title: "Backend Deep Dive", topics: ["Node.js", "Express", "MongoDB"] },
            { title: "Generative AI", topics: ["OpenAI API", "Langchain", "AI Agents"] }
        ],
        teacher: {
            name: "Lakshay Yadav",
            role: "Founder & Lead Instructor",
            image: "https://dummyimage.com/400x400/111/fff",
            bio: "Building RaoCoding and scaling tech products.",
        }
    },
    {
        slug: "ai-ml",
        title: "Machine Learning + AI",
        description: "Deep-dive into ML algorithms, Python, LLMs and analytics pipelines. Built for engineers who want to lead with data.",
        price: 2999900,
        originalPrice: 4000000,
        image: "https://dummyimage.com/400x250/111/fff?text=AI+ML",
        duration: "8 Months",
        lectures: "150+ Hrs",
        projects: "8+ Real World",
        tags: ["Advanced Track", "Data"],
        curriculum: [
            { title: "Python Fundamentals", topics: ["Data Structures", "Pandas", "NumPy"] },
            { title: "Machine Learning", topics: ["Regression", "Classification", "Neural Networks"] },
            { title: "Deep Learning & LLMs", topics: ["TensorFlow", "Transformers", "Fine-tuning"] }
        ],
        teacher: {
            name: "Shubham Jakhar",
            role: "Co-Founder & AI Lead",
            image: "https://dummyimage.com/400x400/111/fff",
            bio: "Expert in Machine Learning and Deep Learning.",
        }
    },
    {
        slug: "dsa",
        title: "Data Structures and Algorithms",
        description: "From basic to advanced level dsa with mock interviews",
        price: 1999900,
        originalPrice: 2399900,
        image: "https://dummyimage.com/400x250/111/fff?text=DSA",
        duration: "4 Months",
        lectures: "80+ Hrs",
        projects: "Interview Prep",
        tags: ["Trending Now", "Interviews"],
        curriculum: [
            { title: "Basics", topics: ["Arrays", "Strings", "Linked Lists"] },
            { title: "Intermediate", topics: ["Trees", "Graphs", "Hashing"] },
            { title: "Advanced", topics: ["Dynamic Programming", "Backtracking", "Tries"] }
        ],
        teacher: {
            name: "Lakshay Yadav",
            role: "Founder & Lead Instructor",
            image: "https://dummyimage.com/400x400/111/fff",
            bio: "Helping students crack top tech companies.",
        }
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to MongoDB");
        // Check if courses already exist based on slug
        for (const c of coursesToSeed) {
            const existing = await Course.findOne({ slug: c.slug });
            if (!existing) {
                await Course.create(c);
                console.log(`Seeded: ${c.title}`);
            } else {
                console.log(`Skipped (already exists): ${c.title}`);
            }
        }
        console.log("Seeding complete!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
