import Course from '../models/Course.js';
import Student from '../models/Student.js';
import User from '../models/User.js';
import { hashPassword } from '../utils/authUtils.js';

export const seedInitialData = async () => {
  try {
    // 1. Seed Courses if none exist
    const courseCount = await Course.countDocuments();
    if (courseCount === 0) {
      console.log('🌱 Seeding initial courses into MongoDB...');
      await Course.create([
        {
          slug: 'full-stack-mern-bootcamp',
          title: 'Full-Stack MERN Production Engineering',
          description: 'Master React 19, Node.js, Express, MongoDB, Redis, Docker, and real-time WebSockets to build high-scale web products.',
          price: 1999900,
          originalPrice: 2999900,
          discount: '33% OFF',
          tags: ['MERN', 'Full-Stack', 'WebSockets', 'Docker', 'Tailwind'],
          duration: '16 Weeks',
          lectures: '60+ Live Classes',
          projects: '6 Capstone Projects',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
          technologies: [
            { name: 'React', icon: 'Atom', color: '#61DAFB' },
            { name: 'Node.js', icon: 'Server', color: '#339933' },
            { name: 'MongoDB', icon: 'Database', color: '#47A248' },
            { name: 'Docker', icon: 'Cpu', color: '#2496ED' },
          ],
          curriculum: [
            { title: 'Module 1: Advanced JavaScript & Engine Internals', topics: ['Event Loop', 'Closures', 'Prototypes', 'V8 Optimization'] },
            { title: 'Module 2: React 19 & State Architectures', topics: ['Server Components', 'Custom Hooks', 'Zustand & Context', 'Framer Motion'] },
            { title: 'Module 3: Enterprise Express & MongoDB', topics: ['Aggregation Pipelines', 'Schema Indexing', 'JWT & Clerk Auth', 'Rate Limiting'] },
            { title: 'Module 4: DevOps & Cloud Deployment', topics: ['Docker Containers', 'CI/CD Pipelines', 'Nginx Reverse Proxy', 'AWS Deployment'] },
          ],
          teacher: {
            name: 'Laksh Rao',
            role: 'Founder & Principal Architect, RAO Technologies',
            experience: '8+ Years',
            students: '5,000+',
            rating: '4.95',
            bio: 'Engineered high-concurrency distributed platforms. Mentored thousands of students into top tech organizations.',
            badges: ['Staff Architect', 'Open Source Contributor'],
          },
          classTimings: 'Mon, Wed, Fri (7:00 PM - 9:30 PM IST)',
          joinLink: 'https://meet.google.com/rao-fullstack-batch',
          notes: [
            { title: 'Architecture Roadmap & Syllabus PDF', content: 'Comprehensive roadmap for 16-week MERN bootcamp.' },
            { title: 'Database Indexing Best Practices', content: 'In-depth guide to indexing high-volume MongoDB collections.' },
          ],
        },
        {
          slug: 'python-ai-ml-mastery',
          title: 'Python, Machine Learning & GenAI Systems',
          description: 'From foundational Python programming to Transformer architectures, LangChain, RAG pipelines, and PyTorch models.',
          price: 2499900,
          originalPrice: 3499900,
          discount: '28% OFF',
          tags: ['Python', 'GenAI', 'Machine Learning', 'RAG', 'LLMs'],
          duration: '14 Weeks',
          lectures: '50+ Live Classes',
          projects: '5 AI Deployments',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
          technologies: [
            { name: 'Python', icon: 'Code', color: '#3776AB' },
            { name: 'PyTorch', icon: 'Cpu', color: '#EE4C2C' },
            { name: 'LangChain', icon: 'GitFork', color: '#00A67E' },
            { name: 'FastAPI', icon: 'Server', color: '#009688' },
          ],
          curriculum: [
            { title: 'Module 1: Advanced Python & Asynchronous Concurrency', topics: ['Metaclasses', 'Generators', 'AsyncIO', 'Data Structures'] },
            { title: 'Module 2: Classical Machine Learning', topics: ['Regression', 'Classification', 'Scikit-Learn', 'Feature Engineering'] },
            { title: 'Module 3: Neural Networks & Deep Learning', topics: ['PyTorch Tensors', 'Backpropagation', 'CNNs', 'Transfer Learning'] },
            { title: 'Module 4: Generative AI & Vector Databases', topics: ['RAG Architectures', 'Pinecone', 'LangChain Agents', 'Ollama Local LLMs'] },
          ],
          teacher: {
            name: 'Apoorva Sharma',
            role: 'Lead AI Engineer & Data Scientist',
            experience: '6+ Years',
            students: '3,200+',
            rating: '4.92',
            bio: 'Specialist in generative models and enterprise search systems.',
            badges: ['AI Specialist', 'Research Fellow'],
          },
          classTimings: 'Tue, Thu, Sat (8:00 PM - 10:00 PM IST)',
          joinLink: 'https://meet.google.com/rao-ai-batch',
        },
      ]);
      console.log('✅ Initial courses seeded successfully.');
    }

    // 2. Seed Students if none exist
    const studentCount = await Student.countDocuments();
    if (studentCount === 0) {
      console.log('🌱 Seeding initial student showcase profiles into MongoDB...');
      await Student.create([
        {
          slug: 'laksh-rao',
          name: 'Laksh Rao',
          course: 'Full-Stack MERN Architecture',
          projectsCount: 6,
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
          bio: 'Passionate software engineer specializing in scalable full-stack applications, distributed databases, and high-performance UI systems.',
          role: 'Full-Stack Software Engineer',
          batch: '2024 Alpha',
          skills: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'System Design'],
          socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            website: 'https://raocoding.com',
          },
          projects: [
            {
              title: 'Distributed Real-Time Canvas',
              desc: 'Infinite canvas collaborative whiteboarding application powered by WebSockets, CRDTs, and Canvas API.',
              tags: ['React', 'WebSockets', 'Canvas API', 'Node.js'],
              demoLink: '#',
              githubLink: '#',
            },
            {
              title: 'FinTech Algorithmic Trading Dashboard',
              desc: 'High-frequency market visualization tool consuming live Binance and Zerodha websockets.',
              tags: ['Next.js', 'TradingView', 'FastAPI', 'Redis'],
              demoLink: '#',
              githubLink: '#',
            },
          ],
        },
        {
          slug: 'kritika-bhagwani',
          name: 'Kritika Bhagwani',
          course: 'Python & AI Engineering',
          projectsCount: 4,
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
          bio: 'Specializes in NLP, document summarization RAG pipelines, and conversational voice agents with low latency.',
          role: 'AI / Machine Learning Engineer',
          batch: '2024 Beta',
          skills: ['Python', 'LangChain', 'FastAPI', 'PyTorch', 'Vector DBs'],
          socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            website: '#',
          },
          projects: [
            {
              title: 'Enterprise Legal Contract RAG Copilot',
              desc: 'Semantic clause retrieval and hallucination-free legal summarizer using Llama 3 and ChromaDB.',
              tags: ['Python', 'ChromaDB', 'Llama 3', 'FastAPI'],
              demoLink: '#',
              githubLink: '#',
            },
          ],
        },
      ]);
      console.log('✅ Initial student profiles seeded successfully.');
    }

    // 3. Seed Default Admin User if no admin exists
    const adminExists = await User.findOne({ $or: [{ isAdmin: true }, { role: 'admin' }] });
    if (!adminExists) {
      console.log('🌱 Seeding default admin user into MongoDB...');
      const adminPassword = await hashPassword('Admin@123');
      await User.create({
        username: 'RAO Admin',
        email: 'admin@raocoding.com',
        password: adminPassword,
        phoneNo: '9876543210',
        city: 'Jaipur',
        requirementType: 'project',
        authProvider: 'normal',
        role: 'admin',
        isAdmin: true,
      });
      console.log('✅ Default Admin created: admin@raocoding.com / Admin@123');
    }
  } catch (err) {
    console.error('Seed data notice:', err.message);
  }
};

export default seedInitialData;
