import React from 'react'
import star from '../../../assets/star.png'
import FrontendAccordion from './FrontendAccordion'

const FrontendCourse = () => {
    return (
        <div className=' p-7 py-10'>

            {/* heading */}
            <h1 className='text-8xl lg:text-5xl font-bold'>Front End Web Development:<span className='text-[#4e3dff]'> Get <br /> Started</span> </h1>

            <div className='flex items-center gap-5 mt-10'>
                <div className='flex'>
                    <img src={star} alt="star" className='size-10 lg:size-5' />
                    <img src={star} alt="star" className='size-10 lg:size-5' />
                    <img src={star} alt="star" className='size-10 lg:size-5' />
                    <img src={star} alt="star" className='size-10 lg:size-5' />
                </div>
                <p className='text-4xl text-slate-600 lg:text-xl'>by Ezazi Classes</p>
            </div>


            <p className='mt-10 lg:mt-5 text-5xl lg:text-xl leading-snug'>Learn beginner to advance Frontend Development</p>

            <h1 className='mt-20 font-bold lg:mt-10 text-7xl lg:text-2xl'>What You Will Learn</h1>
            <p className='mt-5 lg:mt-2 text-5xl lg:text-xl leading-normal'>
                - HTML, CSS, and JavaScript fundamentals<br />
                - Responsive web design with Flexbox and Grid<br />
                - Modern JavaScript (ES6+) and DOM manipulation<br />
                - CSS frameworks like Tailwind CSS<br />
                - Version control with Git and GitHub<br />
                - Introduction to React and building dynamic UIs<br />
                - Best practices for web accessibility and SEO<br />
            </p>

            <h1 className='mt-20 font-bold lg:mt-10 text-7xl lg:text-2xl'>Table Of Contents</h1>
            <FrontendAccordion />



        </div>
    )
}

export default FrontendCourse