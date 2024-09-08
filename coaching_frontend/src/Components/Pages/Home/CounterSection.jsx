import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import horizontalbg from '../../../assets/horizontalbg.svg';
import verticalbg from '../../../assets/verticalbg.svg';
import hat from '../../../assets/graduation-hat.svg';
import expert from '../../../assets/expert.svg';
import opinion from '../../../assets/opinions.svg';

const CounterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger only once
        threshold: 0.5,      // Trigger when 50% of the component is in view
    });

    const counters = [
        {
            icon: hat,
            end: 122,
            suffix: "+",
            description: "Successful batches completed with excellent results.",
        },
        {
            icon: expert,
            end: 36,
            suffix: "+",
            description: "Expert faculties delivering quality education nationwide.",
        },
        {
            icon: opinion,
            end: 99,
            suffix: "%",
            description: "Student satisfaction rate through our unique teaching methods.",
        },
    ];

    return (
        <div
            ref={ref}
            className="mx-12 lg:mx-52 my-10 lg:flex text-white bg-cover bg-center"
            style={{
                backgroundImage: `url(${verticalbg})`, // Default for smaller screens
            }}
        >
            <div
                className="lg:w-full lg:h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${horizontalbg})`, // Override for larger screens
                }}
            >
                <div className="lg:flex lg:justify-around lg:items-center py-14 pl-10">
                    {counters.map((counter, index) => (
                        <div key={index} className="flex flex-col space-y-10 lg:space-y-0 lg:gap-0 justify-start items-start p-6">
                            <div className="flex">
                                <div className="bg-white rounded-3xl lg:rounded-2xl p-2">
                                    <img src={counter.icon} alt="icon" className="w-32 h-32 p-4 lg:w-12 lg:h-12 lg:p-0" />
                                </div>
                                {inView && (
                                    <h3 className="flex items-center text-7xl lg:text-4xl pl-2 font-bold">
                                        <CountUp end={counter.end} duration={3} suffix={counter.suffix || '+'} />
                                    </h3>
                                )}
                            </div>
                            <p className="text-5xl lg:text-sm pt-5 lg:pt-2">
                                {counter.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;