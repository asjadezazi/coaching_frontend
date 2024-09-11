import React, { useEffect } from 'react'
import FAQsHeading from './FAQsHeading'
import FAQsAccordion from './FAQsAccordion'

const FAQs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-indigo-50 py-5 mt-24'>
        <FAQsHeading />
        <FAQsAccordion />
        </div>
  )
}

export default FAQs