import React from 'react';
import ChooseUsHeading from './ChooseUsHeading';
import ChooseUsCards from './ChooseUSCards';

const ChooseUsSection = () => {
  return (
    <section className='h-auto bg-white z-0 pt-16'>
      <ChooseUsHeading/>
      <ChooseUsCards />
    </section>
  );
}

export default ChooseUsSection;
