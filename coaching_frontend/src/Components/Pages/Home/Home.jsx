import React,{ useEffect } from "react"
import EntrySection from "./EntrySection"
import CourseSection from "./CourseSection"
import ChooseUsSection from "./ChooseUsSection"
import HowItWorksSection from "./HowItWorksSection"
import CounterSection from "./CounterSection"
import TestimonialSection from "./TestimonialSection.jsx"
import GetStarted from "./GetStarted.jsx"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-auto flex flex-col z-0">
      <EntrySection />
      <ChooseUsSection />
      <CourseSection />
      <HowItWorksSection />
      <CounterSection />
      <TestimonialSection />
      <GetStarted />
    </div>
  )
}

export default Home