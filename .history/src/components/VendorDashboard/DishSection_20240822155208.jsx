import React, { useState } from "react";
import Dashboard from "./Dashboard"; // Import your Dashboard component
import Nav from "./Nav"; // Import your Nav component
import food1 from "../../assets/food-1.svg";
import food2 from "../../assets/food-2.svg";
import food3 from "../../assets/food-3.svg";
import food4 from "../../assets/food-4.svg";
import food5 from "../../assets/food-5.svg";
import food6 from "../../assets/food-6.svg";

const DishSection = ({ images }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const dishes = [
    {
      id: 1,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[0],
    },
    {
      id: 2,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[1],
    },
    {
      id: 3,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[2],
    },
    {
      id: 4,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[3],
    },
    {
      id: 5,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[4],
    },
    {
      id: 6,
      name: "One Fufu and Draw soup",
      price: "₦ 3,500",
      image: images[5],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Dashboard isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        <Nav
          vendorName="Vendor’s Name"
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
                <input
                  type="checkbox"
                  checked={selectAll}
                  className="absolute top-2 right-2"
                />
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full rounded-lg"
                />
                <button className="absolute top-2 left-2 bg-white p-1 rounded-full">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
                <div className="text-center mt-2">
                  <h3 className="font-semibold text-gray-800">{dish.name}</h3>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-gray-500">Availability</span>
                    <label className="switch ml-2">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
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
