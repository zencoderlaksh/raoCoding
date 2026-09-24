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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Placement Pipeline
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 9-Stage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Placement-Readiness Journey.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
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
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
                className="group relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#090909] backdrop-blur-xl hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-h-[auto] sm:min-h-[380px]"
              >
                {/* 1. Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.12), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-300">
                        {item.tag}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white/20 group-hover:text-orange-400/60 transition-colors">
                        // {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
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
