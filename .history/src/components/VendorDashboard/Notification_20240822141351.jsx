import React from "react";
import Dashboard from "./Dashboard";

import NavNotification from "./NavNotification";
import { MapPin, Phone } from "lucide-react";

const Notification = () => {
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
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar component would go here */}
      <   <Dashboard />
      <div className="flex-1 ml-64">
        {" "}
        {/* Adjust the margin to match the sidebar width */}
        <NavNotification />
        <main className="p-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 mb-4 shadow-sm flex justify-between items-center ${
                order.status === "Delivered"
                  ? "border-l-4 border-green-500"
                  : order.status === "Pending"
                  ? "border-l-4 border-yellow-500"
                  : "border-l-4 border-blue-500"
              }`}
            >
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
                  <p className="text-sm text-gray-500">
                    Order ID {order.orderId}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm">{order.orderItems}</p>
                {order.quantity && <p className="text-sm">X{order.quantity}</p>}
                {order.price && (
                  <p className="text-lg font-bold">{order.price}</p>
                )}
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center text-blue-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{order.address}</span>
                </div>
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Notification;