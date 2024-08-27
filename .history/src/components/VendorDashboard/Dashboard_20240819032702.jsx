import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";
// import { ReactComponent as MenuIcon } from "../../assets/menu-note.svg";
import { ReactComponent as DishesIcon } from "../../assets/ep-food.svg";


const Dashboard = () => {
  return (
    <div
      className="bg-white w-64 h-full flex flex-col p-4 fixed left-0 top-0 bottom-0 z-20 transform transition-transform duration-300 ease-in-out md:translate-x-0 -translate-x-full"
      id="sidebar"
    >
      <div className="text-2xl font-bold text-[#F8A307] mb-8">FoodIt</div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <NavItem icon={<HomeIcon />} text="Home" active />
          <NavItem icon={<DashboardIcon />} text="Dashboard" />
          <NavItem icon={<OrdersIcon />} text="Orders" />
          <NavItem icon={<DishesIcon />} text="Dishes" />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, text, active }) => (
  <li>
    <Link
      to="/"
      className={`flex items-center p-2 rounded-md ${
        active
          ? "bg-[#FFF5E0] text-[#F8A307]"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  </li>
);

export default Dashboard;