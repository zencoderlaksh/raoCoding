import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  CheckCircle2,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Sparkles,
  RotateCw,
} from "lucide-react";
import FlipCard from "../../../components/FlipCard";

const stages = [
  {
    stage: "Stage 01",
    title: "Student",
    subtitle: "Theoretical Knowledge",
    icon: GraduationCap,
    capabilities: "Basic syntax, understanding college exam syllabus, watching tutorials.",
    focus: "Bridging the gap to live coding and development environments.",
    unlocked: "Algorithmic thinking & developer setup",
  },
  {
    stage: "Stage 02",
    title: "Skilled Learner",
    subtitle: "Toolchain Proficiency",
    icon: BookOpen,
    capabilities: "Fluent in modern ES6+, React component architecture, npm packages, and terminal commands.",
    focus: "Writing clean, functional components without tutorial spoon-feeding.",
    unlocked: "Component modularity & state mastery",
  },
  {
    stage: "Stage 03",
    title: "Project Builder",
    subtitle: "Full-Stack Execution",
    icon: Code2,
    capabilities: "Architecting end-to-end full stack applications, wiring databases, and deploying live apps.",
    focus: "Git PRs, automated error handling, and robust security headers.",
    unlocked: "Production full-stack capstones",
  },
  {
    stage: "Stage 04",
    title: "Interview Ready",
    subtitle: "Under-Pressure Performance",
    icon: CheckCircle2,
    capabilities: "Articulate during live coding rounds, comfortable solving algorithmic edge cases, passing mock tests.",
    focus: "Technical storytelling, whiteboarding, and STAR behavioral answers.",
    unlocked: "Interview clearance & company referrals",
  },
  {
    stage: "Stage 05",
    title: "Industry Ready",
    subtitle: "High-Performing Engineer",
    icon: Briefcase,
    capabilities: "Productive from Day 1 on real engineering teams with minimal handholding or onboarding friction.",
    focus: "Shipping reliable code, participating in sprints, and driving business impact.",
    unlocked: "High-growth software engineer offer",
  },
];

export default function CareerReadiness() {
  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ MILESTONES // 01-05
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            The Transformation From{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Student to Industry Engineer.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Becoming an engineer isn’t an overnight trick. It’s an intentional, milestone-driven evolution. Click or hover any card to inspect the capability milestones.
          </p>
        </div>

        {/* 5-Stage Evolution Cards Grid with React Bits FlipCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {stages.map((st, idx) => {
            const Icon = st.icon;

            return (
              <div key={idx} className="w-full flex justify-center">
                <FlipCard
                  width="100%"
                  height={400}
                  radius={24}
                  axis="y"
                  flipOnClick
                  draggable
                  dragDistance={0}
                  tilt
                  tiltMax={14}
                  glare
                  glareOpacity={0.25}
                  hoverScale={1.03}
                  perspective={1100}
                  stiffness={180}
                  damping={22}
                  background="#080808"
                  color="#f5f5f5"
                  shadow
                  shadowColor="#ff5a28"
                  shadowOpacity={0.2}
                  className="w-full"
                  front={
                    <div className="h-full p-5 sm:p-6 flex flex-col justify-between border border-zinc-900 rounded-[24px] bg-[#0a0a0a] relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-4" />

                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs tracking-widest text-[#ff5a28]/80">
                            // 0{idx + 1}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-xl font-serif font-light text-white mb-1 tracking-tight group-hover:text-[#ff5a28] transition-colors">
                          {st.title}
                        </h3>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-4">
                          {st.subtitle}
                        </p>

                        <div className="border-t border-zinc-900 pt-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                            Current Capability
                          </span>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed">
                            {st.capabilities}
                          </p>
                        </div>
                      </div>

                      {/* Subtle Corner Watermark */}
                      <div className="absolute -bottom-6 -right-2 font-serif text-[80px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.03] select-none transition-all duration-700">
                        //
                      </div>

                      <div className="relative z-10 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span className="flex items-center gap-1.5">
                          <RotateCw className="w-3 h-3 text-[#ff5a28]" /> Click to Flip
                        </span>
                        <span className="text-[#ff5a28]">→</span>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full p-5 sm:p-6 flex flex-col justify-between border border-[#ff5a28]/40 rounded-[24px] bg-gradient-to-b from-[#140a05] via-[#0c0c0c] to-black relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="w-6 h-[2px] bg-[#ff5a28] mb-4" />

                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff5a28] block mb-1">
                          Milestone Focus
                        </span>
                        <h4 className="text-lg font-serif font-light text-white mb-3 tracking-tight">
                          {st.title} Objectives
                        </h4>

                        <div className="space-y-3 pt-3 border-t border-zinc-900">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                              Target Focus
                            </span>
                            <p className="text-xs text-zinc-300 font-light leading-relaxed">
                              {st.focus}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff5a28] block mb-1">
                              Capability Unlocked
                            </span>
                            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#ff5a28] font-medium flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{st.unlocked}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>3D Interactive Card</span>
                        <span className="text-[#ff5a28]">Flip Back ↺</span>
                      </div>
                    </div>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
