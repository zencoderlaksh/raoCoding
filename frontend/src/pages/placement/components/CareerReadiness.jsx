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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Milestones of Transformation
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Transformation From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Student to Industry Engineer.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
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
                    <div className="h-full p-5 sm:p-6 flex flex-col justify-between border border-white/10 rounded-3xl bg-[#090909] relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-black text-white/30 group-hover:text-orange-400/80 transition-colors">
                            // 0{idx + 1}
                          </span>
                          <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-orange-400 transition-colors">
                          {st.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">
                          {st.subtitle}
                        </p>

                        <div className="border-t border-white/10 pt-3">
                          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                            Current Capability
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {st.capabilities}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <RotateCw className="w-3.5 h-3.5 text-orange-400" /> Click to Flip
                        </span>
                        <span className="text-orange-400 font-bold">→</span>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full p-5 sm:p-6 flex flex-col justify-between border border-orange-500/40 rounded-3xl bg-gradient-to-b from-[#140a05] via-[#0c0c0c] to-black relative overflow-hidden group">
                      <div className="relative z-10">
                        <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                          Milestone Focus
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                          {st.title} Objectives
                        </h4>

                        <div className="space-y-3 pt-3 border-t border-white/10">
                          <div>
                            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                              Target Focus
                            </span>
                            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                              {st.focus}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                              Capability Unlocked
                            </span>
                            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs sm:text-sm text-orange-400 font-medium flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                              <span>{st.unlocked}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span>Interactive Card</span>
                        <span className="text-orange-400 font-bold">Flip Back ↺</span>
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
