import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let's Build & Scale Together</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Ready to Solve Your Business Challenge or Power Your Campus?
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-10">
          Whether you need a custom-engineered software platform, an applied AI solution for your enterprise, or an experiential technical workshop for your students and engineering team, our team is ready to deliver.
        </p>

        {/* Benefits list */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-300 font-medium mb-12">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            <span>Direct Engineering Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            <span>Customized Curriculum & Sprints</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            <span>Transparent Timelines & Milestone Delivery</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/client"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span>Partner for Client Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/meeting"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <Building2 className="w-4 h-4 text-orange-400" />
            <span>Book Campus Workshop / Training</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
