import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  Code2,
  Layers,
  TrendingUp,
  X,
  Globe,
  LayoutGrid,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Building,
  ArrowRight,
} from 'lucide-react';

import SpotlightCard from '@/components/SpotlightCard';
import TiltedCard from '@/components/TiltedCard';
import DecryptedText from '@/components/DecryptedText';
import ShinyText from '@/components/ShinyText';
import portraitIndexMoney from '@/assets/portrai_index_money.png';

/* ─────────────────────────────────────────────
   CLIENT PROJECTS REPOSITORY
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: '01',
    title: 'Fresh Belly',
    category: 'Web Architecture',
    sector: 'Hospitality & FoodTech',
    year: '2025',
    img: 'https://freshbelly.netlify.app/assets/Glass-me40kAFO.png',
    projectLink: 'https://freshbelly.netlify.app/',
    domain: 'freshbelly.netlify.app',
    tagline: 'Ultra-fast glassmorphic dining storefront with real-time menu management & table booking.',
    description:
      'Engineered an ultra-responsive digital dining platform featuring bespoke glassmorphism aesthetics, dynamic sub-second menu filtering, and automated table reservation pipelines.',
    impactMetric: '+140% Orders',
    impactDetail: 'Online order conversions surged within 60 days of launch.',
    tags: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge'],
    accent: '#ff5a28',
    spotlight: 'rgba(255, 90, 40, 0.22)',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    clientQuote: 'RAO delivered a fluid digital storefront that our customers adore. Fast, gorgeous, and effortless to manage.',
  },
  {
    id: '02',
    title: 'SuchaMojo',
    category: 'E-Commerce',
    sector: 'Luxury Lifestyle & Fashion',
    year: '2025',
    img: 'https://sucha.netlify.app/assets/l1-DsGXrqKZ.png',
    projectLink: 'https://sucha.netlify.app/',
    domain: 'sucha.netlify.app',
    tagline: 'High-conversion headless lifestyle boutique with sub-second checkout & fluid motion.',
    description:
      'Bespoke headless fashion storefront built with sub-second checkout flows, fluid product visualizers, and seamless real-time inventory synchronization across multi-store channels.',
    impactMetric: '3.8x Conversion',
    impactDetail: 'Average checkout completion rate increased by 280%.',
    tags: ['Shopify Headless', 'React', 'GSAP', 'Tailwind CSS'],
    accent: '#eab308',
    spotlight: 'rgba(234, 179, 8, 0.22)',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    clientQuote: 'The speed, animations, and fluid shopping cart set our lifestyle brand leagues ahead of competitors.',
  },
  {
    id: '03',
    title: 'Index Money',
    category: 'FinTech',
    sector: 'Banking & WealthTech',
    year: '2024',
    img: portraitIndexMoney,
    projectLink: 'https://indexmoney.in/',
    domain: 'indexmoney.in',
    tagline: 'Institutional-grade wealth intelligence platform with real-time asset tracking.',
    description:
      'Enterprise wealth management and financial intelligence dashboard engineered with real-time portfolio analytics, high-frequency charts, and banking-grade encryption standards.',
    impactMetric: '₹50Cr+ AUM',
    impactDetail: 'Actively monitors tens of crores in client assets with zero downtime.',
    tags: ['React', 'TypeScript', 'Data Viz', 'Node.js', 'AWS Cloud'],
    accent: '#10b981',
    spotlight: 'rgba(16, 185, 129, 0.22)',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    clientQuote: 'Security and precision were our primary mandates. RAO delivered institutional excellence.',
  },
  {
    id: '04',
    title: 'Mini Me Clothing',
    category: 'E-Commerce',
    sector: 'Children Designer Apparel',
    year: '2024',
    img: 'https://theminimeclothing.netlify.app/assets/home-DuCpc2eD.avif',
    projectLink: 'https://theminimeclothing.netlify.app/',
    domain: 'theminimeclothing.netlify.app',
    tagline: 'Curated designer kids apparel web store with instant faceted search & Stripe checkout.',
    description:
      'Designed and deployed an intuitive mobile-first shopping experience featuring instant multi-facet filter indexing, custom wishlists, and seamless Stripe payment integration.',
    impactMetric: '+85% Retention',
    impactDetail: 'Mobile repeat customer purchase rate surged dramatically.',
    tags: ['React', 'Express.js', 'Stripe API', 'Responsive UX'],
    accent: '#06b6d4',
    spotlight: 'rgba(6, 182, 212, 0.22)',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    clientQuote: 'A dream shopping experience. The mobile responsiveness and filtering speed are unmatched.',
  },
  {
    id: '05',
    title: 'Third Eye Classes',
    category: 'EdTech',
    sector: 'Academic Portal & LMS',
    year: '2025',
    img: 'https://thirdeyecomputerclasses.netlify.app/assets/logo-C0Y020eR.webp',
    projectLink: 'https://thirdeyecomputerclasses.netlify.app/',
    domain: 'thirdeyecomputerclasses.netlify.app',
    tagline: 'Full-cycle education LMS portal with interactive modules and automated verification.',
    description:
      'Engineered an enterprise learning portal for academic coursework, student admissions, online testing, and verifiable automated certificate generation for thousands of students.',
    impactMetric: '10,000+ Students',
    impactDetail: 'Over 10,000 learners actively onboarded with digital credentials.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudflare'],
    accent: '#8b5cf6',
    spotlight: 'rgba(139, 92, 246, 0.22)',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    clientQuote: 'Centralized all our academic courses and certification workflows under one robust system.',
  },
  {
    id: '06',
    title: 'Porter Analytics',
    category: 'SaaS & AI',
    sector: 'Enterprise Intelligence',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    projectLink: 'https://rao.studio',
    domain: 'analytics.rao.studio',
    tagline: 'Next-gen telemetry and AI business dashboard with real-time stream processing.',
    description:
      'Cloud intelligence platform transforming complex enterprise telemetry into predictive executive visualizations with sub-50ms query speeds on massive real-time datasets.',
    impactMetric: '10M+ Events/Day',
    impactDetail: 'Handles continuous high-throughput streams with 99.99% availability.',
    tags: ['React', 'FastAPI', 'Python AI', 'Docker Containers'],
    accent: '#f43f5e',
    spotlight: 'rgba(244, 63, 94, 0.22)',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    clientQuote: 'Sub-second querying on millions of data points. Incredible architectural execution.',
  },
];

const CATEGORIES = ['All Projects', 'E-Commerce', 'FinTech', 'SaaS & AI', 'EdTech', 'Web Architecture'];

export default function ClientProjectHighlights() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'carousel'

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-black text-white overflow-hidden border-t border-zinc-900/80">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none -z-0" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* React Bits Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/[0.08] backdrop-blur-xl mb-5 shadow-lg shadow-orange-500/10">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-orange-400">
                PROVEN ARCHITECTURE
              </span>
              <span className="text-zinc-600">•</span>
              <ShinyText
                text="Client Releases"
                className="text-[11px] font-mono tracking-wider text-zinc-300"
                speed={3}
                shimmerColor="#ff9a5b"
              />
            </div>

            {/* Main Headline with Serif Accent */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-white">
              Featured Client <em className="font-serif italic text-orange-400">Highlights.</em>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
              A curated index of production platforms, enterprise digital architectures, and high-conversion commercial ecosystems engineered by RAO Technologies.
            </p>
          </div>

          {/* Quick Metrics & View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:self-end">
            {/* Mini Summary Stats */}
            <div className="flex items-center gap-6 px-5 py-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md">
              <div>
                <span className="block text-xl font-bold font-mono text-white">120+</span>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500">Deployments</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800" />
              <div>
                <span className="block text-xl font-bold font-mono text-orange-400">99.98%</span>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500">Uptime</span>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-orange-500 text-black shadow-md font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-orange-500 text-black shadow-md font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Interactive Flow"
              >
                <SlidersHorizontal size={14} />
                <span className="hidden sm:inline">Showcase</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE CATEGORY FILTER TABS ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-zinc-400 hover:text-white bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-lg shadow-orange-500/25 -z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? 'bg-black/20 text-black'
                        : 'bg-zinc-800/80 text-zinc-400'
                    }`}
                  >
                    {cat === 'All Projects'
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.category === cat).length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── PROJECT CARDS DISPLAY (REACT BITS COMPONENTS) ── */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* GRID MODE */
            <motion.div
              key="grid-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onQuickView={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          ) : (
            /* CAROUSEL / SHOWCASE FLOW */
            <motion.div
              key="carousel-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-stretch gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="w-[320px] sm:w-[400px] shrink-0 snap-start"
                >
                  <ProjectCard
                    project={project}
                    index={idx}
                    onQuickView={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── BOTTOM BANNER & CTA ── */}
        <div className="mt-16 sm:mt-24 relative rounded-3xl border border-zinc-800/90 bg-gradient-to-r from-zinc-950 via-[#0e0c15] to-black p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-2">
                <Sparkles size={14} />
                <span>EXPANDED CATALOG & ARCHIVE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Looking to build your own <em className="font-serif italic text-orange-400">custom solution?</em>
              </h3>
              <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                Browse our entire portfolio of past client releases, technical specifications, and corporate case studies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/client"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Full Client Archive</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800 text-white font-medium text-sm transition-all hover:border-zinc-500"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROJECT QUICK VIEW MODAL (INTERACTIVE ANIMATION) ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectQuickViewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD COMPONENT
   Built with React Bits SpotlightCard & TiltedCard
───────────────────────────────────────────── */
function ProjectCard({ project, index, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TiltedCard
      containerHeight="100%"
      rotateAmplitude={8}
      scaleOnHover={1.015}
      showGlare={false}
      className="h-full"
    >
      <SpotlightCard
        spotlightColor={project.spotlight}
        className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-zinc-950/90 border border-zinc-800/80 hover:border-orange-500/40 transition-colors duration-500 shadow-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle top corner ambient glow */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundColor: project.accent }}
        />

        <div>
          {/* Card Top Row: Index, Category, Live Indicator */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-zinc-500">
                /{project.id}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${project.badgeColor}`}
              >
                {project.category}
              </span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Browser / Device Mockup Preview Window */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 mb-5 group/preview shadow-inner">
            {/* Mockup browser bar */}
            <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between px-2.5 z-20 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[140px]">
                {project.domain}
              </span>
              <Globe size={11} className="text-zinc-600" />
            </div>

            {/* Project Image Area with Top Offset for Browser Bar */}
            <div className="absolute top-6 inset-x-0 bottom-0 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Impact Metric Pill (Bottom-Left of Preview) */}
            <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-white/10 backdrop-blur-md shadow-lg">
              <TrendingUp size={12} style={{ color: project.accent }} />
              <span className="text-xs font-mono font-bold text-white">
                {project.impactMetric}
              </span>
            </div>

            {/* Hover Action Overlay: Quick View Button */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView();
                }}
                className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wide flex items-center gap-1.5 hover:bg-orange-400 transition-colors shadow-xl cursor-pointer"
              >
                <Eye size={13} />
                <span>Inspect Specs</span>
              </button>
            </div>
          </div>

          {/* Project Title with React Bits DecryptedText on hover */}
          <div className="mb-2">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors flex items-center justify-between">
              <DecryptedText
                text={project.title}
                speed={30}
                animateOn="hover"
                className="cursor-default"
                encryptedClassName="text-orange-400"
              />
              <span className="text-xs font-mono text-zinc-500 font-normal">
                {project.year}
              </span>
            </h4>
            <span className="text-xs text-zinc-400 font-light block mt-0.5">
              {project.sector}
            </span>
          </div>

          {/* Description Tagline */}
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 mb-4">
            {project.tagline}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 group-hover:border-zinc-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <button
            onClick={onQuickView}
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Architecture Breakdown</span>
            <ChevronRight size={13} className="text-orange-400" />
          </button>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-orange-500 hover:text-black border border-zinc-700 hover:border-orange-500 text-xs font-medium text-white transition-all cursor-pointer group/link"
            title={`Open ${project.title}`}
          >
            <span>Live Site</span>
            <ExternalLink
              size={12}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </SpotlightCard>
    </TiltedCard>
  );
}

/* ─────────────────────────────────────────────
   PROJECT QUICK VIEW MODAL
   Deep dive architecture breakdown with animations
───────────────────────────────────────────── */
function ProjectQuickViewModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 30 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-gradient-to-b from-[#14121b] to-[#0a0a0c] border border-zinc-800 shadow-2xl p-6 sm:p-10 text-white [scrollbar-width:thin]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        {/* Header Section */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
            Case Study #{project.id}
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-xs font-medium text-zinc-400">{project.sector}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-xs font-mono text-zinc-500">{project.year}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-orange-300 font-serif italic text-lg sm:text-xl mb-6">
          {project.tagline}
        </p>

        {/* Large Media Preview Card */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-zinc-800 mb-8 shadow-2xl">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

          {/* Bottom Bar on Modal Image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-zinc-300">{project.domain}</span>
            </div>

            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-semibold text-xs tracking-wide flex items-center gap-1.5 shadow-lg transition-colors"
            >
              <span>Visit Live Web App</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Narrative & Metrics 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-zinc-400 font-mono">
              The Architectural Solution
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {project.description}
            </p>

            {/* Client Endorsement Snippet */}
            <blockquote className="mt-4 p-4 rounded-xl bg-zinc-900/60 border-l-2 border-orange-500 text-sm italic text-zinc-400">
              "{project.clientQuote}"
            </blockquote>
          </div>

          {/* Metric Highlight Box */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                MEASURABLE OUTCOME
              </span>
              <div
                className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                style={{ color: project.accent }}
              >
                {project.impactMetric}
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                {project.impactDetail}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle2 size={13} />
                Production Deployment
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-mono mb-3">
            Integrated Tech Stack & Ecosystem
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Breakdown
          </button>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-xs tracking-wide flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            <span>Launch Live Deployment</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
