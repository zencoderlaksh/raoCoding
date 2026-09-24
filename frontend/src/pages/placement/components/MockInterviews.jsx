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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Real Interview Pressure
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Comprehensive Mock{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Interview Ecosystem.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Eliminate interview anxiety before you sit in front of real hiring managers. We simulate every round with industry veterans and provide exhaustive feedback scorecards.
          </p>
        </div>

        {/* 4 Interview Type Tabs with Layout Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {interviewTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = type.id === activeTab;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-[#141414] border-2 border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.25)] scale-[1.02]"
                    : "bg-[#0c0c0c] border border-neutral-800 hover:border-white/20 hover:bg-[#111]"
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? "bg-orange-500 text-white" : "bg-orange-500/10 text-orange-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {type.title}
                  </h4>
                  <span className="text-xs text-neutral-500 font-medium">
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#0d0d0d] mb-12 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle ambient corner glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.8) 0%, transparent 70%)",
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Column: Format Details */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2">
                    Round Specification
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {active.title}
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-neutral-400 mb-6">
                    <p>Duration: <strong className="text-white">{active.duration}</strong></p>
                    <p>Conducted by: <strong className="text-orange-300">{active.interviewer}</strong></p>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {active.focus}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                      <Award className="w-4 h-4" />
                      Passing Standard
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Must score at least 85% across all rubric categories to receive RAO Interview-Cleared endorsement.
                    </p>
                  </div>
                </div>

                {/* Middle Column: Evaluation Rubric */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                  <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-orange-400" />
                    Evaluation Checklist:
                  </h4>
                  <div className="space-y-3">
                    {active.rubric.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-neutral-200"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Animated Scorecard Radar/Bar Preview */}
                <div className="lg:col-span-4">
                  <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-orange-400" />
                    Target Competency Benchmark:
                  </h4>
                  <div className="space-y-4">
                    {active.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-neutral-300">{m.label}</span>
                          <span className="text-orange-400 font-bold">{m.score}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${m.score}%` }}
                            transition={{ duration: 0.8, delay: mIdx * 0.1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
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
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-1.5">
              Full Video Recording
            </h5>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Watch your performance back to catch pauses, communication gaps, and coding pauses under pressure.
            </p>
          </div>

          <div className="p-4 border-y md:border-y-0 md:border-x border-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-1.5">
              Metric Rubric Scorecard
            </h5>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Scoring breakdowns across problem solving, code cleanliness, communication, and speed.
            </p>
          </div>

          <div className="p-4 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-1.5">
              Actionable Fix Plan
            </h5>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A concrete punch-list of architectural and conceptual drills to re-study before your next mock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
