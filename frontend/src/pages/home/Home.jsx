import React from 'react'
import Heading from './components/Heading'
import Button from '../../components/Button'
import { Link } from "react-router-dom";
import ImageMarquee from "./components/ImageMarquee"
import ScrollCourses from './components/ScrollCourses'
import CardMarquee from './components/CardMarquee'
import WhatWeDoAccordion from './components/WhatWeDoAccordion'
import Headings from './components/Headings'
import FAQ from './components/FAQ'
import LastHeading from './components/LastHeading'
import Magic from './components/Magic'
import WebThreads from '../../components/WebThreads'
import CampusAndCareerSection from './components/CampusAndCareerSection'

const Home = () => {
  return (
    <>
      {/* Hero Section with WebThreads Background */}
      <div className="relative w-full min-h-[600px] lg:min-h-[680px] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* WebThreads Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <WebThreads
            color1="#5227FF"
            color2="#EAB308"
            color3="#ef0909"
            speed={0.2}
            threadCount={6}
            frequency={5}
            spread={0.18}
            taper={1}
            position={0.5}
            fanMode="center"
            glow={0.02}
            falloff={0.6}
            thickness={1.1}
            brightness={0.6}
            opacity={1}
            mirror
            shimmer={false}
            grain
            grainIntensity={0.05}
            mouseInteraction
            mouseStrength={0.3}
          />
          {/* Subtle bottom fade to blend smoothly into page */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <Heading text="Technology • AI • Innovation" color="text-orange-400" />
          <Heading text="Learn Technology." textSize='text-6xl' />
          <Heading text="Build What's Next." textSize='text-6xl' />
          <p className="text-[#D7D7D7] text-2xl font-light text-center max-w-4xl px-4">
            Empowering students, professionals, colleges, and organizations with practical technology, AI, and industry-focused learning.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <Link to="/courses">
              <Button text="Explore Our Programs" showIcon={true} />
            </Link>
            <Link to="/contact">
              <Button text="Partner With Us" variant="secondary" showIcon={false} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Magic />
      </div>
      <div>
        <ImageMarquee />
      </div>
      <div>
        <ScrollCourses />
      </div>
      <div>
        <CampusAndCareerSection />
      </div>
      <div>
        <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
          <Headings title="Hear From Our Students" desc="We Help Learners Become Industry-" descrip="Ready Developers" />
        </section>
        <CardMarquee />
      </div>
      <div className="py-12 sm:py-16 lg:py-20">
        <section className="w-full px-4 mb-8 sm:mb-12">
          <Headings
            title="WHAT WE DO"
            desc="Technology. Education. Innovation."
            supportingText="We bring technology expertise, industry-focused learning, and AI-driven solutions together to help organizations and individuals build for what’s next."
          />
        </section>
        <WhatWeDoAccordion />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <LastHeading />
      </div>
    </>

  )
}

export default Home