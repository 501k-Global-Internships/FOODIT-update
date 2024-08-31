import React, { useState } from "react";
import { FiCheckCircle, FiMoreVertical, FiXCircle } from "react-icons/fi";
import Food from '../../assets/food-1.svg';

const Dishes = () => {
  const [notifications, setNotifications] = useState([]);

  const handleAddDish = () => {
    setNotifications([...notifications, "Dish is successfully added!"]);
  };

  const handleDeleteDish = () => {
    setNotifications([...notifications, "Dish is successfully deleted!"]);
  };

  const handleActionClick = (action) => {
    if (action === "edit") {
      // Handle edit action
    } else if (action === "delete") {
      handleDeleteDish();
    }
  };

  return (
    <main className="flex flex-col lg:flex-row p-6 bg-gray-50">
      <div className="lg:w-1/4 bg-white rounded-lg shadow-lg p-6 mb-6 lg:mb-0 lg:mr-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-4xl">+</span>
          </div>
          <input
            type="text"
            placeholder="Dish Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="₦ Price"
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          />
          <div className="flex space-x-4">
            <button
              onClick={handleAddDish}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add
            </button>
            <button className="text-red-500">Cancel</button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4 relative"
          >
            <img
              src={Food}
              alt="Dish"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <button
              onClick={() => handleActionClick("edit")}
              className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md"
            >
              <FiMoreVertical />
            </button>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">One Fufu and Draw soup</h2>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Availability</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:left-6 transition-all"></div>
              </label>
            </div>
            <div className="mt-4 text-xl font-bold">₦ 3,500</div>
          </div>
        ))}
      </div>
      <div className="fixed top-4 right-4 space-y-2">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-black text-white p-2 rounded-lg flex items-center space-x-2"
          >
            {note.includes("added") ? (
              <FiCheckCircle className="text-green-500" />
            ) : (
              <FiXCircle className="text-red-500" />
            )}
            <span>{note}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dishes;