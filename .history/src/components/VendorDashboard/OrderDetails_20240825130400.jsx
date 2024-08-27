import React, { useState } from "react";
import Dashboard from "./Dashboard"; 
import Nav from "./Nav"; 
import { CopyIcon, MapIcon, PhoneCallIcon } from "lucide-react";

const OrderDetails = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-grow">
        <Nav />
        <div className="flex flex-col justify-center items-center w-full p-16 mt-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl ring-2 ring-[#8FAAFF] ring-opacity-50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="text-lg font-semibold">
                  Order ID #12334 <CopyIcon className="inline ml-2 w-4 h-4" />
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full ml-6">
                  Awaiting
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Dare Madeinabah</h2>
              <p className="text-sm text-gray-500">10:30AM | Today</p>
            </div>
            <div className="mt-8 text-center">
              <div
                className="inline-block p-2 rounded-md cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-gray-700">Multiple Order</span>
                <select
                  className={`ml-2 text-gray-700 bg-white focus:outline-none ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <option>Multiple</option>
                  <option>Single</option>
                </select>
              </div>
              <div className="mt-6">
                <div className="flex justify-center items-center">
                  <MapIcon className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 text-gray-700">Address</span>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-gray-700">
                    Tolulope close, Egbeda ...
                  </span>
                  <PhoneCallIcon className="w-5 h-5 text-gray-500 ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-[#1158E3] text-white px-6 py-2 rounded-md">
              Accept
            </button>
            <button className="bg-[#FE9B9B] text-white px-6 py-2 rounded-md">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;