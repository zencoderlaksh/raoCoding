import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    description: "Building responsive, modern, high-performance web applications with production-grade UI.",
    skills: [
      "Modern React 19 & Hooks Architecture",
      "JavaScript (ES6+) & TypeScript Core",
      "Tailwind CSS & Component Systems",
      "State Management & Custom Hooks",
      "Client-side Routing & Protected Flows",
      "Web Performance & Core Web Vitals",
    ],
    tools: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Axios", "Zod"],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Server,
    description: "Designing scalable REST APIs, secure authentication systems, and robust business logic.",
    skills: [
      "Node.js Runtime & Express Server Setup",
      "RESTful API Design & Versioning",
      "Authentication & JWT/OAuth Workflows",
      "Security Headers (Helmet) & Rate Limiting",
      "Payment Gateway & Webhook Integration",
      "Error Handling & Structured Logging",
    ],
    tools: ["Node.js", "Express.js", "JWT", "Clerk Auth", "Multer", "REST APIs"],
  },
  {
    id: "database",
    title: "Databases & Cloud",
    icon: Database,
    description: "Data modeling, indexing, relational/NoSQL paradigms, and cloud deployments.",
    skills: [
      "MongoDB & Mongoose Schema Design",
      "Aggregation Pipelines & Index Optimization",
      "Relational SQL Fundamentals (PostgreSQL)",
      "Cloud Asset Management (Cloudinary/S3)",
      "Environment Management & Deployment",
      "Database Security & Sanitization",
    ],
    tools: ["MongoDB", "Mongoose", "PostgreSQL", "Cloudinary", "Render", "Vercel"],
  },
  {
    id: "git",
    title: "Git, GitHub & DevOps",
    icon: GitBranch,
    description: "Mastering professional developer workflows, collaboration, and continuous deployment.",
    skills: [
      "Git CLI & Advanced Branching Strategies",
      "Pull Request (PR) Etiquette & Code Reviews",
      "Resolving Merge Conflicts Confidently",
      "Continuous Integration (CI/CD) Basics",
      "Production Deployment Pipelines",
      "Writing Clean Developer Documentation",
    ],
    tools: ["Git", "GitHub", "GitHub Actions", "Vercel", "Docker Basics", "Postman"],
  },
  {
    id: "ai",
    title: "Applied AI & Automation",
    icon: Bot,
    description: "Integrating intelligent LLM capabilities into modern web applications.",
    skills: [
      "OpenAI & Gemini API Integrations",
      "Prompt Engineering & Structured JSON Output",
      "Retrieval-Augmented Generation (RAG) Concepts",
      "AI-Assisted Coding & Developer Tooling",
      "Automating Repetitive Workflows",
      "Building Practical AI Powered Products",
    ],
    tools: ["OpenAI API", "Google Gemini", "LangChain", "Vector DBs", "JSON Schema"],
  },
  {
    id: "dsa",
    title: "Problem Solving & DSA",
    icon: BrainCircuit,
    description: "Sharpening technical problem solving and algorithm analysis for technical interview rounds.",
    skills: [
      "Time & Space Complexity (Big-O)",
      "Arrays, Strings, Hash Maps & Pointers",
      "Recursion & Divide-and-Conquer",
      "Trees, Graphs & Traversal Patterns",
      "Dynamic Programming Fundamentals",
      "Technical Problem Decomposition",
    ],
    tools: ["Data Structures", "Algorithms", "LeetCode Patterns", "Whiteboarding"],
  },
];

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Core Curriculum Matrix
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Your Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Will Actually Master.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Our curriculum is built around the modern software engineering ecosystem. We teach the tools, patterns, and architectural practices companies expect from Day 1 hires.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105"
                    : "bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-orange-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Showcase */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.8) 0%, transparent 70%)",
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative z-10">
                {/* Left Overview Column */}
                <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <activeCategory.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                    {activeCategory.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-8">
                    {activeCategory.description}
                  </p>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-3">
                      Technologies & Libraries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/10 text-neutral-300 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Competencies List Column */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2 tracking-tight">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    Key Competencies Mastered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCategory.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-xs sm:text-sm font-light">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
