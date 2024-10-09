import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

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
        <div className="relative w-full md:my-10 my-4">
            <div className="overflow-hidden relative h-[45vh] lg:h-[65vh] md:py-10 py-4 mt-40 lg:mt-20">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all grid md:grid-cols-2 gap-2 duration-1000 ease-in-out transform ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <div className='md:p-20 p-4 w-screen lg:w-full flex flex-col items-start justify-center space-y-4'>
                            <h1 className='text-8xl lg:text-4xl leading-snug font-bold'>{slide.title}</h1>
                            <p className="leading-snug text-5xl lg:text-lg font-medium text-gray-700">{slide.description}</p>
                            <div className='flex justify-start items-center space-x-3'>
                                <Link to="/courses" className='text-white text-4xl lg:text-base p-4 lg:p-2 px-4 rounded-md bg-gray-800'>Learn More</Link>
                                <Link to="/contact" className='text-white text-4xl lg:text-base p-4 lg:p-2 px-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Join Now</Link>
                            </div>
                        </div>
                        <img src={slide.image} alt={`Slide ${index}`} className="w-full hidden lg:block" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
