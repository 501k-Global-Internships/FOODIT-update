import React, { useState } from "react";
import { ReactComponent as Food1 } from "../../assets/food-1.svg";

const Dishes = () => {
  const [dishes, setDishes] = useState([
    {
      name: "One Fufu and Draw soup",
      price: 3500,
      availability: true,
      image: <Food1 />,
    },
    {
      name: "One Fufu and Draw soup",
      price: 3500,
      availability: true,
      image: <Food1 />,
    },
    {
      name: "One Fufu and Draw soup",
      price: 3500,
      availability: true,
      image: <Food1 />,
    },
    {
      name: "One Fufu and Draw soup",
      price: 3500,
      availability: true,
      image: <Food1 />,
    },
  ]);

  const [newDishName, setNewDishName] = useState("");
  const [newDishPrice, setNewDishPrice] = useState(0);
  const [showAddDish, setShowAddDish] = useState(false);

  const handleAddDish = () => {
    if (newDishName && newDishPrice > 0) {
      setDishes([
        ...dishes,
        {
          name: newDishName,
          price: newDishPrice,
          availability: true,
          image: <Food1 />,
        },
      ]);
      setNewDishName("");
      setNewDishPrice(0);
      setShowAddDish(false);
      console.log("Dish is successfully added!");
    }
  };

  const handleDeleteDish = (index) => {
    const updatedDishes = [...dishes];
    updatedDishes.splice(index, 1);
    setDishes(updatedDishes);
    console.log("Dish is successfully deleted!");
  };

  const handleToggleAvailability = (index) => {
    const updatedDishes = [...dishes];
    updatedDishes[index].availability = !updatedDishes[index].availability;
    setDishes(updatedDishes);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dishes.map((dish, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-md flex flex-col"
        >
          <div className="flex-1 mb-4">{dish.image}</div>
          <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
          <p className="text-gray-600 mb-4">₦{dish.price}</p>
          <div className="flex justify-between items-center">
            <button
              className={`px-4 py-2 rounded-md text-white ${
                dish.availability ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={() => handleToggleAvailability(index)}
            >
              {dish.availability ? "Available" : "Unavailable"}
            </button>
            <div className="relative">
              <button className="p-2 rounded-md hover:bg-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleDeleteDish(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showAddDish ? (
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col">
          <input
            type="text"
            placeholder="Dish Name"
            className="p-2 border rounded-md mb-2"
            value={newDishName}
            onChange={(e) => setNewDishName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded-md mb-4"
            value={newDishName}
            onChange={(e) => setNewDishPrice(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
              onClick={handleAddDish}
            >
              Add
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setShowAddDish(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowAddDish(true)}
        >
          Add Dish
        </button>
      )}
    </div>
  );
};

export default Dishes;
