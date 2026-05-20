// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // INTERACTIVE CHILD CARD COMPONENT
// function QuoteCard({ q, i }) {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Dynamically tracks local cursor coordinates across the card surface
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-10%" }}
//       transition={{
//         duration: 0.8,
//         delay: i * 0.15,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -8 }}
//       onMouseMove={handleMouseMove}
//       className="group relative overflow-hidden rounded-[28px] border border-zinc-900 bg-[#0c0c0c] p-8 md:p-10 flex flex-col justify-between transition-colors duration-500 hover:border-zinc-800 min-h-[340px]"
//     >
//       {/* 1. CURSOR SPOTLIGHT TRACK: Soft brand-tint glow behind text layers */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
//         style={{
//           background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 90, 40, 0.07), transparent 80%)`,
//         }}
//       />

//       {/* 2. BACKGROUND WATERMARK: Oversized graphic quotation glyph */}
//       <div className="absolute -top-6 -right-2 text-[180px] font-serif font-bold text-zinc-900/20 select-none pointer-events-none leading-none z-0 group-hover:text-[#ff5a28]/5 transition-colors duration-700">
//         “
//       </div>

//       {/* CARD CONTENT BODY */}
//       <div className="relative z-10">
//         {/* Minimal dynamic color anchor bar */}
//         <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-8" />

//         <p className="text-[20px] md:text-[22px] leading-[1.6] font-light text-zinc-300 group-hover:text-white transition-colors duration-300 tracking-tight font-serif italic">
//           “{q.q}”
//         </p>
//       </div>

//       {/* CARD FOOTER META */}
//       <div className="relative z-10 mt-12 flex items-center justify-between border-t border-zinc-900/80 pt-6 group-hover:border-zinc-800/60 transition-colors duration-500">
//         <div>
//           <strong className="block text-base font-normal text-zinc-200 tracking-tight group-hover:text-white transition-colors duration-300">
//             {q.a}
//           </strong>
//           <span className="text-xs font-mono tracking-wider text-zinc-500 mt-1 block uppercase">
//             {q.r}
//           </span>
//         </div>

//         {/* Architectural layout metric tracking number */}
//         {/* <span className="text-zinc-800 group-hover:text-zinc-600 text-xs font-mono transition-colors duration-500">
//           // 0{i + 1}
//         </span> */}
//       </div>
//     </motion.div>
//   );
// }

// // MAIN LAYOUT GRID ENTRY POINT
// export default function QuotesGrid() {
//     const QUOTES = [
//     {
//       q: "RAO transformed our entire product experience.",
//       a: "Maya Iyer",
//       r: "Head of Product",
//     },
//     {
//       q: "Incredible design quality and execution.",
//       a: "Leon Hart",
//       r: "Founder",
//     },
//     {
//       q: "One of the best studios we've worked with.",
//       a: "Sara Okwu",
//       r: "CMO",
//     },
//   ];
//   return (
//     <div className="md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//       {QUOTES.map((q, i) => (
//         <QuoteCard key={q.a} q={q} i={i} />
//       ))}
//     </div>
//   );
// }



// next

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DATA = [
  {
    num: "// 01",
    quote: "RAO transformed our entire product experience, altering how our global ecosystem interfaces with data.",
    author: "Maya Iyer",
    role: "Head of Product, FinTech Core",
    align: "start"
  },
  {
    num: "// 02",
    quote: "Incredible architectural execution. Their team engineered a design system that feels alive, fluid, and unmatched.",
    author: "Leon Hart",
    role: "Founder, Nova Ecosystems",
    align: "center"
  },
  {
    num: "// 03",
    quote: "One of the most visually dominant design studios operating today. Absolute mastery over digital engineering.",
    author: "Sara Okwu",
    role: "CMO, Quantum Systems",
    align: "end"
  },
];

export default function HyperSpatialStage() {
  const stageRef = useRef(null);

  // Raw cursor values tracked relative to center screen
  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);

  // High-performance spring configurations for liquid-smooth deceleration
  const springConfig = { damping: 35, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(xValue, springConfig);
  const smoothY = useSpring(yValue, springConfig);

  // Map mouse positions to global canvas tilt rotations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  
  // Inverse tracking for background structural depth elements
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    
    // Normalize values precisely between -0.5 and 0.5
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    xValue.set(normalizedX);
    yValue.set(normalizedY);
  };

  const handleMouseLeave = () => {
    xValue.set(0);
    yValue.set(0);
  };

  return (
    <section
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#050505] text-white  px-[6vw] overflow-hidden flex flex-col justify-center perspective-[1500px] select-none"
    >
      {/* ──────────────────────────────────────────────────────────── */}
      {/* DEEP INTERACTIVE BACKGROUND SHADERS */}
      {/* ──────────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }} 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
      >
        {/* Dynamic chromatic ambient lens */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,90,40,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_60%)] blur-[60px]" />
        
        {/* Generative technical crosshair matrix */}
        <div className="w-full h-full opacity-10 border-x border-y border-zinc-800 absolute inset-[10vw]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-800" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-zinc-800" />
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* TITLED 3D INTERACTIVE CANVAS BLOCK */}
      {/* ──────────────────────────────────────────────────────────── */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full relative z-10 flex flex-col gap-16 md:gap-24"
      >
        {/* STAGE HEADER METRICS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-10" style={{ transform: "translateZ(40px)" }}>
          <div>
          
            <h2 className="text-[clamp(32px,4vw,64px)] font-light font-serif tracking-tight leading-none text-zinc-400">
              Selected <em className="text-white not-italic font-sans font-normal font-light">Ecosystem Voices.</em>
            </h2>
          </div>
        </div>

        {/* ASYMMETRICAL COLUMN TESTIMONIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start w-full">
          {DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.4, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ translateZ: 50, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`group flex flex-col w-full bg-[#0a0a0a]/60 border border-zinc-900/60 rounded-[32px] p-8 md:p-10 min-h-[400px] justify-between relative overflow-hidden transition-all duration-700 hover:border-zinc-800 hover:bg-[#0e0e0e]/90`}
            >
              {/* Dynamic Prismatic Backlighting inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(250px_circle_at_var(--mx,0px)_var(--my,0px),rgba(255,90,40,0.04),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                   onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                     e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                   }}
              />

              {/* CARD ACCENT TOPPER */}
              <div className="flex justify-between items-center" style={{ transform: "translateZ(30px)" }}>
                <span className="font-mono text-xs tracking-widest text-[#ff5a28]/60 group-hover:text-[#ff5a28] transition-colors duration-500">
                  {item.num}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-[#ff5a28] transition-all duration-500 group-hover:scale-125" />
              </div>

              {/* TESTIMONIAL VERBIAGE LAYER */}
              <div className="my-10" style={{ transform: "translateZ(60px)" }}>
                <p className="text-[20px] md:text-[23px] font-light leading-[1.65] tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500 font-sans">
                  “{item.quote}”
                </p>
              </div>

              {/* SIGNATURE PANEL */}
              <div className="border-t border-zinc-900/80 pt-6 flex flex-col gap-1" style={{ transform: "translateZ(40px)" }}>
                <strong className="text-base font-normal tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {item.author}
                </strong>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">
                  {item.role}
                </span>
              </div>

              {/* Massive subtle background geometric accent inside card */}
              <div className="absolute -bottom-10 -right-4 font-serif text-[140px] font-bold text-white/[0.01] pointer-events-none group-hover:text-[#ff5a28]/[0.02] select-none transition-all duration-1000 group-hover:scale-110">
                //
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* PERSPECTIVE CALIBRATION BAR GRAPHIC */}
      {/* ──────────────────────────────────────────────────────────── */}
      
    </section>
  );
}