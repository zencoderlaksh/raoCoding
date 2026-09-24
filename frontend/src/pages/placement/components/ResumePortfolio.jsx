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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Professional Presentation
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Crafting Your Undeniable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Developer Profile.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Before an interviewer speaks with you, they judge your resume, GitHub profile, and portfolio. We make sure your first impression puts you in the top 5% of applicants.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(249, 115, 22, 0.2)"
                className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.18)] hover:border-orange-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
