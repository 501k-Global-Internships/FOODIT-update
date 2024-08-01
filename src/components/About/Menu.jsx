import React from 'react';
import menuWave from '../../assets/menuWave.svg';
import FoodImages from '../../layouts/foodImages/foodImages';
import './topography.css'

const Menu = () => {
  return (
    <div className="bg-black relative w-full min-h-screen overflow-hidden">
      <img
        src={menuWave}
        alt="Menu background"
        className="w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-16">
        <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 px-2 sm:px-4 md:px-8 lg:px-16">
          <span className="text-[#060403]">The </span>
          <span className="text-[#FCFCFC]">Menu</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 lg:px-16">
          <p className="body-text text-white text-sm sm:text-base lg:text-lg max-w-2xl">
            Our <span className="text-[#060403] font-bold">menu</span> is a celebration of seasonal ingredients and culinary creativity.
            From hearty breakfasts to sumptuous dinners,
            every dish is thoughtfully prepared to ensure a perfect balance of flavor and presentation.
            Whether you're in the mood for a classic comfort dish or something adventurous,
            we have something to satisfy every craving.
          </p>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
            <FoodImages menuStyle={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;