import React, { useEffect } from 'react'
import ContactHeading from './ContactHeading'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import FindOnMap from './FindOnMap'
import MapHeading from './MapHeading'

const Contact = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Instant scroll to the top
  }, []);
  

  return (
    <div className='bg-indigo-50 mt-52 lg:mt-24 bg-aboutus-vertical-bg lg:bg-aboutus-bg bg-no-repeat bg-cover bg-center lg:bg-left-bottom'>
      <ContactHeading />
      <div data-aos="zoom-in" className='flex flex-col justify-around lg:flex-row mx-14 bg-indigo-50 rounded-xl'>
      <ContactDetails />
      <ContactForm /> 
      </div>
      <MapHeading/>
      <FindOnMap />
    </div>
  )
}

export default Contact