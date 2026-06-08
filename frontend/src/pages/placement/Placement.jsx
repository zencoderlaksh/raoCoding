// import React from "react";
// import HeroSection from "./components/HeroSection";
// import CareerServicesSection from "./components/CareerServicesSection";
// import StudentsInvestSection from "./components/StudentsInvestSection";
// import CareerRoadmapSection from "./components/CareerRoadmapSection";
// import WhyRaoCodingSection from "./components/WhyRaoCodingSection";
// import StudentCareSection from "./components/StudentCareSection";
// import FinalCTASection from "./components/FinalCTASection";
// import ErrorBoundary from "./components/ErrorBoundary";

// const Placement = () => {
//   return (
//     <ErrorBoundary>
//       <div className="min-h-screen bg-black text-white">
//         <main>
//           <HeroSection />
//           <section id="services">
//             <CareerServicesSection />
//           </section>
//           <section id="philosophy">
//             <StudentsInvestSection />
//           </section>
//           <section id="roadmap">
//             <CareerRoadmapSection />
//           </section>
//           <WhyRaoCodingSection />
//           <StudentCareSection />
//           <FinalCTASection />
//         </main>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default Placement;






// new
import React from 'react'
import PlacementPage from './components/PlacementPage'
import NewPlacementPage from './components/NewPlacementPage'

const Placement = () => {
  return (
    <div>
      {/* <PlacementPage /> */}
      <NewPlacementPage />
    </div>
  )
}

export default Placement
