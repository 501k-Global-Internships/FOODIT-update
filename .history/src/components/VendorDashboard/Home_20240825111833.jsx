import React, { useState } from "react";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";
import { ReactComponent as DeliveredIcon } from "../../assets/orders.svg";
import { ReactComponent as ActiveDishesIcon } from "../../assets/active-dish.svg";
import Nav from "./Nav";
import Dashboard from "./Dashboard";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Nav
        vendorName="Your Vendor Name"
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden pt-16">
        {" "}
        {/* Added pt-16 for fixed nav */}
        <Dashboard isOpen={isSidebarOpen} />
        <main
          className={`flex-1 overflow-y-auto p-4 transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : ""
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<OrdersIcon />}
              title="Total Orders"
              value="1750"
              change="8.56%"
              bgColor="#C3F4F0"
            />
            <StatCard
              icon={<DeliveredIcon />}
              title="Total Delivered"
              value="567"
              change="9.6%"
              bgColor="#FFF5D9"
            />
            <StatCard
              icon={<ActiveDishesIcon />}
              title="Active Dishes"
              value="567"
              bgColor="#FFF5D9"
            />
            <StatCard
              icon={<DeliveredIcon />}
              title="Total Delivered"
              value="567"
              change="9.6%"
              bgColor="#FFF5D9"
            />
          </div>
          {/* Add other components for the home page here */}
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, bgColor }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`p-2 rounded-full mr-3`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="text-gray-400">{icon}</div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#718EBF]">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      {change && (
        <div className="flex items-center text-green-500">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span>{change}</span>
        </div>
      )}
    </div>
  </div>
);

export default Home;
