import React from 'react'
import laptopboy from '../../../assets/laptopboy.png'

const OurMission = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row my-20 p-10 lg:mx-20'>
    <div className='lg:w-2/4 flex justify-center items-center'>
        <img data-aos="zoom-in" src={laptopboy} alt="" className='size-2/3 lg:size-96' />
    </div>
    <div className='my-16 lg:w-2/4 lg:h-3/4'>
        <h1 data-aos="zoom-in"  className='text-8xl text-[#4e3dff] font-bold lg:text-5xl'>Our Mission</h1>
        <p data-aos="zoom-in" className='text-5xl lg:text-xl text-[#67687A] leading-snug pt-5'>Our mission is to provide high-quality, industry-relevant education that helps students succeed in the tech industry. We believe that learning should be accessible, practical, and engaging. With a focus on both theory and hands-on experience, we ensure that every student leaves with the confidence and skills to build real-world projects.</p>
    </div>
    </div>
  )
}

export default OurMission