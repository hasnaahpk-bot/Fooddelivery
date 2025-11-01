import React from "react";
import menu_1 from "../assets/menu_1.png";
import menu_2 from "../assets/menu_2.png";
import menu_3 from "../assets/menu_3.png";
import menu_4 from "../assets/menu_4.png";
import menu_5 from "../assets/menu_5.png";
import menu_6 from "../assets/menu_6.png";
import menu_7 from "../assets/menu_7.png";
import menu_8 from "../assets/menu_8.png";

const menu_list = [
  { menu_name: "Salad", menu_image: menu_1 },
  { menu_name: "Rolls", menu_image: menu_2 },
  { menu_name: "Deserts", menu_image: menu_3 },
  { menu_name: "Sandwich", menu_image: menu_4 },
  { menu_name: "Cake", menu_image: menu_5 },
  { menu_name: "Pure Veg", menu_image: menu_6 },
  { menu_name: "Pasta", menu_image: menu_7 },
  { menu_name: "Noodles", menu_image: menu_8 },
];

const ExplorMenu = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-10 text-center overflow-hidden">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
        Explore our menu
      </h2>
      <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission
        is to satisfy your cravings and elevate your dining experience — one delicious
        meal at a time.
      </p>

      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 sm:gap-10 justify-start sm:justify-center flex-nowrap animate-scroll hover:pause-scroll px-2 sm:px-0">
          {[...menu_list, ...menu_list].map((item, index) => (
            <div
              key={index}
              className="flex-none flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 shadow-md">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12 border-t border-gray-200"></div>
    </div>
  );
};

export default ExplorMenu;
