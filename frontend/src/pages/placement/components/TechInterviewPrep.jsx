import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Server,
  Database,
  GitPullRequest,
  Cpu,
  CheckCircle2,
  Layers,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";

const modules = [
  {
    id: "js",
    icon: Code2,
    title: "JavaScript & Engine Internals",
    subtitle: "Under-The-Hood Mechanics",
    topics: [
      "Event loop, microtasks & macrotasks queue",
      "Closures, lexical scoping & memory leaks",
      "Prototypes, prototype chain & ES6 classes",
      "Promises, async/await & concurrency handling",
      "Polyfills for Map, Filter, Reduce & Bind",
    ],
    sampleQuestion: "Write a custom Promise.allSettled polyfill and explain how the microtask queue schedules its settlement callbacks.",
    solutionInsight: "We teach students how the V8 engine manages execution contexts so they can write polyfills from scratch on a whiteboard.",
  },
  {
    id: "react",
    icon: Layers,
    title: "React Architecture & Performance",
    subtitle: "Frontend Machine Coding",
    topics: [
      "Virtual DOM & Reconciliation (Fiber architecture)",
      "Hook rules & custom hook abstractions",
      "Rendering optimization (useMemo, useCallback, React.memo)",
      "State management patterns & context tradeoffs",
      "Building complex interactive UI under time constraints",
    ],
    sampleQuestion: "Build an infinite-scroll autocomplete dropdown with debounced search, keyboard navigation, and zero memory leaks.",
    solutionInsight: "Students practice building production widgets under a strict 45-minute live timer with real-time mentor critique.",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend & System Design Basics",
    subtitle: "Scalable Web Architecture",
    topics: [
      "RESTful API design & idempotent HTTP methods",
      "JWT vs Session auth & secure cookie storage",
      "Rate limiting, Helmet security & input sanitization",
      "Database indexing, joins vs aggregation pipelines",
      "Basic caching strategies with Redis & CDNs",
    ],
    sampleQuestion: "Design a secure payment webhook receiver that prevents replay attacks and handles out-of-order deliveries.",
    solutionInsight: "Students implement idempotent transaction logs and cryptographic HMAC signature verification in Node.js.",
  },
  {
    id: "dsa",
    icon: Terminal,
    title: "Data Structures & Algorithms",
    subtitle: "Problem Solving Mastery",
    topics: [
      "Two pointers, sliding window & prefix sums",
      "Hash maps & fast lookup frequency counters",
      "Binary trees, BFS, DFS & tree traversals",
      "Sorting, searching & binary search variations",
      "Time & space complexity (Big-O analysis)",
    ],
    sampleQuestion: "Given a stream of real-time server timestamps and request counts, find the sliding window with maximum request rate.",
    solutionInsight: "We drill 15 core algorithmic patterns instead of memorizing 500 disconnected LeetCode problems.",
  },
  {
    id: "defense",
    icon: GitPullRequest,
    title: "Project Defense & Deep-Dive",
    subtitle: "Defending Architectural Decisions",
    topics: [
      "How to articulate technical choices and trade-offs",
      "Explaining state architecture and component trees",
      "Handling edge-cases and third-party API failures",
      "Addressing scalability and database bottlenecks",
      "Live walkthrough of clean GitHub repositories",
    ],
    sampleQuestion: "Why did you choose MongoDB over PostgreSQL for your capstone? What were the latency and consistency trade-offs?",
    solutionInsight: "We grill students in project mock sessions so they never sound rehearsed or caught off-guard.",
  },
  {
    id: "machine-coding",
    icon: Cpu,
    title: "Live Machine Coding Simulation",
    subtitle: "Timed Development Drills",
    topics: [
      "Building a complete mini-feature in 60 minutes",
      "Structuring code for readability & modularity",
      "Writing unit tests & validating edge cases",
      "Pair programming communication with interviewers",
      "Debugging under pressure without AI crutches",
    ],
    sampleQuestion: "Implement a collaborative Kanban board with drag-and-drop state updates and optimistic UI rollback on error.",
    solutionInsight: "Simulates actual Uber/Swiggy machine coding rounds with strict code quality rubrics.",
  },
];

export default function TechInterviewPrep() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ SYLLABUS // 01-06
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            Technical Interview{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Preparation Modules.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            We prepare you for the actual questions, machine coding rounds, and system discussions asked by top engineering panels. Click any module to preview real questions.
          </p>
        </div>

        {/* Modules Grid with Interactive Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isExpanded = expandedCard === mod.id;

            return (
              <motion.div
                key={mod.id}
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
                className="group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[28px] md:rounded-[30px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[auto] sm:min-h-[400px]"
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
                  {/* Color Accent Bar */}
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-5 sm:mb-6" />

                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a28] group-hover:scale-110 group-hover:bg-[#ff5a28]/10 group-hover:border-[#ff5a28]/30 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-zinc-600 group-hover:text-[#ff5a28]/70 transition-colors">
                      // 0{idx + 1}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 block mb-1.5 sm:mb-2">
                    {mod.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light tracking-tight text-white mb-4 sm:mb-6 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {mod.title}
                  </h3>

                  <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-500 mb-5 sm:mb-6">
                    {mod.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a28] flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Question Preview Expandable */}
                <div className="relative z-10 border-t border-zinc-900 pt-3 sm:pt-4">
                  <button
                    onClick={() => toggleExpand(mod.id)}
                    className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400 hover:text-[#ff5a28] transition-colors py-1 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#ff5a28] flex-shrink-0" />
                      <span className="truncate">{isExpanded ? "Hide Real Interview Question" : "Preview Real Question"}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden mt-3 p-4 rounded-2xl bg-black/60 border border-zinc-800 text-xs"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff5a28] block mb-1">
                          Example Question:
                        </span>
                        <p className="text-zinc-200 mb-3 font-serif italic">
                          "{mod.sampleQuestion}"
                        </p>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-0.5">
                          How RAO Prepares You:
                        </span>
                        <p className="text-zinc-400 font-light leading-relaxed">
                          {mod.solutionInsight}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
