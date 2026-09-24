import React from "react";
import PlacementHero from "./components/PlacementHero";
import DaySimulator from "./components/DaySimulator";
import PlacementJourney from "./components/PlacementJourney";
import TechInterviewPrep from "./components/TechInterviewPrep";
import ResumePortfolio from "./components/ResumePortfolio";
import MockInterviews from "./components/MockInterviews";
import CareerReadiness from "./components/CareerReadiness";
import AlumniPlacementWall from "./components/AlumniPlacementWall";
import PlacementSupport from "./components/PlacementSupport";
import PlacementCTA from "./components/PlacementCTA";

export default function Placement() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      {/* 1. Placement Hero: Headline, ambient glow, stats, target roles marquee */}
      <PlacementHero />

      {/* 2. Interactive Day in the Life Simulator: Built with React Bits SpotlightCard */}
      <DaySimulator />

      {/* 3. 9-Stage Placement-Readiness Journey: Interactive pipeline */}
      <PlacementJourney />

      {/* 3. Technical Interview Preparation Modules: DSA, Full Stack, Machine coding */}
      <TechInterviewPrep />

      {/* 4. Professional Presentation: ATS Resume, Portfolio, GitHub, LinkedIn */}
      <ResumePortfolio />

      {/* 5. Mock Interview Ecosystem: Live coding, System design, Project defense, HR */}
      <MockInterviews />

      {/* 6. Career Readiness Evolution: 3D FlipCards from Student to Industry Ready */}
      <CareerReadiness />

      {/* 7. Alumni Placement Wall: Filterable showcase of placed students */}
      <AlumniPlacementWall />

      {/* 8. Transparent Placement Assistance: Referrals, career strategy & ethics */}
      <PlacementSupport />

      {/* 9. Final Call to Action */}
      <PlacementCTA />
    </main>
  );
}
