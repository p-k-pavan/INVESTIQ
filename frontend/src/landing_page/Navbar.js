import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky bg-white top-0 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-12 lg:py-6">
        {/* Brand */}
        <div className="flex items-center lg:w-2/3">
          <Link to={'#'} className="text-2xl font-bold text-black no-underline">
            INVESTIQ
          </Link>
        </div>

        {/* Toggler for Mobile */}
        <button
          className="lg:hidden text-gray-700"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-6 text-gray-700 text-sm lg:text-base lg:w-full lg:mx-auto lg:w-1/2`}
        >
          <div className={`grid ${isOpen ? "grid-cols-2 gap-2" : ""} lg:flex lg:space-x-6 lg:w-auto lg:gap-8`}>
            <Link
              to={'/sign-up'}
              className="hover:text-blue-500 transition duration-200 text-decoration-none text-black text-lg block lg:inline-block w-full text-center lg:text-left py-1">
              Signup
            </Link>
            <Link
              to={'/product'}
              className="hover:text-blue-500 transition duration-200 text-decoration-none text-black text-lg block lg:inline-block w-full text-center lg:text-left py-1">
              Products
            </Link>
            <Link
              to={'/about'}
              className="hover:text-blue-500 transition duration-200 text-decoration-none text-black text-lg block lg:inline-block w-full text-center lg:text-left py-1">
              About
            </Link>
            <Link
              to={'/support'}
              className="hover:text-blue-500 transition duration-200 text-decoration-none text-black text-lg block lg:inline-block w-full text-center lg:text-left py-1">
              Support
            </Link>
            <Link
              to={'/pricing'}
              className="hover:text-blue-500 transition duration-200 text-decoration-none text-black text-lg block lg:inline-block w-full text-center lg:text-left py-1">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
