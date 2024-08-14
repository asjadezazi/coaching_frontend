import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    // container
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-8">

      {/* purple background */}
      <div className="absolute inset-0 h-1/3 md:h-1/2 bg-purple-700 flex justify-center"></div>

      {/* contact form */}
      <div className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 relative z-10 bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl">

        {/* contact info */}
        <div className='w-full md:w-1/3 border rounded-md bg-purple-700 py-4'>
          <h3 className="text-xl md:text-2xl text-white font-bold p-4 text-center">Contact Information</h3>
          <p className='text-white text-left px-6 md:px-9 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni corporis unde molestias</p>
          <div className='flex flex-col p-5 md:p-7 gap-6 md:gap-12 text-white'>
            <div className='flex items-center gap-4'>
              <Phone className='stroke-current' />
              <div>
                <p>+9068695887</p>
                <p>+9971817981</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Mail className='stroke-current' />
              <p>email@example.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <MapPin className='stroke-current' />
              <p>1234 Street Name, City,</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className='w-full md:w-2/3'>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-purple-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-purple-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-purple-700" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 h-24 md:h-32 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-purple-700 text-white shadow appearance-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
  