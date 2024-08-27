import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Food from "../../assets/food-1.svg";
import { MoreVertical } from "lucide-react";

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
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Dashboard isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="flex-1 p-4 md:p-6 pt-20 lg:pt-20 ml-0 md:ml-64">
          {/*a Buttons aligned to the left */}
          <div className="flex justify-start mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">
              Add Dish
            </button>
            <button className="text-gray-600">Select Dish</button>
          </div>
          {/* Grid of dishes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="p-4">
                {/* Dish Name */}
                <h2 className="text-lg font-semibold text-center mb-2">
                  One Fufu and Draw soup
                </h2>
                {/* Image and Action Icon */}
                <div className="relative mb-4">
                  <div className="w-48 h-48 mx-auto relative">
                    <img
                      src={Food}
                      alt="Dish"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleMenuToggle(index)}
                      className="absolute top-2 right-2 bg-white text-gray-600 p-1 rounded-full shadow-md"
                    >
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  {activeMenu === index && (
                    <div className="absolute top-12 right-2 bg-white rounded-lg shadow-md z-10">
                      <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 rounded-t-lg">
                        Edit
                      </button>
                      <button className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-200 rounded-b-lg">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                {/* Availability and Price */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-500 mr-2 text-sm">
                      Availability
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={toggleStates[index]}
                        onChange={() => handleToggleSwitch(index)}
                      />
                      <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label>
                  </div>
                  <div className="text-lg font-bold text-gray-900">₦ 3,500</div>
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