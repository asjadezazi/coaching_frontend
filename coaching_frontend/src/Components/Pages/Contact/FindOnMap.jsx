import React from 'react';

const FindOnMap = () => {
  return (
    <div className='flex flex-col justify-around lg:flex-row mx-14 bg-indigo-50 rounded-xl relative bottom-7'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.653289056225!2d77.5551331107905!3d29.960649874861527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb21c9f2ab0b%3A0x9d6e786e71aacfe5!2sEzazi%20Classes!5e0!3m2!1sen!2sin!4v1725701465493!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-[50vh] lg:h-[80vh] p-10'
      ></iframe>
    </div>
  );
}

export default FindOnMap;
    