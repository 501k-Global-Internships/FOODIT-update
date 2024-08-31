import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import unsplashBg from "../../assets/unsplashbg.svg";
import unsplashBg2 from "../../assets/unsplashbg2.svg";
import Navbar from "../../layouts/navbar/navbar";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplashBg})` }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-between px-8 py-12">
        <div className="w-1/2 pr-8">

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white mb-2">Enter Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:border-[#F6821F]"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-white mb-2">Confirm Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:border-[#F6821F]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-300" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-300" />
                )}
              </button>
            </div>
            <div className="text-[#F08F00] text-sm">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="text-white text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#F08F00] hover:underline">
                Sign Up
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F6821F] text-white py-3 rounded-md hover:bg-[#E57200] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="relative w-[400px] h-[400px]">
            <img
              src={unsplashBg2}
              alt="Kitchen"
              className="absolute top-0 right-0 w-[300px] h-[300px] object-cover rounded-full"
            />
            <img
              src={unsplashBg2}
              alt="Kitchen Detail"
              className="absolute bottom-0 left-0 w-[300px] h-[300px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;