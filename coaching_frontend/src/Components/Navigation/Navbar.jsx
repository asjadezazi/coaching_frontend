import { Phone, MoveRight, AlignJustify  } from 'lucide-react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './navbar.scss'

export const Navbar = () => {
    return (
    <nav className="w-full flex justify-between items-center text-white bg-purple-700 py-4 px-8 md:px-32 font-sans">
      <Logo/>
      <NavTitles/>
      <ContactUs/>
      <DropDownMenu/>
    </nav>
  )
}

export const Logo = () => {
  return (
    <div className='flex items-center gap-3 font-bold'>
      <img src={logo} alt="logo" className='w-10  fill-white'/>
      <BrandName/>
    </div>
  )
}

export const BrandName = () => {
  return (
    <h1 id='name' className='relative top-1 text-3xl'>Ezazi Classes</h1>
  )
}

export const NavTitles = () => {
  return (
   <ul className="hidden xl:flex items-center gap-12 font-semibold  text-m">
    <li><Link to="/">Home</Link></li>
    <li><Link to="courses">Courses</Link></li>
    <li><Link to="teachers">Teachers</Link></li>
    <li><Link to="about-us">About Us</Link></li>
    <li><Link to="contact">Contact</Link></li>
   </ul>
  )
}

export const ContactUs = () => {
  return (
    <div className="relative hidden md:flex items-center justify-center box-border">
      <Phone size={20} className='stroke-1'/> 
      <span>+9068695887</span>
      <button className='bg-blue-600 mx-4 h-9 p-2 text-xs flex items-center'>Get For Free <MoveRight className='mx-2' size={17}/></button>
    </div>
  )
}

export const DropDownMenu = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  return (
    <>
    <div className='xl:hidden block cursor-pointer text-5xl z-10'>
      <AlignJustify onClick={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>
    <div className={`z-20 absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-bold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition: 'transform 0.3s ease, opacity 0.3s ease' , color: 'darkblue'}}>

    <li className='list-none w-full text-center p-4 hover:bg-purple-700 hover:text-white transition-all cursor-pointer'>Home</li>
    <li className='list-none w-full text-center p-4 hover:bg-purple-700 hover:text-white transition-all cursor-pointer'>Courses</li>
    <li className='list-none w-full text-center p-4 hover:bg-purple-700 hover:text-white transition-all cursor-pointer'>Teachers</li>
    <li className='list-none w-full text-center p-4 hover:bg-purple-700 hover:text-white transition-all cursor-pointer'>About Us</li>
    <li className='list-none w-full text-center p-4 hover:bg-purple-700 hover:text-white transition-all cursor-pointer'>Contact</li>

    </div>
    </>
  ) 
}

export const BackgroundLines = () => {
  return (
    <div className='z-10'>
      <img src="https://data.themeim.com/wp/tutorgo/wp-content/themes/tutorgo/assets/img/icons/line-shape.png" alt="" />
    </div>
  )
}