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
        {/* Eyebrow Pill - About Page Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>College Bootcamps & Institutional Upskilling</span>
        </motion.div>

        {/* Main Headline - About Page Style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] mb-8 px-1"
        >
          Transforming College Students Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 block sm:inline">
            Industry-Ready Engineers.
          </span>
        </motion.h1>

        {/* Supporting Copy - About Page Style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-10 px-2"
        >
          We bridge the gap between academic theory and real-world tech demands. Through hands-on college bootcamps, live project building, code reviews, and industry mentorship, we prepare your students to step directly into high-growth software roles.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 w-full sm:w-auto px-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button text="Partner With Us" showIcon={true} />
          </Link>
          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-orange-500/40 text-white font-medium backdrop-blur-lg transition-all flex items-center justify-center gap-2 cursor-pointer group text-sm sm:text-base"
          >
            <span>Explore Program</span>
            <ChevronDown className="w-4 h-4 text-orange-400 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Impact Counters Grid with Cursor Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pointer-events-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-10 border-t border-white/10 mb-12"
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
                className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#090909] border border-white/10 hover:border-orange-500/40 hover:bg-[#0c0c0c] backdrop-blur-md transition-all duration-300 text-left overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Spotlight cursor glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(220px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.15), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-orange-400/80 transition-colors">
                      // 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 sm:mb-1.5">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400 font-light group-hover:text-neutral-200 transition-colors leading-snug">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Partner Marquee Banner */}
        <div className="pointer-events-auto w-full pt-4">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-3">
            Trusted by Departments & Faculty Across Campuses
          </div>
          <Marquee pauseOnHover className="[--duration:28s] py-1">
            {campusPartners.map((campus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs sm:text-sm font-medium mx-2 backdrop-blur-md hover:border-orange-500/40 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>{campus}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
