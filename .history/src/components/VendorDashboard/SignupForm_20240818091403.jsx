import React from "react";

import googleIcon from "../assets/google-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import appleIcon from "../../";
import emailIcon from "../assets/email-icon.svg";
import chefImage from "../../assets/CookingVendor.svg";
import Navbar from "../../layouts/navbar/navbar";

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-4xl font-bold text-[#F08F00] mb-8">FoodIt</h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-2 border rounded-md"
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                By clicking Agree and continue, I agree to FoodIt Terms of
                Service, Payments Terms of Service, and Nondiscrimination Policy
                and acknowledge the Privacy Policy.
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="marketing" className="mr-2" />
              <label htmlFor="marketing" className="text-sm text-gray-600">
                I don't want to receive marketing emails from FoodIt
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F08F00] text-white py-2 rounded-md hover:bg-[#D67E00]"
            >
              Agree and Continue
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">or signup with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              <img src={appleIcon} alt="Apple" className="w-6 h-6" />
              <img src={emailIcon} alt="Email" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={chefImage}
            alt="Chef cooking"
            className="rounded-full w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
