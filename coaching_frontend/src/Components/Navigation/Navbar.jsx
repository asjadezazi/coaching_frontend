import React from 'react';
import { Logo } from './Logo';
import NavTitles from './NavTitles';
import DropDownMenu from './DropDownMenu';

export const Navbar = () => {
  return (
    <nav
      className="w-full h-52 lg:h-24  flex justify-between items-center fixed z-10 text-white px-14 lg:px-16 bg-no-repeat bg-cover bg-navbar-bg"
    >
      <Logo />
      <NavTitles />
      <DropDownMenu />
    </nav>
  );
};

