import React from 'react'
import { assets } from './assets/assets'

const Header = () => {
  return (
    <div className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center rounded-3xl m-3 sm:m-6 md:m-8 overflow-hidden">
      
      <img
        src={assets.header_img}
        alt="Food"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.85]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-orange-500/30 to-transparent"></div>

      <div className="relative z-10 text-left sm:text-center px-4 sm:px-8 md:px-20 text-white max-w-xl sm:max-w-2xl md:max-w-3xl animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight mb-4 drop-shadow-md">
          Order your <br className="hidden sm:block" /> favourite food here
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-8 leading-relaxed">
          Choose from a diverse menu featuring a delectable array of dishes crafted with
          the finest ingredients and culinary expertise. Satisfy your cravings and
          elevate your dining experience — one delicious meal at a time.
        </p>
        <button className="bg-white text-orange-600 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-orange-100 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
