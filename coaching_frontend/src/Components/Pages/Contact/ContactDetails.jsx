import React from 'react'
import contactBg from '../../../assets/contactus.png'

const ContactDetails = () => {
  return (
    <div className='w-full lg:w-1/2 flex justify-center items-center'>
        <img src={contactBg} alt="contact" className='  lg:w-96 lg:h-96' />
    </div>
  )
}

export default ContactDetails