import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SpotlightCard from "../../../components/SpotlightCard";
import AccordionGallery from "../../../components/AccordionGallery";

import realProjectImg from "../../../assets/real_project_img.png";
import ecommerceImg from "../../../assets/E-commerce.png";
import webDevImg from "../../../assets/Web Development.png";
import indexMoneyImg from "../../../assets/index_money_project.png";
import brandStrategyImg from "../../../assets/Brand-Strategy.png";

const galleryItems = [
  { image: realProjectImg, label: "Enterprise SaaS Platform", link: "#" },
  { image: ecommerceImg, label: "E-Commerce Payment Engine", link: "#" },
  { image: indexMoneyImg, label: "AI Developer Workspace", link: "#" },
  { image: webDevImg, label: "Modern Web Platform", link: "#" },
  { image: brandStrategyImg, label: "Full-Stack System", link: "#" },
];

const projects = [
  {
    title: "Multi-Tenant Enterprise SaaS",
    category: "Full-Stack & Cloud Architecture",
    description: "A production-grade organizational management system featuring role-based access control, analytics pipelines, webhook handling, and real-time alerts.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "Clerk Auth", "Tailwind CSS"],
    image: realProjectImg,
    badge: "Enterprise Grade",
  },
  {
    title: "High-Scale E-Commerce Engine",
    category: "Payment Workflows & Performance",
    description: "Complete checkout flow with automated invoice generation, payment gateway integration, product inventory management, and fast faceted search.",
    tech: ["React", "Express", "Dodo Payments", "Cloudinary", "Zod", "MongoDB"],
    image: ecommerceImg,
    badge: "FinTech & Payments",
  },
  {
    title: "AI-Augmented Developer Workspace",
    category: "Applied AI & Automation",
    description: "Collaborative developer tool integrating LLM code analysis, automated documentation generators, and GitHub webhook event ingestion.",
    tech: ["Node.js", "OpenAI API", "React", "Vector Embeddings", "WebSockets"],
    image: indexMoneyImg,
    badge: "Applied AI",
  },
  {
    title: "Responsive Digital Platform",
    category: "Frontend Performance & UX",
    description: "Sub-second loading web architecture with interactive canvas graphics, smooth fluid animations, and accessibility optimization.",
    tech: ["React 19", "Vite", "Framer Motion", "Tailwind CSS 4", "SEO"],
    image: webDevImg,
    badge: "Performance & UI",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Client Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5a28] inline-flex items-center gap-2 mb-3">
            ▣ CAPSTONES // REAL ARCHITECTURE
          </span>
          <h2 className="text-[clamp(28px,4.5vw,68px)] font-light text-white tracking-[-0.03em] leading-tight px-1">
            Real-World Projects.{" "}
            <em className="font-serif italic font-light text-zinc-400 not-italic">
              Not Toy Assignments.
            </em>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Hiring managers don't care about generic to-do apps. Our students graduate with complex, deployment-ready software systems with clean Git histories and measurable performance.
          </p>
        </div>

        {/* React Bits AccordionGallery Interactive Component */}
        <div className="w-full mb-16 sm:mb-24 overflow-hidden">
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 mb-4 sm:mb-5 text-center">
            Interactive Capstone Visual Gallery (Hover or Tap to Expand)
          </div>
          <div className="w-full h-[520px] sm:h-[460px]">
            <AccordionGallery
              items={galleryItems}
              defaultIndex={0}
              height={460}
              radius={24}
              gap={12}
              accentColor="#ff5a28"
              overlayColor="#050505"
              textColor="#ffffff"
              grayscale={false}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Project Cards Grid with Client-Page Spotlight Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.8,
                delay: (idx % 2) * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
              }}
              className="group relative rounded-2xl sm:rounded-[32px] border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-zinc-800 transition-colors duration-500 p-0 overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-zinc-950 border-b border-zinc-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent pointer-events-none" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 flex items-center gap-2">
                  <span className="font-mono px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider bg-black/70 text-[#ff5a28] border border-zinc-800 backdrop-blur-md shadow-lg">
                    {proj.badge}
                  </span>
                </div>
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10 font-mono text-xs text-zinc-500">
                  // 0{idx + 1}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 md:p-10 flex-grow flex flex-col justify-between relative">
                {/* Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(350px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.08), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-[#ff5a28] transition-colors duration-500 mb-5 sm:mb-6" />

                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#ff5a28] block mb-1.5 sm:mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light tracking-tight text-white mb-2 sm:mb-3 group-hover:text-[#ff5a28] transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 group-hover:text-zinc-300 transition-colors">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="relative z-10 pt-6 border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors duration-500">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-zinc-400 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
