import React, { useState } from "react";

import Navbar from "../../layouts/navbar/navbar";
import cookingVendor from "../../assets/CookingVendor.svg";
import foodBlackLogo from "../../";

const VendorSignup = () => {
  const [vendorName, setVendorName] = useState("");

  const customNavbarProps = {
    logo: foodBlackLogo,
    homeBackgroundColor: "#141414",
    showOnlyHomeAboutGet: true,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar {...customNavbarProps} />
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F6821F] mb-4">
            Enter Vendors Name
          </h2>
          <p className="text-gray-600 mb-6">
            We would like to know the name of your Restaurant
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F6821F]"
                placeholder="Enter your restaurant name"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F6821F] text-white py-3 rounded-md hover:bg-[#E57200] transition duration-300"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={cookingVendor}
            alt="Cooking Vendor"
            className="w-full max-w-md md:max-w-lg rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
