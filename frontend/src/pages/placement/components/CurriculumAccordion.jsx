import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Box, GraduationCap, ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const MODULES = [
  {
    num: "01",
    title: "Advanced Data Systems & AI Interfacing",
    duration: "Weeks 1–4",
    techStack: ["Rust", "gRPC", "Vector DBs", "LLMs"],
    projects: "Build a distributed, high-throughput vector indexing database engine from scratch featuring customized similarity search functions.",
    interview: "Google Graph Traversal & Custom Structural Design Assessment Matrix"
  },
  {
    num: "02",
    title: "System Architecture at Multi-Million Scale",
    duration: "Weeks 5–8",
    techStack: ["Go", "Kafka", "Redis", "Kubernetes"],
    projects: "Design, stress-test, and deploy a real-time global telemetry bidding engine processing 500k distributed websocket actions per second.",
    interview: "Netflix System Architecture Board & Latency Degradation Analysis Round"
  },
  {
    num: "03",
    title: "Next-Gen Edge Infrastructure & Core DX",
    duration: "Weeks 9–12",
    techStack: ["TypeScript", "WebAssembly", "Docker", "AWS"],
    projects: "Engineer an isolated edge-runtime runtime environment capable of dynamic script parsing and automated geographical fallback routing.",
    interview: "Stripe Production Infrastructure Debugging Core Competency Drill"
  }
];

export default function CurriculumAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-32 bg-[#080808] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience matches the placement wall */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-orange-500 tracking-[0.3em] text-xs uppercase font-bold block mb-4">
            ◆ Syllabus Syllabus
          </span>
          <h2 
            className="text-4xl md:text-6xl font-light tracking-[-0.03em] leading-tight"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            What it takes to go <span className="italic text-orange-400">beyond senior.</span>
          </h2>
          <p className="text-zinc-500 mt-3 text-sm md:text-base max-w-xl">
            Skip the boilerplate tutorials. Deep dive into raw production systems, algorithmic primitives, and architecture standards trusted by global engineering hubs.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="border-t border-white/10">
          {MODULES.map((m, i) => {
            const isOpen = openIndex === i;

            return (
              <div 
                key={i} 
                className={`border-b border-white/10 transition-all duration-500 ${
                  isOpen ? "bg-zinc-900/10 backdrop-blur-sm" : "bg-transparent"
                }`}
              >
                {/* Header Row Trigger Button */}
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)} 
                  className="w-full flex items-center justify-between py-9 text-left group relative px-4 -mx-4 rounded-xl"
                >
                  <div className="flex items-center gap-6 md:gap-10 pr-4">
                    {/* Module Serial Marker */}
                    <span className="font-mono text-xs md:text-sm text-orange-500/60 font-bold bg-zinc-900/40 border border-white/5 px-2.5 py-1 rounded">
                      {m.num}
                    </span>
                    
                    {/* Title and Badge Meta Cluster */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg md:text-2xl text-zinc-300 group-hover:text-white font-medium tracking-tight transition-colors duration-300">
                        {m.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] font-mono tracking-wider text-zinc-500">
                        <span className="text-orange-400/80 font-semibold">{m.duration}</span>
                        <span>•</span>
                        <span className="hidden sm:inline">Core Production Track</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Premium Chevron Toggle Indicator */}
                  <div className={`h-10 w-10 rounded-full border border-white/5 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-orange-500 text-black border-orange-400 rotate-90 shadow-[0_0_15px_rgba(249,115,22,0.3)]" 
                      : "bg-zinc-900/40 text-zinc-400 group-hover:text-white group-hover:border-white/20"
                  }`}>
                    <ChevronRight size={16} className="stroke-[2.5]" />
                  </div>
                </button>

                {/* Smooth Animated Content Drawer Container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <div className="pb-10 pt-2 px-4 md:pl-20 pr-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        
                        {/* Left Info Module Column Block (Stack & Targets) */}
                        <div className="md:col-span-4 space-y-5">
                          {/* Technology Stack Matrix Badge Section */}
                          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl">
                            <div className="flex items-center gap-2 text-white font-mono text-[11px] uppercase tracking-wider mb-3">
                              <Layers size={13} className="text-orange-500" />
                              <span>Stack Inventory</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {m.techStack.map((tech) => (
                                <span key={tech} className="bg-zinc-900 border border-white/5 text-zinc-400 text-[10px] font-mono px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Targeted Placement Vector */}
                          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl">
                            <div className="flex items-center gap-2 text-orange-400 font-mono text-[11px] uppercase tracking-wider mb-2">
                              <GraduationCap size={14} />
                              <span>Vetting Target</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              {m.interview}
                            </p>
                          </div>
                        </div>

                        {/* Right Production Capstone Column Block */}
                        <div className="md:col-span-8 bg-zinc-900/20 border border-white/5 rounded-xl p-5 md:p-6 h-full flex flex-col justify-between relative group/card overflow-hidden">
                          {/* Top Card Icon Flare */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/[0.02] rounded-full blur-xl group-hover/card:bg-orange-500/[0.05] transition-colors duration-500" />
                          
                          <div>
                            <div className="flex items-center gap-2 text-white font-mono text-[11px] uppercase tracking-wider mb-3">
                              <Box size={13} className="text-orange-500" />
                              <span>Production Capstone Built</span>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                              {m.projects}
                            </p>
                          </div>

                          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                            <span>REVIEWS: SENIOR_STAFF</span>
                            <span className="text-orange-500/80">VERIFIED_PROD_DEPLOYMENT</span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}