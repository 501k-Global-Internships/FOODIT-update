import React from "react";
import Dashboard from "./Dashboard";
import { MapIcon, PhoneIcon } from "lucide-react";
import NavNotification from "./NavNotification";

const Notification = () => {
  const orders = [
    {
      status: "Awaiting",
      time: "10:30AM",
      date: "Today",
      name: "Dare Madeinabah",
      orderId: "12334",
      orderItems: "FuFu and Egusi soup",
      quantity: 1,
      price: "₦ 3,500",
      address: "Tolulope close, Egbeda",
    },
    {
      status: "Delivered",
      time: "10:30AM",
      date: "Today",
      name: "Dare Madeinabah",
      orderId: "12334",
      orderItems: "Rice and turkey",
      quantity: 2,
      price: "₦ 13,500",
      address: "Tolulope close, Egbeda",
    },
    // Add more orders as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Dashboard />
      <div className="flex-1 ml-64">
        {" "}
        {/* Adjust the margin to match the sidebar width */}
        <NavNotification />
        <main className="p-6 pt-20 lg:pt-24">
          {orders.map((order, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 mb-4 shadow-md ${
                order.status === "Delivered"
                  ? "border-l-4 border-green-400"
                  : order.status === "Pending"
                  ? "border-l-4 border-yellow-400"
                  : "border-l-4 border-blue-400"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{order.name}</h3>
                    <p className="text-sm text-gray-500">
                      Order ID #{order.orderId}
                    </p>
                    <p className="text-sm text-gray-400">
                      {order.time} | {order.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{order.orderItems}</p>
                  <p className="text-sm text-gray-500">X{order.quantity}</p>
                  <p className="text-lg font-bold">{order.price}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-gray-500">
                  <MapIcon className="w-5 h-5 mr-1" />
                  <span>{order.address}</span>
                </div>
                <PhoneIcon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Notification;
