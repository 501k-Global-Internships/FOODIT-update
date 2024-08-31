import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import unsplashBg from "../../assets/unsplashbg.svg";
import signinBg from "../../assets/";
import Navbar from "../../layouts/navbar/navbar";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplashBg})` }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-between px-8 py-12 mt-16">
        <div className="w-1/2 pr-8">
          <form className="space-y-4 max-w-md">
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Enter Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-xl text-white focus:outline-none focus:border-[#F6821F]"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-white mb-2">
                Confirm Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-xl text-white focus:outline-none focus:border-[#F6821F]"
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
            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-[#F08F00] text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="text-center text-white text-sm">
              Don't have an account?
            </div>
            <div className="text-center">
              <Link
                to="/signup"
                className="text-[#F08F00] text-sm hover:underline"
              >
                Sign Up
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F6821F] text-white py-2 rounded-xl hover:bg-[#E57200] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={signinBg}
            alt="Sign In"
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
