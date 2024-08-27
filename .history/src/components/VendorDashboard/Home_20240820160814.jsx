
import React from 'react';
import { ReactComponent as OrdersIcon } from '../../assets/orders.svg';
import { ReactComponent as DeliveredIcon } from '../../assets/orders.svg';
import { ReactComponent as ActiveDishesIcon } from '../../assets/active-dish.svg';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="space-y-6 mt-16">
      <Nav />
      <div>
        Dash
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<OrdersIcon />} title="Total Orders" value="1750" change="+8.56%" />
        <StatCard icon={<DeliveredIcon />} title="Total Delivered" value="567" change="+9.6%" />
        <StatCard icon={<ActiveDishesIcon />} title="Active Dishes" value="567" />
        <StatCard icon={<DeliveredIcon />} title="Total Delivered" value="567" change="+9.6%" />
      </div>
      {/* Add other components for the home page here */}
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-start">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold mt-1">{value}</div>
        {change && <div className="text-sm text-green-500 mt-1">{change}</div>}
      </div>
      <div className="p-2 rounded-full bg-blue-100">{icon}</div>
    </div>
  </div>
);

export default Home;