import React from 'react'
import lady from '../../../assets/testimonial.png'
import boy from '../../../assets/boy.png'

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col lg:flex-row-reverse lg:px-20 bg-white'>
            <div className='lg:w-2/4 mt-20 flex lg:flex-col justify-center items-center'>
                <img src={lady} alt="" className='lg:size-96' />
                <img src={boy} alt="" className='lg:size-96 hidden lg:inline' />
            </div>
            <div className='p-10 my-10 lg:w-2/4 lg:h-3/4 flex flex-col gap-10 lg:gap-5'>
                <h1 className='text-8xl px-3 text-[#4e3dff] font-bold lg:text-5xl'>Why Choose Us ?</h1>
                <p className='bg-indigo-50 rounded-xl text-5xl lg:text-xl text-[#67687A] leading-snug p-5'>
                    <span className='font-bold'>Expert Faculty:</span> Our instructors are industry professionals with extensive experience in web development. They are not only skilled in their fields but are also passionate about teaching and mentoring students.
                </p>
                <p className='bg-indigo-50 rounded-xl text-5xl lg:text-xl text-[#67687A] leading-snug   p-5'>
                    <span className='font-bold'>Comprehensive Curriculum:</span>Our curriculum is designed to cover the most relevant topics in web development, ensuring that you stay up-to-date with the latest trends and technologies.
                </p>
                <p className='bg-indigo-50 rounded-xl text-5xl lg:text-xl text-[#67687A] leading-snug   p-5'>
                    <span className='font-bold'>Practical Learning:</span>We believe in learning by doing. Our courses are designed with real-world projects and assignments that give students hands-on experience.
                </p>
                <p className='bg-indigo-50 rounded-xl text-5xl lg:text-xl text-[#67687A] leading-snug   p-5'>
                    <span className='font-bold'>Career Support:</span>We offer guidance on job placements, internships, and building portfolios to help students land their dream jobs in tech.
                </p>
            </div>
        </div>
    )
}

export default WhyChooseUs