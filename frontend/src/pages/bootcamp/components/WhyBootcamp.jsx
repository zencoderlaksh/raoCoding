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
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ METHODOLOGY // BRIDGING THE GAP
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            Why Traditional Academic Learning{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Is Not Enough.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            College curriculums excel at foundational concepts, but modern engineering teams hire for production readiness, code quality, and problem-solving velocity. We deliver the missing bridge.
          </p>
        </div>

        {/* Classroom vs Bootcamp Comparison Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] border border-red-900/30 bg-[#0c0808]/80 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 text-red-400 font-serif text-lg sm:text-xl md:text-2xl font-light">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>Traditional Academic Learning</span>
            </div>
            <ul className="space-y-3.5 sm:space-y-4 text-zinc-400 text-xs sm:text-sm md:text-base font-light">
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

          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] border border-[#ff5a28]/40 bg-[#0e0906]/80 backdrop-blur-md shadow-[0_0_30px_rgba(255,90,40,0.1)]">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 text-[#ff5a28] font-serif text-lg sm:text-xl md:text-2xl font-light">
              <CheckCircle className="w-5 h-5 text-[#ff5a28] shrink-0" />
              <span>RAO College Bootcamp Methodology</span>
            </div>
            <ul className="space-y-3.5 sm:space-y-4 text-zinc-300 text-xs sm:text-sm md:text-base font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#ff5a28] font-mono mt-0.5">✓</span>
                90%+ time spent building live, functional software applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff5a28] font-mono mt-0.5">✓</span>
                Modern engineering stacks: React 19, Node.js, MongoDB, Docker, AI
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff5a28] font-mono mt-0.5">✓</span>
                Agile sprints, Git pull requests, and senior engineer code reviews
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff5a28] font-mono mt-0.5">✓</span>
                Simulated technical rounds, DSA problems, and mock interviews
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards with Client-Page Spotlight Animation */}
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
                  duration: 0.8,
                  delay: (idx % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] md:rounded-[30px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[auto] sm:min-h-[340px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                  }}
                />

                {/* 2. Oversized Background Watermark */}
                <div className="absolute -bottom-8 -right-3 font-serif text-[90px] sm:text-[110px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.035] select-none transition-all duration-700">
                  //
                </div>

                <div className="relative z-10">
                  {/* Dynamic Color Accent Bar */}
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-5 sm:mb-6" />

                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 border border-zinc-800 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 bg-black/40">
                        {item.tag}
                      </span>
                      <span className="font-mono text-xs tracking-widest text-[#ff5a28]/70">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
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
