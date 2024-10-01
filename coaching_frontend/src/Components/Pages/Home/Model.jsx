import React from "react"
import model from '../../../assets/model.png'
import react from '../../../assets/SvgIcons/react.svg'
import node from '../../../assets/SvgIcons/node.svg'
import tailwind from '../../../assets/SvgIcons/tailwind.svg'
import html from '../../../assets/SvgIcons/html.svg'
import js from '../../../assets/SvgIcons/js.svg'
import vue from '../../../assets/SvgIcons/vue.svg'
import { initAOS } from "../../Utils/aosConfig"

const Model = () => {
    initAOS({
        duration: 1500,
      });
    return (
        <div className="flex justify-center relative top-44 lg:top-24"
        //   data-aos="slide-up"
          >
            {/* Top-left */}
            <div className="absolute top-0 left-[20%] sm:left-[28 %] md:left-[30%] lg:left-[35%] xl:left-[38%]  rounded-md w-12 h-11 z-0">
                <img src={tailwind} alt="Tailwind" className="animate-bounce size-10 relative left-1" />
            </div>

            {/* Middle-left */}
            <div className="absolute top-32 left-[10%] sm:left-[20%] sm:top-48 sm:size-28 lg:size-12 lg:top-[100px] md:left-[10%] lg:left-[25%] xl:left-[30%] rounded-lg w-16 h-16 flex justify-center items-center z-0">
                <img src={js} alt="JavaScript" className="animate-bounce sm:size-28 lg:size-12" />
            </div>

            {/* Top-right */}
            <div className="absolute top-0 right-[20%] sm:right-[28%] md:right-[30%] lg:right-[35%] xl:right-[38%]  rounded-md z-0 w-12 h-10 flex justify-center items-center">
                <img src={vue} alt="Vue.js" className="animate-bounce size-10" />
            </div>

            {/* Central Model */}
            <div className="flex justify-center">
                <img
                    src={model}
                    alt="Model"
                    className="
                    mt-3
                    w-1/2
                    md:w-[500px]
                    h-auto
                    drop-shadow-[0_10px_100px_#150c77]
                    lg:w-[240px]"
                />
            </div>

            {/* Bottom-left */}
            <div className="absolute bottom-5 left-[30%] sm:left-[15%] sm:size-16 md:left-[10%] lg:left-[20%] lg:size-8 xl:left-[27%] rounded-md  w-10 h-10 flex justify-center items-center">
                <img src={node} alt="Node.js" className="animate-bounce sm:size-16 lg:size-8" />
            </div>

            {/* Middle-right */}
            <div className="absolute top-32 right-[10%] sm:right-[20%] sm:size-32 lg:size-14 lg:top-[100px] sm:top-48 md:right-[10%] lg:right-[25%] xl:right-[30%] h-16 w-16 flex justify-center items-center rounded-lg">
                <img src={react} alt="React" className="animate-bounce sm:size-32 lg:size-14" />
            </div>

            {/* Bottom-right */}
            <div className="absolute bottom-5 right-[20%] sm:right-[15%] sm:size-16 md:right-[10%] lg:right-[20%] lg:size-8 xl:right-[27%]  w-10 h-10 flex justify-center items-center rounded-md">
                <img src={html} alt="HTML" className="animate-bounce sm:size-16 lg:size-8" />
            </div>
        </div>
    );
};


export default Model  