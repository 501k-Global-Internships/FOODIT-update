import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";
import { ReactComponent as DishesIcon } from "../../assets/ep-food.svg";
import { Link } from "react-router-dom";



const Dashboard = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`bg-white w-64 h-full flex flex-col p-4 fixed left-0 top-0 bottom-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold text-[#F8A307]">FoodIt</div>
        <button onClick={closeSidebar} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <NavItem to="/home" icon={<HomeIcon />} text="Home" />
          <NavItem to="/dashboard" icon={<DashboardIcon />} text="Dashboard" />
          <NavItem to="/orders" icon={<OrdersIcon />} text="Orders" />
          <NavItem to="/dishes" icon={<DishesIcon />} text="Dishes" />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center p-2 rounded-md text-gray-600 hover:bg-[#FFF5E0] hover:text-[#F8A307]"
    >
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  </li>
);

export default Dashboard;