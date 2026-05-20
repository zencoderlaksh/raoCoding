

import HeroSection from "./aboutComponents/HeroSection";
import JourneySection from "./aboutComponents/JourneySection";
import AchievementsSection from "./aboutComponents/AchievementsSection";
import ExperienceSection from "./aboutComponents/ExperienceSection";
import TechStackSection from "./aboutComponents/TechStackSection";
import TextPressure from "../../components/TextPressure";
import LeadersSection from "./aboutComponents/LeadersSection";
// import TextPressure from "./aboutComponents/TextPressure";

export default function AboutPage() {
  return (
    <>


    <main className="min-h-screen bg-black text-white">

      <HeroSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <JourneySection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <ExperienceSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <TechStackSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <AchievementsSection />

      <LeadersSection />


      <div className="w-full flex justify-center items-center py-20">
        <div className="relative w-full h-[450px] overflow-hidden">
          <TextPressure
            text="Rao's"
            flex
            width
            weight
            italic
            alpha={false}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>


    </main>
      </>
  );
}
