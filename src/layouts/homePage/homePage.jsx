
import FoodImages from "../foodImages/foodImages";
import Navbar from "../navbar/navbar";
import SearchBar from "../searchBar/searchBar";
import vegPlate from "../../assets/vegetableImg.svg";
import './homePage.css'


const HomePage = () => {
  return (
    <div class="wave-container">
        {/* Top section */}
        <div className="px-[4rem] py-[1rem] flex flex-col justify-between">
          <div className="">
            <Navbar />
            <main>
              <div className="mx-auto px-4 py-[4rem] md:mt-[2rem] mt-[3rem]">
                <div className="flex flex-col md:flex-row items-center justify-between mt-[3rem]">
                  <div className="mb-8 md:mb-0">
                    <h1 className="font-bold text-9xl mb-4">
                      <span className="text-white">Eat </span>
                      <span className="text-[#F08F00]">Well,</span>
                    </h1>
                    <h1 className="text-9xl font-bold mb-4">
                      <span className="text-white">Click </span>
                      <span className="text-[#F08F00]">Well.</span>
                    </h1>
                    <p className="text-lg mb-6 text-white">
                      Food is a Universal Language. And Nigeria is home <br />{" "}
                      to over 1000 of these Languages.
                    </p>
                    <SearchBar />
                  </div>
                  <FoodImages />
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Bottom section with curve overlay */}
        <div className="wave2-container">
          <div>
              <div className="ml-[5rem] mt-[1rem]">
                <div className="bg-yellow-600 text-black font-bold px-4 py-2 rounded-full inline-block mb-4">
                  DON'T KNOW WHAT TO EAT?
                </div>
                <p className="lg:text-[7rem] text-5xl font-extrabold leading-tight text-white">
                  Order a <br />quick food
                </p>
              </div>
          </div>

          <img
            src={vegPlate}
            alt="Plate"
            className="w-48 h-48 absolute right-0 transform -translate-x-1/2 -translate-y-2/4 top-0 z-20 floating-img" /* Added floating-img class */
            style={{ right: "10%" }} 
          />
        </div>
      </div>

  );
};

export default HomePage;