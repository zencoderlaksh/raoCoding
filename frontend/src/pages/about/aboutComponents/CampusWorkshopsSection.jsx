import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
  Compass,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const workshopHighlights = [
  {
    icon: Rocket,
    title: "Hands-on Code Sprints & Hackathons",
    desc: "We ditch dry theory. Students build complete, deployed full-stack and AI applications within 48 to 72 hours under live guidance.",
  },
  {
    icon: Compass,
    title: "Industry-Aligned Curriculum",
    desc: "Directly addressing the gap between college coursework and what tech companies actually hire for in production engineering.",
  },
  {
    icon: Users,
    title: "Corporate & Enterprise Enablement",
    desc: "Upskilling corporate teams on modern engineering best practices, microservice patterns, and AI-accelerated workflows.",
  },
  {
    icon: Trophy,
    title: "Direct Placement & Mentorship Pipelines",
    desc: "Top workshop performers receive portfolio reviews, direct interview opportunities, and industry referrals.",
  },
];

const programFormats = [
  {
    badge: "For Universities & Colleges",
    name: "Campus Intensive Bootcamps",
    duration: "2 to 5 Days • On-Campus or Hybrid",
    points: [
      "Full-Stack Development (React, Node.js, Spring Boot)",
      "Applied Generative AI & Agent Workflows",
      "Git, System Architecture & Production Deployment",
      "Live Hackathon with Cash Prizes & Certificates",
    ],
  },
  {
    badge: "For Companies & Enterprises",
    name: "Corporate Engineering Upskilling",
    duration: "Custom Sprints • Tailored Modules",
    points: [
      "Modernizing Legacy Stacks to Microservices",
      "Implementing AI Assistants & Internal Copilots",
      "Cloud Native CI/CD & DevOps Automation",
      "High-Performance API & Database Optimization",
    ],
  },
];

export default function CampusWorkshopsSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Workshops & Enablement
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Empowering Campuses & Tech Teams
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Education meets industry reality. We conduct immersive campus programs across leading engineering institutions and deliver high-impact corporate training for tech organizations.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workshopHighlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090909] border border-white/5 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{hl.title}</h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2 Formats Cards (Colleges vs Corporates) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programFormats.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0b0b0b] border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-4">
                  {prog.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {prog.name}
                </h3>
                <p className="text-sm font-medium text-neutral-400 mb-6">
                  {prog.duration}
                </p>

                <div className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {prog.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/meeting"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-black border border-white/10 hover:border-orange-500 text-white font-semibold text-sm transition-all duration-300"
                >
                  <span>Schedule Consultation for Your Organization</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
