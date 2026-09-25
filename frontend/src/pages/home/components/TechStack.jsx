import React, { useState, useRef } from "react";
import {
  // Custom Web
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiDocker,
  SiShopify,
  SiWordpress,
  // AI Build
  SiOpenai,
  SiGooglegemini,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiFastapi,
  // Digital Marketing
  SiGooglesearchconsole,
  SiGoogleads,
  SiGoogleanalytics,
  SiMeta,
  SiSemrush,
  SiGoogletagmanager,
  SiHubspot,
  SiMailchimp,
} from "react-icons/si";
import {
  Layers,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  LayoutGrid,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

// Authentic Microsoft Power BI Icon SVG
const PowerBIIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <path
      d="M21 5h4a2 2 0 0 1 2 2v19a1 1 0 0 1-1 1h-5V5z"
      fill="#EAA300"
    />
    <path
      d="M14 10h4a2 2 0 0 1 2 2v15h-6V10z"
      fill="#F2C811"
    />
    <path
      d="M7 16h4a2 2 0 0 1 2 2v9H7v-9z"
      fill="#FCE100"
    />
  </svg>
);

const techStack = [
  // ── 1. CUSTOM WEB REQUIREMENTS ──
  {
    id: "react",
    name: "React",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Web UI",
    role: "Component Architecture",
    color: "#087ea4",
    icon: SiReact,
    tagline: "Ultra-responsive component trees, hooks & seamless state synchronization.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Full-Stack",
    role: "Server-Side & SSR",
    color: "#000000",
    icon: SiNextdotjs,
    tagline: "Edge runtime performance, SEO pre-rendering & full-stack API routes.",
  },
  {
    id: "html5",
    name: "HTML5",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Core Web",
    role: "Semantic Web Structure",
    color: "#E34F26",
    icon: SiHtml5,
    tagline: "W3C valid semantic markup, accessible tags & modern web standards.",
  },
  {
    id: "css3",
    name: "CSS3",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Styling",
    role: "Modern Responsive Styles",
    color: "#1572B6",
    icon: SiCss,
    tagline: "Fluid grid systems, flexbox hierarchies & hardware-accelerated motion.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Languages",
    role: "Dynamic Scripting",
    color: "#D4B830",
    icon: SiJavascript,
    tagline: "Modern ESNext asynchronous runtime powering interactive web interfaces.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Type Safety",
    role: "Type-Safe Engineering",
    color: "#3178C6",
    icon: SiTypescript,
    tagline: "Strict static typing preventing runtime errors in large enterprise codebases.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Backend",
    role: "Event-Driven Server",
    color: "#339933",
    icon: SiNodedotjs,
    tagline: "High-concurrency microservices, REST & GraphQL endpoints.",
  },
  {
    id: "vue",
    name: "Vue.js",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Frontend",
    role: "Progressive Framework",
    color: "#4FC08D",
    icon: SiVuedotjs,
    tagline: "Reactive dual-binding data flows & lightweight component ecosystems.",
  },
  {
    id: "angular",
    name: "Angular",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Enterprise",
    role: "Enterprise Web Systems",
    color: "#DD0031",
    icon: SiAngular,
    tagline: "Batteries-included enterprise framework with strict dependency injection.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Database",
    role: "NoSQL Document Store",
    color: "#47A248",
    icon: SiMongodb,
    tagline: "Distributed BSON document databases built for high volume data ingestion.",
  },
  {
    id: "postgresql",
    name: "SQL & Postgres",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Database",
    role: "Relational ACID DB",
    color: "#4169E1",
    icon: SiPostgresql,
    tagline: "ACID compliant relational databases with advanced indexing & extensions.",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Mobile",
    role: "Native Android & KMP",
    color: "#7F52FF",
    icon: SiKotlin,
    tagline: "First-party Android apps with coroutines & multiplatform shared logic.",
  },
  {
    id: "dart",
    name: "Dart & Flutter",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "Mobile",
    role: "Cross-Platform Native",
    color: "#02569B",
    icon: SiFlutter,
    tagline: "High-fidelity native binaries compiled for iOS, Android, and Web.",
  },
  {
    id: "docker",
    name: "Docker",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "DevOps",
    role: "Container Packaging",
    color: "#2496ED",
    icon: SiDocker,
    tagline: "Immutable containerized environments enabling unified zero-drift deployments.",
  },
  {
    id: "shopify",
    name: "Shopify",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "E-Commerce",
    role: "Storefront Engineering",
    color: "#7AB55C",
    icon: SiShopify,
    tagline: "Custom Liquid and Headless Hydrogen e-commerce web applications.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    sector: "web",
    sectorLabel: "Custom Web",
    sectorShort: "CMS",
    role: "Headless CMS Portals",
    color: "#21759B",
    icon: SiWordpress,
    tagline: "Bespoke theme architectures, REST API headless content & plugins.",
  },

  // ── 2. AI BUILD SOLUTIONS ──
  {
    id: "openai",
    name: "OpenAI GPT",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "GenAI",
    role: "LLM Systems & Agents",
    color: "#10A37F",
    icon: SiOpenai,
    tagline: "Fine-tuned language models, structured embeddings & agentic automation.",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "GenAI",
    role: "Multimodal AI Models",
    color: "#1A73E8",
    icon: SiGooglegemini,
    tagline: "Long-context reasoning, video & image processing via Gemini APIs.",
  },
  {
    id: "python",
    name: "Python",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "AI Core",
    role: "AI & ML Foundations",
    color: "#3776AB",
    icon: SiPython,
    tagline: "Data science algorithms, automated ETL pipelines & neural networks.",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "Deep Learning",
    role: "Neural Network Training",
    color: "#EE4C2C",
    icon: SiPytorch,
    tagline: "Dynamic computation graphs for custom computer vision & NLP models.",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "Deep Learning",
    role: "Production Model Serving",
    color: "#FF6F00",
    icon: SiTensorflow,
    tagline: "End-to-end enterprise machine learning deployment & model quantization.",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "Transformers",
    role: "Open-Source Models",
    color: "#CCA000",
    icon: SiHuggingface,
    tagline: "Transformers, diffusers & on-premise open-source model inference.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    sector: "ai",
    sectorLabel: "AI Build",
    sectorShort: "AI Serving",
    role: "High-Speed AI APIs",
    color: "#009688",
    icon: SiFastapi,
    tagline: "Ultra-fast asynchronous microservices serving real-time model predictions.",
  },

  // ── 3. DIGITAL MARKETING SOLUTIONS ──
  {
    id: "gsc",
    name: "Search Console",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Organic SEO",
    role: "Google Search Telemetry",
    color: "#458CF5",
    icon: SiGooglesearchconsole,
    tagline: "Search performance auditing, core web vitals & organic rank monitoring.",
  },
  {
    id: "googleads",
    name: "Google Ads",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Paid Ads",
    role: "PPC & Performance Media",
    color: "#E2A400",
    icon: SiGoogleads,
    tagline: "High-intent search, display remarketing & automated Smart Bidding campaigns.",
  },
  {
    id: "googleanalytics",
    name: "Google Analytics 4",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Analytics",
    role: "Attribution & User Funnels",
    color: "#E37400",
    icon: SiGoogleanalytics,
    tagline: "Event-based behavioral tracking, funnel drop-off analysis & ROAS attribution.",
  },
  {
    id: "meta",
    name: "Meta Ads",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Paid Social",
    role: "Targeted Paid Social",
    color: "#0081FB",
    icon: SiMeta,
    tagline: "Audience lookalikes, creative testing & precision social conversion funnels.",
  },
  {
    id: "powerbi",
    name: "Power BI",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "BI & Data",
    role: "Executive BI Dashboards",
    color: "#CFA000",
    icon: PowerBIIcon,
    tagline: "Cross-platform data consolidation, DAX metrics & interactive client reports.",
  },
  {
    id: "semrush",
    name: "Semrush",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "SEO Research",
    role: "Competitive SEO Intelligence",
    color: "#FF642D",
    icon: SiSemrush,
    tagline: "Keyword gap discovery, backlink profiling & competitor search intelligence.",
  },
  {
    id: "gtm",
    name: "Tag Manager",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Tracking",
    role: "Server & Client Pixels",
    color: "#246FDB",
    icon: SiGoogletagmanager,
    tagline: "Frictionless conversion pixel deployments, custom trigger scripts & events.",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Inbound",
    role: "Lead Automation & Inbound",
    color: "#FF7A59",
    icon: SiHubspot,
    tagline: "Automated nurture sequences, sales pipeline tracking & CRM synchronization.",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    sector: "marketing",
    sectorLabel: "Digital Marketing",
    sectorShort: "Email",
    role: "Retention & Email Funnels",
    color: "#CFA400",
    icon: SiMailchimp,
    tagline: "Personalized lifecycle email campaigns, behavioral triggers & drip funnels.",
  },
];

const sectors = [
  { id: "all", label: "All Capabilities" },
  { id: "web", label: "Custom Web Requirements" },
  { id: "ai", label: "AI Build Solutions" },
  { id: "marketing", label: "Digital Marketing Solutions" },
];

export default function TechStack() {
  const [selectedSector, setSelectedSector] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "swipe"
  const swipeContainerRef = useRef(null);

  const filteredTech =
    selectedSector === "all"
      ? techStack
      : techStack.filter((t) => t.sector === selectedSector);

  // 2 rows in 4-column layout = 8 cards
  const ROWS_LIMIT = 8;
  const isCapped = !showAll && filteredTech.length > ROWS_LIMIT && viewMode === "grid";
  const displayedTech = isCapped
    ? filteredTech.slice(0, ROWS_LIMIT)
    : filteredTech;

  const handleScrollLeft = () => {
    swipeContainerRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    swipeContainerRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-zinc-950 rounded-[36px] sm:rounded-[52px] lg:rounded-[64px] p-6 sm:p-10 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-zinc-200/90 relative overflow-hidden">
      {/* Subtle Pastel Ambient Glows */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[350px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Layers size={14} className="text-orange-500" />
            <span>WHY RAO TECHNOLOGIES • CAPABILITY STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-4">
            Custom Web. AI Solutions. Digital Marketing.
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            We deliver tailored web platforms, autonomous AI build workflows, and high-conversion digital marketing solutions engineered with industry-leading tools.
          </p>
        </div>

        {/* ── Filter Tabs & View Toggle Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-zinc-200/80">
          {/* Sector Category Pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            {sectors.map((sec) => {
              const isActive = selectedSector === sec.id;
              const count =
                sec.id === "all"
                  ? techStack.length
                  : techStack.filter((t) => t.sector === sec.id).length;

              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setSelectedSector(sec.id);
                    setShowAll(false);
                  }}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white font-semibold shadow-md shadow-zinc-950/20 scale-[1.02]"
                      : "bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 border border-zinc-200/80"
                  }`}
                >
                  <span>{sec.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white font-bold"
                        : "bg-zinc-200 text-zinc-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle & Swipe Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-center md:self-auto">
            {viewMode === "swipe" && (
              <div className="flex items-center gap-1.5 mr-2">
                <button
                  onClick={handleScrollLeft}
                  className="w-8 h-8 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm cursor-pointer transition-all"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleScrollRight}
                  className="w-8 h-8 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm cursor-pointer transition-all"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            <div className="bg-zinc-100 p-1 rounded-xl flex items-center gap-1 border border-zinc-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white text-zinc-900 shadow-sm font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <LayoutGrid size={13} />
                <span>2 Rows</span>
              </button>
              <button
                onClick={() => setViewMode("swipe")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "swipe"
                    ? "bg-white text-zinc-900 shadow-sm font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <SlidersHorizontal size={13} />
                <span>Swipe View</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Content View 1: 2-Row Grid View with Show More Option ── */}
        {viewMode === "grid" && (
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {displayedTech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="group relative p-5 sm:p-6 rounded-[24px] bg-white hover:bg-zinc-50/60 border border-zinc-200/90 hover:border-zinc-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[195px]"
                  >
                    {/* Top Row: 3D Raised Icon + Category Pill */}
                    <div className="flex items-center justify-between mb-4">
                      {/* 3D Embossed White Icon Container */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_6px_18px_rgba(0,0,0,0.07)] flex items-center justify-center relative overflow-hidden group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all">
                        {/* Top glass reflection highlight */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-zinc-100/60 to-transparent pointer-events-none rounded-t-2xl" />

                        <div
                          style={{
                            color: tech.color,
                            filter: `drop-shadow(0 3px 6px ${tech.color}40)`,
                          }}
                          className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
                        >
                          <Icon size={28} />
                        </div>
                      </div>

                      {/* Sector Tag */}
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80 text-zinc-600 font-semibold group-hover:text-zinc-950 transition-colors">
                        {tech.sectorShort}
                      </span>
                    </div>

                    {/* Middle: Title & Role */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-black tracking-tight mb-1">
                        {tech.name}
                      </h3>

                      <p
                        className="text-[11px] font-mono font-bold tracking-wide uppercase mb-1.5"
                        style={{ color: tech.color }}
                      >
                        {tech.role}
                      </p>

                      <p className="text-zinc-500 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                        {tech.tagline}
                      </p>
                    </div>

                    {/* Bottom Status Row */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                        <span className="text-[10px] font-mono text-zinc-400">Production Ready</span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle Gradient Fade when capped to 2 rows */}
            {isCapped && (
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}

            {/* Show More / Show Less Toggle Button */}
            {filteredTech.length > ROWS_LIMIT && (
              <div className="relative z-10 flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-zinc-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  {showAll ? (
                    <>
                      <span>Show Less (Collapse to 2 Rows)</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>
                        Show More Solutions (+{filteredTech.length - ROWS_LIMIT} more)
                      </span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Content View 2: Horizontal Swipeable Track ── */}
        {viewMode === "swipe" && (
          <div className="relative">
            <div
              ref={swipeContainerRef}
              className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredTech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="w-[280px] sm:w-[310px] shrink-0 snap-start group relative p-5 sm:p-6 rounded-[24px] bg-white hover:bg-zinc-50/60 border border-zinc-200/90 hover:border-zinc-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[195px]"
                  >
                    {/* Top Row: 3D Raised Icon + Category Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_6px_18px_rgba(0,0,0,0.07)] flex items-center justify-center relative overflow-hidden group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all">
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-zinc-100/60 to-transparent pointer-events-none rounded-t-2xl" />
                        <div
                          style={{
                            color: tech.color,
                            filter: `drop-shadow(0 3px 6px ${tech.color}40)`,
                          }}
                          className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
                        >
                          <Icon size={28} />
                        </div>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80 text-zinc-600 font-semibold group-hover:text-zinc-950 transition-colors">
                        {tech.sectorShort}
                      </span>
                    </div>

                    {/* Middle: Title & Role */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-black tracking-tight mb-1">
                        {tech.name}
                      </h3>
                      <p
                        className="text-[11px] font-mono font-bold tracking-wide uppercase mb-1.5"
                        style={{ color: tech.color }}
                      >
                        {tech.role}
                      </p>
                      <p className="text-zinc-500 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                        {tech.tagline}
                      </p>
                    </div>

                    {/* Bottom Status Row */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                        <span className="text-[10px] font-mono text-zinc-400">Production Ready</span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-zinc-400 mt-4 flex items-center justify-center gap-1.5">
              <span>Swipe left or right to explore all {filteredTech.length} technologies</span>
            </p>
          </div>
        )}

        {/* ── 3 Core Pillars Highlight Strip ── */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1.5">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
              01 • Custom Web
            </span>
            <h4 className="text-base font-bold text-zinc-900">
              Web & Mobile Engineering
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-light">
              High-velocity React, Next.js, Node.js, and mobile solutions tailored to custom specs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1.5">
            <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wider">
              02 • AI Solutions
            </span>
            <h4 className="text-base font-bold text-zinc-900">
              Autonomous AI Pipelines
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-light">
              Custom GPT agents, Gemini integration, PyTorch training, and scalable inference APIs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1.5">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">
              03 • Digital Marketing
            </span>
            <h4 className="text-base font-bold text-zinc-900">
              Growth & Conversion
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-light">
              Full-funnel Google Ads, Search Console SEO, Power BI reports, and Meta marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
