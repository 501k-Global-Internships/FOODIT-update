import React from "react";
import { ReactComponent as TotalMenuIcon } from "../../assets/total-menu.svg";
import { ReactComponent as TotalDishesIcon } from "../../assets/total-dishes.svg";
import { ReactComponent as ActiveDishesIcon } from "../../assets/active-dish.svg";
import { ReactComponent as LiveMenuIcon } from "../../assets/live-menu.svg";
import { ReactComponent as KatherineMossIcon } from "../../assets/KatherineMoss.svg";

const MainContent = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<TotalMenuIcon />} title="Total Menu" value={12} />
        <StatCard icon={<TotalDishesIcon />} title="Total Dishes" value={4} />
        <StatCard
          icon={<ActiveDishesIcon />}
          title="Active Dishes"
          value={13}
        />
        <StatCard icon={<LiveMenuIcon />} title="Live Menu" value={10} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SalesChart />
        <RevenueChart />
      </div>

      <OrdersTable />
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center">
    {icon}
    <div className="ml-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  </div>
);

const SalesChart = () => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Sales</h2>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0 100 L10 80 L20 90 L30 70 L40 85 L50 60 L60 75 L70 50 L80 65 L90 40 L100 20"
            fill="none"
            stroke="#FFAB12"
            strokeWidth="2"
          />
          <path
            d="M0 100 L10 80 L20 90 L30 70 L40 85 L50 60 L60 75 L70 50 L80 65 L90 40 L100 20 V100 Z"
            fill="#FFAB12"
            fillOpacity="0.2"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">Weekly</button>
        <button className="ml-2 px-4 py-2 bg-gray-200 rounded-full text-sm">Daily</button>
      </div>
    </div>
  );
  

  const RevenueChart = () => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Revenue</h2>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(11)].map((_, i) => (
            <rect
              key={i}
              x={i * 9}
              y={100 - Math.random() * 80}
              width="8"
              height="100"
              fill={i % 2 === 0 ? "#F8A307" : "#E8F2C7"}
            />
          ))}
        </svg>
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500">
          {[...Array(11)].map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#F8A307] inline-block mr-2"></span>
          <span className="text-sm">Above Average</span>
          <span className="w-3 h-3 bg-[#E8F2C7] inline-block ml-4 mr-2"></span>
          <span className="text-sm">Below Average</span>
        </div>
        <select className="px-4 py-2 bg-gray-200 rounded-full text-sm">
          <option>Past</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );

const OrdersTable = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Orders</h2>
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th></th>
          <th>Order No</th>
          <th>Client's Name</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>#CM9801</td>
            <td className="flex items-center">
              <KatherineMossIcon className="w-8 h-8 rounded-full mr-2" />
              Katherine Moss
            </td>
            <td>08134340384</td>
            <td>16, Musilicatu ayilaa</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MainContent;
