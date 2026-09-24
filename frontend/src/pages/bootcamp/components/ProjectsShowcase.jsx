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
    <section className="relative py-24 sm:py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-orange-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Real Production Proof
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Real-World Projects.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Not Toy Assignments.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Hiring managers don't care about generic to-do apps. Our students graduate with complex, deployment-ready software systems with clean Git histories and measurable performance.
          </p>
        </div>

        {/* React Bits AccordionGallery Interactive Component */}
        <div className="w-full mb-20">
          <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4 text-center">
            Interactive Capstone Visual Gallery (Hover to Expand)
          </div>
          <AccordionGallery
            items={galleryItems}
            defaultIndex={0}
            height={460}
            radius={20}
            gap={12}
            accentColor="#fb923c"
            overlayColor="#050505"
            textColor="#ffffff"
            grayscale={false}
            className="w-full"
          />
        </div>

        {/* Project Cards Grid with React Bits SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((proj, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(249, 115, 22, 0.25)"
              className="group border border-neutral-800 bg-[#0d0d0d] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_50px_-15px_rgba(249,115,22,0.2)] hover:border-orange-500/40 transition-all duration-300 p-0 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/90 text-white backdrop-blur-md shadow-lg">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase block mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-neutral-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
