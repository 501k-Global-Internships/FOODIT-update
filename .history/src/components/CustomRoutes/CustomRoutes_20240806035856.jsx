import React from 'react';
import { Routes, Route } from 'react-router-dom';
import vendor from '../../pages/vendor'

// Import other components as needed

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/vendor" element={<vendor />} />
      {/* Define your other routes here */}
      
    </Routes>
  );
};

export default CustomRoutes;