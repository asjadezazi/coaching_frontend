import React from 'react'
import getstarted from '../../../assets/getstarted.svg'

const GetStarted = () => {
  return (
    <div className=' flex justify-between p-8 bg-top rounded-3xl mt-10' style={{ backgroundImage: `url(${getstarted})` }}>
        <p className='text-white text-6xl lg:text-4xl font-extrabold'>Ready To Upskill ?</p> 
        <button className='bg-black text-white text-4xl lg:text-xl font-bold p-3 lg:p-2 w-72 lg:w-52 rounded-full'>Get Started</button>
    </div>
  )
}

export default GetStarted