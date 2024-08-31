import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-note.svg";
import { ReactComponent as DishesIcon } from "../../assets/ep-food.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-white w-64 h-full flex flex-col p-4 fixed left-0 top-0">
      <div className="text-2xl font-bold mb-8">FoodIt</div>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-[#F8A307]"
            >
              <DashboardIcon className="w-5 h-5 mr-2" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-[#F8A307] bg-[#FFF5E0] p-2 rounded-md"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-[#F8A307]"
            >
              <OrdersIcon className="w-5 h-5 mr-2" />
              Orders
            </a>
          </li>
          <li className="mb-4">
            <Link
              href="#/"
              className="flex items-center text-gray-600 hover:text-[#F8A307]"
            >
              <MenuIcon className="w-5 h-5 mr-2" />
              Menu
            </a>
          </li>
          <li className="mb-4">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-[#F8A307]"
            >
              <DishesIcon className="w-5 h-5 mr-2" />
              Dishes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;