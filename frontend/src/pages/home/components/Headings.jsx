import React from 'react'

const Headings = (props) => {
  return (
    <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Heading */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-orange-400 uppercase">
          {props.title}
        </h3>

        {/* Main Heading */}
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          {props.desc}
          <br className="hidden sm:block" />
          {props.descrip}
        </h1>
        </div>
  )
}

export default Headings