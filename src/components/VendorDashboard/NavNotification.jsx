import { BellIcon, MessageSquareIcon } from "lucide-react";
import React from "react";


const NavNotification = () => {
  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Vendor’s Name</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Awaiting
          </button>
          <button className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            Pending
          </button>
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Delivered
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Order ID"
          className="px-4 py-2 border rounded-md"
        />
        <MessageSquareIcon className="w-6 h-6 text-gray-600" />
        <BellIcon className="w-6 h-6 text-gray-600" />
        <img
          src="path_to_profile_image"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default NavNotification;
