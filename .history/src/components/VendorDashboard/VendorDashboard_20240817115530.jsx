import React from "react";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import MainContent from "./MainContent";

const VendorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Dashboard />
      <div className="flex-1">
        <Nav vendorName="Vendor's Name" />
        <MainContent />
      </div>
    </div>
  );
};

export default VendorDashboard;
