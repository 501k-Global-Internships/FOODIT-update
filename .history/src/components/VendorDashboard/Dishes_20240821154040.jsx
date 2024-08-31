import React, { useState } from "react";
import { FiCheckCircle, FiMoreVertical, FiXCircle } from "react-icons/fi";
import Food from '../../assets/food-1.svg';

const Dishes = () => {
  const [notifications, setNotifications] = useState([]);
  const [showActions, setShowActions] = useState(null);

  const handleAddDish = () => {
    setNotifications([...notifications, "Dish is successfully added!"]);
  };

  const handleDeleteDish = () => {
    setNotifications([...notifications, "Dish is successfully deleted!"]);
  };

  const handleActionClick = (index) => {
    setShowActions(showActions === index ? null : index);
  };

  return (
    <main className="flex flex-col lg:flex-row p-6 bg-gray-50">
      <div className="lg:w-1/4 bg-transparent rounded-lg shadow-lg p-4 mb-6 lg:mb-0 lg:mr-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center cursor-pointer">
            <span className="text-gray-400 text-2xl">+</span>
          </div>
          <span className="text-gray-700 mb-2">Dish Name: One Fufu and Draw soup</span>
          <span className="text-gray-700 mb-4">₦ Price: 3,500</span>
          <button
            onClick={handleAddDish}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2"
          >
            Add
          </button>
          <button className="text-red-500">Cancel</button>
        </div>
      </div>

      <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative"
          >
            <img
              src={Food}
              alt="Dish"
              className="w-full h-24 object-cover rounded-lg"
            />
            <button
              onClick={() => handleActionClick(index)}
              className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md"
            >
              <FiMoreVertical />
            </button>
            {showActions === index && (
              <div className="absolute top-8 right-2 bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => handleActionClick("edit")}
                  className="block text-gray-600 px-4 py-2"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteDish}
                  className="block text-gray-600 px-4 py-2"
                >
                  Delete
                </button>
              </div>
            )}
            <h2 className="text-lg font-semibold mt-2">One Fufu and Draw soup</h2>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Availability</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-orange-500"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-3 h-3 rounded-full peer-checked:left-4 transition-all"></div>
              </label>
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