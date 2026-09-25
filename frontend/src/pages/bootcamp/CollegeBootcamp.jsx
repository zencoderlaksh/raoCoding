import React from "react";
import BootcampHero from "./components/BootcampHero";
import PlacementJourney from "./components/PlacementJourney";
import LearningJourney from "./components/LearningJourney";
import BootcampCTA from "./components/BootcampCTA";

export default function CollegeBootcamp() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-[#ff5a28] selection:text-black">
      {/* 1. Hero Section: Transforming students into engineers + metrics */}
      <BootcampHero />

      {/* 2. 9-Stage Placement-Readiness Journey: Interactive pipeline */}
      <PlacementJourney />

      {/* 3. Learning Journey: 5-stage progression timeline */}
      <LearningJourney />

      {/* 4. High-impact Closing Call to Action */}
      <BootcampCTA />
    </main>
  );
}
