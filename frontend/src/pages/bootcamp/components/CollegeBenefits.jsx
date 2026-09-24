import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../../../components/SpotlightCard";

const benefits = [
  {
    icon: TrendingUp,
    title: "Elevated Placement Statistics",
    desc: "Directly improve your institution's placement metrics and salary packages by turning students into job-ready software engineers.",
    stat: "High Conversion",
  },
  {
    icon: ShieldCheck,
    title: "Zero IT Infrastructure Burden",
    desc: "We bring modern cloud environments, lab exercises, and repository setups. Your college requires zero expensive server setups.",
    stat: "Turnkey Setup",
  },
  {
    icon: Award,
    title: "Co-Branded Certifications",
    desc: "Students receive verified certificates endorsed by RAO Technologies, validating their completed projects and technical skills.",
    stat: "Recognized Proof",
  },
  {
    icon: Users,
    title: "Faculty Upskilling (FDP)",
    desc: "Optionally empower your Computer Science faculty with modern development paradigms, AI developer tools, and current industry trends.",
    stat: "Faculty Value",
  },
  {
    icon: Zap,
    title: "On-Campus Hackathons & Demo Days",
    desc: "We organize high-impact demo days and hackathons where students present their applications in front of visiting tech leaders.",
    stat: "Vibrant Culture",
  },
  {
    icon: Building2,
    title: "NAAC / NIRF Alignment",
    desc: "Fulfill critical industry-academia partnership criteria, experiential learning credits, and skill enhancement requirements.",
    stat: "Accreditation Fit",
  },
];

export default function CollegeBenefits() {
  return (
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(249,115,22,0.3) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Partnership Value</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Why Leading Colleges & Universities{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300">
              Partner With RAO.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            We collaborate with Principals, Training & Placement Officers (TPOs), and Deans to transform engineering education into measurable career outcomes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(245, 158, 11, 0.2)"
                className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] hover:border-amber-500/40 transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {b.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {b.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Institutional Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-black to-orange-950/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.1)] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Ready to elevate your campus placement numbers?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
              We customize bootcamp duration, tech stacks, and schedules to align seamlessly with your academic calendar.
            </p>
          </div>
          <Link
            to="/meeting"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all"
          >
            <span>Schedule Institutional Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
