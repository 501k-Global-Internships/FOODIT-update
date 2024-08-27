import React from "react";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as LadyImg } from "../../assets/ladyimg.svg";
import { ReactComponent as MenuIcon } from "../../";
const Nav = ({ vendorName }) => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 right-0 left-0 md:left-64 z-10 shadow-sm">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="text-xl font-semibold">{vendorName}</div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Order ID"
          className="mr-4 p-2 border rounded-md hidden md:block"
        />
        <MessageIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <NotificationIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <LadyImg className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;