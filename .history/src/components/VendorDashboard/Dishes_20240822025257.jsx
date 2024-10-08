import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Food from "../../assets/food-1.svg";


const DishesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [toggleStates, setToggleStates] = useState([
    false,
    true,
    true,
    true,
    true,
    false,
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleToggleSwitch = (index) => {
    setToggleStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Dashboard isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1 ml-64">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="p-6 pt-20 lg:pt-24">
          {/* Buttons aligned to the left */}
          <div className="flex justify-start mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">
              Add Dish
            </button>
            <button className="text-gray-600">Select Dish</button>
          </div>
          {/* Grid of dishes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                {/* Dish Name */}
                <h2 className="text-lg font-semibold text-center mb-2">
                  One Fufu and Draw soup
                </h2>
                {/* Image and Action Icon */}
                <div className="relative mb-4">
                  <img
                    src={Food}
                    alt="Dish"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleMenuToggle(index)}
                    className="absolute top-2 right-2 bg-white text-gray-600 p-1 rounded-full shadow-md"
                  >
                    <MoreVertical size={20} />
                  </button>
                  {activeMenu === index && (
                    <div className="absolute top-10 right-2 bg-white rounded-lg shadow-md">
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-lg">
                        Edit
                      </button>
                      <button className="block px-4 py-2 text-red-500 hover:bg-gray-200 rounded-b-lg">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                {/* Availability and Price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Availability</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={toggleStates[index]}
                        onChange={() => handleToggleSwitch(index)}
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                  <div className="text-xl font-bold text-gray-900">₦ 3,500</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DishesPage;