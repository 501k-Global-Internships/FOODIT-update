
import Bike from "../../assets/bike.svg";
import './foodBuddy.css';

const FoodBuddy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center gap-7 justify-between">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
        <h1 className="custom-heading font-extrabold mb-4">
            <span className="text-[#635F5F] text-5xl md:text-6xl lg:text-">
              Introducing
            </span>
            <br />
            <span className="text-[#635F5F] text-5xl md:text-6xl lg:text-">
              your
            </span>
            <br />
            <span className="text-[#F08F00] text-5xl md:text-6xl lg:text- uppercase">
              FOODBUDDY
            </span>
          </h1>
          <p className="text-[#272525] text-sm mb-6 mt-[3rem]">
            Find Meals From the Best Chefs Around You. Tryout our Food
            Geolocator Now.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your address"
              className="lg:w-[26.5rem] px-4 py-2 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F08F00] bg-[#FFECC930] text-black placeholder-[#635F5F]"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
              <div className="bg-[#F08F00] p-1.5 rounded-full">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex mt-4 space-x-14">
            <span className="text-gray-600 cursor-pointer transition duration-300 relative group">
              <span className="px-1">Food Nearby</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#F08F00] transition-all duration-300"></span>
            </span>
            <span className="text-gray-600 cursor-pointer transition duration-300 relative group">
              <span className="px-1">Top Rated</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#F08F00] transition-all duration-300"></span>
            </span>
            <span className="text-gray-600 cursor-pointer transition duration-300 relative group">
              <span className="px-1">Frequently Ordered</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#F08F00] transition-all duration-300"></span>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={Bike}
            alt="Food delivery illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodBuddy;