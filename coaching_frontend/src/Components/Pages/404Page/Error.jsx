import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-indigo-50 flex flex-col justify-center items-center gap-10 h-screen mt-5'>
      <div
      //  data-aos="slide-down"
        className='text-center space-y-10'>
        <h1 className='text-[20rem] lg:text-9xl font-black text-slate-500'>404</h1>
        <p className='text-5xl lg:text-4xl font-bold'>
          Oops! We can't seem to find the page you're looking for.
        </p>
        <p className='text-[#3426dd] text-xl'>This page is currently under development.</p>
        <p className='text-3xl lg:text-2xl'>
          But don’t worry! You can return to our homepage and explore other content.
        </p>
        <button
          className='w-96 lg:w-64 bg-[#3426dd] m-auto text-white text-3xl lg:text-xl rounded-md p-5 lg:p-3 hover:bg-blue-800 transition-colors duration-300'
          onClick={() => navigate('/')}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  )
}

export default Error
