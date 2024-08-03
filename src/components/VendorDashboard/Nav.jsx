import React from "react";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as LadyImg } from "../../assets/ladyimg.svg";

const Nav = ({ vendorName }) => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">{vendorName}</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Order ID"
          className="mr-4 p-2 border rounded-md"
        />
        <MessageIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <NotificationIcon className="w-6 h-6 mr-4 cursor-pointer" />
        <LadyImg className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
