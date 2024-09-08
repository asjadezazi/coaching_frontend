import React from 'react';

const ContactForm = () => {
  return (
    <div className='w-full lg:w-1/2 shadow-lg rounded-lg p-8 text-center'>
      <h2 className='text-8xl lg:text-3xl font-extrabold text-[#4e3dff] mb-10 lg:mb-3'>Get In Touch</h2>
      <div>
        <form className='space-y-10 lg:space-y-5'>
          <div>
            <input
              type='text'
              placeholder='Name'
              className='w-full px-4 py-5 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e3dff] text-5xl lg:text-xl'
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email'
              className='w-full px-4 py-5 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e3dff] text-5xl lg:text-xl'
            />
          </div>
          <div>
            <textarea
              placeholder='Message'
              rows='5'
              className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e3dff] text-5xl lg:text-xl'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full py-7 lg:py-3 bg-[#4e3dff] text-white font-bold rounded-lg hover:bg-indigo-600 transition duration-300 text-5xl lg:text-xl'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
