import React from "react";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as LadyImg } from "../../assets/ladyimg.svg";

const Nav = ({ vendorName, toggleSidebar }) => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 right-0 left-0 z-20 shadow-sm">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 md:hidden">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
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