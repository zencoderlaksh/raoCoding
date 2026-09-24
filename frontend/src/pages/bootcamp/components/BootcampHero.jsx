import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
  Code2,
  Award,
  ChevronDown,
} from "lucide-react";
import Button from "../../../components/Button";
import Marquee from "../../../components/ui/marquee";

/* Smooth Animated Counter */
function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2.2,
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
  { value: 30, suffix: "+", label: "Partner Institutions", icon: GraduationCap },
  { value: 10, suffix: "k+", label: "Engineers Upskilled", icon: Users },
  { value: 450, suffix: "+", label: "Production Projects Built", icon: Code2 },
  { value: 94, suffix: "%", label: "Practical Coding Ratio", icon: Award },
];

const campusPartners = [
  "IIT Delhi Campus Workshop",
  "BITS Pilani Tech Fest",
  "NIT Trichy Hackathon",
  "VIT Vellore CSE Department",
  "SRM Institute of Science",
  "Manipal Institute of Tech",
  "DTU Engineering Sprint",
  "IIIT Hyderabad Outreach",
  "Thapar University Bootcamp",
];

export default function BootcampHero() {
  const scrollToExplore = () => {
    const el = document.getElementById("why-bootcamp");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-start overflow-hidden bg-black px-4 pt-8 sm:pt-12 pb-16">
      {/* Sleek Dark Ambient Background with Subtle Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(234,179,8,0.18) 45%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Eyebrow Pill - Client Page Technical Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#ff5a28] border border-zinc-800 rounded-full px-3.5 sm:px-4 py-1.5 bg-black/60 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,90,40,0.12)] max-w-full"
        >
          <span className="text-[#ff5a28] text-xs sm:text-sm">●</span>
          <span className="truncate">College Bootcamp // Institutional Acceleration</span>
        </motion.div>

        {/* Main Headline - Editorial Sans & Serif Contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[clamp(30px,5vw,78px)] font-light text-white tracking-[-0.03em] leading-[1.1] mb-6 px-1"
        >
          Transforming College Students Into{" "}
          <em className="font-serif italic font-light text-zinc-400 not-italic block sm:inline">
            Industry-Ready Engineers.
          </em>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-10 px-2"
        >
          We bridge the gap between academic theory and real-world tech demands. Through hands-on college bootcamps, live project building, code reviews, and industry mentorship, we prepare your students to step directly into high-growth software roles.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 w-full sm:w-auto px-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button text="Partner With Us" showIcon={true} />
          </Link>
          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-zinc-800 bg-white/[0.03] hover:bg-white/[0.08] hover:border-zinc-700 text-white font-medium backdrop-blur-lg transition-all flex items-center justify-center gap-2 cursor-pointer group text-sm"
          >
            <span>Explore Program</span>
            <ChevronDown className="w-4 h-4 text-[#ff5a28] group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Impact Counters Grid with Cursor Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-10 border-t border-zinc-900 mb-12"
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-4 sm:p-6 rounded-2xl sm:rounded-[24px] bg-[#0c0c0c]/80 border border-zinc-900 hover:border-zinc-800 backdrop-blur-md transition-colors duration-500 text-left overflow-hidden shadow-xl"
              >
                {/* Spotlight cursor glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(220px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.1), transparent 80%)",
                  }}
                />

                {/* Subtle corner watermark glyph */}
                <div className="absolute -bottom-4 -right-2 font-serif text-[60px] sm:text-[70px] font-bold text-white/[0.02] pointer-events-none group-hover:text-[#ff5a28]/[0.05] select-none transition-all duration-700">
                  //
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-zinc-600 group-hover:text-[#ff5a28]/70 transition-colors">
                      // 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif tracking-tight text-white mb-1 sm:mb-1.5">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-xs md:text-sm text-zinc-400 font-light group-hover:text-zinc-300 transition-colors leading-snug">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Partner Marquee Banner */}
        <div className="pointer-events-auto w-full pt-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Trusted by Departments & Faculty Across Campuses
          </div>
          <Marquee pauseOnHover className="[--duration:28s] py-1">
            {campusPartners.map((campus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0a] border border-zinc-900 text-zinc-300 text-xs font-light mx-2 backdrop-blur-md hover:border-zinc-800 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a28]" />
                <span>{campus}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
