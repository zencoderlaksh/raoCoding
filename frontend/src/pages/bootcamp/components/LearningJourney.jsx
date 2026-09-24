import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  BookOpen,
  Code,
  Rocket,
  Users2,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Learn Fundamentals",
    title: "Deep Conceptual Clarity",
    icon: BookOpen,
    desc: "Master foundational principles without shortcuts—how JavaScript executes, React rendering lifecycles, REST protocols, and database schema architectures.",
    deliverables: [
      "JavaScript execution & memory model",
      "Modern React 19 architecture",
      "Clean code & semantic conventions",
    ],
  },
  {
    step: "02",
    phase: "Hands-on Practice",
    title: "Daily Coding Labs & Drills",
    icon: Code,
    desc: "Every day includes practical algorithmic challenges, interactive UI components, and API building tasks designed to build muscle memory.",
    deliverables: [
      "Daily coding sprints on GitHub",
      "API integration exercises",
      "Bug fixing & debugging drills",
    ],
  },
  {
    step: "03",
    phase: "Build Real Projects",
    title: "Production-Grade Capstones",
    icon: Rocket,
    desc: "Students work in collaborative teams to architect and launch complete full-stack web applications with authentication, databases, and third-party APIs.",
    deliverables: [
      "Multi-tenant SaaS dashboard",
      "High-scale payment gateway flow",
      "Live deployment on cloud infrastructure",
    ],
  },
  {
    step: "04",
    phase: "Get Mentored",
    title: "Senior Code Reviews & Feedback",
    icon: Users2,
    desc: "Industry software engineers review students' pull requests, refactor substandard logic, enforce security patterns, and provide 1-on-1 guidance.",
    deliverables: [
      "Line-by-line GitHub PR audits",
      "Performance optimization tips",
      "Weekly architecture reviews",
    ],
  },
  {
    step: "05",
    phase: "Industry Ready",
    title: "Portfolio Polish & Placement",
    icon: Award,
    desc: "We transform students into confident candidates with ATS-optimized resumes, compelling GitHub portfolios, and mock interview practice.",
    deliverables: [
      "Live interactive portfolio site",
      "Technical interview confidence",
      "Industry credential & verification",
    ],
  },
];

export default function LearningJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ PROGRESSION // 5 PHASES
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            The Student Learning Journey:{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              From Beginner to Builder.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            A battle-tested 5-stage evolutionary framework ensuring students don’t just watch tutorials, but actively master the craft of software engineering.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Base background line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-zinc-800 -translate-x-1/2" />

          {/* Animated active filling line linked to scroll */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-[#ff5a28] -translate-x-1/2 shadow-[0_0_15px_rgba(255,90,40,0.8)] z-0"
          />

          <div className="space-y-10 sm:space-y-12 lg:space-y-20 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.15 }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-zinc-800 items-center justify-center text-[#ff5a28] font-mono text-sm z-20 shadow-[0_0_20px_rgba(255,90,40,0.3)] cursor-pointer"
                  >
                    {item.step}
                  </motion.div>

                  {/* Content Card with Spotlight */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8 }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                      }}
                      className="group relative p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-[28px] md:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 overflow-hidden shadow-2xl"
                    >
                      {/* 1. Cursor Spotlight Glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                          background:
                            "radial-gradient(320px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                        }}
                      />

                      {/* 2. Oversized Background Watermark */}
                      <div className="absolute -bottom-8 -right-3 font-serif text-[120px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.035] select-none transition-all duration-700">
                        //
                      </div>

                      <div className="relative z-10">
                        <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-6" />

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="font-mono text-xs text-[#ff5a28]/80 uppercase tracking-widest block">
                                Phase {item.step}
                              </span>
                              <h4 className="text-xl sm:text-2xl font-serif font-light text-white tracking-tight group-hover:text-[#ff5a28] transition-colors">
                                {item.phase}
                              </h4>
                            </div>
                          </div>
                          <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                            // 0{idx + 1}
                          </span>
                        </div>

                        <h5 className="text-lg font-serif font-light text-zinc-200 mb-2">
                          {item.title}
                        </h5>
                        <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                          {item.desc}
                        </p>

                        <div className="border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-500 pt-4 space-y-2.5">
                          {item.deliverables.map((deliv, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-400 font-light"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a28] flex-shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
