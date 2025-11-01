import React from "react";
import playStore from "../assets/play_store.png";
import appStore from "../assets/app_store.png";

const AppDownload = () => {
  return (
    <div className="text-center py-12 sm:py-16 px-4 sm:px-8 bg-white" id="app">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 leading-snug">
        For Better Experience Download <br />
        <span className="font-bold text-orange-600">Foodo App</span>
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a href="#">
          <img
            src={playStore}
            alt="Google Play"
            className="w-36 sm:w-40 md:w-44 hover:scale-105 transition-transform duration-300"
          />
        </a>
        <a href="#">
          <img
            src={appStore}
            alt="App Store"
            className="w-32 sm:w-36 md:w-44 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
