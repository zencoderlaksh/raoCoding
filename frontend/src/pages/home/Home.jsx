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
import GlowCursor from '../../components/GlowCursor'

const Home = () => {
  return (
    <>
      {/* Full-screen dynamic glowing cursor across homepage */}
      <GlowCursor
        color="#dc873b"
        secondaryColor="#f59e0b"
        trailLength={40}
        trailWidth={8}
        trailTaper={0.8}
        followSpeed={0.16}
        glowIntensity={1.9}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.25}
        opacity={1}
        pulseSpeed={1.1}
        noiseStrength={0.035}
        idleFade
        idleTimeout={700}
        fadeDuration={900}
        blendMode="screen"
        fixed
      />

      {/* Hero Section with WebThreads Background */}
      <div className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12">
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
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-6 -mt-8 sm:-mt-12 px-4 max-w-5xl mx-auto">
          <Heading text="Technology • AI • Innovation" color="text-orange-400" />
          <Heading text="Digital Architects of Tech India." textSize="text-3xl sm:text-5xl lg:text-6xl" />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 mb-2">
            <Link to="/corporate-trainings">
              <Button text="Corporate Trainings" showIcon={true} />
            </Link>
            <Link to="/contact">
              <Button text="Business Requirements" variant="secondary" showIcon={false} />
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