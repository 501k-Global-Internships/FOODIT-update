import React from "react";
import Chicken from "../../assets/chicken.svg";
import Season from "../../assets/season.svg";
import Rice from "../../assets/riceImg.svg";

const FoodImages = () => {
  return (
    <div className="relative w-[14rem] h-[16rem] sm:w-[20rem] sm:h-[22rem]">
      <div className="absolute lg:left-[7.9rem] left-[4rem] top-[8rem] transform -translate-y-2/4">
        <img
          src={Season}
          alt="Season"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
        />
      </div>
     
      <div className="absolute lg:top-[-2rem] top-[-1rem] right-[-35%]">
        <img
          src={Chicken}
          alt="Chicken"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
        />
      </div>
     
      <div className="absolute lg:bottom-[4.3rem] bottom-[1.6rem] right-[-35%]">
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