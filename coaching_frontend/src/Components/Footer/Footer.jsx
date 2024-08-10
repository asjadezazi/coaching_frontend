const Footer = () => {
    return (
      <footer className="bg-gradient-to-tr from-purple-700 to-purple-600 text-white py-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Ezazi Classes</h2>
            <p className="text-sm">
             Learn Then Earn
            </p>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2 hover:text-blue-300"><a href="/">Home</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/courses">Courses</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/teachers">Teachers</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/blogs">Blogs</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/about">About Us</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Courses</h2>
            <ul className="text-sm">
              <li className="mb-2 hover:text-blue-300"><a href="/course1">Course 1</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course2">Course 2</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course3">Course 3</a></li>
              <li className="mb-2 hover:text-blue-300"><a href="/course4">Course 4</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
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
  
        <div className="mt-8 text-center border-t border-white pt-4">
          <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  export default Footer;
  