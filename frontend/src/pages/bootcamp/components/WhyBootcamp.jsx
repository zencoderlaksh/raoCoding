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
    <section id="why-bootcamp" className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Bridging The Gap
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Why Traditional Classroom Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Is Not Enough.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            College curriculums excel at foundational concepts, but modern engineering teams hire for production readiness, code quality, and problem-solving velocity. We deliver the missing bridge.
          </p>
        </div>

        {/* Classroom vs Bootcamp Comparison Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-950/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4 text-red-400 font-bold text-lg">
              <AlertCircle className="w-6 h-6" />
              <span>Traditional Academic Learning</span>
            </div>
            <ul className="space-y-3.5 text-neutral-400 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 mt-1 font-bold">✕</span>
                Theoretical exams with minimal production coding practice
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 mt-1 font-bold">✕</span>
                Outdated syllabi lacking modern frameworks and cloud tools
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 mt-1 font-bold">✕</span>
                Individual academic assignments without team Git collaboration
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 mt-1 font-bold">✕</span>
                Zero exposure to technical interview formats and code reviews
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-orange-500/30 bg-orange-950/10 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="flex items-center gap-3 mb-4 text-orange-400 font-bold text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>RAO College Bootcamp Methodology</span>
            </div>
            <ul className="space-y-3.5 text-neutral-300 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                90%+ time spent building live, functional software applications
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                Modern engineering stacks: React 19, Node.js, MongoDB, Docker, AI
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                Agile sprints, Git pull requests, and senior engineer code reviews
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                Simulated technical rounds, DSA problems, and mock interviews
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(249, 115, 22, 0.18)"
                className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.18)] hover:border-orange-500/40 transition-all duration-300 p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
