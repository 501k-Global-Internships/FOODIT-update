import React from "react";
import Dashboard from "./Dashboard"; // Assuming this is the path to your Dashboard component
import Nav from "./Nav"; // Assuming this is the path to your Nav component

const OrderDetails = () => {
  return (
    <div className="flex h-screen">
      <Dashboard isOpen={true} closeSidebar={() => {}} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Nav vendorName="Vendor’s Name" />

        <div className="flex-1 p-8 pt-20">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Order ID #12334</h1>
              <span className="text-blue-500 bg-blue-100 rounded-full px-3 py-1 text-sm">
                Awaiting
              </span>
            </div>
            <div className="text-lg font-medium mb-2">Dare Madeinabah</div>
            <div className="text-sm text-gray-500 mb-4">10:30AM | Today</div>
            <div className="flex items-center mb-4">
              <select
                className="border rounded-md p-2 text-sm mr-4"
                defaultValue="Multiple Order"
              >
                <option>Single Order</option>
                <option>Multiple Order</option>
              </select>
              <div className="flex items-center text-blue-500">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h2l4 8h8l4-8h2m-6 6h.01M3 10l4-4m4 4v4m0 0l2-2m2 2v-4m0 0l4-4"
                  />
                </svg>
                Address
              </div>
              <div className="text-gray-600 ml-2">
                Tolulope close, Egbeda...
              </div>
              <svg
                className="w-5 h-5 ml-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6.694 4.25C6.238 4.25 5.894 4.594 5.894 5.05v3.512c0 .456.344.8.8.8h4.416c.456 0 .8-.344.8-.8V5.05c0-.456-.344-.8-.8-.8H6.694zM16.956 3.206c.14 0 .27.056.366.148.097.091.148.22.148.366v1.82c0 .286-.23.516-.516.516h-1.82a.518.518 0 01-.515-.516v-1.82c0-.286.23-.516.516-.516h1.82z"
                />
              </svg>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-gray-600">Subtotal</div>
              <div className="text-gray-900">₦1,400</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-gray-600">Delivery Fee</div>
              <div className="text-gray-900">₦500</div>
            </div>
            <div className="flex justify-between font-bold text-gray-900">
              <div>Total</div>
              <div>₦1,900</div>
            </div>
            <button className="w-full bg-[#F8A307] text-white py-2 mt-6 rounded-md">
              Order Received
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
