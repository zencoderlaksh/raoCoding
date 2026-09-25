import React from "react";
import CorporateHero from "./components/CorporateHero";
import CorporateTracks from "./components/CorporateTracks";
import CorporateRoiCalculator from "./components/CorporateRoiCalculator";
import CorporateCTA from "./components/CorporateCTA";

export default function Placement() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-[#ff5a28] selection:text-black">
      {/* 1. Hero: Reality Check Simulator & Catchy Hinglish Hook */}
      <CorporateHero />

      {/* 2. Interactive Enterprise Cockpit: 5 Game-Changing BFSI & Corporate Tracks */}
      <CorporateTracks />

      {/* 3. Interactive ROI & Productivity Calculator: Training Pe Kharcha Nahi, Profit! */}
      <CorporateRoiCalculator />

      {/* 4. High-Impact Closing Section: Chai Pe Roadmap Final + Instant Connect */}
      <CorporateCTA />
    </main>
  );
}
