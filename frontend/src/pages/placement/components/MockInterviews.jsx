import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layers,
  MessageSquare,
  FileSearch,
  CheckCircle,
  Video,
  ClipboardList,
  Sparkles,
  BarChart3,
  Award,
} from "lucide-react";

const interviewTypes = [
  {
    id: "technical",
    title: "Technical Machine Coding",
    icon: Code,
    duration: "60 - 90 Minutes",
    interviewer: "Senior Software Engineer",
    focus: "Live code implementation of a complex interactive UI component or REST API backend service.",
    rubric: [
      "Modular code structure and clean naming conventions",
      "Edge-case anticipation and boundary handling",
      "Correct state modeling without re-render cascades",
      "Confidence under time constraints and pair programming",
    ],
    metrics: [
      { label: "Code Architecture & Modularity", score: 94 },
      { label: "Speed of Execution", score: 88 },
      { label: "Edge-Case Handling", score: 92 },
      { label: "Pair Programming Clarity", score: 95 },
    ],
  },
  {
    id: "system",
    title: "System Design & Architecture",
    icon: Layers,
    duration: "45 - 60 Minutes",
    interviewer: "Tech Lead / Architect",
    focus: "Designing scalable backend architecture, database schemas, cache layers, and authentication flows.",
    rubric: [
      "Requirements gathering & functional vs non-functional constraints",
      "Relational vs NoSQL schema selection justification",
      "API payload design & error handling conventions",
      "Bottleneck identification and scaling strategies",
    ],
    metrics: [
      { label: "Schema & Data Modeling", score: 96 },
      { label: "Scalability & Caching", score: 90 },
      { label: "API Protocol Choices", score: 92 },
      { label: "Failure Recovery Planning", score: 87 },
    ],
  },
  {
    id: "project",
    title: "Project Walkthrough & Defense",
    icon: FileSearch,
    duration: "45 Minutes",
    interviewer: "Engineering Lead",
    focus: "Deep interrogation of your capstone projects, git commit history, and architectural decisions.",
    rubric: [
      "Ability to articulate the business problem and solution",
      "Explaining why specific packages and libraries were chosen",
      "Demonstrating deep knowledge of every line of code",
      "Handling 'How would you re-architect this?' questions",
    ],
    metrics: [
      { label: "Architectural Justification", score: 98 },
      { label: "Git PR & Commit Cleanliness", score: 94 },
      { label: "Trade-Off Defense", score: 91 },
      { label: "Technical Passion & Ownership", score: 96 },
    ],
  },
  {
    id: "hr",
    title: "HR, Cultural & Behavioral Round",
    icon: MessageSquare,
    duration: "30 - 45 Minutes",
    interviewer: "Talent Partner / HR Director",
    focus: "Assessing communication clarity, conflict resolution, collaborative mindset, and culture alignment.",
    rubric: [
      "Application of STAR method (Situation, Task, Action, Result)",
      "Genuine curiosity and asking thoughtful company questions",
      "Clear articulation of career goals and growth mindset",
      "Professional compensation and notice period negotiation",
    ],
    metrics: [
      { label: "STAR Structure Quality", score: 95 },
      { label: "Articulate Communication", score: 93 },
      { label: "Culture & Team Alignment", score: 97 },
      { label: "Strategic Negotiation", score: 89 },
    ],
  },
];

export default function MockInterviews() {
  const [activeTab, setActiveTab] = useState(interviewTypes[0].id);
  const active = interviewTypes.find((t) => t.id === activeTab);

  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ SIMULATION // 1-ON-1 SESSIONS
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            Comprehensive Mock{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Interview Ecosystem.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Eliminate interview anxiety before you sit in front of real hiring managers. We simulate every round with industry veterans and provide exhaustive feedback scorecards.
          </p>
        </div>

        {/* 4 Interview Type Tabs with Layout Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {interviewTypes.map((type, idx) => {
            const Icon = type.icon;
            const isSelected = type.id === activeTab;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-[26px] text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#121212] border border-[#ff5a28] shadow-[0_0_30px_rgba(255,90,40,0.2)] scale-[1.01]"
                    : "bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 hover:bg-[#0f0f0f]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#ff5a28] text-white"
                          : "bg-white/[0.04] text-[#ff5a28] group-hover:bg-[#ff5a28]/10"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      // 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-serif font-light text-white mb-1 tracking-tight group-hover:text-[#ff5a28] transition-colors line-clamp-2">
                    {type.title}
                  </h4>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500">
                    {type.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Interview Round Breakdown with Animated Scorecards */}
        {active && (
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/95 backdrop-blur-xl mb-10 sm:mb-12 shadow-2xl relative overflow-hidden"
            >
              {/* Dynamic corner ambient glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[110px] opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,90,40,0.8) 0%, transparent 70%)",
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Column: Format Details */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-900 pb-8 lg:pb-0 lg:pr-8">
                  <div className="w-6 h-[2px] bg-[#ff5a28] mb-6" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#ff5a28] block mb-2">
                    Round Specification
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light tracking-tight text-white mb-4">
                    {active.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-light mb-6">
                    <p>Duration: <strong className="text-white font-mono">{active.duration}</strong></p>
                    <p>Conducted by: <strong className="text-zinc-200">{active.interviewer}</strong></p>
                  </div>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                    {active.focus}
                  </p>

                  <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800/80">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff5a28] uppercase tracking-widest mb-2">
                      <Award className="w-4 h-4" />
                      Passing Standard
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Must score at least 85% across all rubric categories to receive RAO Interview-Cleared endorsement.
                    </p>
                  </div>
                </div>

                {/* Middle Column: Evaluation Rubric */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-900 pb-8 lg:pb-0 lg:pr-8">
                  <h4 className="text-base font-serif font-light text-white mb-5 flex items-center gap-2 tracking-tight">
                    <ClipboardList className="w-4 h-4 text-[#ff5a28]" />
                    Evaluation Checklist:
                  </h4>
                  <div className="space-y-3">
                    {active.rubric.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-zinc-900 flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light"
                      >
                        <CheckCircle className="w-4 h-4 text-[#ff5a28] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Animated Scorecard Radar/Bar Preview */}
                <div className="lg:col-span-4">
                  <h4 className="text-base font-serif font-light text-white mb-5 flex items-center gap-2 tracking-tight">
                    <BarChart3 className="w-4 h-4 text-[#ff5a28]" />
                    Target Competency Benchmark:
                  </h4>
                  <div className="space-y-4">
                    {active.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="flex justify-between text-xs font-mono mb-2">
                          <span className="text-zinc-300">{m.label}</span>
                          <span className="text-[#ff5a28] font-bold">{m.score}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${m.score}%` }}
                            transition={{ duration: 1, delay: mIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-[#ff5a28] to-amber-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Feedback Loop Feature Bar */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/80 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {[
            {
              icon: Video,
              title: "Full Video Recording",
              desc: "Watch your performance back to catch pauses, communication gaps, and coding pauses under pressure.",
              num: "// 01",
            },
            {
              icon: ClipboardList,
              title: "Metric Rubric Scorecard",
              desc: "Scoring breakdowns across problem solving, code cleanliness, communication, and speed.",
              num: "// 02",
            },
            {
              icon: Sparkles,
              title: "Actionable Fix Plan",
              desc: "A concrete punch-list of architectural and conceptual drills to re-study before your next mock.",
              num: "// 03",
            },
          ].map((card, cIdx) => {
            const Icon = card.icon;
            return (
              <div key={cIdx} className="group relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-[#ff5a28]/70 transition-colors">
                    {card.num}
                  </span>
                </div>
                <h5 className="text-lg font-serif font-light text-white mb-2 tracking-tight group-hover:text-[#ff5a28] transition-colors">
                  {card.title}
                </h5>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
