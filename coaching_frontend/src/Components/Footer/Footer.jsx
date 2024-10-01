import React from "react"
import horizontalbg from '../../components/SvgIcons/horizontalbg.svg'
import logo from '../../components/SvgIcons/logo.svg'
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col gap-20 lg:px-16 lg:flex lg:flex-row lg:gap-20 text-white p-12 bg-cover bg-center' style={{ backgroundImage: `url(${horizontalbg})` }}>

        {/* brand name */}
        <div
        //  data-aos="zoom-in"
          className='lg:w-96 space-y-10 lg:space-y-4'>
          <div className='flex items-center gap-5'>
            <img src={logo} alt="logo" className='w-24 lg:w-12' />
            <h1 id='name' className='text-7xl font-extrabold lg:text-3xl pt-5 lg:pt-2'>Ezazi Classes</h1>
          </div>
          <p className='text-4xl lg:text-sm leading-normal'>We work with a passion of taking challenges and creating new ones in IT sector.</p>
          <button className='bg-blue-500 w-52 lg:w-20 rounded-full p-5 lg:p-2 font-bold text-4xl lg:text-sm  hover:bg-blue-600 transition-colors duration-300'><Link to="/aboutus">About Us</Link></button>
        </div>



        {/* quick links */}
        <div
        //  data-aos="zoom-in"
          className='lg:w-96 space-y-10 lg:space-y-4'>
          <h1 className='text-6xl font-bold lg:text-3xl'>Quick Links</h1>
          <ul className='text-4xl lg:text-sm space-y-3 lg:space-y-1'>
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="hover:underline">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline">
              <Link to="/admissions">Admissions</Link>
            </li>
          </ul>
        </div>


        {/* gallery */}
        <div
        //  data-aos="zoom-in"
          className='lg:w-96 space-y-10 lg:space-y-4'>
          <h1 className='text-6xl font-bold lg:text-3xl'>Other Services</h1>
          <ul className='text-4xl lg:text-sm space-y-3 lg:space-y-1'>
            <li>Web Designing</li>
            <li>Graphic Designing</li>
            <li>Web Development</li>
            <li>SEO & SMO</li>
            <li>Advertising</li>
            <li>AMC Maintenance</li>
            <li className="underline decoration-solid font-semibold hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
              <span> <a href="https://66f2590a67d3199c0e869836--mellifluous-medovik-f278ac.netlify.app"  target="_blank" rel="noopener noreferrer">Visit Us</a></span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </li>
          </ul>
        </div>


        {/* official info */}
        <div
        //  data-aos="zoom-in"
          className='lg:w-96 space-y-10 lg:space-y-4 text-4xl lg:text-sm'>
          <h1 className='text-6xl font-bold lg:text-3xl'>Official Info.</h1>
          <p className='leading-snug flex gap-2  hover:text-blue-400 transition-colors duration-300'><MapPin className='size-10 lg:size-5' /><a href="https://maps.app.goo.gl/9LzKdmt7UqyZdzRo7"  target="_blank" rel="noopener noreferrer"> Dehradun Road, Saharanpur, India</a></p>
          <p className='flex gap-2'><Phone className='size-10 lg:size-5' />91 9068695887</p>
          <h3 className='font-bold'>Open Hours :</h3>
          <p>Mon-Sat : 9 am - 6 pm</p>
          <p>Sunday : Closed</p>
        </div>

        {/* copyright */}
        {/* <div className="lg:flex-none p-4" >
            <p>&copy; 2024 Ezazi Classes. All rights reserved.</p>
          </div> */}

      </footer>

    </>
  )
}

export default Footer