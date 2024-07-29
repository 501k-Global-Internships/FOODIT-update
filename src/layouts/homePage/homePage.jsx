import FoodImages from "../foodImages/foodImages";
import Navbar from "../navbar/navbar";
import SearchBar from "../searchBar/searchBar";
import vegPlate from "../../assets/vegetableImg.svg";
import bgImg from "../../assets/bgimg.png";
import waveImg from "../../assets/wave.png";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      {/* <div></div> */}
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
        {/* Navbar */}
        <div className="px-16 py-4">
          <Navbar />
        </div>
        {/* Main content */}
        <main className="flex-grow px-16 py-8 sm:mt-[3rem]">
          <div className="flex flex-col md:flex-row items-center justify-between mt-12">
            <div className="mb-8 md:mb-0">
              <h1 className="custom-heading text-7xl md:text-9xl mb-4">
                <span className="text-white">Eat </span>
                <span className="text-[#F08F00]">well,</span>
              </h1>
              <h1 className="custom-heading text-7xl md:text-9xl mb-[2.5rem]">
                <span className="text-white">Click </span>
                <span className="text-[#F08F00]">well.</span>
              </h1>
              <p className="text-[1.2rem] mb-6 text-white">
                Food is a Universal Language. And Nigeria is home <br />
                to over 1000 of these Languages.
              </p>
              <SearchBar />
            </div>
            <FoodImages />
          </div>
        </main>
        {/* Wave image with content */}
        <div className="relative h-[35rem]">
          <img src={waveImg} alt="Wave" className="w-full h-full" />
          <div className="absolute inset-0 flex flex-col justify-end px-20 py-[10rem]">
            <div className="ml-20">
              <div className="bg-yellow-600 text-white font-bold px-4 py-2 rounded-full inline-block mb-4 uppercase">
                don't know what to eat?
              </div>
              <p className="text-5xl lg:text-[7rem] font-extrabold leading-none text-white capitalize-first lowercase">
                Order a <br />
                quick food
              </p>
            </div>
          </div>
          <img
            src={vegPlate}
            alt="Plate"
            className="lg:w-48 lg:h-48 w-40 h-40 absolute right-[10%] top-[5.8rem] transform -translate-y-1/2 z-20 high-spin-float-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
