import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import portraitIndexMoney from "@/assets/portrai_index_money.png"
import { useNavigate } from "react-router-dom";

const ARCHIVE = [
  // { id: "01", title: "FinTech", category: "Web Design / Next.js", year: "2025", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" },
  { id: "01", title: "Fresh Belly", category: "Web Design / Next.js", year: "2025", img: "https://freshbelly.netlify.app/assets/Glass-me40kAFO.png", projectLink: "https://freshbelly.netlify.app/" },
  // { id: "02", title: "Nova Wearable", category: "E-Commerce / Shopify", year: "2025", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop" },
  { id: "02", title: "Sucha", category: "E-Commerce / Shopify", year: "2025", img: "https://sucha.netlify.app/assets/l1-DsGXrqKZ.png", projectLink: "https://sucha.netlify.app/" },
  // { id: "03", title: "Quantum AI", category: "SaaS Dashboard Development", year: "2024", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  { id: "03", title: "Mini Me Clothing", category: "E-Commerce ", year: "2024", img: "https://theminimeclothing.netlify.app/assets/home-DuCpc2eD.avif", projectLink: "https://theminimeclothing.netlify.app/" },
  // { id: "04", title: "Vortex Agency", category: "Creative Branding Portfolio", year: "2024", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop" },
  { id: "04", title: "Index Money", category: "Creative Branding Portfolio", year: "2024", img: portraitIndexMoney, projectLink: "https://indexmoney.in/" },
];

export default function PreviousProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  // Track absolute cursor coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the cursor position matching lags
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Offset the coordinates so the preview frame is perfectly centered on the cursor path
    mouseX.set(e.clientX - 150);
    mouseY.set(e.clientY - 200);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white px-[6vw] py-32 border-t border-zinc-900"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
        <div>
          <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28] block mb-3">
            ▣ ARCHIVE
          </span>
          <h2 className="text-[clamp(36px,5vw,80px)] font-light tracking-[-0.03em] leading-none">
            Previous <em>Releases.</em>
          </h2>
        </div>
        <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed">
          A selected index of fully engineered architectural deployments built over the past deployment cycles.
        </p>
      </div>

      {/* INTERACTIVE LIST BLOCK */}
      <div className="relative border-t border-zinc-800">
        {ARCHIVE.map((project, idx) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex justify-between items-center py-8 md:py-12 border-b border-zinc-800 cursor-pointer transition-colors duration-300"
            onClick={() => window.open(project.projectLink, "_blank")}
          >
            {/* Soft backdrop highlight on line items */}
            <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition-colors duration-500 pointer-events-none -z-10" />

            <div className="flex items-center gap-6 md:gap-12 transition-transform duration-500 group-hover:translate-x-4">
              <span className="font-mono text-xs text-zinc-600 group-hover:text-[#ff5a28] transition-colors duration-300">
                {project.id}
              </span>
              <h3 className={`text-[clamp(24px,3.5vw,54px)] font-light tracking-[-0.02em] transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== idx ? "opacity-30" : "opacity-100"
                }`}>
                {project.title}
              </h3>
            </div>

            <div className={`flex items-center gap-12 text-sm font-light text-zinc-500 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== idx ? "opacity-30" : "opacity-100"
              }`}>
              <span className="hidden md:inline text-zinc-400 font-mono text-[13px]">{project.category}</span>
              <span className="font-mono text-zinc-600">{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* DYNAMIC FLOATING IMAGE FOLLOWER */}
      <motion.div
        style={{
          left: imageX,
          top: imageY,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 50,
        }}
        className="w-[300px] h-[400px] rounded-2xl overflow-hidden hidden lg:block origin-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: hoveredIndex !== null ? 1 : 0,
          opacity: hoveredIndex !== null ? 1 : 0,
          rotate: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? 4 : -4) : 0
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <div className="w-full h-full relative bg-zinc-900">
          {ARCHIVE.map((project, idx) => (
            <img
              key={project.id}
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{
                opacity: hoveredIndex === idx ? 1 : 0,
                transform: hoveredIndex === idx ? "scale(1)" : "scale(1.1)",
                transition: "opacity 0.4s ease, transform 0.6s ease"
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}