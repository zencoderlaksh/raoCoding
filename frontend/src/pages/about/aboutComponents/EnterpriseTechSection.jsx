import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Bot, Cpu } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: Terminal,
    desc: "Blazing fast, responsive, and intuitive digital interfaces engineered for exceptional user engagement and retention.",
    items: [
      { name: "React 19 & Next.js", role: "High-performance web apps & SSR platforms" },
      { name: "React Native", role: "Cross-platform iOS & Android mobile ecosystems" },
      { name: "TypeScript", role: "Type-safe, enterprise-grade codebase maintenance" },
      { name: "Tailwind CSS & Framer", role: "Custom design systems & smooth micro-interactions" },
      { name: "State Management", role: "Redux Toolkit, Zustand & React Query" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Microservices",
    icon: Cpu,
    desc: "Robust, scalable API backends engineered to handle enterprise concurrency, high throughput, and secure data transactions.",
    items: [
      { name: "Node.js & Express", role: "Event-driven asynchronous microservices" },
      { name: "Java & Spring Boot", role: "Enterprise distributed systems & robust data APIs" },
      { name: "Python & FastAPI", role: "High-speed computation & AI backend services" },
      { name: "REST & GraphQL", role: "Modern, unified API contracts for all clients" },
      { name: "Auth & Security", role: "JWT, OAuth2, RBAC & geofencing protocols" },
    ],
  },
  {
    id: "ai",
    label: "Applied AI & Intelligent Agents",
    icon: Bot,
    desc: "Custom intelligent workflows and generative models tailored specifically to eliminate operational drag for our clients.",
    items: [
      { name: "Large Language Models", role: "Custom OpenAI & Claude API orchestration" },
      { name: "RAG & Vector Stores", role: "Pinecone, ChromaDB & semantic knowledge retrieval" },
      { name: "LangChain & Agentic Systems", role: "Multi-step autonomous business tool calling" },
      { name: "Data Pipelines", role: "Intelligent document parsing, summarization & OCR" },
      { name: "Predictive Analytics", role: "Customer churn, demand forecasting & analytics" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud, DevOps & Data",
    icon: Cloud,
    desc: "Rock-solid cloud infrastructure with automated CI/CD pipelines, zero-downtime deployments, and high data reliability.",
    items: [
      { name: "AWS & DigitalOcean", role: "Scalable cloud hosting, VPCs & elastic compute" },
      { name: "Docker & Containers", role: "Reproducible containerized environments" },
      { name: "PostgreSQL & MongoDB", role: "Relational data integrity & flexible document stores" },
      { name: "Redis Caching", role: "Sub-millisecond latency & session caching" },
      { name: "CI/CD & Monitoring", role: "GitHub Actions, automated testing & uptime alerts" },
    ],
  },
];

export default function EnterpriseTechSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Engineering Backbone
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Enterprise-Grade Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We don't rely on cookie-cutter templates. We architect tailored solutions utilizing proven, battle-tested technologies that scale seamlessly as your business grows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105"
                    : "bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tech Stack Panel */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#090909] border border-white/10 relative overflow-hidden"
        >
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeCategory.label}
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              {activeCategory.desc}
            </p>
          </div>

          {/* Grid of Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                  {item.name}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-light">
                  {item.role}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
