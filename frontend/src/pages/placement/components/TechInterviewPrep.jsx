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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            In-Depth Engineering Competence
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Technical Interview{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Preparation Modules.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            We prepare you for the actual questions, machine coding rounds, and system discussions asked by top engineering panels. Click any module to preview real questions.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isExpanded = expandedCard === mod.id;

            return (
              <SpotlightCard
                key={mod.id}
                spotlightColor="rgba(249, 115, 22, 0.2)"
                className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.18)] hover:border-orange-500/40 transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs uppercase font-bold tracking-wider text-orange-400/80 block mb-1">
                    {mod.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-5 group-hover:text-orange-400 transition-colors">
                    {mod.title}
                  </h3>

                  <div className="space-y-3 pt-4 border-t border-white/5 mb-6">
                    {mod.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Question Preview Expandable */}
                <div className="border-t border-white/5 pt-4">
                  <button
                    onClick={() => toggleExpand(mod.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors py-1 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      {isExpanded ? "Hide Real Interview Question" : "Preview Real Interview Question"}
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
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs"
                      >
                        <span className="font-bold text-orange-300 block mb-1">
                          Example Question:
                        </span>
                        <p className="text-neutral-300 mb-2 italic">
                          "{mod.sampleQuestion}"
                        </p>
                        <span className="font-bold text-neutral-400 block mb-0.5">
                          How RAO Prepares You:
                        </span>
                        <p className="text-neutral-400">
                          {mod.solutionInsight}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
