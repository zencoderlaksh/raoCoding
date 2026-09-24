import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Code2,
  CheckCircle,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const formats = [
  {
    id: "fast-track",
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
      "Mock technical interview & portfolio evaluation",
    ],
  },
  {
    id: "semester",
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
      "Continuous placement readiness mentorship",
    ],
  },
  {
    id: "workshop",
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
      "Prerequisite foundation for longer bootcamps",
    ],
  },
];

const lifecycleStages = [
  { step: "01", name: "Structured Training", desc: "Core concepts, architecture & clean code fundamentals" },
  { step: "02", name: "Hands-On Practice", desc: "Daily algorithmic drills and component building" },
  { step: "03", name: "Team Projects", desc: "Real-world full stack production applications" },
  { step: "04", name: "Assessment & PR Reviews", desc: "Line-by-line code evaluation and automated testing" },
  { step: "05", name: "1-on-1 Mentorship", desc: "Career guidance and personalized architecture feedback" },
  { step: "06", name: "Placement Preparation", desc: "Mock interviews, resume polish & hiring network exposure" },
];

export default function ProgramFormat() {
  const [selectedFormat, setSelectedFormat] = useState(formats[0].id);
  const active = formats.find((f) => f.id === selectedFormat);

  return (
    <section id="program-format" className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Flexible Delivery Models
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Tailored Formats To Fit Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Academic Calendar.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Every college has different academic schedules. We offer flexible, modular formats that seamlessly integrate into semester timelines.
          </p>
        </div>

        {/* 6-Stage Progression Flow Bar */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">
            Universal 6-Stage Delivery Pipeline
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {lifecycleStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0e0e0e] border border-neutral-800 text-center relative group hover:border-orange-500/40 shadow-[0_4px_15px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(249,115,22,0.15)] transition-all"
              >
                <span className="text-xs font-black text-orange-400 block mb-1">
                  {stage.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {stage.name}
                </h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Format Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {formats.map((f) => {
            const isSelected = f.id === selectedFormat;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFormat(f.id)}
                className={`p-6 sm:p-8 rounded-3xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#141414] border-2 border-orange-500 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(249,115,22,0.25)]"
                    : "bg-[#0b0b0b] border border-neutral-800 shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {f.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {f.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-4">
                    {f.subtitle}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-300">
                  <span>{f.hours}</span>
                  <span className={isSelected ? "text-orange-400" : "text-neutral-500"}>
                    {isSelected ? "Selected" : "View Details →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Format Detail Card */}
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#0c0c0c] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(249,115,22,0.08)]"
          >
            <div className="max-w-3xl mb-8">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {active.title} — Program Specifics
              </h4>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {active.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] hover:border-orange-500/20 transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200 text-sm font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
