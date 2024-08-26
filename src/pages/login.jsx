import React, { useState, useRef } from "react";
import NAVBAR from "../layouts/navbar/navbar2";
import IMAGE3 from "../assets/smiley-man-eating-restaurant 3.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { login } from '../auth';

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(credentials);
      if (data.success) {
       localStorage.setItem("token", data.data.api_token);
        localStorage.setItem("refreshToken", data.data.refresh_token);
        // document.cookie = `credentials=${credentials.email}`;
        navigate("/foodnearby");
      } else {
        setError(data.responseMessage || "Login failed. Please try again.");
      }
    } catch (err) {
      if (err.message === "User does not exist!, Kindly signup") {
        setError("User does not exist! Please sign up.");
      } else {
        setError(err.message);
      }

      console.log("Error:", err); 
    }
  };
  return (
    <div className="">
      <NAVBAR />
      <div className="w-full h-full">
        <div className="bg-white w-full h-full flex flex-col md:flex-row gap-8 md:gap-16 justify-end">
          <div className="bg-white h-full w-full md:w-[547px] min-h-screen flex flex-row justify-center items-center p-4 md:p-0">
            <form className="w-full max-w-[456px]">
              <NavLink to="/" className="flex flex-row items-center mb-2">
                <IoMdArrowRoundBack className="w-[28px] h-[28px] text-[#78667E] cursor-pointer" />
                <p className="text-[#78667E] font-mont font-normal text-[16px]">
                  Back
                </p>
              </NavLink>
              <h1 className="text-black font-mont font-bold text-[18px] mb-7">
                Login to continue
              </h1>
              <label htmlFor="" className="block mb-5">
                <p className="text-black font-mont font-bold text-[18px] mb-2">
                  Enter Email
                </p>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="testing@gmail.com"
                  className="border-[1px] w-full h-[60px] rounded-[600px] px-3 outline-none"
                />
              </label>
              <label htmlFor="" className="block mb-5">
                <p className="text-black font-mont font-bold text-[18px] mb-2">
                  Password
                </p>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter Password"
                  className="border-[1px] w-full h-[60px] rounded-[600px] px-3 outline-none"
                />
              </label>
              <div className="flex flex-col justify-center items-center pb-5">
                <NavLink
                  to="/forgetpassword"
                  className="text-[#F6821F] font-medium font-mont text-[18px] mb-2"
                >
                  Forgotten Password
                </NavLink>
                <p className="text-black font-medium font-mont text-[18px] text-center">
                  Don't have an account?{" "}
                  <NavLink
                    to="/signup"
                    className="font-medium font-mont text-[18px] text-[#F6821F]"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
              <button
                onClick={handleLogin}
                className="w-full h-[60px] rounded-[600px] text-white font-bold font-mont text-[18px] bg-[#F6821F] items-center"
              >
                Login
              </button>
              {error && <div id="error" style={{ color: "red", fontSize: "12px" }}>{error}</div>}
            </form>
          </div>
          <div className="bg-white h-full w-full md:w-[50%] flex justify-center items-center">
            <img
              src={IMAGE3}
              alt=""
              className="w-full h-[50vh] md:h-screen object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
