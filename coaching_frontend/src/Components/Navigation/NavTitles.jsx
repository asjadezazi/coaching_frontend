import React from 'react'
import { Link } from 'react-router-dom'

const NavTitles = () => {
  return (
    <ul className="hidden lg:contents xl:flex items-center gap-12 font-semibold text-m">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/courses">Courses</Link>
    </li>
    <li>
      <Link to="/aboutus">About Us</Link>
    </li>
    <li>
      <Link to="/faqs">FAQs</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/admissions">Admissions</Link>
    </li>
  </ul>
  )
}

export default NavTitles