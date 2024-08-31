const MainContent = () => {
  return (
    <div className="p-4 md:pl-64">
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Add Dish</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none w-full"
              placeholder="Dish Name"
            />
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-md shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Select Dish</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Dish"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">One Fufu and Draw soup</h3>
            <p className="text-gray-500">N 3,500</p>
            <div className="flex justify-end">
              <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
                Add
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Dish"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">One Fufu and Draw soup</h3>
            <p className="text-gray-500">N 3,500</p>
            <div className="flex justify-end">
              <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
                Add
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Dish"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">One Fufu and Draw soup</h3>
            <p className="text-gray-500">N 3,500</p>
            <div className="flex justify-end">
              <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
                Add
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Dish"
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">One Fufu and Draw soup</h3>
            <p className="text-gray-500">N 3,500</p>
            <div className="flex justify-end">
              <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
