import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import unsplashBg from "../../assets/unsplashbg.svg";
import unsplashBg2 from "";
import Navbar from "../../layouts/navbar/navbar";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplashBg})` }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-[#F6821F] mb-6">FoodIt</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F6821F]"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F6821F]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F6821F] text-white py-2 rounded-md hover:bg-[#E57200] transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-[#F08F00] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-2 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#F08F00] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 w-1/3 h-2/3">
        <img
          src={unsplashBg2}
          alt="Kitchen"
          className="w-full h-full object-cover rounded-tl-full"
        />
      </div>
    </div>
  );
};

export default VendorLogin;
