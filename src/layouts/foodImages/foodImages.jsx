import React from "react";
import Chicken from "../../assets/chicken.svg";
import Season from "../../assets/season.svg";
import Rice from "../../assets/riceImg.svg";

const FoodImages = () => {
  return (
    <div className="relative w-[12rem] h-[14rem] sm:w-[19rem] sm:h-[21rem]">
      <div className="absolute left-0 top-2/4 transform -translate-y-2/4">
        <img
          src={Season}
          alt="Season"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
        />
      </div>
      
      <div className="absolute top-0 right-0">
        <img
          src={Chicken}
          alt="Chicken"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
        />
      </div>
      
      <div className="absolute bottom-0 right-0">
        <img
          src={Rice}
          alt="Rice"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default FoodImages;