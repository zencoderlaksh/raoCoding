import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import Button from "../../../components/Button";

export default function PlacementCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-900">
      {/* Dynamic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[140px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,40,0.6) 0%, rgba(234,179,8,0.2) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Enclosing Card with Mouse Spotlight Effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
          }}
          className="group relative p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[32px] md:rounded-[36px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 overflow-hidden shadow-2xl"
        >
          {/* Spotlight Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(400px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
            }}
          />

          <div className="relative z-10">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-4 sm:mb-6">
              ● RAO CAREERS // TAKE ACTION
            </span>

            <h2 className="text-[clamp(28px,5vw,72px)] font-light text-white tracking-[-0.03em] leading-tight mb-5 sm:mb-6 px-1">
              Your Skills Can Open The Door.{" "}
              <em className="font-serif italic font-light text-zinc-400 not-italic block mt-1">
                We Prepare You To Walk Through It.
              </em>
            </h2>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8 sm:mb-10 px-2">
              Join our intensive engineering programs, build high-impact production capstones, and get mentored directly by working software engineers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/courses" className="w-full sm:w-auto">
                <Button text="Get Placement Ready" showIcon={true} />
              </Link>
              <Link
                to="/meeting"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full border border-zinc-800 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm sm:text-base backdrop-blur-md hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <Compass className="w-4 h-4 text-[#ff5a28]" />
                <span>Book Free Career Consultation</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
