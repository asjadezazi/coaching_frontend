import React from 'react'
import star from '../../../assets/star.png'


const MeanCourseHeading = () => {
  return (
    <div 
    // data-aos="slide-right"
     className='mt-28 p-7  '>

    {/* heading */}
    <h1 className='text-8xl lg:text-5xl font-bold'>Full Stack Development:<span className='text-[#4e3dff]'> With <br /> Mean</span> </h1>

    <div className='flex items-center gap-5 mt-10'>
        <div className='flex'>
            <img src={star} alt="star" className='size-10 lg:size-5' />
            <img src={star} alt="star" className='size-10 lg:size-5' />
            <img src={star} alt="star" className='size-10 lg:size-5' />
            <img src={star} alt="star" className='size-10 lg:size-5' />
        </div>
        <p className='text-4xl text-slate-600 lg:text-xl'>by Ezazi Classes</p>
    </div>


    <p className='mt-10 lg:mt-5 text-5xl lg:text-xl  leading-snug'>Learn industry oriented MEAN Stack Development</p>

    <h1 className='mt-20 font-bold lg:mt-10 text-[#4e3dff] text-7xl lg:text-2xl'>Table Of Contents</h1>
    <p className='text-5xl lg:text-xl w-full lg:w-3/5 leading-snug p-4'>Inside each header, the content covers a comprehensive exploration of the topic, including: Conceptual Foundations, Technical Details, Libraries and Frameworks, Advanced Topics, Practical Applications.</p>
</div>
  )
}

export default MeanCourseHeading