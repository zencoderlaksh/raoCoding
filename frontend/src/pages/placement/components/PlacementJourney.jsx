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
    <section id="placement-journey" className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Step-By-Step Pipeline
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The 9-Stage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Placement-Readiness Journey.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Every step is engineered to build undeniable technical credibility and eliminate the guesswork from tech hiring.
          </p>
        </div>

        {/* 9-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {journeySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(249, 115, 22, 0.2)"
                className="p-8 rounded-3xl border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.18)] hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                        {item.tag}
                      </span>
                      <span className="text-lg font-black text-orange-500/70">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
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
