import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Food from '../../assets/food-1.svg';

const Dishes = () => {
  const [notifications, setNotifications] = useState([]);
  const [actionVisible, setActionVisible] = useState(null);
  const [availability, setAvailability] = useState(true);

  const handleAddDish = () => {
    setNotifications([...notifications, "Dish is successfully added!"]);
  };

  const handleDeleteDish = () => {
    setNotifications([...notifications, "Dish is successfully deleted!"]);
  };

  const handleActionClick = (index) => {
    setActionVisible(actionVisible === index ? null : index);
  };

  const handleToggle = () => {
    setAvailability(!availability);
  };

  return (
    <main className="flex flex-col lg:flex-row p-6 bg-gray-50">
      <div className="flex flex-col items-center  p-6 rounded-lg w-full max-w-xs">
        <div className="flex space-x-2 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            Add Dish
          </button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-t-lg">
            Select Dish
          </button>
        </div>
        <div className="w-full bg-gray-200 border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-between p-4 h-64">
          <h3 className="text-lg font-semibold text-gray-700">Dish Name</h3>
          <div className="flex-grow flex items-center justify-center">
            <span className="text-gray-400 text-4xl cursor-pointer">+</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-700">₦ Price</h3>
        </div>
        <button
          onClick={handleAddDish}
          className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4"
        >
          Add
        </button>
        <button className="text-red-500 mt-2">Cancel</button>
      </div>

      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center p-4 relative">
            {/* Dish Name */}
            <h2 className="text-lg font-semibold text-center mb-2">
              One Fufu and Draw soup
            </h2>
            {/* Image and Action Icon */}
            <div className="relative">
              <img
                src={Food}
                alt="Dish"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => handleActionClick(index)}
                className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md"
              >
                <FiMoreVertical />
              </button>
              {actionVisible === index && (
                <div className="absolute top-10 right-2 bg-white rounded-lg shadow-md">
                  <button
                    onClick={() => alert("Edit functionality")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDeleteDish}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-lg"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            {/* Availability and Price */}
            <div className="flex flex-col items-center mt-2">
              <div className="flex items-center">
                <span className="text-gray-500 mr-4">Availability</span>{" "}
                {/* Increased margin to add space */}
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={availability}
                    onChange={handleToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500"></div>
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:left-6 transition-all"></div>
                </label>
              </div>
              <div className="mt-2 text-xl font-bold text-center">₦ 3,500</div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed top-4 right-4 space-y-2">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-black text-white p-2 rounded-lg flex items-center space-x-2"
          >
            <span>{note}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dishes;