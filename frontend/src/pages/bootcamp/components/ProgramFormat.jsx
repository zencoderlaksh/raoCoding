import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Code2,
  CheckCircle,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

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
  { step: "04", name: "Assessment & PRs", desc: "Line-by-line code evaluation and automated testing" },
  { step: "05", name: "1-on-1 Mentorship", desc: "Career guidance and personalized architecture feedback" },
  { step: "06", name: "Placement Prep", desc: "Mock interviews, resume polish & hiring network exposure" },
];

export default function ProgramFormat() {
  const [selectedFormat, setSelectedFormat] = useState(formats[0].id);
  const active = formats.find((f) => f.id === selectedFormat);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="program-format" className="relative py-28 sm:py-36 bg-[#030303] px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,40,0.4) 0%, rgba(245,158,11,0.2) 60%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff5a28]/25 bg-[#ff5a28]/10 text-[#ff5a28] font-mono text-xs uppercase tracking-[0.2em] mb-6"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Delivery Models // Flexibility</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-[clamp(28px,4.5vw,60px)] font-light tracking-[-0.03em] text-white leading-tight px-1"
          >
            Tailored Formats To Fit Your{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic block sm:inline">
              Academic Calendar.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed px-2"
          >
            Every college has different academic schedules. We offer flexible, modular formats that seamlessly integrate into semester timelines.
          </motion.p>
        </div>

        {/* 6-Stage Progression Flow Bar */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 sm:mb-8 pb-3 border-b border-zinc-900">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500">
              Universal 6-Stage Delivery Pipeline
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-[#ff5a28]">
              // End-To-End Execution
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {lifecycleStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: EASE }}
                onMouseMove={onMouseMove}
                className="group relative p-3.5 sm:p-5 rounded-xl sm:rounded-[22px] bg-[#0a0a0a]/90 border border-zinc-900 text-center hover:border-zinc-700/60 shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,90,40,0.06)] transition-all duration-300 overflow-hidden"
              >
                {/* Spotlight effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.15), transparent 70%)",
                  }}
                />

                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#ff5a28] block mb-1.5 sm:mb-2 tracking-widest">
                  // {stage.step}
                </span>
                <h4 className="text-xs sm:text-sm font-medium text-white mb-1 tracking-tight group-hover:text-[#ff5a28] transition-colors leading-snug">
                  {stage.name}
                </h4>
                <p className="text-zinc-500 text-[11px] sm:text-xs leading-relaxed font-light">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Format Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {formats.map((f, idx) => {
            const isSelected = f.id === selectedFormat;
            return (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                onClick={() => setSelectedFormat(f.id)}
                onMouseMove={onMouseMove}
                className={`group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] text-left transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? "bg-[#111] border-2 border-[#ff5a28] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(255,90,40,0.2)]"
                    : "bg-[#0a0a0a]/90 border border-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-zinc-700/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                }`}
              >
                {/* Spotlight effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(350px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.12), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#ff5a28]/10 text-[#ff5a28] border border-[#ff5a28]/25">
                      {f.badge}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-zinc-400">
                      {f.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-white mb-1 sm:mb-1.5">
                    {f.title}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-zinc-400 mb-5 sm:mb-6 font-light">
                    {f.subtitle}
                  </p>
                </div>

                <div className="relative z-10 pt-4 sm:pt-5 border-t border-zinc-900/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] sm:text-xs text-zinc-400">{f.hours}</span>
                  <span
                    className={`font-mono text-[11px] sm:text-xs transition-colors ${
                      isSelected ? "text-[#ff5a28]" : "text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {isSelected ? "Active Track ●" : "Inspect →"}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Format Detail Card */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              onMouseMove={onMouseMove}
              className="group relative p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/95 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(255,90,40,0.06)] backdrop-blur-xl overflow-hidden"
            >
              {/* Dynamic Cursor Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.1), transparent 70%)",
                }}
              />

              <div className="relative z-10 max-w-3xl mb-10">
                <span className="font-mono text-xs text-[#ff5a28] uppercase tracking-[0.2em] block mb-2">
                  // Program Syllabus & Deliverables
                </span>
                <h4 className="text-2xl sm:text-3xl font-light tracking-[-0.03em] text-white mb-3">
                  {active.title}{" "}
                  <em className="font-serif italic font-light text-zinc-400 not-italic">
                    — In-Depth Architecture
                  </em>
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  {active.description}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {active.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-zinc-700 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#ff5a28] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm font-light leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
