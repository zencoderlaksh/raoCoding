export const bootcampOverview = {
  title: "Transforming College Students Into Industry-Ready Engineers",
  tagline: "Bridging Academic Theory with Production-Grade Engineering",
  description: "We partner with leading colleges and universities to deliver intensive software engineering bootcamps, hands-on production project building, and direct career acceleration.",
  metrics: [
    { value: 30, suffix: "+", label: "Partner Institutions" },
    { value: 10, suffix: "k+", label: "Engineers Upskilled" },
    { value: 450, suffix: "+", label: "Production Projects Built" },
    { value: 94, suffix: "%", label: "Practical Coding Ratio" }
  ],
  campusPartners: [
    "IIT Delhi Campus Workshop",
    "BITS Pilani Tech Fest",
    "NIT Trichy Hackathon",
    "VIT Vellore CSE Department",
    "SRM Institute of Science",
    "Manipal Institute of Tech",
    "DTU Engineering Sprint",
    "IIIT Hyderabad Outreach",
    "Thapar University Bootcamp"
  ],
  lifecycleStages: [
    { step: "01", name: "Structured Training", desc: "Core concepts, architecture & clean code fundamentals" },
    { step: "02", name: "Hands-On Practice", desc: "Daily algorithmic drills and component building" },
    { step: "03", name: "Team Projects", desc: "Real-world full stack production applications" },
    { step: "04", name: "Assessment & PR Reviews", desc: "Line-by-line code evaluation and automated testing" },
    { step: "05", name: "1-on-1 Mentorship", desc: "Career guidance and personalized architecture feedback" },
    { step: "06", name: "Placement Preparation", desc: "Mock interviews, resume polish & hiring network exposure" }
  ]
};

export const bootcampFormats = [
  {
    _id: "651000000000000000000001",
    formatId: "fast-track",
    title: "4-Week Summer / Winter Break",
    subtitle: "High-Intensity Immersion",
    badge: "Most Popular",
    duration: "4 Weeks (120 Hours)",
    hours: "Daily 6 Hours Intensive Coding",
    description: "Designed for semester breaks to completely transform students' skills before on-campus placement drives begin.",
    features: [
      "Daily live coding workshops & architecture lectures",
      "2 production-grade full-stack capstone applications",
      "Git/GitHub team collaboration workflows",
      "Dedicated doubt resolution channels",
      "Mock technical interview & portfolio evaluation"
    ],
    eligibility: "2nd, 3rd, and 4th year B.Tech/BE, BCA, MCA students",
    curriculum: [
      {
        title: "Week 1: Modern Frontend & State Architecture",
        topics: ["React 19 Hooks", "Component Architecture", "Tailwind CSS", "API Integration"]
      },
      {
        title: "Week 2: Backend Architecture & REST APIs",
        topics: ["Node.js Runtime", "Express Server", "MongoDB & Mongoose", "JWT Auth"]
      },
      {
        title: "Week 3: Production Capstone & Cloud Deployment",
        topics: ["Full-Stack Integration", "Cloudinary Media", "Payment Gateways", "Render & Vercel"]
      },
      {
        title: "Week 4: Placement Readiness & Mock Interviews",
        topics: ["DSA Problem Solving", "ATS Resumes", "GitHub Showcases", "1-on-1 Mock Rounds"]
      }
    ],
    isActive: true
  },
  {
    _id: "651000000000000000000002",
    formatId: "semester",
    title: "Semester-Long Integrated Track",
    subtitle: "Credit-Aligned Curriculum",
    badge: "Comprehensive",
    duration: "12 - 16 Weeks",
    hours: "Weekend & Evening Interactive Sprints",
    description: "Runs parallel to college semesters with zero disruption to internal academic exams, blending foundational depth with project builds.",
    features: [
      "Weekend deep-dive masterclasses & weekly sprints",
      "Gradual progression from basics to advanced systems",
      "3 industry-scale projects with continuous code reviews",
      "Mid-term and end-term code audits & scorecards",
      "Continuous placement readiness mentorship"
    ],
    eligibility: "All engineering semesters (aligned with NAAC / NIRF experiential learning credits)",
    curriculum: [
      {
        title: "Phase 1: Advanced JavaScript & Algorithms",
        topics: ["Execution Contexts", "Async Programming", "Big-O Analysis", "Core Data Structures"]
      },
      {
        title: "Phase 2: Full-Stack Engineering Deep-Dive",
        topics: ["React Deep Dive", "Backend API Security", "Relational & NoSQL Databases"]
      },
      {
        title: "Phase 3: Scalability & DevOps Basics",
        topics: ["Docker Containers", "CI/CD Workflows", "Caching Strategies", "Applied AI Tools"]
      },
      {
        title: "Phase 4: Capstones & Career Launch",
        topics: ["3 Production Deployments", "Technical Interview Rubrics", "Campus Placement Drills"]
      }
    ],
    isActive: true
  },
  {
    _id: "651000000000000000000003",
    formatId: "workshop",
    title: "3-Day Campus Hackathon",
    subtitle: "High-Energy Project Sprint",
    badge: "Fast Immersion",
    duration: "3 Days (24 Hours)",
    hours: "Hands-on Hackathon Experience",
    description: "A fast-paced immersion introducing students to modern web architecture, AI tools, and shipping a real app by Sunday evening.",
    features: [
      "Rapid crash-course in modern web & AI APIs",
      "Live team coding competition with mentor support",
      "Demo day pitching before industry judges",
      "Instant certificates and awards for top teams",
      "Prerequisite foundation for longer bootcamps"
    ],
    eligibility: "Open to all branches and years",
    curriculum: [
      {
        title: "Day 1: Modern Tech Stack Crash Course",
        topics: ["Rapid Prototyping", "Component UI Kits", "AI API Integration"]
      },
      {
        title: "Day 2: 24-Hour Building Sprint",
        topics: ["Team Collaboration", "Live Mentor Debugging", "Feature Completion"]
      },
      {
        title: "Day 3: Demo Day & Judging",
        topics: ["Application Deployment", "Pitch Presentations", "Awards & Certificates"]
      }
    ],
    isActive: true
  }
];
