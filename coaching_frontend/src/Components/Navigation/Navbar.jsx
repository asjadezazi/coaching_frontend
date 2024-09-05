import React from 'react'
import { Phone, MoveRight, AlignJustify  } from 'lucide-react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import navbarbg from '../../assets/navbarbg.svg'
import './navbar.scss'

export const Navbar = () => {
    return (
    <nav className="w-full h-52 lg:h-24 flex justify-between items-center fixed z-10 text-white px-14 lg:px-16 font-sans" 
    style={{ backgroundImage: `url(${navbarbg})` }}
    >
      <Logo/>
      <NavTitles/>
      <ContactUs/>
      <DropDownMenu/>
    </nav>
  )
}


export const Logo = () => {
  return (
    <div className='h-24 flex justify-center items-center gap-3'>
      <img src={logo} alt="logo" className='w-24 lg:w-12 fill-white'/>
      <BrandName/>
    </div>
  )
}

export const BrandName = () => {
  return (
    <div className='pt-5 lg:pt-2'>
    <h1 id='name' className='text-7xl font-extrabold lg:text-3xl'>Ezazi Classes</h1>
    </div>
  )
}

export const NavTitles = () => {
  return (
   <ul className="hidden lg:contents xl:flex items-center gap-12 font-semibold text-m">
    <li><Link to="/">Home</Link></li>
    <li><Link to="courses">Courses</Link></li>
    <li><Link to="testimonials">Testimonials</Link></li>
    <li><Link to="aboutus">About Us</Link></li>
    <li><Link to="contact">Contact</Link></li>
   </ul>
  )
}

export const ContactUs = () => {
  return (
    <div className='hidden lg:contents'>
      <Phone size={20} className='stroke-2' />
      <span>+9068695887</span>
      <button className='bg-[#362ba6] h-9 p-2 text-xs flex items-center'>Get For Free<MoveRight className='mx-2' size={17}/></button>
    </div>
  )
}

export const DropDownMenu = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden block cursor-pointer text-5xl z-10">
        <AlignJustify className="size-20" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <div
        className={`z-20 absolute left-0 w-full bg-white flex flex-col items-center gap-6 font-bold text-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '100%', color: 'darkblue' }}
      >
        <li className=" text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer">
           <Link to='/'>Home</Link>
        </li>
        <li className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer">
           <Link to='/courses'>Courses</Link>
        </li>
        <li className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer">
          Teachers
        </li>
        <li className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer">
          About Us
        </li>
        <li className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer">
          Contact
        </li>
      </div>
    </>
  )
}

