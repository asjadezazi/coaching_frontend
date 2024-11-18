import React , {useEffect} from 'react';
import AboutUsHeading from './AboutUsHeading';
import AboutUsPara from './AboutUsPara';
import OurMission from './OurMission';
import WhyChooseUs from './WhyChooseUs';
import TestimonialSection from '../Home/TestimonialSection';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-52 lg:mt-24 bg-'>
      <AboutUsHeading />
      <AboutUsPara />
      <OurMission />
      <WhyChooseUs />
      <TestimonialSection />
    </div>
  );
}

export default AboutUs;
