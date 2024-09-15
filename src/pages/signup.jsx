// import React from "react";
import NAVBAR from "../layouts/navbar/navbar2";
import IMAGE1 from "../assets/tdepdq5erh2m4rf2tbcc 2.svg";
import IMAGE2 from "../assets/iubtwr6kx8efworguimd 1.svg";
import IMAGE3 from "../assets/pngwing.com - 2024-02-29T193711 1.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from '../auth';
import { toast } from 'react-toastify';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();


  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Make a POST request to the signup API endpoint
    fetch('https://foodit-cpig.onrender.com/auth/local/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
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
          const accessToken = data.accessToken;
          const token = data.token;

          if (accessToken && token) {
            // Store tokens in localStorage (or sessionStorage if needed)
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('token', token);

            // Navigate to the dashboard or another route
            setMessage('Signup successful! Redirecting to dashboard...');
            setTimeout(() => navigate('/login'), 2000);
          } else {
            throw new Error('Signup successful but tokens are missing.');
          }
        } else {
          throw new Error(data?.error?.responseMessage || 'Signup failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message); // Show error message
      });
  };

  
    // const handleSignupButton = () => {
    //   navigate("/numberpage");
    // };
  
    return (
      <div className="w-full">
        <NAVBAR />
        <div className="w-full min-h-screen flex justify-center items-center pt-[60px] md:pt-16 px-0 md:px-4">
          <div className="bg-white w-full md:max-w-[1280px] min-h-screen md:min-h-[90vh] flex flex-col md:flex-row justify-between px-4 md:px-10">
            <div className="bg-white h-full w-full md:w-[547px] min-h-[90vh] flex flex-row justify-center items-center pt-8 md:pt-0">
              <form onSubmit={handleSignup} className="w-full max-w-[456px]">
                <div className="flex flex-col md:flex-row justify-between mb-5 gap-4 md:gap-0">
                  <label htmlFor="" className="w-full md:w-auto">
                    <p className="text-black font-mont font-bold text-[18px]">
                      First Name
                    </p>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Joel"
                      className="w-full md:w-[213px] h-[60px] rounded-[600px] border-[1px] px-3 outline-none"
                    />
                  </label>
  
                  <label htmlFor="" className="w-full md:w-auto">
                    <p className="text-black font-mont font-bold text-[18px]">
                      Last Name
                    </p>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Joel"
                      className="border-[1px] w-full md:w-[213px] h-[60px] rounded-[600px] px-3 outline-none"
                    />
                  </label>
                </div>
  
                <label htmlFor="" className="block mb-5">
                  <p className="text-black font-mont font-bold text-[18px]">
                    Email
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="testing@gmail.com"
                    className="border-[1px] w-full h-[60px] rounded-[600px] px-3 outline-none"
                  />
                </label>
  
                <label htmlFor="" className="block mb-5">
                  <p className="text-black font-mont font-bold text-[18px]">
                    Password
                  </p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border-[1px] w-full h-[60px] rounded-[600px] px-3 outline-none"
                  />
                </label>
                <p className="w-full md:w-[467px] text-black font-mont font-normal text-[14px] mb-4">
                  By clicking Agree and continue, I agree to FoodIt Terms of
                  Service, Payments Terms of Service, and Nondiscrimination Policy
                  and acknowledge the Privacy Policy.
                </p>
                <div className="flex flex-row gap-1 items-center mb-5">
                  <input type="checkbox" />
                  <p className="text-black font-mont font-normal text-[14px]">
                    I don't want to receive marketing emails from Homease
                  </p>
                </div>
                <button
                  type="submit" disabled={loading}
                  className="w-full h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center"
                >
                    {loading ? 'Signing up...' : 'Agree and Continue '}
                </button>
                {error && <div style={{ color: "red", fontSize: "12px" }}>{error}</div>}
              </form>
            </div>
  
            <div className="bg-white h-full w-full md:w-[625px] min-h-[90vh] flex flex-row justify-center overflow-hidden scale-[0.5] md:scale-100 origin-center">
              <img
                src={IMAGE3}
                alt=""
                className="w-[273px] h-[273px] relative left-[390px] top-8 drop-shadow-2xl"
              />
              <img
                src={IMAGE2}
                alt=""
                className="w-[273px] h-[273px] relative right-36 top-36 drop-shadow-2xl"
              />
              <img
                src={IMAGE1}
                alt=""
                className="w-[274px] h-[273px] relative top-72 right-36 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }