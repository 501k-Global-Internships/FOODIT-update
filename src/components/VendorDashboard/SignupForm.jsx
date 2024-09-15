import React, { useState } from 'react';
import googleIcon from "../../assets/google-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import chefImage from "../../assets/CookingVendor.svg";
import Navbar from "../../layouts/navbar/navbar";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

  const [businessAddress, setBusinessAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

   
    const businessName = localStorage.getItem('businessName');

   
    fetch('https://foodit-cpig.onrender.com/auth/vendor/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessName: businessName,
        businessAddress: businessAddress,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData?.error?.responseMessage || 'Signup failed');
          });
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.success) {
          navigate('/otpSignup');
        } else {
          throw new Error(data?.error?.responseMessage || 'Signup failed');
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
      <div className="flex-grow flex items-center justify-center px-4 py-20 lg:mt-12 mt-9">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 max-w-md">
            <form onSubmit={handleSignup} className="space-y-6">
            <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                />
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
                  value={email}
            onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
            onChange={(e) => setPassword(e.target.value)}
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
                  value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
                type="submit" disabled={loading}
                className="w-full bg-[#F08F00] text-white py-3 rounded-3xl hover:bg-[#D67E00]"
              >
                 {loading ? 'Signing up...' : ' Agree and Continue'}
              </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
