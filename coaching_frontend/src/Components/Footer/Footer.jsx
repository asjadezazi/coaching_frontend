import { BrandName } from "../Navigation/Navbar";
import { Logo } from "../Navigation/Navbar";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-purple-700 text-white py-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <p className="mb-5 relative bottom-2">
              <Logo className=" w-20 sm:w-12"/>
              </p>
            <p className="text-sm">
             Learn Then Earn
            </p>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2 hover:text-blue-300"><Link to='/'>Home</Link></li>
              <li className="mb-2 hover:text-blue-300"><Link to='/courses'>Courses</Link></li>
              <li className="mb-2 hover:text-blue-300"><Link to='/teachers'>Teachers</Link></li>
              <li className="mb-2 hover:text-blue-300"><Link to='/about-us'>About Us</Link></li>
              <li className="mb-2 hover:text-blue-300"><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Courses</h2>
            <ul className="text-sm">
              <li className="mb-2 hover:text-blue-300"><a href="/course1">Course 1</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course2">Course 2</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course3">Course 3</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course4">Course 4</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm">+90 686 95887</p>
            <p className="text-sm">email@example.com</p>
            <div className="mt-4 flex space-x-4">
              {/* Replace with your social media icons */}
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 text-center border-t border-white pt-4 flex justify-center items-center gap-3">
          <p className="text-lg">&copy; 2024</p>
          <p> <BrandName/></p>
          <p className="text-lg">All rights reserved.</p>
        </div>
      </footer>
    );
  }
  export default Footer;
  