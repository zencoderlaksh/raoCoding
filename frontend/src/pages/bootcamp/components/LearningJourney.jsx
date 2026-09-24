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
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Structured Progression
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Student Learning Journey:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              From Beginner to Builder.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            A battle-tested 5-stage evolutionary framework ensuring students don’t just watch tutorials, but actively master the craft of software engineering.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Base background line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 bg-white/10 -translate-x-1/2 rounded-full" />

          {/* Animated active filling line linked to scroll */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-600 -translate-x-1/2 shadow-[0_0_15px_rgba(249,115,22,0.8)] rounded-full z-0"
          />

          <div className="space-y-12 lg:space-y-20 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-black border-2 border-orange-500 items-center justify-center text-orange-400 font-black text-lg z-20 shadow-[0_0_25px_rgba(249,115,22,0.6)] cursor-pointer"
                  >
                    {item.step}
                  </motion.div>

                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-[#0e0e0e] hover:border-orange-500/40 transition-all duration-300 group shadow-[0_10px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.18)]"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold block">
                              Phase {item.step}
                            </span>
                            <h4 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-400 transition-colors">
                              {item.phase}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <h5 className="text-lg font-bold text-neutral-200 mb-3">
                        {item.title}
                      </h5>
                      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      <div className="border-t border-white/5 pt-4 space-y-2.5">
                        {item.deliverables.map((deliv, dIdx) => (
                          <motion.div
                            key={dIdx}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium cursor-default"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                            <span>{deliv}</span>
                          </motion.div>
                        ))}
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
