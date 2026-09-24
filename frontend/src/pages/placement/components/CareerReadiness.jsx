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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Predictable Progression
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Transformation From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Student to Industry Engineer.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Becoming an engineer isn’t an overnight trick. It’s an intentional, milestone-driven evolution. Click or hover any card to inspect the capability milestones.
          </p>
        </div>

        {/* 5-Stage Evolution Cards Grid with React Bits FlipCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stages.map((st, idx) => {
            const Icon = st.icon;

            return (
              <div key={idx} className="w-full flex justify-center">
                <FlipCard
                  width="100%"
                  height={380}
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
                  background="#0d0d0d"
                  color="#f5f5f5"
                  shadow
                  shadowColor="#ff7a00"
                  shadowOpacity={0.2}
                  className="w-full"
                  front={
                    <div className="h-full p-6 flex flex-col justify-between border border-neutral-800 rounded-[24px] bg-[#0d0d0d] relative overflow-hidden group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                            {st.stage}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors">
                          {st.title}
                        </h3>
                        <p className="text-xs font-semibold text-neutral-400 mb-4">
                          {st.subtitle}
                        </p>

                        <div className="border-t border-white/5 pt-3">
                          <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                            Current Capability
                          </span>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {st.capabilities}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-orange-400 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <RotateCw className="w-3 h-3" /> Click to Flip
                        </span>
                        <span>→</span>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full p-6 flex flex-col justify-between border border-orange-500/40 rounded-[24px] bg-gradient-to-b from-orange-950/30 via-[#0e0e0e] to-black relative overflow-hidden">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-orange-400 block mb-2">
                          Milestone Focus
                        </span>
                        <h4 className="text-lg font-black text-white mb-2">
                          {st.title} Objectives
                        </h4>

                        <div className="space-y-3 pt-3 border-t border-white/10">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                              Target Focus
                            </span>
                            <p className="text-xs text-neutral-200 leading-relaxed">
                              {st.focus}
                            </p>
                          </div>

                          <div>
                            <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">
                              Capability Unlocked
                            </span>
                            <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                              ✓ {st.unlocked}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                        <span>3D Interactive Card</span>
                        <span className="text-orange-400">Flip Back ↺</span>
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
