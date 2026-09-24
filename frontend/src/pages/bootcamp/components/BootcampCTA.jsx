import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Sparkles } from "lucide-react";
import Button from "../../../components/Button";

const EASE = [0.22, 1, 0.36, 1];

export default function BootcampCTA() {
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#030303] px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-900/60">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[140px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,40,0.6) 0%, rgba(245,158,11,0.2) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Enclosing Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          onMouseMove={onMouseMove}
          className="group relative p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 overflow-hidden shadow-2xl"
        >
          {/* Spotlight Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(500px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.12), transparent 75%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Campus Talent Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5 sm:mb-6 px-1">
              Let’s Build Industry-Ready{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 block mt-1">
                Tech Talent Together.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 sm:mb-10 px-2">
              Partner with RAO Technologies to bring modern, experiential software engineering bootcamps directly to your students. Let’s co-create the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button text="Partner With Us" showIcon={true} />
              </Link>
              <Link
                to="/meeting"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <Building2 className="w-4 h-4 text-orange-400" />
                <span>Schedule Campus Demo</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
