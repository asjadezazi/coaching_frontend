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
        title: 'Master Cutting-Edge Tech Skills',
        description: 'Join Ezazi Classes to learn cutting-edge tech skills in courses like Frontend Development, MERN Stack, and more. Equip yourself for a successful career in tech.'
    },
    {
        image: '../src/assets/slide2.png', 
        title: 'Comprehensive Academic Coaching',
        description: 'We offer specialized coaching for students in classes 9 to 10, ensuring a strong foundation in subjects like Mathematics, Science, and English.'
    },
    {
        image: '../src/assets/slide3.png', 
        title: 'Your Pathway to Success and Growth',
        description: 'At Ezazi Classes, we are committed to empowering students through quality education in both technology and academics, ensuring they are ready for the challenges of tomorrow.'
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