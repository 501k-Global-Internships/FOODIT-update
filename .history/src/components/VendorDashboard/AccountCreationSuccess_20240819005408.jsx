import React from "react";
import { Link } from "react-router-dom";
import chefImage from "../../";
import successIcon from "../assets/success-icon.svg"; // You'll need to add this icon
import Navbar from "../../layouts/navbar/navbar";

const AccountCreationSuccess = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md text-center">
          <div className="mb-6">
            <img
              src={successIcon}
              alt="Success"
              className="w-24 h-24 mx-auto"
            />
          </div>
          <p className="text-xl mb-2">
            your account is{" "}
            <span className="text-green-500 font-semibold">successful</span>{" "}
            created
          </p>
          <h2 className="text-2xl font-bold mb-4">DELE'S KITCHEN</h2>
          <Link
            to="/login"
            className="text-[#F8A307] hover:underline font-semibold"
          >
            Go to LOGIN
          </Link>
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

export default AccountCreationSuccess;
