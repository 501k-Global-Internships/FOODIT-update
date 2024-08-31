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
        className="px-4 md:px-6 py-4" // Add padding to the nav
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
              {/* ... */}
            </div>

            {/* Dishes List Section */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 relative"
                >
                  {/* ... */}
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