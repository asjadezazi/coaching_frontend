import React from 'react';
import Typewriter from 'typewriter-effect';
import '../../Navigation/navbar.scss';

const AboutUsHeading = () => {
  return (
    <div id='name' className='h-[85vh] bg-no-repeat text-center leading-normal lg:leading-normal font-black flex justify-center items-center text-9xl lg:text-7xl lg:font-bold bg-cover bg-aboutus-vertical-bg lg:bg-aboutus-bg'>
      <Typewriter
        options={{
          strings: ['Welcome <br/> To Ezazi Classes ...'], 
          autoStart: true,           
          loop: false,                   
          deleteSpeed: Infinity,       
          cursor: "",                    
        }}
      />
    </div>
  );
};

export default AboutUsHeading;
