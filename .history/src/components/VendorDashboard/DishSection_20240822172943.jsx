import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import image1 from '../../assets/food-1.svg';
import image2 from "../../assets/food-1.svg";
import image3 from "../../assets/food-1.svg";
import image4 from "../../assets/food-1.svg";
import image5 from "../../assets/food-1.svg";
import image6 from "../../assets/food-1.svg";

const DishSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [availability, setAvailability] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedDishes(dishes.map((dish) => dish.id));
    } else {
      setSelectedDishes([]);
    }
  };

  const handleSelectDish = (id) => {
    if (selectedDishes.includes(id)) {
      setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
    } else {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const toggleAvailability = (id) => {
    setAvailability({
      ...availability,
      [id]: !availability[id],
    });
  };

  const dishes = [
    { id: 1, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image1 },
    { id: 2, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image2 },
    { id: 3, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image3 },
    { id: 4, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image4 },
    { id: 5, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image5 },
    { id: 6, name: "One Fufu and Draw soup", price: "₦ 3,500", image: image6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Dashboard isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="p-6 pt-20 lg:pt-24">
          {/* Select All and Cancel */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="form-checkbox mr-2"
              />
              <span>Select all</span>
            </label>
            <button className="text-gray-500">Cancel</button>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish) => (
              <div key={dish.id} className="bg-white p-4 rounded-lg relative">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedDishes.includes(dish.id)}
                    onChange={() => handleSelectDish(dish.id)}
                    className="form-checkbox mr-2"
                  />
                  <h3 className="font-semibold text-gray-800">{dish.name}</h3>
                </div>
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
                <div className="text-center mt-2">
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-gray-500 mr-2">Availability</span>
                    <Switch
                      checked={availability[dish.id] || false}
                      onChange={() => toggleAvailability(dish.id)}
                      className={`${
                        availability[dish.id] ? "bg-green-500" : "bg-gray-300"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span className="sr-only">Toggle availability</span>
                      <span
                        className={`${
                          availability[dish.id]
                            ? "translate-x-6"
                            : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                  </div>
                  <p className="mt-2 text-xl font-bold">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DishSection;