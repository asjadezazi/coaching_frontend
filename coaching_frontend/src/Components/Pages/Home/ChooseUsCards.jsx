import React from 'react';
import Bg from '../../../assets/RectLight.svg';
import curriculum from '../../../assets/curriculum.svg';
import expert from '../../../assets/professional-success.svg';
import success from '../../../assets/customer-success.svg';

const ChooseUsCards = () => {
  const data = [
    {
      title: "Expert Instructors: Your Path to Mastery",
      description: "Our dedicated team of experienced instructors brings real-world expertise and a passion for teaching. With personalized guidance, you'll gain the skills and confidence to excel.",
      icon: expert,
    },
    {
      title: "Cutting-Edge Curriculum: Stay Ahead",
      description: "Our curriculum is meticulously crafted to cover the latest industry trends and technologies. We provide a comprehensive learning experience that prepares you for the challenges of tomorrow.",
      icon: curriculum,
    },
    {
      title: "Proven Success: Your Future, Secured",
      description: "Join a community of successful alumni who have turned their learning into thriving careers. Our track record of student success speaks for itself, with countless stories of transformation.",
      icon: success,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:px-28">
      {data.map((value, index) => {
        return (
          <div className="px-12 py-10 lg:py-0 lg:flex-1 lg:px-3" key={index}>
            <div
              className="relative bg-no-repeat bg-cover w-full h-full p-20 lg:p-10 flex items-center justify-center rounded-[80px] lg:rounded-[40px] text-left overflow-hidden"
              style={{ backgroundImage: `url(${Bg})` }}
            >
              <div className="hidden lg:block absolute inset-0 bg-black opacity-25 rounded-[80px]"></div>
              <div className="relative z-10 text-white flex flex-col gap-5">
                <img src={value.icon} alt="icon" className="size-28 lg:size-16" />
                <h1 className="text-5xl font-bold lg:text-lg">{value.title}</h1>
                <p className="text-3xl pt-5 lg:text-sm lg:pt-0">{value.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseUsCards;