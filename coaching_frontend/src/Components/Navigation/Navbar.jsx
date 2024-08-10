import { Phone, MoveRight, AlignJustify  } from 'lucide-react'
import { useState } from 'react'

export const Navbar = () => {
    return (
    <nav className="w-full flex justify-between items-center text-white bg-purple-800 py-6 px-8 md:px-32 font-sans">
      <Logo/>
      <NavTitles/>
      <ContactUs/>
      <DropDownMenu/>
    </nav>
  )
}

export const Logo = () => {
  return (
    <div>
      <img src="" alt="logo" />
    </div>
  )
}

export const NavTitles = () => {
  return (
   <ul className="hidden xl:flex items-center gap-12 font-semibold  text-sm">
    <li>Home</li>
    <li>Coarses</li>
    <li>Teachers</li>
    <li>Blogs</li>
    <li>About Us</li>
   </ul>
  )
}

export const ContactUs = () => {
  return (
    <div className="relative hidden md:flex items-center justify-center box-border">
      <Phone size={20} className='stroke-1'/> 
      <span>+9068695887</span>
      <button className='bg-blue-500 mx-4 h-9 p-2 text-xs flex items-center'>Get For Free <MoveRight className='mx-2' size={17}/></button>
    </div>
  )
}

export const DropDownMenu = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  return (
    <>
    <div className='xl:hidden block cursor-pointer text-5xl'>
      <AlignJustify onClick={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>
    <div className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-bold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition: 'transform 0.3s ease, opacity 0.3s ease' , color: 'darkblue'}}>

    <li className='list-none w-full text-center p-4 hover:bg-blue-900 hover:text-white transition-all cursor-pointer'>Home</li>
    <li className='list-none w-full text-center p-4 hover:bg-blue-900 hover:text-white transition-all cursor-pointer'>Coarses</li>
    <li className='list-none w-full text-center p-4 hover:bg-blue-900 hover:text-white transition-all cursor-pointer'>Teachers</li>
    <li className='list-none w-full text-center p-4 hover:bg-blue-900 hover:text-white transition-all cursor-pointer'>Blogs</li>
    <li className='list-none w-full text-center p-4 hover:bg-blue-900 hover:text-white transition-all cursor-pointer'>About Us</li>

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