import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck2,
  Globe,
  GitBranch,
  Share2,
  FileCode2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const pillars = [
  {
    icon: FileCheck2,
    title: "ATS-Optimized Tech Resumes",
    badge: "Recruiter Magnet",
    desc: "Single-page, high-impact resumes tailored specifically for tech recruiters and Applicant Tracking Systems.",
    points: [
      "Targeted software keywords matching job descriptions",
      "Quantified bullet points (e.g. 'Improved load time by 38%')",
      "Eliminating design clutter that breaks ATS parsers",
    ],
  },
  {
    icon: Globe,
    title: "Interactive Live Portfolios",
    badge: "Proof of Work",
    desc: "A custom-built personal developer website that showcases your projects, engineering skills, and contact details with smooth UX.",
    points: [
      "Custom domain & high-performance lighthouse score",
      "Live project iframe embeds and demo links",
      "Responsive, sleek dark mode matching modern design trends",
    ],
  },
  {
    icon: GitBranch,
    title: "GitHub Profile Optimization",
    badge: "Clean Commits",
    desc: "Transform your GitHub into undeniable evidence of your engineering ability and consistent work ethic.",
    points: [
      "Structured README files with architecture diagrams",
      "Active commit streaks and meaningful PR descriptions",
      "Curated pinned repositories with live deployments",
    ],
  },
  {
    icon: Share2,
    title: "LinkedIn & Personal Branding",
    badge: "Inbound Leads",
    desc: "Optimize your headline, summary, and featured section so tech recruiters find you when searching for developers.",
    points: [
      "Search-optimized headline for software roles",
      "Project demo video posts highlighting technical learnings",
      "Engagement strategies to connect with founders & tech leads",
    ],
  },
];

export default function ResumePortfolio() {
  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ PRESENTATION // ATS & PROOF-OF-WORK
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            Crafting Your Undeniable{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Developer Profile.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Before an interviewer speaks with you, they judge your resume, GitHub profile, and portfolio. We make sure your first impression puts you in the top 5% of applicants.
          </p>
        </div>

        {/* Pillars Grid with Client-Page Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[28px] md:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[auto] sm:min-h-[380px]"
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
                <div className="absolute -bottom-8 -right-3 font-serif text-[100px] sm:text-[130px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.035] select-none transition-all duration-700">
                  //
                </div>

                <div className="relative z-10">
                  {/* Dynamic Color Accent Bar */}
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-6 sm:mb-8" />

                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[10px] sm:text-xs text-zinc-400 border border-zinc-800 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 bg-black/40">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs tracking-widest text-[#ff5a28]/70">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-500 space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5a28] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
