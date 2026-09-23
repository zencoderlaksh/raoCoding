import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Bot,
  GraduationCap,
  Users2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Code,
    title: "Client & Business Tech Solutions",
    subtitle: "Custom Engineering for Diverse Business Problems",
    desc: "From early-stage startups to established enterprises, we diagnose specific operational and business bottlenecks, engineering robust, end-to-end software platforms, SaaS architectures, and customer-facing digital ecosystems.",
    points: [
      "Custom Web & Cross-Platform Mobile Apps",
      "Scalable Cloud & Microservices Backend",
      "API Integrations & Payment Infrastructure",
      "High-Load Production Reliability & Security",
    ],
    link: "/client",
    linkText: "View Client Services",
    badge: "Enterprise Solutions",
  },
  {
    icon: Bot,
    title: "Applied AI & Intelligent Automation",
    subtitle: "Turn Data & Models Into Measurable Business ROI",
    desc: "We build specialized AI-driven tools, autonomous agent workflows, LLM copilots, and intelligent data automation to eliminate repetitive friction, drive cost efficiency, and create real market advantage.",
    points: [
      "Custom LLM & Generative AI Solutions",
      "Intelligent Document Processing & Search",
      "Workflow Automation & Smart Integrations",
      "Predictive Analytics & Recommendation Engines",
    ],
    link: "/client",
    linkText: "Explore AI Capabilities",
    badge: "AI & Innovation",
  },
  {
    icon: GraduationCap,
    title: "Campus & College Workshops",
    subtitle: "Bridging Academics With Industry-Standard Engineering",
    desc: "We partner with universities and technical colleges to conduct experiential, project-based workshops and hackathons, exposing thousands of students to real-world software development and industry practices.",
    points: [
      "Hands-On Full-Stack & AI Masterclasses",
      "Intensive 2-3 Day Hackathons & Sprints",
      "Live Production Project Builds",
      "Career Guidance & Direct Placement Pipelines",
    ],
    link: "/meeting",
    linkText: "Request Campus Workshop",
    badge: "Campus Enablement",
  },
  {
    icon: Users2,
    title: "Corporate Technical Training",
    subtitle: "Upskilling Engineering Teams to Modern Workflows",
    desc: "We deliver structured, intensive training modules tailored to corporate tech teams looking to modernize their tech stacks, adopt cloud-native patterns, or accelerate AI tool adoption.",
    points: [
      "Modern Stack Migration & Best Practices",
      "Enterprise Full-Stack Architecture",
      "DevOps, Docker & Cloud Native Workflows",
      "AI-Assisted Developer Productivity",
    ],
    link: "/meeting",
    linkText: "Inquire for Enterprise Training",
    badge: "Workforce Upskilling",
  },
];

export default function CorePillarsSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            What Powers Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Core Pillars of Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Delivering high-caliber engineering to organizations, and empowering educational ecosystems with practical, modern capability.
          </p>
        </div>

        {/* 2x2 Grid of Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#090909] border border-white/10 hover:border-orange-500/40 hover:bg-[#0c0c0c] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-300">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-orange-400/90 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-orange-400 transition-colors"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
