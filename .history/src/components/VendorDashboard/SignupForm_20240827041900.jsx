import React from "react";
import googleIcon from "../../assets/google-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import chefImage from "../../assets/CookingVendor.svg";
import Navbar from "../../layouts/navbar/navbar";

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 lg:mt-10 mt-9">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 max-w-md">
            <form className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Email Address
                </label>
                <input
                  type="email"
                  id="confirmEmail"
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                />
              </div>
              <p className="text-sm text-gray-600">
                By clicking Agree and continue, I agree to FoodIt Terms of
                Service, Payments Terms of Service, and Nondiscrimination Policy
                and acknowledge the Privacy Policy.
              </p>
              <div className="flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" />
                <label htmlFor="marketing" className="text-sm text-gray-600">
                  I don't want to receive marketing emails from FoodIt
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F08F00] text-white py-3 rounded-3xl hover:bg-[#D67E00]"
              >
                Agree and Continue
              </button>
            </form>
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center">
                <div className="flex-grow h-px bg-gray-300"></div>
                <p className="text-sm text-gray-600 mx-4">or signup with</p>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                <img src={appleIcon} alt="Apple" className="w-6 h-6" />
                <img src={emailIcon} alt="Email" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <img
              src={chefImage}
              alt="Chef cooking"
              className="rounded-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
