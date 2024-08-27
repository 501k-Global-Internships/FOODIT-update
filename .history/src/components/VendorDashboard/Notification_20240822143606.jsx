import React, { useState } from "react";
import Dashboard from "./Dashboard";

import NavNotification from "./NavNotification";
import { CopyPlusIcon, MapPin, Menu, Phone } from "lucide-react";

const Notification = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const orders = [
    {
      status: "Awaiting",
      time: "10:30AM",
      date: "Today",
      name: "Dare Madeinabah",
      orderId: "#12334",
      orderItems: "FuFu and Egusi so...",
      quantity: 1,
      price: "₦ 3,500",
      address: "Tolulope close, Egbeda ...",
      isNew: true,
    },
    {
      status: "Delivered",
      time: "10:30AM",
      date: "Today",
      name: "Dare Madeinabah",
      orderId: "#12334",
      orderItems: "Rice and turkey",
      quantity: 2,
      price: "₦ 13,500",
      address: "Tolulope close, Egbeda ...",
      isNew: true,
    },
    {
      status: "Pending",
      time: "10:30AM",
      date: "Today",
      name: "Dare Madeinabah",
      orderId: "#12334",
      orderItems: "Multiple Order",
      quantity: null,
      price: null,
      address: "Tolulope close, Egbeda ...",
      isNew: false,
    },
    {
      status: "Pending",
      time: "10:30AM",
      date: "Today",
      name: "Molar Quantum...",
      orderId: "#12334",
      orderItems: "Afam soup and Eba",
      quantity: 23,
      price: "₦ 13,500",
      address: "Tolulope close, Egbeda ...",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`md:block ${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-y-0 left-0 z-10`}
      >
        <Dashboard />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 w-full">
        <NavNotification />
        <main className="p-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 mb-4 shadow-sm ${
                order.status === "Delivered"
                  ? "border-l-4 border-green-500"
                  : order.status === "Pending"
                  ? "border-l-4 border-yellow-500"
                  : "border-l-4 border-blue-500"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <div className="flex items-center space-x-4">
                  <div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">
                      {order.time} | {order.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{order.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <CopyPlusIcon className="w-4 h-4 mr-1" />
                      Order ID {order.orderId}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div className="flex-1 w-full sm:w-auto">
                  <p className="text-sm flex justify-between items-center">
                    <span>{order.orderItems}</span>
                    {order.quantity && (
                      <span className="mx-2">X{order.quantity}</span>
                    )}
                    {order.price && <span>{order.price}</span>}
                  </p>
                </div>
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="flex-1 sm:flex-none">
                    <p className="text-xs text-gray-500">Address</p>
                    <div className="flex items-center text-blue-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{order.address}</span>
                    </div>
                  </div>
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
              </div>

              <div className="mt-2 text-right">
                <span className="text-xs text-gray-400">
                  {order.isNew ? "New" : "Seen"}
                </span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Notification;