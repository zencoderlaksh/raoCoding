import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
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
          className="group relative p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[32px] md:rounded-[36px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 overflow-hidden shadow-2xl"
        >
          {/* Spotlight Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(500px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.1), transparent 75%)",
            }}
          />

          {/* Watermark */}
          <span className="pointer-events-none absolute -bottom-8 -right-6 select-none font-serif text-[100px] sm:text-[120px] font-bold text-white/[0.015] transition-transform duration-700 group-hover:scale-110">
            //
          </span>

          <div className="relative z-10">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-4 sm:mb-6">
              ● INSTITUTIONAL PARTNERSHIP // CAMPUS TALENT
            </span>

            <h2 className="text-[clamp(28px,5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight mb-5 sm:mb-6 px-1">
              Let’s Build Industry-Ready{" "}
              <em className="font-serif italic font-light text-zinc-400 not-italic block mt-1">
                Tech Talent Together.
              </em>
            </h2>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8 sm:mb-10 px-2">
              Partner with RAO Technologies to bring modern, experiential software engineering bootcamps directly to your students. Let’s co-create the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button text="Partner With Us" showIcon={true} />
              </Link>
              <Link
                to="/meeting"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full border border-zinc-800 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm sm:text-base backdrop-blur-md hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <Building2 className="w-4 h-4 text-[#ff5a28]" />
                <span>Schedule Campus Demo</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
