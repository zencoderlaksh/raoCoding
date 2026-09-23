import React from "react";
import AboutHero from "./aboutComponents/AboutHero";
import CorePillarsSection from "./aboutComponents/CorePillarsSection";
import EnterpriseTechSection from "./aboutComponents/EnterpriseTechSection";
import CampusWorkshopsSection from "./aboutComponents/CampusWorkshopsSection";
import MethodologySection from "./aboutComponents/MethodologySection";
import ScaleVisionSection from "./aboutComponents/ScaleVisionSection";
import AboutCTASection from "./aboutComponents/AboutCTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      {/* 1. Hero Section: Corporate mission, animated metrics & focus pills */}
      <AboutHero />

      {/* 2. Core Pillars: Client tech solutions, applied AI, campus bootcamps, corporate upskilling */}
      <CorePillarsSection />

      {/* 3. Tech Stack Section: Modern production architectures & tools */}
      <EnterpriseTechSection />

      {/* 4. Campus Workshops Section: College bootcamps, hackathons & corporate training formats */}
      <CampusWorkshopsSection />

      {/* 5. Methodology Section: 4-stage engineering and delivery engine */}
      <MethodologySection />

      {/* 6. Scaling Vision Section: Roadmap to scale higher across enterprise & academia */}
      <ScaleVisionSection />

      {/* 7. Action CTA Section: Dual call-to-actions for businesses & campuses */}
      <AboutCTASection />
    </main>
  );
}
