import React from "react"
import HowItWorksHeading from "./HowItWorksHeading"
import HowItWorksCards from "./HowItWorksCards"

const HowItWorksSection = () => {
  return (
    <div className='h-auto bg-indigo-50 z-0 pt-16 mt-10'>
        <HowItWorksHeading/>
        <HowItWorksCards/>
    </div>
  )
}

export default HowItWorksSection