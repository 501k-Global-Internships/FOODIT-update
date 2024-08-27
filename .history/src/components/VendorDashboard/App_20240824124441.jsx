import { useState } from "react";
import Dashboard from "./Dashboard";
import MainContent from "./MainContent";
import Nav from "./Nav";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Dashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main
          className="flex-1 overflow-y-auto p-4 md:p-6"
          onClick={closeSidebar}
        >
          <MainContent />
        </main>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default App;
