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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Transparent Support
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            How Our Placement{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Assistance Works.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            We don’t sell false shortcuts or make deceptive "100% guarantee" promises. We give you the technical competence, preparation, and network access you need to earn your job offer.
          </p>
        </div>

        {/* Transparent Commitment Box */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-md mb-12 sm:mb-16 relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold block mb-1">
                Transparency Pillar
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Our Ethical Placement Promise
              </h3>
              <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                Hiring decisions rest with engineering interviewers who evaluate candidate capability. Our commitment is to ensure you are indisputably technically prepared, presentable, and actively introduced to hiring opportunities across our network.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Support Pillars Grid with Spotlight Animation */}
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
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-h-[auto] sm:min-h-[320px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(340px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.12), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-white/20 group-hover:text-orange-400/60 transition-colors">
                      // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
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
