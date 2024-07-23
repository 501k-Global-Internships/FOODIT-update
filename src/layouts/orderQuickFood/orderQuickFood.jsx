import React from "react";
import Img from "../../assets/vegetableImg.svg";

const OrderQuickFood = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-[#F08F00]">
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1728 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V150C200 100 500 180 900 150C1300 120 1600 50 1728 80V0H0Z"
            fill="white"
          />
          <path
            d="M0 1000V850C200 900 500 820 900 850C1300 880 1600 950 1728 920V1000H0Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative flex items-center justify-start p-4 md:flex-row z-10 h-full">
        <div className="ml-[5rem] mt-[10rem]">
          <div className="bg-yellow-600 text-black font-bold px-4 py-2 rounded-full inline-block mb-4">
            DON'T KNOW WHAT TO EAT?
          </div>
          <h1 className="lg:text-[7rem] text-5xl font-extrabold leading-tight text-white">
            Order a <br /> quick food
          </h1>
        </div>
      </div>
      <img
        src={Img}
        alt="Plate"
        className="absolute right-0 bottom-0 w-auto h-auto max-w-[50%] max-h-[60%] z-20"
      />
    </div>
  );
};

export default OrderQuickFood;