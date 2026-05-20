import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);

  // Hook scroll updates for the continuous horizontal tracking effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // --- SCROLL PARALLAX (Text shifts horizontally past each other on scroll) ---
  const trackLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const trackRightX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  
  // Fade out background elements seamlessly
  const structuralOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const cubicEase = [0.16, 1, 0.3, 1]; // Ultra responsive, snapping deceleration ease

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#030303] text-white overflow-hidden flex flex-col justify-between pt-12 pb-12 select-none"
    >
      {/* BACKGROUND: Immersive glowing core layout */}
     

      {/* ──────────────────────────────────────────────────────────── */}
      {/* NAVIGATION BAR LAYER */}
      {/* ──────────────────────────────────────────────────────────── */}
      <header className="w-full px-[6vw] relative z-20 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: cubicEase }}
          className="font-sans font-bold tracking-tight text-lg flex items-center gap-2"
        >
          <span className="text-[#ff5a28] text-xl">●</span> RAO STUDIO
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: cubicEase, delay: 0.1 }}
          className="font-mono text-xs text-zinc-500 tracking-wider uppercase border border-zinc-800 rounded-full px-4 py-1.5 bg-black/40 backdrop-blur-sm"
        >
          Available for Projects —
        </motion.div>
      </header>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* CORE TYPOGRAPHY LAYER (Left / Right Fly-In Mechanics) */}
      {/* ──────────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ scale: heroScale }}
        className="w-full relative z-10 my-auto flex flex-col gap-2 md:gap-0"
      >
        {/* LINE 1: Fly in from absolute LEFT screen boundary */}
        <div className="overflow-hidden w-full whitespace-nowrap py-1">
          <motion.div style={{ x: trackLeftX }} className="w-full">
            <motion.h1
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: cubicEase, delay: 0.1 }}
              className="text-[clamp(38px,9vw,150px)] font-black tracking-tighter uppercase leading-[0.85] text-left px-[6vw]"
            >
              Architecting
            </motion.h1>
          </motion.div>
        </div>

        {/* LINE 2: Fly in from absolute RIGHT screen boundary */}
        <div className="overflow-hidden w-full whitespace-nowrap py-1">
          <motion.div style={{ x: trackRightX }} className="w-full flex justify-end">
            <motion.h1
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: cubicEase, delay: 0.25 }}
              className="text-[clamp(38px,9vw,150px)] font-serif font-light italic tracking-tight text-right text-zinc-400 px-[6vw] flex items-center gap-4"
            >
              <span className="font-sans font-black not-italic text-[#ff5a28] mr-2">/</span>
              Next-Gen
            </motion.h1>
          </motion.div>
        </div>

        {/* LINE 3: Fly in from absolute LEFT screen boundary */}
        <div className="overflow-hidden w-full whitespace-nowrap py-1">
          <motion.div style={{ x: trackLeftX }} className="w-full">
            <motion.h1
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: cubicEase, delay: 0.4 }}
              className="text-[clamp(38px,9vw,150px)] font-black tracking-tighter uppercase leading-[0.85] text-left px-[6vw]"
            >
              Deployments.
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FOOTER METADATA LAYER */}
      {/* ──────────────────────────────────────────────────────────── */}
      <footer className="w-full px-[6vw] relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-t border-zinc-900/60 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cubicEase, delay: 0.6 }}
          className="font-mono text-zinc-600 text-xs tracking-widest uppercase flex flex-col gap-1"
        >
          <span>[ CREATIVE ENGINEERING ]</span>
          <span className="text-zinc-500">MERN // INTERACTIVE SYSTEM ARCHITECTURE</span>
        </motion.div>

        {/* Clean visual slider scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 text-xs font-mono text-zinc-400 group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-zinc-500">Slide Down</span>
          <div className="w-12 h-px bg-zinc-800 relative overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-4 bg-[#ff5a28]"
            />
          </div>
        </motion.div>
      </footer>
    </section>
  );
}