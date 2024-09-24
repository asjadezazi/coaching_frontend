import React from 'react'
import logo from '../../assets/logo.svg';


export const Logo = () => {
    return (
      <div className="h-24 flex justify-center items-center gap-3">
        <img src={logo} alt="logo" className="w-24 lg:w-12 fill-white" />
        <BrandName />
      </div>
    );
  };
  
  export const BrandName = () => {
    return (
      <div id='name' className="pt-5 lg:pt-2">
        <h1 className="text-7xl font-extrabold lg:text-3xl">
          Ezazi Classes
        </h1>
      </div>
    );
  };