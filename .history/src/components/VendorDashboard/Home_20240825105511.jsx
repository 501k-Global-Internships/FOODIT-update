import React, { useState } from "react";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";
import { ReactComponent as DeliveredIcon } from "../../assets/orders.svg";
import { ReactComponent as ActiveDishesIcon } from "../../assets/active-dish.svg";
import Nav from "./Nav";
import Dashboard from "./Dashboard";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
      <div className="flex flex-1 overflow-hidden">
        <Dashboard />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<OrdersIcon />}
              title="Total Orders"
              value="1750"
              change="+8.56%"
            />
            <StatCard
              icon={<DeliveredIcon />}
              title="Total Delivered"
              value="567"
              change="+9.6%"
            />
            <StatCard
              icon={<ActiveDishesIcon />}
              title="Active Dishes"
              value="567"
            />
            <StatCard
              icon={<DeliveredIcon />}
              title="Total Delivered"
              value="567"
              change="+9.6%"
            />
          </div>
          {/* Add other components for the home page here */}
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {change && <p className="text-sm text-green-500">{change}</p>}
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
  </div>
);

export default Home;
