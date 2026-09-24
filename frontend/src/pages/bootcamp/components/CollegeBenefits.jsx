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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-orange-400" />
            <span>Institutional Partnership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight px-1"
          >
            Why Leading Colleges{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 block sm:inline">
              Partner With RAO.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed px-2"
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
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/10 bg-[#090909] p-5 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:bg-[#0c0c0c] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,90,40,0.12)] overflow-hidden"
              >
                {/* Spotlight hover effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.12), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold">
                        {b.stat}
                      </span>
                      <span className="font-black text-xs sm:text-sm text-white/30 group-hover:text-orange-400/80 transition-colors">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>

                {/* Accent bottom bar */}
                <div className="relative z-10 mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="h-[2px] w-8 bg-orange-500/40 transition-all duration-500 group-hover:w-16 group-hover:bg-orange-500" />
                  <span className="text-xs text-white/40 uppercase tracking-widest font-semibold group-hover:text-neutral-300 transition-colors">
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
          className="group relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#090909] hover:border-orange-500/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden"
        >
          {/* Spotlight Effect */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,90,40,0.12), transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs text-orange-400 uppercase tracking-widest font-semibold block mb-2">
              // Custom Engagement
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 sm:mb-3">
              Ready to elevate your campus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                placement numbers?
              </span>
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              We customize bootcamp duration, tech stacks, and schedules to align seamlessly with your academic calendar.
            </p>
          </div>

          <Link
            to="/meeting"
            className="relative z-10 flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(255,90,40,0.35)] hover:shadow-[0_0_40px_rgba(255,90,40,0.55)] hover:scale-105 transition-all duration-300"
          >
            <span>Schedule Institutional Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
