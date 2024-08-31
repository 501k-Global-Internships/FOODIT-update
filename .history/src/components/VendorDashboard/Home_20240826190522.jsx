import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        window.innerWidth < 768 &&
        !event.target.closest(".dashboard")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col h-screen">
      <Nav
        vendorName="Your Vendor Name"
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Dashboard isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-1 overflow-y-auto p-4 transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : ""
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
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
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, bgColor }) => (
  <div className="bg-white p-3 rounded-lg shadow h-screen max-w-[210px] lg:max-w-[210px] h-[100px] flex flex-col">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`p-2 rounded-full mr-2`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="text-gray-400">{icon}</div>
        </div>
        <div>
          <h3 className="text-xs font-semibold text-[#718EBF]">{title}</h3>
          <p className="text-lg font-bold mt-0.5">{value}</p>
        </div>
      </div>
    </div>
    {change && (
      <div className="flex items-center text-green-500 self-end">
        <svg
          className="w-3 h-3 mr-0.5"
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
        <span className="text-xs">{change}</span>
      </div>
    )}
  </div>
);

export default Home;
