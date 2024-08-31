import React from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { ReactComponent as MoreVerticalIcon } from "../../assets/more-vertical.svg";
import Food from "../../assets/food-image.jpg"; 

const DishesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Dashboard isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1">
        <Nav
          vendorName="Vendor’s Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="p-6 pt-20 lg:pt-24">
          <div className="flex justify-end mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">
              Add Dish
            </button>
            <button className="text-gray-600">Select Dish</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 relative"
              >
                {/* Dish Name */}
                <h2 className="text-lg font-semibold text-center mb-2">
                  One Fufu and Draw soup
                </h2>
                {/* Image and Action Icon */}
                <div className="relative">
                  <img
                    src={Food}
                    alt="Dish"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md">
                    <MoreVerticalIcon />
                  </button>
                  <div className="absolute top-10 right-2 bg-white rounded-lg shadow-md">
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-lg">
                      Edit
                    </button>
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg">
                      Delete
                    </button>
                  </div>
                </div>
                {/* Availability and Price */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-500">Availability</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
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

export default DishesPage;
