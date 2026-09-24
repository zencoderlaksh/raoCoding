import React from "react";
import BootcampHero from "./components/BootcampHero";
import WhyBootcamp from "./components/WhyBootcamp";
import SkillsMatrix from "./components/SkillsMatrix";
import LearningJourney from "./components/LearningJourney";
import ProjectsShowcase from "./components/ProjectsShowcase";
import MentorshipSection from "./components/MentorshipSection";
import CollegeBenefits from "./components/CollegeBenefits";
import ProgramFormat from "./components/ProgramFormat";
import BootcampCTA from "./components/BootcampCTA";

export default function CollegeBootcamp() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-[#ff5a28] selection:text-black">
      {/* 1. Hero Section: Transforming students into engineers + metrics */}
      <BootcampHero />

      {/* 2. Why College Bootcamp: Bridging classroom vs production gap */}
      <WhyBootcamp />

      {/* 3. Skills Matrix: Interactive breakdown of modern technologies */}
      <SkillsMatrix />

      {/* 4. Learning Journey: 5-stage progression timeline */}
      <LearningJourney />

      {/* 5. Real-World Projects: Production-grade capstones */}
      <ProjectsShowcase />

      {/* 6. Mentorship & Code Reviews */}
      <MentorshipSection />

      {/* 7. Institutional Benefits for Colleges & Universities */}
      <CollegeBenefits />

      {/* 8. Flexible Program Delivery Models & Lifecycle */}
      <ProgramFormat />

      {/* 9. High-impact Closing Call to Action */}
      <BootcampCTA />
    </main>
  );
}
