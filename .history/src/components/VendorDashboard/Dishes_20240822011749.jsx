import React, { useState } from "react";
import { FiMoreVertical, FiBell, FiMail } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import Food from "./path_to_food_image"; // Replace with actual image path

const Dishes = () => {
  const [actionVisible, setActionVisible] = useState(null);
  const [availability, setAvailability] = useState([
    true,
    false,
    true,
    false,
    true,
    false,
  ]);

  const handleActionClick = (index) => {
    setActionVisible(actionVisible === index ? null : index);
  };

  const handleToggle = (index) => {
    const newAvailability = [...availability];
    newAvailability[index] = !newAvailability[index];
    setAvailability(newAvailability);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center py-8">
          <h1 className="text-3xl font-bold text-orange-600">
            Food<span className="text-black">It</span>
          </h1>
        </div>
        <nav className="flex flex-col space-y-2">
          <
            href="#"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mr-3">
              <FiHome />
            </span>
            Home
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mr-3">
              <FiGrid />
            </span>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mr-3">
              <FiList />
            </span>
            Orders
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 bg-orange-500 text-white rounded-lg"
          >
            <span className="mr-3">
              <FiShoppingBag />
            </span>
            Dishes
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <h2 className="text-xl font-semibold">Vendor’s Name</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Order ID"
                className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
              />
              <BiSearchAlt
                className="absolute left-2 top-2 text-gray-500"
                size={24}
              />
            </div>
            <FiMail className="text-gray-500" size={24} />
            <FiBell className="text-gray-500" size={24} />
            <img
              src="https://via.placeholder.com/40" // Replace with actual profile image path
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-4">
              Add Dish
            </button>
            <button className="px-6 py-2 border rounded-lg text-gray-700">
              Select Dish
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 relative"
              >
                <h2 className="text-lg font-semibold text-center mb-2">
                  One Fufu and Draw soup
                </h2>
                <div className="relative">
                  <img
                    src={Food}
                    alt="Dish"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleActionClick(index)}
                    className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md"
                  >
                    <FiMoreVertical />
                  </button>
                  {actionVisible === index && (
                    <div className="absolute top-10 right-2 bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => alert("Edit functionality")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert("Delete functionality")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-500">Availability</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availability[index]}
                      onChange={() => handleToggle(index)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500"></div>
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:left-6 transition-all"></div>
                  </label>
                </div>
                <div className="mt-2 text-xl font-bold text-center">
                  ₦ 3,500
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dishes;
