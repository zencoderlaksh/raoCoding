import React from "react";
import {
  Rocket,
  Code2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Zap,
  RotateCw,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import FlipCard from "../../../components/FlipCard";
import MaskedHeading from "../../../components/MaskedHeading";

const Magic = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-orange-400 text-sm">
            <Rocket size={16} />
            Built For The Real World
          </span>

          <div className="mt-8 max-w-5xl mx-auto">
            <MaskedHeading
              text="Technology Solutions. Training. Transformation."
              mediaType="video"
              src="https://videos.pexels.com/video-files/39507682/16831209_2160_3840_30fps.mp4"
              poster="/reel-poster.jpg"
              fillScale={1.25}
              parallax={26}
              reveal="rise"
              trigger="view"
              drift={18}
              brightness={1}
              saturation={1}
              grayscale={false}
              duration={1.1}
              stagger={0.09}
              align="center"
              weight={700}
              tracking={-0.03}
              lineHeight={1.1}
              textScale={0.062}
            />
          </div>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We work with businesses, colleges, and corporate teams to build technology capabilities, deliver industry-focused training, and create practical solutions powered by modern technology and AI.
          </p>
        </div>

        {/* 3 Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left items-center justify-items-center">
          {/* ────────────────────────────────────────────────────────── */}
          {/* Card 1: Businesses */}
          {/* ────────────────────────────────────────────────────────── */}
          <FlipCard
            width="100%"
            height={500}
            radius={24}
            axis="y"
            flipOnClick
            draggable
            dragDistance={0}
            tilt
            tiltMax={12}
            glare
            glareOpacity={0.22}
            hoverScale={1.02}
            perspective={1100}
            stiffness={170}
            damping={20}
            background="#121215"
            color="#f5f5f5"
            shadow
            shadowColor="#00e5ff"
            shadowOpacity={0.15}
            className="w-full max-w-sm md:max-w-none"
            front={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-white/10 rounded-[24px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/60 backdrop-blur-2xl relative overflow-hidden group">
                {/* Subtle top glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      01 — Businesses
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Code2 size={20} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                    Technology That Solves Business Problems
                  </h3>

                  {/* Visual: Code / Platform Mockup */}
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-4 font-mono text-xs shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] text-zinc-500">platform.scale.ai</span>
                    </div>
                    <div className="space-y-1 text-[11px] leading-relaxed">
                      <div className="text-zinc-400">
                        <span className="text-cyan-400">const</span> solution = <span className="text-orange-400">await</span> deploy({'{'}
                      </div>
                      <div className="pl-3 text-zinc-400">
                        engine: <span className="text-emerald-400">'enterprise-ai'</span>,
                      </div>
                      <div className="pl-3 text-zinc-400">
                        scale: <span className="text-purple-400">'automated'</span>,
                      </div>
                      <div className="text-zinc-400">{'}'});</div>
                    </div>
                  </div>
                </div>

                {/* Flip Prompt Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Custom Solutions
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <RotateCw size={13} className="animate-spin-slow" />
                    Flip for details
                  </span>
                </div>
              </div>
            }
            back={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-cyan-500/30 rounded-[24px] bg-gradient-to-b from-[#0a1820] via-[#090d14] to-black backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      01 — Businesses
                    </span>
                    <span className="text-xs font-mono text-zinc-500">DETAILS</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    Technology That Solves Business Problems
                  </h4>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    From websites and digital platforms to AI-powered solutions, we help businesses turn ideas into scalable technology.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                      <span>Web & Mobile Platforms built for performance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                      <span>AI agents & custom automation workflows</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                      <span>Scalable cloud architecture & API design</span>
                    </div>
                  </div>
                </div>

                {/* CTA & Flip Back */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/client"
                    onClick={e => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    <span>Explore Business Solutions</span>
                    <ArrowRight size={16} />
                  </Link>
                  <p className="text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                    <RotateCw size={11} /> Click card to flip back
                  </p>
                </div>
              </div>
            }
          />

          {/* ────────────────────────────────────────────────────────── */}
          {/* Card 2: Colleges & Universities */}
          {/* ────────────────────────────────────────────────────────── */}
          <FlipCard
            width="100%"
            height={500}
            radius={24}
            axis="y"
            flipOnClick
            draggable
            dragDistance={0}
            tilt
            tiltMax={12}
            glare
            glareOpacity={0.22}
            hoverScale={1.02}
            perspective={1100}
            stiffness={170}
            damping={20}
            background="#151210"
            color="#f5f5f5"
            shadow
            shadowColor="#f97316"
            shadowOpacity={0.15}
            className="w-full max-w-sm md:max-w-none"
            front={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-white/10 rounded-[24px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/60 backdrop-blur-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
                      02 — Colleges & Universities
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <GraduationCap size={20} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-orange-300 transition-colors">
                    Industry-Ready Learning Experiences
                  </h3>

                  {/* Visual: Curriculum Tracks & Pathways */}
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-4 text-xs shadow-inner relative overflow-hidden space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-orange-400">
                        Campus to Industry
                      </span>
                      <span className="text-[10px] text-zinc-500">Accredited</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/5">
                      <span className="text-zinc-300 font-medium flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        Hands-on Tech Workshops
                      </span>
                      <span className="text-[10px] text-zinc-500">Seminars</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/5">
                      <span className="text-zinc-300 font-medium flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Faculty Development (FDP)
                      </span>
                      <span className="text-[10px] text-zinc-500">AI Tracks</span>
                    </div>
                  </div>
                </div>

                {/* Flip Prompt Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 text-orange-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Institution Programs
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <RotateCw size={13} className="animate-spin-slow" />
                    Flip for details
                  </span>
                </div>
              </div>
            }
            back={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-orange-500/30 rounded-[24px] bg-gradient-to-b from-[#1c120a] via-[#120d09] to-black backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300">
                      02 — Colleges & Universities
                    </span>
                    <span className="text-xs font-mono text-zinc-500">DETAILS</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    Industry-Ready Learning Experiences
                  </h4>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    Workshops, technical training, AI programs, seminars, FDPs and industry-oriented programs designed for students and faculty.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" />
                      <span>Hands-on student bootcamps with industry certifications</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" />
                      <span>FDPs equipping faculty with cutting-edge AI tools</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-orange-400 shrink-0" />
                      <span>Campus hackathons, capstone projects & mentoring</span>
                    </div>
                  </div>
                </div>

                {/* CTA & Flip Back */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/courses"
                    onClick={e => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
                  >
                    <span>Explore College Programs</span>
                    <ArrowRight size={16} />
                  </Link>
                  <p className="text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                    <RotateCw size={11} /> Click card to flip back
                  </p>
                </div>
              </div>
            }
          />

          {/* ────────────────────────────────────────────────────────── */}
          {/* Card 3: Corporate Teams */}
          {/* ────────────────────────────────────────────────────────── */}
          <FlipCard
            width="100%"
            height={500}
            radius={24}
            axis="y"
            flipOnClick
            draggable
            dragDistance={0}
            tilt
            tiltMax={12}
            glare
            glareOpacity={0.22}
            hoverScale={1.02}
            perspective={1100}
            stiffness={170}
            damping={20}
            background="#140f1a"
            color="#f5f5f5"
            shadow
            shadowColor="#a855f7"
            shadowOpacity={0.15}
            className="w-full max-w-sm md:max-w-none"
            front={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-white/10 rounded-[24px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/60 backdrop-blur-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      03 — Corporate Teams
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Sparkles size={20} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
                    Upskill. Adapt. Build With AI.
                  </h3>

                  {/* Visual: Capability Badges Grid */}
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-4 text-xs shadow-inner relative overflow-hidden space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-purple-400">
                        AI Capability Stack
                      </span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                        <Zap size={10} /> +140% Output
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="text-zinc-300 text-[11px]">GenAI Agents</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-zinc-300 text-[11px]">Full-Stack AI</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        <span className="text-zinc-300 text-[11px]">Cloud DevOps</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-zinc-300 text-[11px]">Modern Ops</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flip Prompt Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 text-purple-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    Enterprise Training
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <RotateCw size={13} className="animate-spin-slow" />
                    Flip for details
                  </span>
                </div>
              </div>
            }
            back={
              <div className="h-full p-7 lg:p-8 flex flex-col justify-between border border-purple-500/30 rounded-[24px] bg-gradient-to-b from-[#180a22] via-[#100818] to-black backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                      03 — Corporate Teams
                    </span>
                    <span className="text-xs font-mono text-zinc-500">DETAILS</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    Upskill. Adapt. Build With AI.
                  </h4>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    Practical technology and AI training designed to help teams adopt emerging technologies and improve their capabilities.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-purple-400 shrink-0" />
                      <span>Custom corporate cohorts tailored to your tech stack</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-purple-400 shrink-0" />
                      <span>Practical AI tool adoption for immediate productivity</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="text-purple-400 shrink-0" />
                      <span>Executive briefings on emerging AI & architecture</span>
                    </div>
                  </div>
                </div>

                {/* CTA & Flip Back */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/contact"
                    onClick={e => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-500/20"
                  >
                    <span>Explore Corporate Training</span>
                    <ArrowRight size={16} />
                  </Link>
                  <p className="text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                    <RotateCw size={11} /> Click card to flip back
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Magic;