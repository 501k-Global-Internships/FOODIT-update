import React from "react";
import { Link } from "react-router-dom";
import chefImage from "../../assets/CookingVendor.svg";
import successIcon from "../../assets/success-icon.svg";
import Navbar from "../../layouts/navbar/navbar";

const AccountCreationSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md text-center">
            <div className="mb-6">
              <img
                src={successIcon}
                alt="Success"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <p className="text-xl mb-2">
              Your account is{" "}
              <span className="text-[#88CC2A] font-semibold">successfully</span>{" "}
              created
            </p>
            <h2 className="text-2xl font-bold mb-4">DELE'S KITCHEN</h2>
            <Link to="/login" className="text-[#78667E]">
              Go to{" "}
              <span className="text-[#F8A307] hover:underline font-semibold">
                LOGIN
              </span>
            </Link>
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

export default AccountCreationSuccess;
