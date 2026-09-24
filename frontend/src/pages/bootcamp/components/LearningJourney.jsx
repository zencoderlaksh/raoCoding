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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Student Learning Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Student Learning Journey:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              From Beginner to Builder.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            A battle-tested 5-stage evolutionary framework ensuring students don’t just watch tutorials, but actively master the craft of software engineering.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Base background line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-white/10 -translate-x-1/2" />

          {/* Animated active filling line linked to scroll */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-orange-500 -translate-x-1/2 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-0"
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
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-white/20 items-center justify-center text-orange-400 font-mono text-sm font-bold z-20 shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer"
                  >
                    {item.step}
                  </motion.div>

                  {/* Content Card with Spotlight */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8 }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                      }}
                      className="group relative p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                      {/* 1. Cursor Spotlight Glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                          background:
                            "radial-gradient(320px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.12), transparent 80%)",
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-0.5">
                                Phase {item.step}
                              </span>
                              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                                {item.phase}
                              </h4>
                            </div>
                          </div>
                          <span className="text-xl sm:text-2xl font-black text-white/20 group-hover:text-orange-400/60 transition-colors">
                            // 0{idx + 1}
                          </span>
                        </div>

                        <h5 className="text-base sm:text-lg font-bold text-neutral-200 mb-2">
                          {item.title}
                        </h5>
                        <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                          {item.desc}
                        </p>

                        <div className="border-t border-white/5 pt-4 space-y-2.5">
                          {item.deliverables.map((deliv, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light"
                            >
                              <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
