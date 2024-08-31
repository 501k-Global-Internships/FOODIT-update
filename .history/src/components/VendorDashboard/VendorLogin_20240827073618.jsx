import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import unsplashBg from "../../assets/unsplashbg.svg";
import signinBg from "../../assets/sigin-bg.svg";
import Navbar from "../../layouts/navbar/navbar";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplashBg})` }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-8 py-12 mt-16">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden ">
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
            <form className="space-y-4 max-w-md mx-auto">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 text-sm"
                >
                  Enter Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-lg text-white text-sm focus:outline-none focus:border-[#F6821F]"
                  required
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-white mb-2 text-sm"
                >
                  Confirm Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-lg text-white text-sm focus:outline-none focus:border-[#F6821F]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[2.6rem] transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-4 w-4 text-gray-300" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-300" />
                  )}
                </button>
              </div>
              <div className="text-center">
                <Link
                  to="/forgot-password"
                  className="text-[#F08F00] text-xs hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="text-center text-white text-xs">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#F08F00] hover:underline underline"
                >
                  Sign Up
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F6821F] text-white py-2 rounded-lg text-sm hover:bg-[#E57200] transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 hidden md:block md:pl-4">
            <img
              src={signinBg}
              alt="Sign In"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
