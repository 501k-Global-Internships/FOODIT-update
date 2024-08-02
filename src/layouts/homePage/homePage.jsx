import FoodImages from "../foodImages/foodImages";
import Navbar from "../navbar/navbar";
import SearchBar from "../searchBar/searchBar";
import vegPlate from "../../assets/vegetableImg.svg";
import bgImg from "../../assets/bgimg.png";
import waveImg from "../../assets/wave.png";
import "./homePage.css";
import { useEffect, useState } from "react";


const HomePage = () => {
  const [eatWellOpacity, setEatWellOpacity] = useState(0);
  const [clickWellOpacity, setClickWellOpacity] = useState(0);

  useEffect(() => {
    const animationCycle = () => {
      setEatWellOpacity(0);
      setTimeout(() => setEatWellOpacity(1), 1500);
      setClickWellOpacity(0);

      setTimeout(() => {
        setClickWellOpacity(0.2);
      }, 3000);

      setTimeout(() => {
        setClickWellOpacity(1);
      }, 5000);

      setTimeout(() => {
        setEatWellOpacity(0);
        setClickWellOpacity(0);
      }, 9500);
    };

    animationCycle();
    const interval = setInterval(animationCycle, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background: `url(${bgImg}) no-repeat center top`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 64%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="px-16 py-4"> 
          <Navbar />
        </div>
        {/* Main content */}
        <main className="flex-grow px-16"> 
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:mb-0">
              <h1 className="custom-heading text-6xl lg:text-8xl mb-6">
                <span
                  className="text-white transition-opacity duration-1500"
                  style={{ opacity: eatWellOpacity }}
                >
                  Eat{" "}
                </span>
                <span
                  className="text-[#F08F00] transition-opacity duration-1500"
                  style={{ opacity: eatWellOpacity }}
                >
                  well,
                </span>
                <br />
                <span
                  className="text-white transition-opacity duration-1500"
                  style={{ opacity: clickWellOpacity }}
                >
                  Click{" "}
                </span>
                <span
                  className="text-[#F08F00] transition-opacity duration-1500"
                  style={{ opacity: clickWellOpacity }}
                >
                  well.
                </span>
              </h1>
              <p className="text-[1.1rem] mb-4 mt-6 text-white">
                Food is a Universal Language. And Nigeria is home <br />
                to over 1000 of these Languages.
              </p>
              <SearchBar />
            </div>
            <FoodImages />
          </div>
        </main>
        {/* Wave image with content */}
        <div className="relative h-[35rem] mt-5">
          <img src={waveImg} alt="Wave" className="w-full h-full" />
          <div className="absolute inset-0 flex flex-col justify-end px-20 py-[9rem]">
            <div className="lg:ml-[19rem]">
              {" "}
              <div className="bg-yellow-600 text-white font-bold px-4 py-4 rounded-2xl inline-block uppercase mt-10 relative">
                don't know what to eat?
                <div className="absolute inset-0 rounded-2xl ring-4 ring-[#fab959] ring-opacity-20"></div>
              </div>
              <p className="custom-heading text-5xl lg:text-[6.4rem] font-extrabold leading-none text-white capitalize-first lowercase mt-2">
                Order a <br />
                quick food
              </p>
            </div>
          </div>
          <img
            src={vegPlate}
            alt="Plate"
            className="lg:w-48 lg:h-48 w-40 h-40 absolute right-[10%] top-0 transform -translate-y-1/2 z-20 high-spin-float-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;