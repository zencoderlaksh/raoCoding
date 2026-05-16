// import HeroSection from '../components/HeroSection';
// import JourneySection from '../components/JourneySection';
// import ExperienceSection from '../components/ExperienceSection';
// import TechStackSection from '../components/TechStackSection';
// import AchievementsSection from '../components/AchievementsSection';
// import SignatureSection from '../components/SignatureSection';

import HeroSection from "./aboutComponents/HeroSection";
import JourneySection from "./aboutComponents/JourneySection";
import AchievementsSection from "./aboutComponents/AchievementsSection";
import ExperienceSection from "./aboutComponents/ExperienceSection";
// import SignatureSection from "./aboutComponents/SignatureSection";
import TechStackSection from "./aboutComponents/TechStackSection";
import TextPressure from "../../components/TextPressure";
import LeadersSection from "./aboutComponents/LeadersSection";
// import TextPressure from "./aboutComponents/TextPressure";

export default function AboutPage() {
  return (
    <>
    {/* <main
      className="min-h-screen"
      style={{ background: '#000', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      <HeroSection />
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,106,0,0.3), transparent)' }}
      />
      <JourneySection />
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,106,0,0.3), transparent)' }}
      />
      <ExperienceSection />
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,106,0,0.3), transparent)' }}
      />
      <TechStackSection />
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,106,0,0.3), transparent)' }}
      />
      <AchievementsSection />
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,106,0,0.3), transparent)' }}
      />
      <SignatureSection />
      <TextPressure />
    </main> */}
    {/* <div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Rao's"
    flex
    alpha={false}
    stroke={false}
    width
    weight
    italic
    textColor="#ffffff"
    strokeColor="#5227FF"
    minFontSize={36}
  />
</div> */}

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
