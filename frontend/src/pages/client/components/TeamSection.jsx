import React from "react";
import { motion } from "framer-motion";

import img1 from "../../../assets/k1.jpeg";
import img2 from "../../../assets/Founder.jpeg";
import img3 from "../../../assets/s1.jpeg";

const TEAM = [
  { name: "Kritika Bhawnani", role: "Creative Director", img: img1 },
  { name: "Laksh Yadav", role: "Lead Engineer", img: img2 },
  { name: "Shubham Jhakhar", role: "UX Architect", img: img3 },
];

export default function TeamSection() {
  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-black text-white px-[6vw] py-32 border-t border-zinc-900 overflow-hidden">
      
      {/* GRID DECORATOR */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* SECTION TOPPER */}
      <div className="mb-24 text-center md:text-left">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28] block mb-3">
          ▣ MINDS
        </span>
        <h2 className="text-[clamp(36px,5vw,80px)] font-light tracking-[-0.03em] leading-none">
          The Core <em>Operators.</em>
        </h2>
      </div>

      {/* CARD GRID ASSEMBLY */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {TEAM.map((member, index) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="group relative flex flex-col w-full"
          >
            {/* PORTRAIT BOX */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-zinc-900 mask-container">
              
              {/* Dynamic Image Overlay Shader */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.25,1,0.5,1]"
              />

              {/* FLOATING ACTION LINK */}
              <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 scale-70 group-hover:scale-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-mono text-lg shadow-xl cursor-pointer hover:bg-[#ff5a28] hover:text-white transition-colors duration-300">
                  ↗
                </div>
              </div>
            </div>

            {/* DESCRIPTION LAYER */}
            <div className="mt-6 px-2 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-light tracking-tight text-white group-hover:text-[#ff5a28] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-light text-zinc-500 mt-1 font-mono">
                  {member.role}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-700 pt-1">
                // 0{index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}