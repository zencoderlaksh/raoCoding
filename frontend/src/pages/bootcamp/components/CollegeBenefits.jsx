import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

const benefits = [
  {
    icon: TrendingUp,
    title: "Elevated Placement Statistics",
    desc: "Directly improve your institution's placement metrics and salary packages by turning students into job-ready software engineers.",
    stat: "High Conversion",
  },
  {
    icon: ShieldCheck,
    title: "Zero IT Infrastructure Burden",
    desc: "We bring modern cloud environments, lab exercises, and repository setups. Your college requires zero expensive server setups.",
    stat: "Turnkey Setup",
  },
  {
    icon: Award,
    title: "Co-Branded Certifications",
    desc: "Students receive verified certificates endorsed by RAO Technologies, validating their completed projects and technical skills.",
    stat: "Recognized Proof",
  },
  {
    icon: Users,
    title: "Faculty Upskilling (FDP)",
    desc: "Optionally empower your Computer Science faculty with modern development paradigms, AI developer tools, and current industry trends.",
    stat: "Faculty Value",
  },
  {
    icon: Zap,
    title: "On-Campus Hackathons & Demo Days",
    desc: "We organize high-impact demo days and hackathons where students present their applications in front of visiting tech leaders.",
    stat: "Vibrant Culture",
  },
  {
    icon: Building2,
    title: "NAAC / NIRF Alignment",
    desc: "Fulfill critical industry-academia partnership criteria, experiential learning credits, and skill enhancement requirements.",
    stat: "Accreditation Fit",
  },
];

export default function CollegeBenefits() {
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#030303] px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[150px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,40,0.3) 0%, rgba(245,158,11,0.15) 50%, transparent 70%)",
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
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional // Partnership Value</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-[clamp(28px,4.5vw,60px)] font-light tracking-[-0.03em] text-white leading-tight px-1"
          >
            Why Leading Colleges & Universities{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic block sm:inline">
              Partner With RAO.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed px-2"
          >
            We collaborate with Principals, Training & Placement Officers (TPOs), and Deans to transform engineering education into measurable career outcomes.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-12 sm:mb-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE }}
                onMouseMove={onMouseMove}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-[28px] border border-zinc-900 bg-[#0a0a0a]/90 p-5 sm:p-7 md:p-9 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-zinc-700/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,90,40,0.08)] overflow-hidden"
              >
                {/* Spotlight hover effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.12), transparent 70%)",
                  }}
                />

                {/* Subtle watermark */}
                <span className="pointer-events-none absolute -bottom-5 -right-3 select-none font-serif text-[90px] sm:text-[100px] font-bold text-white/[0.015] transition-transform duration-700 group-hover:scale-110">
                  //
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:border-[#ff5a28]/40 group-hover:bg-[#ff5a28]/10 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-0.5 sm:py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 group-hover:border-zinc-700">
                        {b.stat}
                      </span>
                      <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>

                {/* Accent bottom bar */}
                <div className="relative z-10 mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-zinc-900/80 flex items-center justify-between">
                  <div className="h-[2px] w-6 bg-zinc-800 transition-all duration-500 group-hover:w-12 group-hover:bg-[#ff5a28]" />
                  <span className="font-mono text-[10px] sm:text-[11px] text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                    Institutional Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          onMouseMove={onMouseMove}
          className="group relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] border border-zinc-800/80 bg-gradient-to-br from-[#0c0c0c] via-black to-[#130905] shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden"
        >
          {/* Spotlight Effect */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-[32px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.12), transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-[10px] sm:text-xs text-[#ff5a28] uppercase tracking-[0.2em] block mb-2">
              // Custom Engagement
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[-0.03em] text-white mb-2 sm:mb-3">
              Ready to elevate your campus{" "}
              <em className="font-serif italic font-light text-zinc-400 not-italic">
                placement numbers?
              </em>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              We customize bootcamp duration, tech stacks, and schedules to align seamlessly with your academic calendar.
            </p>
          </div>

          <Link
            to="/meeting"
            className="relative z-10 flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ff5a28] to-orange-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(255,90,40,0.35)] hover:shadow-[0_0_40px_rgba(255,90,40,0.55)] hover:scale-105 transition-all duration-300"
          >
            <span>Schedule Institutional Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
