import { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { ChevronDownIcon, ChevronUpIcon, ClipboardCopyIcon, MapPinIcon, PhoneIcon } from "lucide-react";

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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 mt-[5rem]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-end mb-6">
              <div className="flex space-x-2">
                <span className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                  Awaiting
                </span>
                <span className="px-4 py-2 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">
                  Pending
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                  Delivered
                </span>
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
                orderItems={[
                  { name: "Item 1", quantity: 2, price: "₦10,000" },
                  { name: "Item 2", quantity: 1, price: "₦5,000" },
                ]}
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
                  orderItems={[
                    { name: "Item 1", quantity: 2, price: "₦10,000" },
                    { name: "Item 2", quantity: 1, price: "₦5,000" },
                  ]}
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
    <div className="relative bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Order ID #12334</span>
          <ClipboardCopyIcon className="w-5 h-5 ml-2 text-gray-400 cursor-pointer" />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <h3 className="font-bold text-2xl mb-1">{name}</h3>
      <p className="text-sm text-blue-500 mb-4">{time}</p>
      {orderItems && name !== "Uche Ebuka" ? (
        <div className="relative">
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
          {isOpen && (
            <div
              className="absolute z-10 bg-gray-50 rounded-md p-2 shadow-lg w-full left-0 right-0"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 mb-2 bg-white rounded"
                >
                  <span className="text-sm flex-1">{item.name}</span>
                  <span className="text-sm font-medium mx-4 bg-gray-200 px-2 py-1 rounded flex-shrink-0">
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
        </div>
      ) : (
        orderDetails && (
          <div className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded-md">
            <span className="text-sm">{orderDetails}</span>
            <span className="font-semibold bg-gray-200 px-2 py-1 rounded">
              {price}
            </span>
          </div>
        )
      )}
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-1">Address</p>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 text-[#2D60FF] mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-500 flex-1">{address}</span>
          <div className="bg-[#2D60FF1A] p-2 rounded-full">
            <PhoneIcon className="w-5 h-5 text-[#2D60FF]" />
          </div>
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