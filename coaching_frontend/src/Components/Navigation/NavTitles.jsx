import React from 'react'
import { Link } from 'react-router-dom'

const NavTitles = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admissions', path: '/admissions' }
  ]
  return (
    <ul className="hidden lg:contents xl:flex items-center gap-12 font-semibold text-m">
      {links.map((value, index) => {
            return (
              <li key={index} className="hover:underline">
                <Link to={value.path}>{value.name}</Link>
              </li>
            )
          })}
  </ul>
  )
}

export default NavTitles