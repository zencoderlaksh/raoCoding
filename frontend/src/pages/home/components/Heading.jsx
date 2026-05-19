import React from 'react'
import SplitText from "../../../components/SplitText";

const Heading = ({ text, textSize = "text-2xl",color }) => {
  return (
    <>
    <SplitText
      text={text}
      className={`font-light text-center ${color} ${textSize}`}
      delay={50}
      duration={1.00}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      showCallback
    />
    </>
  )
}

export default Heading