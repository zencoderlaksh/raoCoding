import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Headings from "./Headings";
import Button from "../../../components/Button";
import SpotlightCard from "../../../components/SpotlightCard";

import realProjectImg from "../../../assets/real_project_img.png";
import expertMentorImg from "../../../assets/expert_mentor.png";

export default function CampusAndCareerSection() {
  return (
    <section className="w-full px-4 py-16 sm:py-20 lg:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(234,179,8,0.2) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Headings
          title="CAMPUS & CAREER ECOSYSTEM"
          desc="Empower Your Campus."
          descrip="Accelerate Your Tech Career."
          supportingText="Whether you are an educational institution looking to transform students into engineers, or an ambitious learner preparing for technical placements, explore our dedicated programs."
        />

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-16">
          {/* Card 1: College Bootcamp */}
          <SpotlightCard
            spotlightColor="rgba(249, 115, 22, 0.2)"
            className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_50px_-15px_rgba(249,115,22,0.2)] hover:border-orange-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  College Bootcamp Track
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                College Bootcamp: Hands-On Tech Training for Campus Students
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                Partner with RAO Technologies to bring modern, experiential software engineering bootcamps directly to your campus. Hands-on coding, live capstones, and senior developer mentorship tailored to your academic calendar.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 mb-8">
                {[
                  "100% practical coding ratio with production toolchains",
                  "Turnkey cloud labs with zero college IT burden",
                  "Verified co-branded certificates and NAAC / NIRF alignment",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link to="/college-bootcamp">
                <Button text="Explore College Bootcamp" showIcon={true} />
              </Link>
            </div>
          </SpotlightCard>

          {/* Card 2: Placement Program */}
          <SpotlightCard
            spotlightColor="rgba(249, 115, 22, 0.2)"
            className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_50px_-15px_rgba(249,115,22,0.2)] hover:border-orange-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Placement Program Track
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                Placement Acceleration: From Skills to Engineering Offers
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                Bridge the gap between theoretical knowledge and engineering offers. Our structured 9-stage placement roadmap covers DSA, machine coding, ATS resumes, 1-on-1 mock interviews, and hiring referrals.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 mb-8">
                {[
                  "Technical machine coding & algorithmic problem solving",
                  "ATS resume polish, GitHub proof-of-work & live portfolio",
                  "Rigorous mock interviews with rubrics and video feedback",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link to="/placement">
                <Button text="Explore Placement Program" showIcon={true} />
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
