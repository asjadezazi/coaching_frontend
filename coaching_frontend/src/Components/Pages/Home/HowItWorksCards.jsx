import React from "react"
import Bg from '../../../assets/SvgIcons/RectLight.svg'
import pinkBg from '../../../assets/SvgIcons/pinkbg.svg'
import purplebg from '../../../assets/SvgIcons/purplebg.svg'
import icon1 from '../../../assets/01.png'
import icon2 from '../../../assets/02.png'
import icon3 from '../../../assets/03.png'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from "react-router-dom"


const HowItWorksCards = () => {
  const navigate = useNavigate()
  const data = [
    {
      id: "01",
      title: "Send Us Message",
      description: "Reach out to us by sending a message through our contact form. We'll guide you from your first step to receiving a response within minutes.",
      image: Bg,
      icon: icon1,
      backgroundColor: "#CCE4FF",
      arrow: <ArrowRight className='stroke-white'/>
    },
    {
      id: "02",
      title: "Discuss With Us",
      description: "Once we receive your message, our team will review it and provide tailored advice on how our services can best meet your needs.",
      image: pinkBg,
      icon: icon2,
      backgroundColor: "#FFEAF5",
      arrow: <ArrowLeft className='stroke-white'/>
    },
    {
      id: "03",
      title: "Start Your Learning",
      description: "Getting started is simple and secure. We offer convenient payment options to ensure your learning journey begins without any hassle.",
      image: purplebg,
      icon: icon3,
      backgroundColor: "#F1D9FF",
      arrow: <ArrowRight className='stroke-white'/>
    }
  ];
  
  return (
    <div className="py-28 lg:py-10">
      {data.map((value, index) => {
        const isReverseLayout = value.id === "02";
        return (
          <div className={`lg:py-5 lg:flex ${isReverseLayout ? 'lg:flex-row-reverse' : ''} justify-center items-center cursor-pointer`} key={index} onClick={()=> navigate('/contact')}>
            <div className="px-10 lg:flex lg:flex-col lg:gap-10">
              <h1 className="text-6xl font-extrabold lg:font-bold lg:text-2xl lg:w-96">{value.title}</h1>
              <p className="text-5xl leading-normal lg:leading-6 pt-10 lg:pt-2 lg:text-lg lg:w-96">{value.description}</p>
            </div>
            <div className='hidden lg:inline lg:bg-[#765dd4] lg:rounded-full lg:p-1 lg:mt-16'>{value.arrow}</div>
            <div className=" py-40 lg:py-10 px-10">
              <div
              //  data-aos="zoom-in"
                className={`flex lg:relative top-10`}>
                <div
                  className="w-[30%] lg:w-20 h-[470px] lg:h-32 rounded-tl-[80px] lg:rounded-tl-3xl rounded-bl-[80px] lg:rounded-bl-3xl bg-center bg-cover flex justify-center items-center text-white text-8xl lg:text-3xl font-bold"
                  style={{ backgroundImage: `url(${value.image})` }}
                >
                  {value.id}
                </div>

                <div className="w-[70%] lg:w-64 h-[470px] lg:h-32 rounded-tr-[80px] lg:rounded-tr-3xl rounded-br-[80px] lg:rounded-br-3xl flex justify-center items-center" style={{ backgroundColor: `${value.backgroundColor}` }}>
                  <img
                    src={value.icon}
                    alt={`${value.title} icon`}
                    className="size-52 filter invert-0 lg:size-16"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorksCards;
