import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users2,
  Building2,
  Handshake,
  ShieldAlert,
  ShieldCheck,
  Compass,
  ArrowRight,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const supportPillars = [
  {
    icon: Building2,
    title: "Curated Job Opportunity Support",
    desc: "We curate relevant job openings and startup requirements aligned with your exact technical skillset, saving you endless hours of generic job board filtering.",
  },
  {
    icon: Handshake,
    title: "Direct Referral Network",
    desc: "Connect directly with our network of founders, engineering managers, and alumni who look to RAO Technologies for verified, reliable junior and mid-level talent.",
  },
  {
    icon: Compass,
    title: "1-on-1 Career Strategy Calls",
    desc: "Personalized sessions to strategize your company application pipeline, handle counter-offers, and select career paths matching your long-term ambitions.",
  },
  {
    icon: Users2,
    title: "Lifelong Alumni Community",
    desc: "Graduate into an active engineering community where working software engineers share internal openings, technical advice, and project collaboration.",
  },
];

export default function PlacementSupport() {
  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ ETHICS // TRANSPARENT SUPPORT
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            How Our Placement{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Assistance Works.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            We don’t sell false shortcuts or make deceptive "100% guarantee" promises. We give you the technical competence, preparation, and network access you need to earn your job offer.
          </p>
        </div>

        {/* Transparent Commitment Box */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-md mb-12 sm:mb-16 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#ff5a28]/10 transition-transform">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ff5a28] block mb-1">
                Transparency Pillar
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light text-white mb-2 tracking-tight">
                Our Ethical Placement Promise
              </h3>
              <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed">
                Hiring decisions rest with engineering interviewers who evaluate candidate capability. Our commitment is to ensure you are indisputably technically prepared, presentable, and actively introduced to hiring opportunities across our network.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Support Pillars Grid with Client-Page Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {supportPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[28px] md:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[auto] sm:min-h-[320px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(340px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                  }}
                />

                {/* 2. Oversized Background Watermark */}
                <div className="absolute -bottom-8 -right-3 font-serif text-[100px] sm:text-[120px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.035] select-none transition-all duration-700">
                  //
                </div>

                <div className="relative z-10">
                  {/* Dynamic Color Accent Bar */}
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-6 sm:mb-8" />

                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[#ff5a28]/70">
                      // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-light tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
