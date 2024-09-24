import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import star from '../../../assets/star.png';
import model from '../../../assets/model.png';
import azhar from '../../../assets/azhar.jpg'
import shavez from '../../../assets/shavez.jpg'
import arshad from '../../../assets/arshad.jpg'



const data = [
    {
        name: "Abu Azhar",
        description: "The courses were insightful and hands-on, allowing me to apply skills in real-time. The faculty's support was unmatched, making the experience transformative. Highly recommend this institute for tech careers.",
        post: "Full Stack Developer",
        rating: 5,
        image: azhar
    },
    {
        name: "Shavez Ali",
        description: "I landed my dream job thanks to the training and real-world projects. The curriculum matched industry needs, and the mentors were deeply invested in my success. Perfect environment to start a career.",
        post: "UI/UX Developer",
        rating: 4,
        image: shavez
    },
    {
        name: "Arshad",
        description: "The curriculum is well-structured, with clear, in-depth teaching. The projects built my confidence and portfolio. This experience significantly enhanced my tech skills and prepared me for the industry.",
        post: "Frontend Developer",
        rating: 3,
        image: arshad
    },
    {
        name: "Abhiraj Khatana",
        description: "Amazing experience! Knowledgeable faculty provided crucial insights for my career. The supportive environment made learning easy, and the skills I gained opened new opportunities in tech.",
        post: "React Developer",
        rating: 5,
        image: model
    }
];

const TestimonialCards = () => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={star} alt="star" className="w-6 h-6 lg:w-4 lg:h-4" />);
        }
        return stars;
    };

    return (
        <AwesomeSlider className='relative flex items-center justify-center px-10 py-10 w-full h-full lg:w-2/4 lg:h-auto' style={{ zIndex: 1 }}>
            {data.map((value, index) => {
                return (
                    <div 
                        key={index} 
                        className='w-full h-full bg-slate-50 p-10 lg:flex lg:flex-col lg:items-center lg:justify-center'
                    >
                        <div className='flex gap-2 px-5'>
                            {renderStars(value.rating)}
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='text-4xl text-[67687A] py-16 px-5 lg:py-10 lg:text-sm text-center'>{value.description}</p>
                            <div className='flex gap-7 items-center'>

                                <div className='rounded-full border-2 border-blue-900'>
                                    <img src={value.image} alt="img" className='p-2 w-28 h-28 lg:w-20 lg:h-20 rounded-full' />
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <h2 className='text-4xl font-bold lg:text-2xl text-center'>{value.name}</h2>
                                    <p className='text-2xl text-[#0018C4] font-bold lg:text-[15px] text-center'>{value.post}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </AwesomeSlider>
    )
}

export default TestimonialCards;
