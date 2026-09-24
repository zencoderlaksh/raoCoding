import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Code2,
  FolderGit2,
  FileText,
  Globe2,
  Users2,
  MessageSquare,
  Sparkles,
  Briefcase,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const journeySteps = [
  {
    step: "01",
    title: "Skill Assessment & Gap Analysis",
    icon: ClipboardCheck,
    tag: "Diagnostic",
    desc: "We evaluate your current foundation in programming, logical problem solving, and computer science basics to create a customized preparation roadmap.",
    points: [
      "Diagnostic coding evaluation",
      "Identification of knowledge gaps",
      "Target company tier alignment (Product vs Services)",
    ],
  },
  {
    step: "02",
    title: "Intensive Technical Training",
    icon: Code2,
    tag: "Core Engineering",
    desc: "Rigorous daily training in modern full stack development: React 19, Node.js, Express, databases, and core algorithmic problem solving.",
    points: [
      "In-depth architectural concepts",
      "Clean code & DRY principles",
      "Production design patterns",
    ],
  },
  {
    step: "03",
    title: "Production Project Development",
    icon: FolderGit2,
    tag: "Hands-on",
    desc: "Build 2–3 non-trivial capstone applications with live user flows, authentication, third-party payment gateways, and cloud deployment.",
    points: [
      "End-to-end full stack SaaS applications",
      "Comprehensive GitHub commit histories",
      "Production deployments on Vercel and Render",
    ],
  },
  {
    step: "04",
    title: "ATS Resume Engineering",
    icon: FileText,
    tag: "Profile Polish",
    desc: "Transform your resume into a recruiter magnet. We optimize keywords for Applicant Tracking Systems (ATS) and frame achievements with quantifiable business impact.",
    points: [
      "ATS keyword mapping for software roles",
      "Action-verb & quantifiable metric framing",
      "Eliminating fluff and formatting errors",
    ],
  },
  {
    step: "05",
    title: "Portfolio & GitHub Showcase",
    icon: Globe2,
    tag: "Proof of Work",
    desc: "Craft a modern developer portfolio highlighting live project demos, architecture diagrams, video walkthroughs, and clean repository READMEs.",
    points: [
      "Interactive personal portfolio site",
      "Detailed GitHub READMEs with demo links",
      "Pinned repositories showcasing code quality",
    ],
  },
  {
    step: "06",
    title: "Technical Mock Interviews",
    icon: Users2,
    tag: "Live Simulation",
    desc: "Experience real-world pressure with 1-on-1 mock interviews covering live coding, data structures, React lifecycle questions, and backend API design.",
    points: [
      "Timed live pair programming drills",
      "System architecture questions",
      "Detailed mentor rubric & scorecard",
    ],
  },
  {
    step: "07",
    title: "Communication & Soft Skills",
    icon: MessageSquare,
    tag: "Storytelling",
    desc: "Learn to articulate your thought process during technical rounds, explain complex trade-offs clearly, and answer behavioral questions using the STAR framework.",
    points: [
      "Whiteboard thought narration",
      "Handling edge-case interrogations",
      "STAR methodology for behavioral rounds",
    ],
  },
  {
    step: "08",
    title: "Interview Readiness Certification",
    icon: Sparkles,
    tag: "Benchmark",
    desc: "Pass our comprehensive benchmark interview. Once cleared, you earn RAO Placement-Ready certification, proving you are ready for actual company rounds.",
    points: [
      "Comprehensive capstone defense",
      "Live algorithmic screening",
      "RAO Placement-Ready accreditation",
    ],
  },
  {
    step: "09",
    title: "Placement Assistance & Referrals",
    icon: Briefcase,
    tag: "Career Launch",
    desc: "Direct introductions to partner hiring companies, startup networks, and alumni referrals. Ongoing guidance until you evaluate and sign your offer.",
    points: [
      "Curated hiring opportunities & referrals",
      "Salary negotiation guidance",
      "Post-offer onboarding advice",
    ],
  },
];

export default function PlacementJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="placement-journey" className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Editorial Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ PIPELINE // 01-09
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            The 9-Stage{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Placement-Readiness Journey.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Every step is engineered to build undeniable technical credibility and eliminate the guesswork from tech hiring.
          </p>
        </div>

        {/* 9-Stage Grid with Interactive Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {journeySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{
                  duration: 0.8,
                  delay: (idx % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] md:rounded-[30px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[auto] sm:min-h-[380px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                  }}
                />

                {/* 2. Oversized Background Watermark */}
                <div className="absolute -bottom-8 -right-3 font-serif text-[90px] sm:text-[110px] font-bold text-white/[0.015] pointer-events-none group-hover:text-[#ff5a28]/[0.035] select-none transition-all duration-700">
                  //
                </div>

                <div className="relative z-10">
                  {/* Dynamic Color Accent Bar */}
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-5 sm:mb-6" />

                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 border border-zinc-800 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 bg-black/40">
                        {item.tag}
                      </span>
                      <span className="font-mono text-xs tracking-widest text-[#ff5a28]/70">
                        // {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-500 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a28] flex-shrink-0 mt-0.5" />
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
