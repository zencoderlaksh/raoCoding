import { course } from "../../assets/images";

// Dummy student avatar URLs (using DiceBear API for unique illustrated avatars)
const studentAvatars = {
  rahul: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4",
  priya: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffd5dc",
  aman: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman&backgroundColor=c0aede",
  mohit: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohit&backgroundColor=d1f4d1",
  kunal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&backgroundColor=ffecd2",
  neha: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=ffd5dc",
  arjun: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=b6e3f4",
};

export const coursesData = [
  {
    slug: "full-stack",
    image: course,
    title: "Full Stack Development",
    description:
      "Master frontend and backend development with real-world projects and production-ready applications.",
    price: "6999",
    originalPrice: "14891",
    discount: "53",
    tags: ["React", "Node.js", "MongoDB"],
    duration: "7",
    lectures: "200",
    projects: "15",
    curriculum: [
      {
        title: "HTML Fundamentals",
        topics: ["HTML Tags", "Forms", "Semantic HTML", "Tables", "Media", "SEO Basics"],
      },
      {
        title: "CSS Mastery",
        topics: ["Flexbox", "Grid", "Responsive Design", "Animations", "Glassmorphism", "Media Queries"],
      },
      {
        title: "JavaScript",
        topics: ["Variables", "Functions", "DOM", "ES6", "APIs", "Async Await"],
      },
      {
        title: "React JS",
        topics: ["Components", "Props", "Hooks", "Routing", "Context API", "Project Structure"],
      },
      {
        title: "Backend",
        topics: ["Node.js", "Express", "REST APIs", "MongoDB", "Authentication", "Deployment"],
      },
    ],
    learnings: [
      "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
      "Node.js", "Express.js", "MongoDB", "Authentication", "Deployment",
    ],
    prerequisites: ["Basic Computer Knowledge", "Laptop Required", "Internet Connection"],
    technologies: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Node.js", icon: "🟢", color: "#68A063" },
      { name: "MongoDB", icon: "🍃", color: "#4DB33D" },
      { name: "Express", icon: "🚂", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8" },
      { name: "Git", icon: "🔀", color: "#F05032" },
      { name: "GitHub", icon: "🐙", color: "#ffffff" },
      { name: "Vercel", icon: "▲", color: "#ffffff" },
      { name: "Render", icon: "☁️", color: "#46E3B7" },
    ],
    certificateText:
    "Earn a course completion certificate after completing all modules and projects. It represents your commitment to learning software engineering skills, building real-world applications, and improving your technical abilities. Share your achievement on LinkedIn and use it as part of your professional portfolio."
      ,
    certificateImage: course,
    teacher: {
      name: "Harsh Sharma",
      role: "Senior Full Stack Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HarshSharma&backgroundColor=b6e3f4",
      experience: "8+ Years Experience",
      students: "12,000+",
      rating: "4.9",
      bio: "Harsh has worked with companies like Flipkart and Razorpay building scalable systems. He brings real production experience into every lesson — no fluff, just battle-tested knowledge.",
      badges: ["Ex-Flipkart", "Open Source Contributor", "1M+ YouTube Views"],
    },
    feedbacks: [
      {
        name: "Shruti Singhal",
        role: "Now at TCS",
        image: studentAvatars.rahul,
        rating: 5,
        message: "Amazing projects and beautifully structured course. Got my first job offer within 2 months!",
      },
      {
        name: "Ekta Poonia",
        role: "Freelance Developer",
        image: studentAvatars.priya,
        rating: 5,
        message: "Loved the UI and smooth learning experience. The backend section is pure gold.",
      },
      {
        name: "Shubham Jakhar",
        role: "CS Student",
        image: studentAvatars.aman,
        rating: 5,
        message: "Best full stack roadmap for beginners. Everything is crystal clear.",
      },
      {
        name: "Kritika",
        role: "Now at Infosys",
        image: studentAvatars.neha,
        rating: 5,
        message: "Projects are industry-level. I built my entire portfolio from this course.",
      },
      {
        name: "Md Shahzad",
        role: "Startup Founder",
        image: studentAvatars.arjun,
        rating: 5,
        message: "Used the skills here to launch my own SaaS. Best investment ever.",
      },
    ],
    faqs: [
  {
    question: "Who are these courses designed for?",
    answer:
      "These courses are designed for engineering students, beginners, and anyone who wants to build strong programming and software engineering skills from scratch. Whether you are starting your coding journey or preparing for placements, these courses will help you develop practical skills.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "I offer courses in Web Development, Data Structures & Algorithms (DSA), and Artificial Intelligence & Machine Learning. Each course includes concepts, practical implementation, real-world projects, and problem-solving techniques.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. The courses start from fundamentals and gradually move towards advanced topics. Every concept is explained step by step so beginners can build strong programming foundations.",
  },
  {
    question: "Will I work on real-world projects?",
    answer:
      "Yes. Along with theory, you will build practical projects that help you understand how technologies are used in real software development environments.",
  },
  {
    question: "How does your teaching approach work?",
    answer:
      "My teaching approach focuses on understanding why concepts work instead of memorizing code. Every topic is explained using examples, visualizations, and hands-on practice.",
  },
  {
    question: "Will these courses help with coding interviews?",
    answer:
      "Yes. The DSA course focuses on problem-solving patterns, algorithms, and interview preparation. Development courses focus on building industry-ready projects.",
  },
  {
    question: "Are the courses self-paced or live?",
    answer:
      "The courses follow a structured roadmap that allows you to learn at your own pace while progressing from beginner concepts to advanced engineering skills.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You will learn modern technologies used in software engineering including web development tools, programming languages, data structures, algorithms, AI concepts, and machine learning techniques.",
  },
],
  },

  {
    slug: "dsa",
    image: course,
    title: "DSA Mastery",
    description:
      "Master Data Structures & Algorithms for coding interviews and problem solving.",
    price: "6999",
    originalPrice: "14891",
    discount: "53",
    tags: ["Java", "DSA", "Problem Solving"],
    duration: "6",
    lectures: "180",
    projects: "10",
    curriculum: [
      {
        title: "Programming Basics",
        topics: ["Variables", "Loops", "Functions", "Patterns", "Arrays", "Strings"],
      },
      {
        title: "Sorting Algorithms",
        topics: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Complexity"],
      },
      {
        title: "Recursion",
        topics: ["Basic Recursion", "Backtracking", "Advanced Recursion", "Subsets", "Permutations", "Maze Problems"],
      },
      {
        title: "Trees & Graphs",
        topics: ["Binary Trees", "BST", "Graphs", "DFS", "BFS", "Shortest Path"],
      },
    ],
    learnings: ["Arrays", "Strings", "Recursion", "Sorting", "Trees", "Graphs", "Dynamic Programming"],
    prerequisites: ["Basic Programming Knowledge"],
    technologies: [
      { name: "Java", icon: "☕", color: "#E76F00" },
      { name: "VS Code", icon: "💙", color: "#007ACC" },
      { name: "GitHub", icon: "🐙", color: "#ffffff" },
      { name: "LeetCode", icon: "🧩", color: "#FFA116" },
      { name: "CodeChef", icon: "👨‍🍳", color: "#5B4638" },
    ],
    certificateText:
      "Earn a certificate that proves your algorithmic thinking and problem-solving skills. Recognized by top product companies during hiring. Hundreds of our students have cracked interviews at Amazon, Google, and Zepto with this credential.",
    certificateImage: course,
    teacher: {
      name: "Rao Sir",
      role: "DSA Mentor & Competitive Programmer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RaoSir&backgroundColor=d1f4d1",
      experience: "10+ Years Experience",
      students: "20,000+",
      rating: "4.95",
      bio: "Rao Sir is a ICPC World Finalist and has mentored thousands of students into top tech companies. His teaching style is legendary — complex problems broken down to first principles.",
      badges: ["ICPC World Finalist", "Google Kickstart Winner", "IIT Alumni"],
    },
    feedbacks: [
      {
        name: "Mohit",
        role: "Now at Amazon",
        image: studentAvatars.mohit,
        rating: 5,
        message: "Best DSA explanations and roadmap. Cracked Amazon SDE after this course!",
      },
      {
        name: "Kunal",
        role: "Competitive Programmer",
        image: studentAvatars.kunal,
        rating: 5,
        message: "Improved my coding confidence a lot. Now I solve Hard LeetCode problems daily.",
      },
      {
        name: "Priya",
        role: "Now at Zepto",
        image: studentAvatars.priya,
        rating: 5,
        message: "The recursion and DP modules are unmatched. Cleared 3 FAANG rounds.",
      },
    ],
    faqs: [
      { question: "Can beginners start this course?", answer: "Yes, beginners can easily follow." },
      { question: "Does it include interview questions?", answer: "Yes, many interview-based problems are included." },
    ],
  },
  {
    slug: "ai-ml",
    image: course,
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems from scratch — master ML algorithms, neural networks, and deploy real AI models used in production.",
    price: "7999",
    originalPrice: "17999",
    discount: "56",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    duration: "8",
    lectures: "220",
    projects: "18",
    curriculum: [
      {
        title: "Python for AI",
        topics: ["NumPy", "Pandas", "Matplotlib", "Data Wrangling", "File Handling", "OOP in Python"],
      },
      {
        title: "Machine Learning Fundamentals",
        topics: ["Linear Regression", "Logistic Regression", "Decision Trees", "SVM", "KNN", "Model Evaluation"],
      },
      {
        title: "Deep Learning",
        topics: ["Neural Networks", "Backpropagation", "CNN", "RNN", "LSTM", "Transfer Learning"],
      },
      {
        title: "Natural Language Processing",
        topics: ["Text Preprocessing", "TF-IDF", "Word2Vec", "Transformers", "BERT", "Sentiment Analysis"],
      },
      {
        title: "Model Deployment",
        topics: ["Flask APIs", "FastAPI", "Docker", "Cloud Deployment", "MLflow", "Model Monitoring"],
      },
    ],
    learnings: [
      "Python for Data Science",
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Neural Networks",
      "Computer Vision",
      "NLP & Transformers",
      "Model Deployment",
      "MLOps Basics",
    ],
    prerequisites: ["Basic Python Knowledge", "High School Mathematics", "Laptop Required"],
    technologies: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "TensorFlow", icon: "🔶", color: "#FF6F00" },
      { name: "PyTorch", icon: "🔥", color: "#EE4C2C" },
      { name: "Scikit-learn", icon: "🤖", color: "#F7931E" },
      { name: "Pandas", icon: "🐼", color: "#150458" },
      { name: "NumPy", icon: "🔢", color: "#4DABCF" },
      { name: "Jupyter", icon: "📓", color: "#F37626" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "HuggingFace", icon: "🤗", color: "#FFD21E" },
    ],
    certificateText:
      "Earn an industry-recognised AI & Machine Learning certificate upon course completion. This credential is respected by leading tech companies, AI startups, and research labs worldwide. Our alumni have used it to land roles at Google, Microsoft, and funded AI startups. Add it to your LinkedIn, attach it to job applications, and let your skills speak for themselves.",
    certificateImage: course,
    teacher: {
      name: "Dr. Aryan Mehta",
      role: "AI Research Engineer & Educator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HarshSharma&backgroundColor=ffd5dc",
      experience: "9+ Years Experience",
      students: "18,000+",
      rating: "4.97",
      bio: "Dr. Aryan holds a PhD in Machine Learning from IIT Delhi and has published research at NeurIPS and ICML. He previously led the AI team at a Series-B startup and now brings cutting-edge research directly into his teaching — making complex theory feel instantly practical.",
      badges: ["IIT Delhi PhD", "NeurIPS Researcher", "Ex-Google Brain Intern"],
    },
    feedbacks: [
      {
        name: "Riya",
        role: "Now at Microsoft AI",
        image: studentAvatars.neha,
        rating: 5,
        message: "The deep learning modules are absolutely world-class. Got placed at Microsoft AI within 3 months of completing this!",
      },
      {
        name: "Sahil",
        role: "ML Engineer at Startup",
        image: studentAvatars.arjun,
        rating: 5,
        message: "Best structured ML course I've found. The deployment section alone is worth the price.",
      },
      {
        name: "Divya",
        role: "AI Researcher",
        image: studentAvatars.priya,
        rating: 5,
        message: "NLP and transformers section is phenomenal. I published my first research paper after this course.",
      },
      {
        name: "Karan",
        role: "Now at Flipkart AI",
        image: studentAvatars.mohit,
        rating: 5,
        message: "Real project-based learning. I built a full recommendation engine that now runs in production.",
      },
    ],
    faqs: [
      {
        question: "Do I need a strong math background?",
        answer: "Basic high school maths is enough. We cover all required linear algebra and statistics from scratch inside the course.",
      },
      {
        question: "Is Python experience required?",
        answer: "Basic Python knowledge helps but we have a dedicated Python for AI module to get everyone up to speed.",
      },
      {
        question: "Will I build real AI projects?",
        answer: "Yes — 18 projects including an image classifier, chatbot, recommendation system, and a deployed ML API.",
      },
      {
        question: "Is the certificate recognised by companies?",
        answer: "Yes, our certificate is trusted by 200+ hiring partners including product companies and AI startups.",
      },
    ],
  },

  {
    slug: "data-science",
    image: course,
    title: "Data Science Bootcamp",
    description:
      "Turn raw data into powerful insights — master data analysis, visualization, statistics, and business intelligence from scratch.",
    price: "7499",
    originalPrice: "16499",
    discount: "55",
    tags: ["Python", "SQL", "Data Analytics"],
    duration: "7",
    lectures: "195",
    projects: "14",
    curriculum: [
      {
        title: "Data Analysis with Python",
        topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Merging Datasets", "GroupBy", "Pivot Tables"],
      },
      {
        title: "Statistics & Probability",
        topics: ["Descriptive Stats", "Distributions", "Hypothesis Testing", "Correlation", "Regression", "A/B Testing"],
      },
      {
        title: "Data Visualization",
        topics: ["Matplotlib", "Seaborn", "Plotly", "Interactive Dashboards", "Tableau Basics", "Storytelling with Data"],
      },
      {
        title: "SQL & Databases",
        topics: ["SQL Queries", "Joins", "Subqueries", "Window Functions", "PostgreSQL", "BigQuery"],
      },
      {
        title: "Business Intelligence & Reporting",
        topics: ["Power BI", "KPI Design", "Dashboard Building", "Excel Advanced", "Stakeholder Reports", "Case Studies"],
      },
    ],
    learnings: [
      "Python for Data Analysis",
      "Statistics & Probability",
      "Data Cleaning & EDA",
      "SQL Mastery",
      "Data Visualization",
      "Machine Learning Basics",
      "Power BI Dashboards",
      "Business Intelligence",
    ],
    prerequisites: ["Basic Computer Knowledge", "Laptop Required", "No prior coding needed"],
    technologies: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "SQL", icon: "🗄️", color: "#336791" },
      { name: "Pandas", icon: "🐼", color: "#150458" },
      { name: "Tableau", icon: "📊", color: "#E97627" },
      { name: "Power BI", icon: "💛", color: "#F2C811" },
      { name: "Jupyter", icon: "📓", color: "#F37626" },
      { name: "Excel", icon: "📗", color: "#217346" },
      { name: "BigQuery", icon: "☁️", color: "#4285F4" },
    ],
    certificateText:
      "Earn a Data Science certificate that validates your ability to analyse, visualise, and derive insights from real-world data. Recognised by analytics teams at top companies, consulting firms, and Fortune 500 businesses. Our certified graduates work at Deloitte, McKinsey, Swiggy, and leading fintech companies. A credential that opens doors across every industry.",
    certificateImage: course,
    teacher: {
      name: "Sneha Kapoor",
      role: "Senior Data Scientist & Analytics Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SnehaKapoor&backgroundColor=ffd5dc",
      experience: "7+ Years Experience",
      students: "15,000+",
      rating: "4.96",
      bio: "Sneha is a Senior Data Scientist who has worked at Paytm, Razorpay, and an AI-first fintech startup. She specialises in turning messy business data into dashboards that executives actually use. Her courses are famous for being brutally practical — no theory overload, just real analyst workflows.",
      badges: ["Ex-Razorpay DS Lead", "Kaggle Master", "IIM Certified Analytics"],
    },
    feedbacks: [
      {
        name: "Ananya",
        role: "Now at Deloitte Analytics",
        image: studentAvatars.priya,
        rating: 5,
        message: "Sneha's teaching style is brilliant. I went from zero SQL to building full BI dashboards in 6 weeks.",
      },
      {
        name: "Rohan",
        role: "Business Analyst at Swiggy",
        image: studentAvatars.kunal,
        rating: 5,
        message: "The SQL and Power BI modules are insanely good. Used everything on day one at my new job.",
      },
      {
        name: "Meera",
        role: "Data Analyst Freelancer",
        image: studentAvatars.neha,
        rating: 5,
        message: "Best investment I've made. Now charging ₹60k/month as a freelance data analyst.",
      },
      {
        name: "Vikram",
        role: "Now at McKinsey",
        image: studentAvatars.arjun,
        rating: 5,
        message: "Statistics and A/B testing section is gold. Helped me crack the McKinsey analytics case round.",
      },
    ],
    faqs: [
      {
        question: "Can I join with zero coding experience?",
        answer: "Absolutely. This course is designed for complete beginners. We start from scratch with Python and build up gradually.",
      },
      {
        question: "Is SQL taught from basics?",
        answer: "Yes, SQL is covered from basic SELECT queries all the way to advanced window functions and BigQuery.",
      },
      {
        question: "What kind of projects will I build?",
        answer: "14 real-world projects including sales dashboards, customer churn analysis, IPL data visualisation, and a full capstone BI report.",
      },
      {
        question: "Does this cover machine learning too?",
        answer: "Yes, we include an introduction to ML — enough to understand and apply basic predictive models in a data science context.",
      },
    ],
  },
  
];