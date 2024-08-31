import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Food from '../../assets/food-1.svg';
import Dashboard from "./Dashboard";
import Nav from "./Nav";

const Dishes = () => {
  const [notifications, setNotifications] = useState([]);
  const [actionVisible, setActionVisible] = useState(null);
  const [availability, setAvailability] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleAddDish = () => {
    setNotifications([...notifications, "Dish is successfully added!"]);
  };

  const handleDeleteDish = () => {
    setNotifications([...notifications, "Dish is successfully deleted!"]);
  };

  const handleActionClick = (index) => {
    setActionVisible(actionVisible === index ? null : index);
  };

  const handleToggle = (index) => {
    setAvailability((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex flex-col h-screen">
      <Nav
        vendorName="Vendor's Name"
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Dashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main
          className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : ""
          }`}
          onClick={closeSidebar}
        >
          <div className="flex flex-col lg:flex-row p-6 bg-gray-50 space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            {/* Add Dish Section */}
            <div className="flex flex-col items-center p-6 rounded-lg w-full max-w-xs">
              <div className="flex space-x-2 mb-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
                  Add Dish
                </button>
                <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-t-lg">
                  Select Dish
                </button>
              </div>
              <div className="w-full border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-between p-4 h-64">
                <h3 className="text-lg font-semibold text-gray-700">
                  Dish Name
                </h3>
                <div className="w-40 h-40 bg-gray-200 rounded-3xl flex items-center justify-center">
                  <span className="text-gray-400 text-4xl cursor-pointer">
                    +
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">₦ Price</h3>
              </div>
              <button
                onClick={handleAddDish}
                className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4"
              >
                Add
              </button>
              <button className="text-red-500 mt-2">Cancel</button>
            </div>

            {/* Dishes List Section */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 relative"
                >
                  <h2 className="text-lg font-bold text-center mb-2">
                    One Fufu and Draw soup
                  </h2>
                  <div className="relative">
                    <img
                      src={Food}
                      alt="Dish"
                      className="w-48 h-48 object-cover rounded-lg"
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
                          onClick={handleDeleteDish}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center mt-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-4">Availability</span>
                      <label className="relative inline-flex items-center cursor-pointer mt-1">
                        <input
                          type="checkbox"
                          checked={availability[index] !== false} // Default to true (on)
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
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Notifications */}
      <div className="fixed top-4 right-4 space-y-2">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-black text-white p-2 rounded-lg flex items-center space-x-2"
          >
            <span>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;