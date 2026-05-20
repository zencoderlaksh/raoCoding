import React from 'react'
import ClientPage from './components/ClientPage'
import HeroSection from './components/HeroSection'
import TextPressure from '@/components/TextPressure'

const Client = () => {
  return (
    <div>
      <HeroSection />
      <ClientPage />
       {/* <div className="w-full flex justify-center items-center py-20">
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
      </div> */}
    </div>
  )
}

export default Client
