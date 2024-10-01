import React from "react"
import mongodb from '../../../assets/SvgIcons/mongodb.svg'
import express from '../../../assets/SvgIcons/express.svg'
import react from '../../../assets/SvgIcons/react.svg'
import node from '../../../assets/SvgIcons/node.svg'
import angular from '../../../assets/SvgIcons/angular.svg'
import cpp from '../../../assets/SvgIcons/cpp.svg'
import c from '../../../assets/SvgIcons/c.svg'
import html from '../../../assets/SvgIcons/html.svg'
import css from '../../../assets/SvgIcons/css.svg'
import js from '../../../assets/SvgIcons/js.svg'
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'

const CourseCards = () => {

    const data = [
        {
            title: "C and C++",
            icons: [c, cpp],
            description: "Learn the fundamentals of C and C++, gradually progressing towards an in-depth understanding of how programming works."
        },
        {
            title: "Frontend Development",
            icons: [html, css, js, react],
            description: "Master core Web Dev technologies such as HTML, CSS, Javascript and React to build dynamic, and interactive web applications.",
        },
        {
            title: "MERN Stack",
            icons: [mongodb, express, react, node],
            description: "Become proficient in full-stack web development by mastering the MERN stack: MongoDB, Express.js, React, and Node.js.",
        },
        {
            title: "MEAN Stack",
            icons: [mongodb, express, angular, node],
            description: "Gain expertise in full-stack web development by mastering the MEAN stack: MongoDB, Express.js, Angular, and Node.js."
        }
    ];

    return (
        <div className='px-16 mt-20 space-y-16 text-center lg:flex lg:space-x-3 lg:mt-0 lg:space-y-0 lg:px-28'>
            {data.map((value, index) => (
                <div
                    //  data-aos="fade-up" 
                    key={index} className='w-full px-32 lg:px-5 bg-indigo-50 rounded-xl text-black flex flex-col justify-between p-5'>
                    <div>
                        <div className='flex justify-evenly p-10 lg:p-5'>
                            {value.icons.map((icon, idx) => (
                                <img key={idx} src={icon} alt="" className='size-20 lg:size-10' />
                            ))}
                        </div>
                        <h1 className='text-6xl p-5 font-bold lg:text-2xl lg:p-0'>{value.title}</h1>
                        <div className='p-10 text-slate-600'>
                            <p className='text-4xl lg:text-lg leading-relaxed lg:leading-snug'>{value.description}</p>
                        </div>
                    </div>
                    <div className="mt-auto mb-10 lg:mb-0">
                        <button className='bg-[#4e3dff] text-white text-3xl py-4 rounded-sm hover:bg-blue-700 transition flex items-center justify-center m-auto p-10 lg:p-2 lg:text-sm'>
                            <Link to="/courses" className="flex items-center">
                                More Details <ArrowUpRight className="ml-2" />
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default CourseCards;
