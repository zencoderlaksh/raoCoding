import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Code, ShieldCheck, Terminal, Disc, Coffee } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const TIMELINE_STEPS = [
  {
    id: "morning",
    time: "09:30 AM",
    title: "The Standup Strategy",
    desc: "Sync up with your dedicated tech lead. Define critical roadblocks, triage open tickets, and map out production micro-sprints.",
    icon: Sun,
    file: "standup_brief.json",
    glow: "from-amber-500/10 to-transparent",
    code: `{\n  "session": "Daily Engineering Standup",\n  "lead": "Principal Eng @ Netflix",\n  "current_sprint": "Distributed Database Replication",\n  "blockers": "Resolved cache synchronization mismatch",\n  "status": "GREEN_PATH_PROCEED"\n}`
  },
  {
    id: "afternoon",
    time: "02:00 PM",
    title: "Deep-Work Core Refactoring",
    desc: "Dive into deep feature engineering. Optimize bottleneck algorithms, write tests, and submit code reviews to senior staff reviewers.",
    icon: Code,
    file: "distributed_cache.rs",
    glow: "from-orange-500/10 to-transparent",
    code: `// Optimizing cache read paths to O(1) time complexity\npub async fn get_session(ctx: &Context, key: &str) -> Result<User> {\n    match ctx.redis.get_secure_hash(key).await {\n        Some(token) => Ok(token.parse_identity()),\n        None => {\n            log::warn!("Cache miss on cluster footprint. Dropping to fallback DB.");\n            fetch_from_cold_storage(ctx, key).await\n        }\n    }\n}`
  },
  {
    id: "evening",
    time: "05:30 PM",
    title: "1-on-1 Code Architecture Review",
    desc: "Defend your system design blueprints against direct scrutiny. Get brutal line-by-line code feedback from mentors who run enterprise systems.",
    icon: ShieldCheck,
    file: "mentor_pr_review.js",
    glow: "from-red-500/10 to-transparent",
    code: `// Code Quality Assessment Matrix\nconst pullRequestReview = {\n  author: "You",\n  reviewer: "Staff Software Engineer @ Meta",\n  verdict: "CHANGES_REQUESTED",\n  feedback: "Your concurrency model leaks open network sockets here.",\n  actionItem: "Wrap line 42 inside a managed mutex lock before deployment."\n};`
  }
];

export default function DaySimulator() {
  const [activeTab, setActiveTab] = useState("morning");
  const currentStep = TIMELINE_STEPS.find((s) => s.id === activeTab);

  return (
    <section className="py-32 bg-[#080808] text-white border-t border-white/5 relative overflow-hidden">
      {/* Absolute Decorative Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Environmental Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none transition-all duration-700" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Section Heading Typography Grid */}
        <div className="max-w-3xl mb-20">
          <span className="text-orange-500 tracking-[0.3em] text-xs uppercase font-bold flex items-center gap-2 mb-4">
            <Disc size={12} className="animate-pulse" /> ◆ Active Simulator
          </span>
          <h2 
            className="text-4xl md:text-6xl font-light tracking-[-0.03em] leading-tight"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            A typical day in your <span className="italic text-orange-400">engineered life.</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-base max-w-xl">
            Toggle through the lifecycle stages of an industry-scale developer. Experience the workflow, documentation templates, and code expectations directly.
          </p>
        </div>

        {/* Core Layout Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Interactive Steps Left Container Layout */}
          <div className="lg:col-span-5 relative space-y-3">
            
            {/* Structural Center-Left Connected Timeline Beam */}
            <div className="absolute top-3 left-8 bottom-3 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none hidden sm:block" />

            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeTab === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-6 relative group overflow-hidden ${
                    isActive 
                      ? "bg-zinc-900/40 border-orange-500/30 shadow-xl shadow-black/50" 
                      : "border-white/0 hover:bg-zinc-900/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  {/* Internal Glow Pulse Background for Selected Items */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.glow} pointer-events-none`} />
                  )}

                  {/* Icon Indicator Orb */}
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 z-10 relative transition-transform duration-300 group-hover:scale-105 hidden sm:flex ${
                    isActive 
                      ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                      : "bg-zinc-900 text-zinc-500 border-white/10"
                  }`}>
                    <Icon size={11} className="stroke-[2.5]" />
                  </div>

                  {/* Copy Block Information Area */}
                  <div className="relative z-10 space-y-1">
                    <span className={`font-mono text-xs font-semibold tracking-wider block ${isActive ? "text-orange-400" : "text-zinc-500"}`}>
                      {step.time}
                    </span>
                    <h4 className="text-white text-lg font-medium tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* IDE Console / Terminal Right Container Layout */}
          <div className="lg:col-span-7 h-full w-full">
            <div className="bg-[#0b0b0d] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col min-h-[440px] w-full max-w-[720px] mx-auto lg:mx-0">
              
              {/* Terminal Title Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-zinc-900/30 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-6">
                  {/* Decorative Mac Window Control Beads */}
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                  </div>
                  
                  {/* Dynamic Active File Attachment Name Indicator */}
                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px] tracking-wide bg-zinc-900/50 px-3 py-1 rounded border border-white/5">
                    <Terminal size={12} className="text-orange-500/80" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentStep.file}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentStep.file}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] font-mono uppercase tracking-wider hidden sm:flex">
                  <Coffee size={12} />
                  <span>Production Environment</span>
                </div>
              </div>

              {/* Terminal Workspace Interactive Output Pre Block */}
              <div className="p-6 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto overflow-y-auto flex-grow h-0 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="w-full h-full"
                  >
                    <pre className="text-zinc-300 bg-transparent selection:bg-orange-500 selection:text-black">
                      <code>{currentStep.code}</code>
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Console Status System Footer Bar Indicator */}
              <div className="px-5 py-3.5 border-t border-white/5 bg-zinc-900/20 flex items-center justify-between font-mono text-[10px] text-zinc-500 shrink-0">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  SYSTEM: STANDBY_READY
                </span>
                <span>UTF-8 // LANG_CONFIG</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}