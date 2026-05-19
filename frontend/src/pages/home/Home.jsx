import React from 'react'
import Heading from './components/Heading'
import AnimatedAvatars from './components/AnimatedAvatars'
import Button from '../../components/Button'
import MagicBento from '../../components/MagicBento'
import { Link } from "react-router-dom";
import ImageMarquee from "./components/ImageMarquee"
import ScrollCourses from './components/ScrollCourses'
import CardMarquee from './components/CardMarquee'
import Masonary from './components/Masonary'
import Headings from './components/Headings'
import Difference from './components/Difference'
import FAQ from './components/FAQ'
import LastHeading from './components/LastHeading'
import TextPressure from "../../components/TextPressure";

const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center  justify-center gap-6'>
      <Heading text="Code . Create . Succeed" color="text-orange-400" />
      <Heading text="Think Like An Developer." textSize='text-6xl' />
      <Heading text="Build Like A Founder." textSize='text-6xl'/>
      <p  className="text-[D7D7D7] text-2xl font-light text-center max-w-4xl">
        Start your journey toward a successful tech career with hands-on learning and a thriving student community at Rao Coding School.
      </p>
      <AnimatedAvatars />
      <Link to="/login">
        <Button />
      </Link>
    </div>
    <div className="flex justify-center items-center">
      <div className="w-[full] lg-w-2/3 rounded-[32px] border border-white/10 bg-[rgba(15,15,15,0.45)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] p-6 flex justify-center items-center">
    
        <MagicBento 
          textAutoHide={true}
          enableStars={false}
          enableSpotlight
          enableBorderGlow={false}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor='255, 180, 120'
          disableAnimations={false}
        />
    
      </div>
    </div>
    <div>
      <ImageMarquee />
    </div>
    <div>
      <ScrollCourses />
    </div>
    <div>
      <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
      <Headings title="Hear From Our Students" desc="We Help Learners Become Industry-" descrip="Ready Developers"/>
      </section>
      <CardMarquee />
    </div>
    <div>
      <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
        <Headings title="Our Community" desc="They Came. They Cooked." descrip="They got Placed."/>
      </section>
        <div  style={{position: "relative",height: "max-content",}}>
          <Masonary/>
        </div>
    </div>
    <div>
      <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
      <Headings title="Comparison" desc="What sets Rao Coding School different" descrip="from ordinary Coding Schools."/>
      </section>
      <Difference />
    </div>
    <div>
      <FAQ />
    </div>
    <div>
      <LastHeading />
    </div>
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
    </>

  )
}

export default Home