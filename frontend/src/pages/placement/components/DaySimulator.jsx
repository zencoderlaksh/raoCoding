import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Code2,
  ShieldCheck,
  Terminal,
  Disc,
  Copy,
  Check,
  Coffee,
  GitBranch,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const TIMELINE_STEPS = [
  {
    id: "standup",
    time: "09:30 AM",
    title: "The Standup Strategy",
    subtitle: "Agile Task Triage",
    desc: "Sync up with your dedicated tech lead. Define critical roadblocks, triage open tickets, and map out production micro-sprints.",
    icon: Sun,
    file: "standup_brief.json",
    lang: "JSON",
    tag: "Agile Sync",
    outcome: "Master daily engineering communication, blocker escalation, and sprint velocity tracking.",
    code: `{\n  "session": "Daily Engineering Standup",\n  "lead": "Principal Eng @ Netflix",\n  "current_sprint": "Distributed Cache Replication",\n  "blockers": "Resolved cache synchronization mismatch",\n  "status": "GREEN_PATH_PROCEED",\n  "tasks_in_flight": [\n    "Optimize Redis session fallback cluster",\n    "Benchmark latency under 50k concurrent req/s"\n  ]\n}`
  },
  {
    id: "refactor",
    time: "02:00 PM",
    title: "Deep-Work Feature Engineering",
    subtitle: "Distributed Systems",
    desc: "Dive into deep feature engineering. Optimize bottleneck algorithms, write tests, and submit code reviews to senior staff reviewers.",
    icon: Code2,
    file: "distributed_cache.rs",
    lang: "Rust",
    tag: "Core Engineering",
    outcome: "Implement low-latency caching, memory safety, async runtimes, and distributed fallbacks.",
    code: `// Optimizing cache read paths to O(1) time complexity\npub async fn get_session(ctx: &Context, key: &str) -> Result<User> {\n    match ctx.redis.get_secure_hash(key).await {\n        Some(token) => Ok(token.parse_identity()),\n        None => {\n            log::warn!("Cache miss on cluster footprint. Dropping to fallback DB.");\n            let session = fetch_from_cold_storage(ctx, key).await?;\n            ctx.redis.set_secure_hash(key, &session, 3600).await?;\n            Ok(session)\n        }\n    }\n}`
  },
  {
    id: "review",
    time: "05:30 PM",
    title: "1-on-1 Architecture & PR Review",
    subtitle: "Code Quality Gate",
    desc: "Defend your system design blueprints against direct scrutiny. Get brutal line-by-line code feedback from mentors who run enterprise systems.",
    icon: ShieldCheck,
    file: "mentor_pr_review.js",
    lang: "JavaScript",
    tag: "Staff Critique",
    outcome: "Eliminate race conditions, memory leaks, and unhandled promise rejections before production.",
    code: `// Senior Staff Architecture PR Assessment\nconst pullRequestReview = {\n  prNumber: 142,\n  author: "You (Associate Software Engineer)",\n  reviewer: "Staff Engineer @ Meta",\n  verdict: "CHANGES_REQUESTED",\n  feedback: "Your concurrency model leaks open network sockets under load.",\n  recommendation: "Wrap line 42 inside a managed mutex lock before deployment.",\n  approvedAfterFix: true\n};`
  },
  {
    id: "algorithms",
    time: "08:00 PM",
    title: "Live Algorithmic Mock Drill",
    subtitle: "Machine Coding",
    desc: "Timed problem solving under pressure. Implement sliding-window stream processing with optimal space-time complexities.",
    icon: Terminal,
    file: "sliding_window_stream.py",
    lang: "Python",
    tag: "Interview Prep",
    outcome: "Develop rapid algorithmic pattern recognition under strict 45-minute live interview conditions.",
    code: `# Real-time streaming rate limiter with sliding window\ndef max_traffic_window(events: list[int], window_size: int) -> int:\n    left, current_max = 0, 0\n    for right in range(len(events)):\n        while events[right] - events[left] > window_size:\n            left += 1\n        current_max = max(current_max, right - left + 1)\n    return current_max\n\n# Benchmark: O(N) time complexity, O(1) auxiliary space`
  }
];

export default function DaySimulator() {
  const [activeTab, setActiveTab] = useState(TIMELINE_STEPS[0].id);
  const [copied, setCopied] = useState(false);

  const currentStep = TIMELINE_STEPS.find((s) => s.id === activeTab) || TIMELINE_STEPS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentStep.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeLines = currentStep.code.split("\n");

  return (
    <section id="day-simulator" className="py-24 sm:py-32 bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Disc size={12} className="text-orange-400 animate-pulse" />
            <span>Active Engineering Simulator</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            A Typical Day in Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Engineered Life.
            </span>
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the daily engineering cadence of an industry-scale developer. Toggle through the workflow stages to inspect production templates, real code reviews, and architecture expectations.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Timeline Steps using React Bits SpotlightCard */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-neutral-400">
                Daily Engineering Lifecycle
              </span>
              <span className="text-xs text-orange-400 font-mono font-semibold">
                4 Key Milestones
              </span>
            </div>

            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeTab === step.id;

              return (
                <SpotlightCard
                  key={step.id}
                  spotlightColor="rgba(249, 115, 22, 0.22)"
                  onClick={() => setActiveTab(step.id)}
                  className={`cursor-pointer transition-all duration-300 !p-6 rounded-2xl border text-left relative overflow-hidden select-none ${
                    isActive
                      ? "!border-orange-500/60 !bg-[#131316] shadow-[0_12px_36px_rgba(0,0,0,0.8),0_0_30px_rgba(249,115,22,0.22)] ring-1 ring-orange-500/30 scale-[1.01]"
                      : "!border-neutral-800/80 !bg-[#0b0b0d] shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(249,115,22,0.12)] hover:!border-orange-500/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Indicator Orb */}
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] scale-105"
                          : "bg-white/5 text-neutral-400 border-white/10 group-hover:scale-105"
                      }`}
                    >
                      <Icon size={18} className={isActive ? "stroke-[2.5]" : "stroke-[2]"} />
                    </div>

                    {/* Step Information */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`font-mono text-xs font-bold tracking-wider ${
                            isActive ? "text-orange-400" : "text-neutral-500"
                          }`}
                        >
                          {step.time}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                          {step.tag}
                        </span>
                      </div>

                      <h4 className="text-white text-base font-bold tracking-tight mb-1">
                        {step.title}
                      </h4>
                      
                      <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Active highlight progress line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-timeline-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-amber-500"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </SpotlightCard>
              );
            })}
          </div>

          {/* Right Column: IDE Console / Terminal Workspace using React Bits SpotlightCard */}
          <div className="lg:col-span-7 w-full">
            <SpotlightCard
              spotlightColor="rgba(249, 115, 22, 0.15)"
              className="!p-0 rounded-3xl border border-neutral-800/90 !bg-[#0b0b0d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(249,115,22,0.12)] overflow-hidden flex flex-col min-h-[500px] w-full"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-4">
                  {/* Decorative Mac Window Controls */}
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60 border border-green-500/80" />
                  </div>

                  {/* File Tabs Strip */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                    {TIMELINE_STEPS.map((step) => {
                      const isCurrent = step.id === activeTab;
                      return (
                        <button
                          key={step.id}
                          onClick={() => setActiveTab(step.id)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            isCurrent
                              ? "bg-white/10 text-orange-400 border border-orange-500/30 font-semibold"
                              : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <Terminal size={11} className={isCurrent ? "text-orange-400" : "text-neutral-500"} />
                          <span>{step.file}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Copy Code Action Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  title="Copy code to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="font-mono text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Workspace with Line Numbers */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[340px] flex-1 bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-4 font-mono"
                  >
                    {/* Line numbers column */}
                    <div className="select-none text-neutral-600 text-right pr-3 border-r border-white/10 space-y-1">
                      {codeLines.map((_, i) => (
                        <div key={i} className="text-[11px] sm:text-xs">
                          {i + 1}
                        </div>
                      ))}
                    </div>

                    {/* Code content */}
                    <pre className="text-neutral-200 selection:bg-orange-500 selection:text-black overflow-x-auto flex-1 space-y-1">
                      <code>{currentStep.code}</code>
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Takeaway Insight Callout Bar */}
              <div className="px-6 py-4 border-t border-white/10 bg-orange-500/5 flex items-start gap-3">
                <Sparkles size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-orange-400 uppercase tracking-wider block mb-0.5">
                    Engineering Takeaway ({currentStep.subtitle}):
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {currentStep.outcome}
                  </p>
                </div>
              </div>

              {/* Terminal System Status Bar */}
              <div className="px-6 py-3 border-t border-white/10 bg-neutral-950 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-500 gap-2 shrink-0">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <GitBranch size={12} className="text-orange-400" />
                    <span>git:(main)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>SYSTEM: READY</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-neutral-500">
                  <span>LANG: {currentStep.lang}</span>
                  <span>•</span>
                  <span>UTF-8</span>
                  <span>•</span>
                  <span className="text-orange-400/80 flex items-center gap-1">
                    <Coffee size={11} /> Sandbox
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}