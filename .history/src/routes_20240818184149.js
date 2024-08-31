import { useRoutes } from 'react-router-dom';

import LANDINGPAGE from './pages/landing/landingPage';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import CONFIRMATIONPAGE from './pages/confirmationpage';
import CART from './pages/cart';
import FOODNEARBY from './pages/foodnearby';
import FREQUENTLYORDER from './pages/frequentlyorder';
import TOPRATED from './pages/toprated'
import VENDOR from './pages/vendor'
import SUPRISEME from './pages/supriseme'
import NUMBERPAGE from './pages/numberpage'

import FoodBuddyDirectory from './pages/foodBuddyDirectory';

import FORGETPASSWORD from './pages/forgetpassword'
import CONFIRMPASSWORD from './pages/confirmpassword'
import NEWPASSWORD from './pages/newpassword'
import PASSWORDCONFIRMATION from './pages/passwordconfirmation'
import About from './components/About/About';
import VendorLanding from './pages/vendorLanding';
import VendorDashboard from './components/VendorDashboard/VendorDashboard';
import VendorLogin from './components/VendorDashboard/VendorLogin';
import VendorSignup from './components/VendorDashboard/VendorSignup';
import SignUpForm from './components/VendorDashboard/SignupForm';




export default function Router() {
    const routes = useRoutes([
      {
        path: "/",
        element: <LANDINGPAGE />,
        index: true,
      },

      {
        path: "login",
        element: <LOGIN />,
        index: true,
      },

      {
        path: "signup",
        element: <SIGNUP />,
        index: true,
      },

      {
        path: "confirmationpage",
        element: <CONFIRMATIONPAGE />,
        index: true,
      },

      {
        path: "cart",
        element: <CART />,
        index: true,
      },

      {
        path: "foodnearby",
        element: <FOODNEARBY />,
        index: true,
      },

      {
        path: "frequentlyorder",
        element: <FREQUENTLYORDER />,
        index: true,
      },
      import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component you provided
import chefImage from '../assets/chef-image.jpg';

const OtpConfirmation = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

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
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-bold mb-4">Confirm OTP</h2>
          <p className="text-gray-600 mb-6">
            We sent an 6 digit One Time Password (OTP) to your Email UserEmail@gmail.com
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
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>
          <button
            className="w-full bg-[#F08F00] text-white py-2 rounded-md hover:bg-[#D67E00]"
          >
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

export default OtpConfirmation;

      {
        path: "toprated",
        element: <TOPRATED />,
        index: true,
      },
      {
        path: "vendorSignup",
        element: <VendorSignup />,
        index: true,
      },
      {
        path: "vendorLogin",
        element: <VendorLogin />,
        index: true,
      },

      {
        path: "vendor",
        element: <VENDOR />,
        index: true,
      },

      {
        path: "supriseme",
        element: <SUPRISEME />,
        index: true,
      },
      {
        path: "foodBuddyDirectory",
        element: <FoodBuddyDirectory />,
        index: true,
      },
      {
        path: "vendorLanding",
        element: <VendorLanding />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
        index: true,
      },
      {
        path: "numberpage",
        element: <NUMBERPAGE />,
        index: true,
      },

      {
        path: "forgetpassword",
        element: <FORGETPASSWORD />,
        index: true,
      },

      {
        path: "confirmpassword",
        element: <CONFIRMPASSWORD />,
        index: true,
      },
      {
        path: "vendorDashboard",
        element: <VendorDashboard />,
        index: true,
      },

      {
        path: "newpassword",
        element: <NEWPASSWORD />,
        index: true,
      },

      {
        path: "passwordconfirmation",
        element: <PASSWORDCONFIRMATION />,
        index: true,
      },
    ]);
    return routes;
}