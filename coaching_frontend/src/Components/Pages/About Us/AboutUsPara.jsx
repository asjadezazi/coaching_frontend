import React from 'react'
import sittingLadyBg from '../../../assets/sittinglady.png'

const AboutUsPara = () => {
  return (
    <div className='flex flex-col lg:flex-row my-20 lg:mx-20'>
    <div className='p-10 my-10 lg:w-2/4 lg:h-3/4'>
        <h1 data-aos="slide-right" className='text-8xl text-[#4e3dff] font-bold lg:text-5xl'>Introduction</h1>
        <p data-aos="zoom-in" className='text-5xl lg:text-xl text-[#67687A] leading-snug pt-5'>At Ezazi Classes, we are dedicated to empowering individuals with the knowledge and skills needed to excel in the fast-paced world of web development. Our institute offers a comprehensive range of courses, focusing on cutting-edge technologies to help students become proficient in both frontend and backend development. Whether you're a beginner or looking to advance your career, we provide the right tools and guidance to achieve your goals.</p>
    </div>
    <div className='lg:w-2/4 flex justify-center items-center'>
        <img data-aos="zoom-in" src={sittingLadyBg} alt="" className='lg:size-96' />
    </div>
    </div>
  )
}

export default AboutUsPara