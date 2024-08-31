import React, { useState } from "react";
import chefImage from "../../assets/CookingVendor.svg";
import Navbar from "../../layouts/navbar/navbar";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log("Password reset submitted");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:mt-9">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Enter New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border rounded-3xl focus:ring-[#F08F00] focus:border-[#F08F00]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F08F00] text-white py-3 rounded-3xl hover:bg-[#D67E00] transition duration-300"
              >
                Continue
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

export default ResetPassword;
