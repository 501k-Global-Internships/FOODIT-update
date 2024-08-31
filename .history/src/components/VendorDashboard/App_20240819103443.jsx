import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard"
import Nav from "./Nav";

import Home from "./Home";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        <Nav
          vendorName="Vendor's Name"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex flex-1 overflow-hidden">
          <Dashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <main
            className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64"
            onClick={closeSidebar}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/dishes" element={<Dishes />} />
            </Routes>
          </main>
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={closeSidebar}
          ></div>
        )}
      </div>
    </Router>
  );
};

export default App;
