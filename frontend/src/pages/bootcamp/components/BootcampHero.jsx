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
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span>Institutional Tech Acceleration</span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
          Transforming College Students Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Industry-Ready Engineers.
          </span>
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-8"
        >
          We bridge the gap between academic theory and real-world tech demands. Through hands-on college bootcamps, live project building, code reviews, and industry mentorship, we prepare your students to step directly into high-growth software roles.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pointer-events-auto flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="/contact">
            <Button text="Partner With Us" showIcon={true} />
          </Link>
          <button
            onClick={scrollToExplore}
            className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/40 text-white font-medium backdrop-blur-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Program</span>
            <ChevronDown className="w-4 h-4 text-orange-400 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Impact Counters Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pointer-events-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10 mb-12"
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-orange-500/40 hover:bg-black/80 backdrop-blur-md transition-all duration-300 text-center shadow-lg hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
              >
                <div className="mx-auto w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-medium group-hover:text-neutral-200 transition-colors">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Partner Marquee Banner */}
        <div className="pointer-events-auto w-full pt-4">
          <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
            Trusted by Departments & Faculty Across Campuses
          </div>
          <Marquee pauseOnHover className="[--duration:28s] py-1">
            {campusPartners.map((campus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-neutral-300 text-xs font-medium mx-2 backdrop-blur-md hover:border-orange-500/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>{campus}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
