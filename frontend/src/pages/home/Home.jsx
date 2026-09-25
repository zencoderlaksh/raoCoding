import React from 'react'
import Heading from './components/Heading'
import Button from '../../components/Button'
import { Link } from "react-router-dom";
import ImageMarquee from "./components/ImageMarquee"
import TechStack from './components/TechStack'
import WhatWeDoAccordion from './components/WhatWeDoAccordion'
import Headings from './components/Headings'
import FAQ from './components/FAQ'
import Magic from './components/Magic'
import WebThreads from '../../components/WebThreads'

const Home = () => {
  return (
    <>
      {/* Hero Section with WebThreads Background */}
      <div className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16">
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
            <Link to="/corporate-trainings">
              <Button text="Corporate Trainings" showIcon={true} />
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
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20">
        <TechStack />
      </div>
      <div className="py-12 sm:py-16 lg:py-20">
        <section className="w-full px-4 mb-8 sm:mb-12">
          <Headings
            title="WHO WE SERVE"
            desc="Corporates. Colleges. Growing Businesses."
            supportingText="Empowering banking institutions, universities, ambitious startups, MSMEs, and entrepreneurs with customized technology capabilities and industry-oriented training."
          />
        </section>
        <WhatWeDoAccordion />
      </div>
      <div>
        <FAQ />
      </div>
    </>

  )
}

export default Home