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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            ATS & Proof of Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Crafting Your Undeniable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Developer Profile.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Before an interviewer speaks with you, they judge your resume, GitHub profile, and portfolio. We make sure your first impression puts you in the top 5% of applicants.
          </p>
        </div>

        {/* Pillars Grid with Spotlight Animation */}
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
                className="group relative p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-h-[auto] sm:min-h-[380px]"
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
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-300">
                        {item.badge}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white/20 group-hover:text-orange-400/60 transition-colors">
                        // 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/5 space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
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
