import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import Button from "../../../components/Button";

export default function BootcampCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[140px] opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.6) 0%, rgba(234,179,8,0.3) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Institutional Partnership</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
          Let’s Build Industry-Ready{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Tech Talent Together.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-12">
          Partner with RAO Technologies to bring modern, experiential software engineering bootcamps directly to your students. Let’s co-create the next generation of engineers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button text="Partner With Us" showIcon={true} />
          </Link>
          <Link
            to="/meeting"
            className="px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Building2 className="w-4 h-4 text-orange-400" />
            <span>Schedule Campus Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
