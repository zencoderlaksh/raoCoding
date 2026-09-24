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
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Comprehensive Curriculum
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            What Your Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Will Actually Master.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Our curriculum is built around the modern software engineering ecosystem. We teach the tools, patterns, and architectural practices companies expect from Day 1 hires.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105"
                    : "bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
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
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#0c0c0c] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(249,115,22,0.08)] relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.8) 0%, transparent 70%)",
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                {/* Left Overview Column */}
                <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <activeCategory.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    {activeCategory.title}
                  </h3>
                  <p className="text-neutral-400 text-base leading-relaxed mb-6">
                    {activeCategory.description}
                  </p>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-3">
                      Technologies & Libraries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-orange-300 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Competencies List Column */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    Key Competencies Mastered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCategory.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] transition-all"
                      >
                        <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-200 text-sm font-medium">
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
