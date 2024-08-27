import Dashboard from "./Dashboard";

const OrdersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
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
          {/* Order Status Filter */}
          <div className="flex justify-center mb-6 space-x-4">
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
              Awaiting
            </button>
            <button className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full">
              Pending
            </button>
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
              Delivered
            </button>
          </div>

          {/* Orders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Order Card */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">Order ID #12334</h2>
                <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  Awaiting
                </span>
              </div>
              <p className="text-gray-600 mt-2">Dare Madeinabah</p>
              <p className="text-gray-500 text-sm">10:30AM | Today</p>
              <div className="my-4">
                <select className="w-full border-gray-300 rounded-lg">
                  <option>Multiple Order</option>
                </select>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="ml-2">Tolulope close, Egbeda ...</span>
                <button className="ml-auto text-blue-600">
                  <i className="fas fa-phone-alt"></i>
                </button>
              </div>
              <div className="flex mt-4 space-x-2">
                <button className="bg-blue-600 text-white w-1/2 py-2 rounded-lg">
                  Accept
                </button>
                <button className="bg-red-500 text-white w-1/2 py-2 rounded-lg">
                  Decline
                </button>
              </div>
            </div>

            {/* Example for Pending Order */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">Order ID #12334</h2>
                <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                  Pending
                </span>
              </div>
              <p className="text-gray-600 mt-2">Uche Ebuka</p>
              <p className="text-gray-500 text-sm">10:30AM | Today</p>
              <div className="my-4">
                <p className="text-gray-800">FuFu & Egusi...</p>
                <p className="font-semibold text-xl mt-2">₦ 3,500</p>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="ml-2">Tolulope close, Egbeda ...</span>
                <button className="ml-auto text-blue-600">
                  <i className="fas fa-phone-alt"></i>
                </button>
              </div>
              <button className="bg-yellow-600 text-white w-full py-2 mt-4 rounded-lg">
                Accepted
              </button>
            </div>

            {/* Example for Delivered Order */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">Order ID #12334</h2>
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                  Delivered
                </span>
              </div>
              <p className="text-gray-600 mt-2">Danfodio Mbah</p>
              <p className="text-gray-500 text-sm">10:30AM | Today</p>
              <div className="my-4">
                <select className="w-full border-gray-300 rounded-lg">
                  <option>Multiple Order</option>
                  <option>Afam soup and Eba x3 ₦7,500</option>
                  <option>Eba and Ewedu soup x2 ₦2,500</option>
                  <option>Nkwobi soup x1 ₦10,500</option>
                  <option>Fried Rice and Chicken x1 ₦1,000</option>
                </select>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-blue-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="ml-2">Tolulope close, Egbeda ...</span>
                <button className="ml-auto text-blue-600">
                  <i className="fas fa-phone-alt"></i>
                </button>
              </div>
            </div>
            {/* Repeat the above blocks for other orders as necessary */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrdersPage;
