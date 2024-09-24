import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';


const DropDownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
            <div className="lg:hidden block cursor-pointer text-5xl z-10">
                <AlignJustify
                    className="size-20"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div
                className={`z-20 absolute left-0 w-full bg-white flex flex-col items-center gap-6 font-bold text-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                style={{ top: '100%', color: 'darkblue' }}
            >
                <li
                    className=" text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/courses">Courses</Link>
                </li>
                <li
                    className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li
                    className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/faqs">FAQs</Link>
                </li>
                <li
                    className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/contact">Contact</Link>
                </li>
                <li
                    className="text-7xl list-none w-full text-center p-10 hover:bg-[#4e3dff] hover:text-white transition-all cursor-pointer"
                    onClick={handleLinkClick}
                >
                    <Link to="/admissions">Admissions</Link>
                </li>
            </div>
        </>
    )
}

export default DropDownMenu