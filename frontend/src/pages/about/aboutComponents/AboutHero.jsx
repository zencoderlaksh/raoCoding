import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
  Layers,
  Building2,
} from "lucide-react";

/* Interactive Counter Component */
function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Business Solutions Delivered", icon: Briefcase },
  { value: 30, suffix: "+", label: "Colleges & Campus Workshops", icon: GraduationCap },
  { value: 10, suffix: "k+", label: "Engineers & Students Upskilled", icon: Code2 },
  { value: 99, suffix: "%", label: "Client Satisfaction Rate", icon: Cpu },
];

const focusAreas = [
  "Bespoke Enterprise Software",
  "Applied AI & Automation",
  "College Bootcamps & Hackathons",
  "Corporate Tech Upskilling",
  "Cloud & Scalable Architecture",
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black px-4 pt-28 pb-20">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.5) 0%, rgba(234,179,8,0.2) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(82,39,255,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>About RAO Technologies</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] mb-8"
        >
          Engineering Modern Solutions.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Powering Campuses & Enterprises.
          </span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-10"
        >
          We partner with forward-thinking clients and businesses to solve complex operational challenges through full-stack software and applied AI. Concurrently, we conduct experiential college workshops and corporate training programs designed to scale technical capability.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {focusAreas.map((area, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-white/[0.04] border border-white/10 text-neutral-300 backdrop-blur-sm"
            >
              {area}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Link
            to="/client"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span>Explore Client Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/meeting"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <Building2 className="w-4 h-4 text-orange-400" />
            <span>Book Campus / Corporate Session</span>
          </Link>
        </motion.div>

        {/* Live Impact Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10"
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300 text-center"
              >
                <div className="mx-auto w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-medium">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
