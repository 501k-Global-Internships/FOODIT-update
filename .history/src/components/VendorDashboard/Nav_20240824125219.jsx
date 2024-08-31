import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as NotificationIcon } from "../../assets/";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";

const Nav = ({ vendorName, toggleSidebar, isSidebarOpen }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 md:hidden">
          {isSidebarOpen ? (
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
          ) : (
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
          )}
        </button>
        <div className="text-xl font-semibold">{vendorName}</div>
      </div>

      <div className="flex-1 mx-8">
        <div className="relative max-w-md mx-auto">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <SearchIcon className="absolute left-3 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Order ID"
              className={`w-full p-2 pl-10 pr-4 border rounded-md transition-all ${
                isSearchVisible ? "opacity-100" : "opacity-0"
              }`}
              onBlur={() => setIsSearchVisible(false)}
            />
            {!isSearchVisible && (
              <span className="absolute left-10">Search Order ID</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <MessageIcon className="w-6 h-6 cursor-pointer" />
        <NotificationIcon className="w-6 h-6 cursor-pointer" />
        <ProfileIcon className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
