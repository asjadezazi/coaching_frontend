import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-indigo-50 flex flex-col justify-center items-center gap-10 h-screen'>
      <div className='text-center space-y-10'>
        <h1 className='text-[20rem]  lg:text-9xl font-black text-slate-500'>404</h1>
        <p className='text-5xl lg:text-3xl font-bold'>Sorry , we couldn't find this page. </p>
        <p className='text-3xl lg:text-xl'>But dont't worry, you can find plenty of other things on our<br /> home page. </p>
        <button className='w-96 lg:w-64 bg-[#3426dd] m-auto text-white text-3xl lg:text-xl rounded-md p-5 lg:p-3' onClick={()=> navigate('/')}>Back To HomePage</button>
      </div>
    </div>
  )
}

export default Error