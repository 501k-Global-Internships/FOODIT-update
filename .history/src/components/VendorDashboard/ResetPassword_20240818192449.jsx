import React, { useState } from "react";
import chefImage from "../../assets/CookingVendor.svg";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log("Password reset submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navba />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full p-2 border rounded-md focus:ring-[#F08F00] focus:border-[#F08F00]"
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
                className="w-full p-2 border rounded-md focus:ring-[#F08F00] focus:border-[#F08F00]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F08F00] text-white py-2 rounded-md hover:bg-[#D67E00] transition duration-300"
            >
              Continue
            </button>
          </form>
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

export default ResetPassword;
