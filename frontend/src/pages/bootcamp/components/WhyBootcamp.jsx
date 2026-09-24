import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  GitBranch,
  Users2,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Zap,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const features = [
  {
    icon: Code2,
    title: "100% Practical & Hands-On",
    desc: "Instead of passive slide presentations, students write code from Day 1. Every theoretical concept is immediately reinforced with interactive coding labs.",
    tag: "Execution First",
  },
  {
    icon: Terminal,
    title: "Industry-Oriented Curriculum",
    desc: "Designed around modern engineering stacks (React 19, Node.js, Cloud, AI integration) rather than outdated college syllabus frameworks.",
    tag: "Modern Tech",
  },
  {
    icon: GitBranch,
    title: "Real Production Workflows",
    desc: "Students learn professional git branching, write meaningful commit messages, open pull requests, and receive actionable code reviews.",
    tag: "GitHub & CI/CD",
  },
  {
    icon: Users2,
    title: "Working Engineer Mentorship",
    desc: "Guidance delivered by experienced tech leads and senior software engineers who share real-world engineering architecture and best practices.",
    tag: "Senior Guidance",
  },
  {
    icon: Briefcase,
    title: "Placement-Ready Architecture",
    desc: "Direct alignment with technical hiring requirements: live machine coding rounds, DSA problem solving, system design fundamentals, and mock interviews.",
    tag: "Career Focused",
  },
  {
    icon: Zap,
    title: "Accelerated Learning Sprints",
    desc: "High-energy, focused cohort experience that compresses months of scattered learning into targeted, outcome-driven milestones.",
    tag: "High Velocity",
  },
];

export default function WhyBootcamp() {
  return (
    <section id="why-bootcamp" className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Bridging The Academic Gap
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Traditional Academic Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Is Not Enough.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            College curriculums excel at foundational concepts, but modern engineering teams hire for production readiness, code quality, and problem-solving velocity. We deliver the missing bridge.
          </p>
        </div>

        {/* Classroom vs Bootcamp Comparison Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-red-900/30 bg-[#0c0808]/80 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 text-red-400 font-bold text-lg sm:text-xl md:text-2xl">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>Traditional Academic Learning</span>
            </div>
            <ul className="space-y-3.5 sm:space-y-4 text-neutral-400 text-xs sm:text-sm md:text-base font-light">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 font-mono">✕</span>
                Theoretical exams with minimal production coding practice
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 font-mono">✕</span>
                Outdated syllabi lacking modern frameworks and cloud tools
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 font-mono">✕</span>
                Individual academic assignments without team Git collaboration
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 font-mono">✕</span>
                Zero exposure to technical interview formats and code reviews
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-orange-500/40 bg-[#0e0906]/80 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)]">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 text-orange-400 font-bold text-lg sm:text-xl md:text-2xl">
              <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
              <span>RAO College Bootcamp Methodology</span>
            </div>
            <ul className="space-y-3.5 sm:space-y-4 text-neutral-200 text-xs sm:text-sm md:text-base font-light">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-mono mt-0.5">✓</span>
                90%+ time spent building live, functional software applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-mono mt-0.5">✓</span>
                Modern engineering stacks: React 19, Node.js, MongoDB, Docker, AI
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-mono mt-0.5">✓</span>
                Agile sprints, Git pull requests, and senior engineer code reviews
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-mono mt-0.5">✓</span>
                Simulated technical rounds, DSA problems, and mock interviews
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards with Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-h-[auto] sm:min-h-[340px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.12), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-300">
                        {item.tag}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white/20 group-hover:text-orange-400/60 transition-colors">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
