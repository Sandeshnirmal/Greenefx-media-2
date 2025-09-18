import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

//Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navState, setNavState] = useState({ visible: true, top: true });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const visible = lastScrollY > currentScrollY || currentScrollY < 10;
      const top = currentScrollY < 50;

      setNavState({ visible, top });
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    navState.visible ? "translate-y-0" : "-translate-y-full"
  } ${
    navState.top ? "bg-transparent text-white" : "bg-white text-black shadow-md"
  }`;
  const textClasses = navState.top ? "text-white" : "text-black";
  const buttonClasses = navState.top
    ? "border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-white"
    : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white";
  const mobileMenuButtonClasses = navState.top ? "text-white" : "text-black";

  return (
    <nav className={navClasses}>
      <div className=" mx-auto px-10 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-around items-center ">
          <div className="flex-shrink-0 ">
            <img
              // NOTE: You will need to add your logo to the specified src path
              src="/src/assets/Gefx_logo.webp"
              alt="Greens Logo"
              className="h-12 w-auto transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/transparent/ffffff?text=Greenefx";
              }}
            />
          </div>
          <ul
            className={`hidden md:flex items-center text-lg lg:space-x-10 font-semibold ${textClasses}`}
          >
            <li>
              <a href="#about" className="hover:opacity-75 transition-opacity">
                About
              </a>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:opacity-75 transition-opacity"
              >
                Training
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:opacity-75">
                Service
              </Link>
            </li>
            <li>
              <a href="#career" className="hover:opacity-75 transition-opacity">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className={`hidden md:block bg-transparent border-2 rounded-lg text-base px-6 lg:px-8 py-2 lg:py-3 font-semibold transition-all duration-300  ${buttonClasses}`}
          >
            Enquire Now
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${mobileMenuButtonClasses} focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-md ${
              navState.top ? "bg-black/20 backdrop-blur-sm" : "bg-white"
            }`}
          >
            <ul
              className={`flex flex-col items-center space-y-4 font-semibold py-4 ${textClasses}`}
            >
              <li>
                <a href="#" className="hover:opacity-75">
                  About
                </a>
              </li>
              <li>
                <Link to="/courses" className="hover:opacity-75">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:opacity-75">
                  Training
                </Link>
              </li>
              <li>
                <a href="#career" className="hover:opacity-75">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block rounded-lg px-6 py-2 font-semibold ${buttonClasses}`}
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
