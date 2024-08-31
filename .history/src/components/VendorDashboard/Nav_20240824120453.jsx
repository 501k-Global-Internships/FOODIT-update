import React, { useState } from "react";


const Nav = ({ vendorName, toggleSidebar }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 right-0 left-0 z-50 shadow-sm">
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
        <div className="relative mr-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <SearchIco className="w-5 h-5 mr-2" />
            {!isSearchVisible && <span>Search Order ID</span>}
          </div>
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search Order ID"
              className="absolute top-0 left-0 w-full p-2 border rounded-md"
              autoFocus
              onBlur={() => setIsSearchVisible(false)}
            />
          )}
        </div>
        <MessageIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <NotificationIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <ProfileIcon className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
