import React, { useState } from "react";
import chefImage from "../../assets/c";
import Navbar from "../../layouts/navbar/navbar";

const SignupOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md">
          <button className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-bold mb-4">Confirm OTP</h2>
          <p className="text-gray-600 mb-6">
            We sent an 6 digit One Time Password (OTP) to your Email
            UserEmail@gmail.com
          </p>
          <div className="flex justify-between mb-6">
            {otp.map((data, index) => {
              return (
                <input
                  className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-400 focus:border-[#F08F00] focus:text-[#F08F00] text-gray-800 transition"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <button className="w-full bg-[#F08F00] text-white py-2 rounded-md hover:bg-[#D67E00]">
            Continue
          </button>
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

export default SignupOtp;
