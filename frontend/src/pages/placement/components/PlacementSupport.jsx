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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Transparent & Realistic
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            How Our Placement{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Assistance Works.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            We don’t sell false shortcuts or make deceptive "100% guarantee" promises. We give you the technical competence, preparation, and network access you need to earn your job offer.
          </p>
        </div>

        {/* Transparent Commitment Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Our Ethical Placement Promise
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Hiring decisions rest with engineering interviewers who evaluate candidate capability. Our commitment is to ensure you are indisputably technically prepared, presentable, and actively introduced to hiring opportunities across our network.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Support Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(249, 115, 22, 0.18)"
                className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.18)] hover:border-orange-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
