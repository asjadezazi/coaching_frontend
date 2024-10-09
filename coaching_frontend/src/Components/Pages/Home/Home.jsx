import React,{ useEffect } from "react"
import CourseSection from "./CourseSection"
import ChooseUsSection from "./ChooseUsSection"
import HowItWorksSection from "./HowItWorksSection"
import CounterSection from "./CounterSection"
import TestimonialSection from "./TestimonialSection.jsx"
import GetStarted from "./GetStarted.jsx"
import Carousel from "./Carousel.jsx"

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
        image: '../src/assets/slide1.png', 
        title: 'Master Innovative Tech Skills',
        description: 'Join Ezazi Classes to master cutting-edge and innovative tech skills in courses like Frontend Development, MERN Stack, and more. Equip yourself with the knowledge and tools needed for a successful and thriving career in the technology sector.'
    },
    {
        image: '../src/assets/slide2.png', 
        title: 'Comprehensive Academic Coaching',
        description: 'We offer coaching for students in classes 9 to 12, ensuring a strong foundation in subjects like Mathematics, Science, and English for academic success.'
    },
    {
        image: '../src/assets/slide3.png', 
        title: 'Your Pathway to Success and Personal Growth',
        description: 'Ezazi Classes empowers students with quality education in technology and academics, preparing them for tomorrow’s challenges and opportunities.'
    }
];




  return (
    <div className="w-full h-auto flex flex-col z-0">
      <Carousel slides={slides} />
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