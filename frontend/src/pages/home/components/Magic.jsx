import React, { useState, useRef, useEffect } from "react";
import {
  Building2,
  Gem,
  HeartPulse,
  Landmark,
  Sparkles,
  Factory,
  ShoppingBag,
  Truck,
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";
import FlipCard from "../../../components/FlipCard";
import MaskedHeading from "../../../components/MaskedHeading";

const industries = [
  {
    id: "real-estate",
    number: "01",
    name: "Real Estate",
    subline: "Smart PropTech platforms, virtual 3D spaces & automated lease workflows.",
    keyword: "PropTech & Spaces",
    icon: Building2,
    colorHex: "#f97316",
    shadowColor: "#f97316",
    photo:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Modern Architectural & High-Living Spaces",
  },
  {
    id: "gems-jewels",
    number: "02",
    name: "Gems & Jewels",
    subline: "Blockchain provenance, high-precision ERP & bespoke 3D CAD boutiques.",
    keyword: "Luxury & Provenance",
    icon: Gem,
    colorHex: "#eab308",
    shadowColor: "#eab308",
    photo:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "High-Jewelry Craftsmanship & Fine Gemstones",
  },
  {
    id: "healthcare",
    number: "03",
    name: "Healthcare",
    subline: "Telehealth infrastructure, EHR interoperability & diagnostic AI tools.",
    keyword: "Clinical MedTech",
    icon: HeartPulse,
    colorHex: "#10b981",
    shadowColor: "#10b981",
    photo:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Advanced Medical Labs & Clinical Innovation",
  },
  {
    id: "fintech",
    number: "04",
    name: "Fintech",
    subline: "Algorithmic trading engines, payment rails & real-time fraud mitigation.",
    keyword: "Digital Finance",
    icon: Landmark,
    colorHex: "#06b6d4",
    shadowColor: "#06b6d4",
    photo:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Trading Intelligence & Secure Financial Rails",
  },
  {
    id: "fashion",
    number: "05",
    name: "Fashion",
    subline: "Haute couture virtual try-on, dynamic lookbooks & trend intelligence.",
    keyword: "Couture & Retail AI",
    icon: Sparkles,
    colorHex: "#d946ef",
    shadowColor: "#d946ef",
    photo:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Runway Styling & Modern Apparel Design",
  },
  {
    id: "manufacturing",
    number: "06",
    name: "Manufacturing",
    subline: "Industry 4.0 robotics, predictive sensors & digital twin factory plants.",
    keyword: "Smart Industry 4.0",
    icon: Factory,
    colorHex: "#3b82f6",
    shadowColor: "#3b82f6",
    photo:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Precision Robotics & Automated Assembly",
  },
  {
    id: "ecommerce",
    number: "07",
    name: "E-Commerce",
    subline: "Headless shopping experiences, sub-second carts & AI recommendations.",
    keyword: "Omnichannel Retail",
    icon: ShoppingBag,
    colorHex: "#8b5cf6",
    shadowColor: "#8b5cf6",
    photo:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Modern Digital Storefronts & Checkout",
  },
  {
    id: "logistics",
    number: "08",
    name: "Logistics",
    subline: "Autonomous dispatch, cold-chain telemetry & algorithmic route planning.",
    keyword: "Global Freight",
    icon: Truck,
    colorHex: "#f43f5e",
    shadowColor: "#f43f5e",
    photo:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    photoCaption: "Fleet Telematics & Automated Distribution Hubs",
  },
];

const Magic = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const scrollTicking = useRef(false);

  const checkScroll = React.useCallback(() => {
    if (!carouselRef.current || scrollTicking.current) return;
    scrollTicking.current = true;
    requestAnimationFrame(() => {
      if (!carouselRef.current) {
        scrollTicking.current = false;
        return;
      }
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const left = scrollLeft > 12;
      const right = scrollLeft < scrollWidth - clientWidth - 12;
      setCanScrollLeft(prev => prev !== left ? left : prev);
      setCanScrollRight(prev => prev !== right ? right : prev);

      const firstCard = cardRefs.current[0];
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
      const idx = Math.min(
        industries.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      setActiveIndex(prev => prev !== idx ? idx : prev);
      scrollTicking.current = false;
    });
  }, []);

  useEffect(() => {
    checkScroll();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      checkScroll();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [checkScroll]);

  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    if (card && carouselRef.current) {
      const container = carouselRef.current;
      const cardLeft = card.offsetLeft;
      container.scrollTo({
        left: cardLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const firstCard = cardRefs.current[0];
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const firstCard = cardRefs.current[0];
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden w-full">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-orange-400 text-xs sm:text-sm font-medium tracking-wide">
            <Layers size={15} />
            Cross-Industry Engineering
          </span>

          <div className="mt-6 max-w-4xl mx-auto">
            <MaskedHeading
              text="Industries We Serve"
              mediaType={isMobile ? "image" : "video"}
              src={
                isMobile
                  ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                  : "https://videos.pexels.com/video-files/39507682/16831209_2160_3840_30fps.mp4"
              }
              fillScale={1.25}
              parallax={isMobile ? 0 : 26}
              reveal="rise"
              trigger="view"
              drift={isMobile ? 0 : 18}
              brightness={1}
              saturation={1}
              grayscale={false}
              duration={1.1}
              stagger={0.09}
              align="center"
              weight={700}
              tracking={-0.03}
              lineHeight={1.1}
              textScale={0.08}
            />
          </div>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Delivering tailored technology solutions, domain architectures, and AI innovation across global industry verticals.
          </p>
        </div>

        {/* Carousel Control Bar & Category Tabs */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
          {/* Sector Quick Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => scrollToCard(0)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                activeIndex === 0
                  ? "bg-orange-500 text-black shadow-lg shadow-orange-500/25 font-semibold"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              All Sectors ({industries.length})
            </button>
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => scrollToCard(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  activeIndex === i
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/15"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: ind.colorHex }}
                />
                {ind.name}
              </button>
            ))}
          </div>

          {/* Navigation Arrows & Counter */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
              <span className="text-white font-semibold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              / {String(industries.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!canScrollLeft}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all backdrop-blur-xl cursor-pointer"
                aria-label="Previous Industry"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={!canScrollRight}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all backdrop-blur-xl cursor-pointer"
                aria-label="Next Industry"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Scroll Container */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x [-webkit-overflow-scrolling:touch]"
        >
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={ind.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="w-[290px] sm:w-[330px] md:w-[350px] lg:w-[360px] shrink-0 snap-start"
              >
                <FlipCard
                  width="100%"
                  height={460}
                  radius={28}
                  axis="y"
                  flipOnClick
                  draggable={false}
                  touchPan="pan-x pan-y"
                  dragDistance={0}
                  tilt={!isMobile}
                  tiltMax={isMobile ? 0 : 10}
                  glare={!isMobile}
                  glareOpacity={0.2}
                  hoverScale={isMobile ? 1 : 1.02}
                  perspective={1100}
                  stiffness={170}
                  damping={20}
                  background="#111114"
                  color="#f5f5f5"
                  shadow
                  shadowColor={ind.shadowColor}
                  shadowOpacity={0.22}
                  className="w-full"
                  front={
                    <div className="h-full p-7 sm:p-8 flex flex-col justify-between border border-white/10 rounded-[28px] bg-gradient-to-b from-[#181622] via-[#0d0b14] to-[#07060a] sm:bg-gradient-to-b sm:from-white/[0.07] sm:via-white/[0.02] sm:to-black/85 sm:backdrop-blur-xl relative overflow-hidden group">
                      {/* Top ambient color glow */}
                      <div
                        className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20"
                        style={{ backgroundColor: ind.colorHex }}
                      />

                      {/* Top Row: Number & Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                          Sector {ind.number}
                        </span>
                        <div
                          className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] sm:backdrop-blur-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{ color: ind.colorHex }}
                        >
                          <IconComponent size={22} />
                        </div>
                      </div>

                      {/* Middle: Catchy Title + Couple of Sub Lines */}
                      <div className="my-auto py-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-zinc-300 mb-4">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: ind.colorHex }}
                          />
                          <span>{ind.keyword}</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-orange-300 transition-colors">
                          {ind.name}
                        </h3>

                        <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                          {ind.subline}
                        </p>
                      </div>

                      {/* Bottom Footer: Minimal Swipe/Click Hint */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                        <span className="font-mono text-[11px] text-zinc-500">
                          {ind.name}
                        </span>
                        <span className="flex items-center gap-1.5 text-zinc-300 group-hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                          <RotateCw
                            size={12}
                            className="group-hover:rotate-180 transition-transform duration-500 text-orange-400"
                          />
                          <span>View Photo</span>
                        </span>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full rounded-[28px] border border-white/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 group">
                      {/* High-Resolution Sector Photo (The Hero!) */}
                      <img
                        src={ind.photo}
                        alt={`${ind.name} sector`}
                        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Cinematic Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/35" />

                      {/* Top Bar on Photo */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/80 sm:bg-black/60 border border-white/20 text-white sm:backdrop-blur-md">
                          {ind.number} — {ind.name}
                        </span>
                        <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/80 sm:bg-black/60 border border-white/20 text-zinc-300 sm:backdrop-blur-md flex items-center gap-1">
                          <RotateCw size={10} /> Flip back
                        </span>
                      </div>

                      {/* Bottom Floating Minimal Glass Card */}
                      <div className="relative z-10 p-5 rounded-2xl bg-[#0e0c15]/90 sm:bg-black/75 sm:backdrop-blur-xl border border-white/15 shadow-2xl">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {ind.name}
                          </h4>
                          <span
                            className="text-[11px] font-mono uppercase tracking-wider font-semibold"
                            style={{ color: ind.colorHex }}
                          >
                            {ind.keyword}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                          {ind.photoCaption}
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-7 bg-orange-500 shadow-md shadow-orange-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to ${ind.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magic;