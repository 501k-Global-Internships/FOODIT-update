import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Food from "../../assets/food-1.svg";


const DishesPage = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [toggles, setToggles] = useState({
    dish1: false,
    dish2: true,
    dish3: true,
    dish4: true,
  });

  const toggleMenu = (dishId) => {
    setActiveMenu(activeMenu === dishId ? null : dishId);
  };

  const toggleAvailability = (dishId) => {
    setToggles({ ...toggles, [dishId]: !toggles[dishId] });
  };

  const dishes = [
    {
      id: "dish1",
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: ,
    },
    {
      id: "dish2",
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: ,
    },
    {
      id: "dish3",
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: {},
    },
    {
      id: "dish4",
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: {Food},
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-20 ml-0 md:ml-64">
      {dishes.map((dish) => (
        <div key={dish.id} className="relative bg-white rounded-lg p-4">
          <div className="relative w-full pb-1/1">
            <img
              src={dish.image}
              alt={dish.name}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => toggleMenu(dish.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full"
            >
              <DotsIcon className="w-6 h-6" />
            </button>
          </div>

          <div
            className={`absolute right-10 top-14 bg-white p-2 rounded-lg shadow-lg ${
              activeMenu === dish.id ? "block" : "hidden"
            }`}
          >
            <button className="block text-left w-full p-2 hover:bg-gray-100">
              Edit
            </button>
            <button className="block text-left w-full p-2 text-red-600 hover:bg-gray-100">
              Delete
            </button>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">{dish.name}</p>
            <div className="flex justify-between items-center mt-2">
              <span>Availability</span>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={toggles[dish.id]}
                  onChange={() => toggleAvailability(dish.id)}
                  className="toggle-checkbox hidden"
                />
                <div
                  className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                    toggles[dish.id] ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                      toggles[dish.id] ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <p className="mt-2 text-lg font-semibold">{dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishesPage;