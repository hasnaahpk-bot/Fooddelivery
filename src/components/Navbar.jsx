import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="font-sans bg-white text-gray-800">

      <nav className="flex justify-between items-center px-6 sm:px-8 md:px-16 py-5 shadow-sm sticky top-0 bg-white z-50">

        <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600 tracking-tight cursor-pointer">
          Foodo<span className="text-red-600">.</span>
        </h1>

        <ul className="hidden md:flex space-x-10 text-[16px] font-medium">
          <a href="/" className="hover:text-orange-600 cursor-pointer transition-all">Home</a>
          <a href="#menu" className="hover:text-orange-600 cursor-pointer transition-all">Menu</a>
          <a href="#app" className="hover:text-orange-600 cursor-pointer transition-all">Mobile-App</a>
          <a href="#contact" className="hover:text-orange-600 cursor-pointer transition-all">Contact Us</a>
        </ul>

        <div className="flex items-center space-x-5">
          <img src={assets.search_icon} className="w-5 sm:w-6 cursor-pointer" alt="Search" />
          <img src={assets.basket_icon} className="w-5 sm:w-6 cursor-pointer" alt="Cart" />
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
            Login
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex flex-col justify-center items-center"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-orange-600">
            Foodo<span className="text-red-600">.</span>
          </h1>
          <button onClick={() => setOpen(false)} aria-label="Close">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 text-base font-medium">
          <a href="/" className="hover:text-orange-600 transition-all">Home</a>
          <a href="#menu" className="hover:text-orange-600 transition-all">Menu</a>
          <a href="#app" className="hover:text-orange-600 transition-all">Mobile App</a>
          <a href="#contact" className="hover:text-orange-600 transition-all">Contact Us</a>

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
            Login
          </button>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
