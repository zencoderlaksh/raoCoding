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
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Capstones & Real Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight px-1">
            Real-World Projects.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Not Toy Assignments.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Hiring managers don't care about generic to-do apps. Our students graduate with complex, deployment-ready software systems with clean Git histories and measurable performance.
          </p>
        </div>

        {/* React Bits AccordionGallery Interactive Component */}
        <div className="w-full mb-16 sm:mb-24 overflow-hidden">
          <div className="text-xs sm:text-sm uppercase tracking-widest text-orange-400/80 font-semibold mb-4 sm:mb-5 text-center flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-orange-400" />
            <span>Interactive Capstone Visual Gallery (Hover or Tap to Expand)</span>
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

        {/* Project Cards Grid with About-Page Spotlight Animation */}
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
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#090909] hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 p-0 overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-zinc-950 border-b border-white/10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent pointer-events-none" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 flex items-center gap-2">
                  <span className="font-semibold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs uppercase tracking-wider bg-black/80 text-orange-400 border border-orange-500/30 backdrop-blur-md shadow-lg">
                    {proj.badge}
                  </span>
                </div>
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10 font-black text-xs sm:text-sm text-white/30">
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
                      "radial-gradient(350px circle at var(--mx,0px) var(--my,0px), rgba(255,90,40,0.12), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-8 h-[2px] bg-orange-500/40 group-hover:bg-orange-500 transition-colors duration-500 mb-5 sm:mb-6" />

                  <span className="text-xs sm:text-sm uppercase tracking-widest text-orange-400 font-semibold block mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="relative z-10 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-500">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/10"
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
