import React, { useState } from "react";
import chefImage from "../../assets/CookingVendor.svg";
import Navbar from "../../layouts/navbar/navbar";
import { useNavigate } from 'react-router-dom';

const OtpSignup = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const otpCode = otp.join(''); 
    const email = localStorage.getItem('email');
  
    const url = `https://foodit-cpig.onrender.com/auth/vendor/account_activation?email=${email}&otp=${otpCode}`;
  
    fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData?.error?.responseMessage || 'OTP verification failed');
          });
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.success) {
          navigate('/dashboard');
        } else {
          throw new Error(data?.error?.responseMessage || 'OTP verification failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message); 
      });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:mt-9">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <button className="flex items-center text-gray-600 mb-4" onClick={() => navigate(-1)}>
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
              We sent a 6-digit One Time Password (OTP) to your phone number.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-6">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-12 h-12 border-2 rounded-full bg-transparent outline-none text-center font-semibold text-xl border-gray-400 focus:border-[#F08F00] focus:text-[#F08F00] text-gray-800 transition"
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
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F08F00] text-white py-2 rounded-3xl hover:bg-[#D67E00]"
              >
                {loading ? 'Verifying...' : 'Continue'}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 max-w-md">
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

export default OtpSignup;