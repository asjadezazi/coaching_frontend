import React from 'react';
import { Logo } from './Logo';
import NavTitles from './NavTitles';
import DropDownMenu from './DropDownMenu';
import navbarbg from '../../assets/navbarbg.svg';

export const Navbar = () => {
  return (
    <nav
      className="w-full h-52 lg:h-24  flex justify-between items-center fixed z-10 text-white px-14 lg:px-16 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${navbarbg})` }}
    >
      <Logo />
      <NavTitles />
      <DropDownMenu />
    </nav>
  );
};

