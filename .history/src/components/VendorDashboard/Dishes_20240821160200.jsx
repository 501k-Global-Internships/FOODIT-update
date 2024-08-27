import React, { useState } from "react";
import { FiCheckCircle, FiMoreVertical, FiXCircle } from "react-icons/fi";
import Food from '../../assets/food-1.svg';

const Dishes = () => {
  const [notifications, setNotifications] = useState([]);
  const [actionVisible, setActionVisible] = useState(null);

  const handleAddDish = () => {
    setNotifications([...notifications, "Dish is successfully added!"]);
  };

  const handleDeleteDish = () => {
    setNotifications([...notifications, "Dish is successfully deleted!"]);
  };

  const handleActionClick = (index) => {
    setActionVisible(actionVisible === index ? null : index);
  };

  return (
    <main className="flex flex-col lg:flex-row p-6 bg-gray-50">
      <div className="lg:w-1/4 p-6 mb-6 lg:mb-0 lg:mr-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-4xl cursor-pointer">+</span>
          </div>
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Dish Name</h3>
          </div>
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">₦ Price</h3>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleAddDish}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2"
            >
              Add
            </button>
            <button className="text-red-500">Cancel</button>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative text-center">
            <h2 className="text-lg font-semibold mb-2">
              One Fufu and Draw soup
            </h2>
            <div className="relative inline-block">
              <img
                src={Food}
                alt="Dish"
                className="w-52 h-52 object-cover rounded-lg mx-auto"
              />
              <button
                onClick={() => handleActionClick(index)}
                className="absolute top-2 right-2 text-white"
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
            <div className="mt-2">
              <span className="text-gray-500">Availability</span>
              <label className="relative inline-flex items-center cursor-pointer ml-2">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:left-6 transition-all"></div>
              </label>
            </div>
            <div className="mt-2 text-xl font-bold">₦ 3,500</div>
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