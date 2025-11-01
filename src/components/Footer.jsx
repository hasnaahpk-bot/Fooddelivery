import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white py-10 sm:py-12 px-4 sm:px-8 md:px-16" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">

        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-3 sm:mb-4">
            Foodo<span className="text-orange-700">.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex space-x-3 sm:space-x-4">
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center border border-gray-400 rounded-full hover:bg-orange-500 transition-all"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center border border-gray-400 rounded-full hover:bg-orange-500 transition-all"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center border border-gray-400 rounded-full hover:bg-orange-500 transition-all"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">COMPANY</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About us</li>
            <li className="hover:text-orange-500 cursor-pointer">Delivery</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">GET IN TOUCH</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-1">
            +1-212-456-7890
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            contact@foodo.com
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 border-t border-gray-600 pt-3 sm:pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © 2025 Foodo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
