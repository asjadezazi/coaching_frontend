import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'

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
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">

      {/* purple background */}
      <div className="absolute inset-0 h-1/2 bg-purple-700 flex justify-center text-4xl py-3 text-white font-bold">Get In Touch</div>

      {/* contact form */}
      <div className="flex justify-evenly gap-10 relative z-10 bg-white p-8 rounded-lg shadow-lg w-9/12">

        {/* contact info/ */}
        <div className='w-1/3 border rounded-md bg-purple-700 h-2/6 py-1'>
          <h3 className="text-2xl text-white font-bold p-4 text-center">Contact Information</h3>
          <p className='text-white text-left px-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni corporis unde molestias</p>
          <div className='flex flex-col p-7 gap-12 text-white'>
            <div className='flex gap-5'>
              <Phone className='fill-white stroke-purple-700' />
              <p>+9068695887</p>
              <p>+9971817981</p>
            </div>
            <div className='flex gap-5'>
              <Mail className='fill-white stroke-purple-700' />
              <p>email</p>
            </div>
            <div className='flex gap-5'>
              <MapPin className='fill-white stroke-purple-700' />
              <p>address</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className='w-2/3 h-2/6'>
          <h2 className="text-3xl font-bold text-center text-purple-700">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
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
            <div className="mb-2">
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
            <div className="mb-2">
              <label className="block text-sm font-bold mb-2 text-purple-700" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 h-32 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-purple-700 text-white shadow appearance-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
