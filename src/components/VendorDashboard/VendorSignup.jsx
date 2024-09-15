import React, { useState } from "react";
import Navbar from "../../layouts/navbar/navbar";
import cookingVendor from "../../assets/CookingVendor.svg";
import foodBlackLogo from "../../assets/foodblack.svg";
import { useNavigate } from 'react-router-dom';

const VendorSignup = () => {
  const [vendorName, setVendorName] = useState("");
  const customNavbarProps = {
    logo: foodBlackLogo,
    homeBackgroundColor: "#141414",
    showOnlyHomeAboutGet: true,
  };

  const [businessName, setBusinessName] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem('businessName', businessName);
    navigate('/signupForm');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar {...customNavbarProps} />
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-8 md:py-12 mt-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Enter Vendor's Name
          </h2>
          <p className="text-gray-600 mb-6">
            We would like to know the name of your Restaurant
          </p>
          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#F6821F]"
                required
              />
            </div>
            <button
             type="submit"
              className="w-full bg-[#F6821F] text-white py-3 rounded-3xl hover:bg-[#E57200] transition duration-300"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end max-w-lg">
          <img
            src={cookingVendor}
            alt="Cooking Vendor"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
