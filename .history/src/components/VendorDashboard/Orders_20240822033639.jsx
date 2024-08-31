import { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

const OrdersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Dashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pt-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between mb-4 mt-4">
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                  Awaiting
                </button>
                <button className="px-4 py-2 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">
                  Pending
                </button>
                <button className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                  Delivered
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Awaiting Order */}
              <OrderCard
                status="Awaiting"
                name="Dare Madeinabah"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                onAccept={() => {}}
                onDecline={() => {}}
              />

              {/* Pending Order */}
              <OrderCard
                status="Pending"
                name="Uche Ebuka"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                orderDetails="FuFu & Egusi..."
                price="₦ 3,500"
                accepted
              />

              {/* Delivered Orders */}
              <OrderCard
                status="Delivered"
                name="Danfodio Mbah"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                orderItems={[
                  { name: "Afam soup and Eba", quantity: 3, price: "₦17,500" },
                  { name: "Eba and Ewedu so...", quantity: 2, price: "₦2,500" },
                  {
                    name: "Nwato soup and E...",
                    quantity: 1,
                    price: "₦10,500",
                  },
                  {
                    name: "Fried Rice and ch...",
                    quantity: 1,
                    price: "₦1,000",
                  },
                ]}
              />

              {/* Additional Delivered Orders */}
              {["Taylor Umaru", "Jerry Smith", "Tinubu Gbenga"].map((name) => (
                <OrderCard
                  key={name}
                  status="Delivered"
                  name={name}
                  time="10:30AM | Today"
                  address="Tolulope close, Egbeda ..."
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const OrderCard = ({
  status,
  name,
  time,
  address,
  orderDetails,
  price,
  onAccept,
  onDecline,
  accepted,
  orderItems,
}) => {
  const statusColors = {
    Awaiting: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Delivered: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">Order ID #12334</span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{time}</p>
      {orderDetails && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">{orderDetails}</span>
          <span className="font-semibold">{price}</span>
        </div>
      )}
      {orderItems && (
        <div className="mb-2">
          {orderItems.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="border-t mt-2 pt-2 text-sm font-semibold flex justify-between">
            <span>Total 3 Items</span>
            <span>₦31,500</span>
          </div>
        </div>
      )}
      <div className="flex items-center mt-2">
        <svg
          className="w-4 h-4 text-gray-400 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-sm text-gray-500">{address}</span>
      </div>
      {status === "Awaiting" && (
        <div className="flex mt-4 space-x-2">
          <button
            onClick={onAccept}
            className="flex-1 bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600"
          >
            Accept
          </button>
          <button
            onClick={onDecline}
            className="flex-1 bg-red-100 text-red-600 py-2 rounded-md text-sm font-medium hover:bg-red-200"
          >
            Decline
          </button>
        </div>
      )}
      {status === "Pending" && accepted && (
        <button className="w-full bg-orange-500 text-white py-2 rounded-md text-sm font-medium mt-4 hover:bg-orange-600">
          Accepted
        </button>
      )}
    </div>
  );
};

export default OrdersPage;