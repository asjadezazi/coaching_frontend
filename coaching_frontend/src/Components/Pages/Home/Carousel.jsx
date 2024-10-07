import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const startSlideShow = () => {
        slideInterval.current = setInterval(goToNext, 3000);
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow();
    }, [slides]);

    return (
        <div className="relative w-full lg:my-24 mt-36">
            <div className="overflow-hidden relative h-[50vh] lg:h-[70vh] md:py-10 py-4">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all grid md:grid-cols-2 gap-2 duration-1000 ease-in-out transform ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            }`}>
                        <div className='md:p-20 p-4 flex flex-col space-y-8'>
                            <h1 className='w-screen lg:w-2/3 text-8xl lg:text-4xl leading-snug font-bold'>{slide.title}</h1>
                            <p className="w-[600px] lg:w-4/5 leading-snug text-5xl lg:text-lg font-medium text-gray-700">{slide.description}</p>
                            <div className='flex justify-start items-center space-x-3'>
                            <Link to="/courses" className='text-white p-2 px-4 rounded-md bg-gray-800'>Learn More</Link>
                                <Link to="/contact" className='text-white p-2 px-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Join Now</Link>
                            </div>
                        </div>
                        <img src={slide.image} alt={`Slide ${index}`} className="hidden lg:block w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
