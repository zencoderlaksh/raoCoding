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
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card - Client Page TeamSection Style */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-zinc-900 bg-[#0a0a0a] shadow-2xl group">
              <img
                src={expertMentorImg}
                alt="Expert Mentor Guidance"
                className="w-full h-auto object-cover opacity-85 filter contrast-[1.05] group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.25,1,0.5,1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              {/* Float Glass Pill */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 rounded-2xl sm:rounded-[24px] bg-black/85 backdrop-blur-xl border border-zinc-800">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-emerald-400">
                    Live Mentor Availability
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-serif italic font-light leading-relaxed">
                  "We don't teach from slides. We pair program, review pull requests, and solve bugs together like a real engineering team."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars Content */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
              ▣ MENTORSHIP // PRODUCTION STANDARDS
            </span>
            <h2 className="text-[clamp(28px,4vw,60px)] font-light text-white tracking-[-0.03em] leading-tight mb-4 sm:mb-6 px-1">
              Mentorship From Engineers,{" "}
              <em className="font-serif italic font-light text-zinc-400 not-italic block sm:inline">
                Not Just Instructors.
              </em>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 px-1">
              The difference between following online tutorials and building real engineering instincts is feedback. Our mentors guide students step-by-step through professional code reviews and industry habits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                    }}
                    className="group relative p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-[26px] bg-[#0a0a0a]/90 border border-zinc-900 hover:border-zinc-800 transition-colors duration-500 overflow-hidden shadow-xl"
                  >
                    {/* Cursor Spotlight Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                      style={{
                        background:
                          "radial-gradient(220px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-zinc-600 group-hover:text-[#ff5a28]/70 transition-colors">
                          // 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-serif font-light text-white mb-2 tracking-tight group-hover:text-[#ff5a28] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
