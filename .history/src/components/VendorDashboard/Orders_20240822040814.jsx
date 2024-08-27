import { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { ChevronDownIcon, ChevronUpIcon, PhoneIcon } from "lucide-react";

const OrdersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Dashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-end mb-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <OrderCard
                status="Awaiting"
                name="Dare Madeinabah"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                onAccept={() => {}}
                onDecline={() => {}}
              />

              <OrderCard
                status="Pending"
                name="Uche Ebuka"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                orderDetails="FuFu & Egusi..."
                price="₦ 3,500"
                accepted
              />

              <OrderCard
                status="Delivered"
                name="Danfodio Mbah"
                time="10:30AM | Today"
                address="Tolulope close, Egbeda ..."
                orderItems={[
                  { name: "Afam soup and Eba", quantity: 3, price: "₦17,500" },
                  { name: "Eba and Ewedu so...", quantity: 2, price: "₦2,500" },
                  {
                    name: "Nwatu soup and E...",
                    quantity: 1,
                    price: "₦10,500",
                  },
                  {
                    name: "Fried Rice and chi...",
                    quantity: 1,
                    price: "₦1,000",
                  },
                ]}
              />

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
  const [isOpen, setIsOpen] = useState(false);
  const statusColors = {
    Awaiting: "bg-blue-100 text-blue-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Delivered: "bg-green-100 text-green-600",
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold">Order ID #12334</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
        <h3 className="font-bold text-2xl mb-1">{name}</h3>
        <p className="text-sm text-blue-500 mb-4">{time}</p>
        <div
          className="flex justify-between items-center mb-2 cursor-pointer bg-gray-100 p-3 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-medium">Multiple Order</span>
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </div>
        {isOpen && orderItems && (
          <div className="bg-gray-50 rounded-md p-2 mb-4">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white rounded-md p-2 mb-2 shadow-sm"
              >
                <span className="text-sm flex-1">{item.name}</span>
                <span className="text-sm font-medium mx-4">
                  x{item.quantity}
                </span>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>
            ))}
            <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mt-2">
              Total : ₦ 234,000
            </div>
          </div>
        )}
        {orderDetails && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">{orderDetails}</span>
            <span className="font-semibold">{price}</span>
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
          <span className="text-sm text-gray-500 flex-1">{address}</span>
          <PhoneIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
        </div>
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
