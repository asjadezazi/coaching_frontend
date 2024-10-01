import React from 'react'
import logo from '../../assets/SvgIcons/logo.svg';
import { Link } from 'react-router-dom';


export const Logo = () => {
    return (
      <div className="h-24 flex justify-center items-center gap-3">
       <Link to="/"><img src={logo} alt="logo" className="w-24 lg:w-12 fill-white" /></Link> 
        <BrandName />
      </div>
    );
  };
  
  export const BrandName = () => {
    return (
      <div id='name' className="pt-5 lg:pt-2">
        <h1 className="text-7xl font-extrabold lg:text-3xl">
        <Link to="/">Ezazi Classes</Link>  
        </h1>
      </div>
    );
  };