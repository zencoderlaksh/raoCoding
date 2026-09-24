import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareCode,
  GitPullRequest,
  Compass,
  Video,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import expertMentorImg from "../../../assets/expert_mentor.png";

const pillars = [
  {
    icon: GitPullRequest,
    title: "1-on-1 Code Reviews",
    desc: "Every PR submitted by students receives detailed comments on logic, architectural cleanliness, testability, and edge-case handling.",
  },
  {
    icon: MessageSquareCode,
    title: "Rapid Doubt Resolution",
    desc: "Dedicated real-time channels ensure students are never stuck on a blocker for hours. Mentors provide hint-driven debugging support.",
  },
  {
    icon: Video,
    title: "Live Architecture Breakdowns",
    desc: "Interactive weekend sessions disassembling how production systems handle concurrency, state caching, and microservice communication.",
  },
  {
    icon: Compass,
    title: "Direct Career Guidance",
    desc: "Honest feedback on resume strength, tech stack focus, and navigating company-specific interview formats from engineers who've been there.",
  },
];

export default function MentorshipSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#0d0d0d] shadow-2xl">
              <img
                src={expertMentorImg}
                alt="Expert Mentor Guidance"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Float Glass Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    Live Mentor Availability
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-200 font-medium">
                  "We don't teach from slides. We pair program, review pull requests, and solve bugs together like a real engineering team."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars Content */}
          <div>
            <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
              Personalized Guidance
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Mentorship From Engineers,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Not Just Instructors.
              </span>
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-10">
              The difference between following online tutorials and building real engineering instincts is feedback. Our mentors guide students step-by-step through professional code reviews and industry habits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 hover:bg-white/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(249,115,22,0.1)] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
