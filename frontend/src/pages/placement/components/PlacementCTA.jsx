import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import Button from "../../../components/Button";

export default function PlacementCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      {/* Dynamic Ambient Glow */}
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
          <span>Launch Your Career</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
          Your Skills Can Open the Door.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Let’s Prepare You to Walk Through It.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-12">
          Join our intensive engineering programs, build high-impact production capstones, and get mentored directly by working software engineers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/courses">
            <Button text="Get Placement Ready" showIcon={true} />
          </Link>
          <Link
            to="/meeting"
            className="px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-orange-400" />
            <span>Book Free Career Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
