import React from "react";
import img from '../../assets/interfaceImg.svg'
import './topography.css';

const Interface = () => {
  return (
    <div className="bg-black px-4 sm:px-8 md:px-12 lg:px-[12rem] py-10 sm:py-[6rem]">
      <div className="w-full p-4 md:p-8 lg:p-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 lg:w-4/5">
            <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#FCFCFC]">Our </span>
              <span className="text-[#F08F00]">Interface</span>
            </h1>
            <p className="body-text text-[#FCFCFC] text-sm sm:text-base lg:text-lg">
              Our <span className="text-[#F8A307]">Interface</span> has been carefully analyzed to ensure a flexible
              presentation to suit your mood for a classic dish or nostalgic
              Experience.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-4/5 flex justify-center mt-6 md:mt-0">
            <img
              src={img}
              alt="Interface showcase"
              className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;  