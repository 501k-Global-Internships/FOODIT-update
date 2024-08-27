import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ReactComponent as TotalMenuIcon } from "../../assets/total-menu.svg";
import { ReactComponent as TotalDishesIcon } from "../../assets/total-dishes.svg";
import { ReactComponent as ActiveDishesIcon } from "../../assets/active-dish.svg";
import { ReactComponent as LiveMenuIcon } from "../../assets/live-menu.svg";
import { ReactComponent as KatherineMossIcon } from "../../assets/KatherineMoss.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MainContent = () => {
  return (
    <div className="space-y-6 mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<TotalMenuIcon />}
          title="Total Menu"
          value={12}
          bgColor="bg-blue-100"
        />
        <StatCard
          icon={<TotalDishesIcon />}
          title="Total Dishes"
          value={4}
          bgColor="bg-yellow-100"
        />
        <StatCard
          icon={<ActiveDishesIcon />}
          title="Active Dishes"
          value={13}
          bgColor="bg-purple-100"
        />
        <StatCard
          icon={<LiveMenuIcon />}
          title="Live Menu"
          value={10}
          bgColor="bg-red-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <RevenueChart />
      </div>

      <OrdersTable />
    </div>
  );
};

const StatCard = ({ icon, title, value, bgColor }) => (
  <div
    className={`${bgColor} p-4 rounded-lg shadow flex items-center justify-between`}
  >
    <div>
      <div className="text-sm text-gray-600">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
    <div className="text-3xl opacity-50">{icon}</div>
  </div>
);

const SalesChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [50, 70, 55, 80, 60, 85, 95],
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Daily
          </button>
          <button className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
            Weekly
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

const RevenueChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [60, 45, 70, 65, 50, 45, 55, 75, 70, 65, 50, 60],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index % 2 === 0
            ? "rgba(255, 206, 86, 1)"
            : "rgba(75, 192, 192, 1)";
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Revenue</h2>
        <select className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
          <option>Past</option>
        </select>
      </div>
      <Bar data={data} options={options} />
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-yellow-400 inline-block mr-2"></span>
          Above Average
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-200 inline-block mr-2"></span>
          Below Average
        </div>
      </div>
    </div>
  );
};

const OrdersTable = () => (
  <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
    <h2 className="text-lg font-semibold mb-4">Orders</h2>
    <table className="w-full min-w-max">
      <thead>
        <tr className="text-left text-gray-600">
          <th className="pb-2 pr-4"></th>
          <th className="pb-2 pr-4">Order No</th>
          <th className="pb-2 pr-4">Client's Name</th>
          <th className="pb-2 pr-4">Phone Number</th>
          <th className="pb-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(4)].map((_, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 pr-4">
              <input type="checkbox" />
            </td>
            <td className="py-2 pr-4">#CM9801</td>
            <td className="py-2 pr-4 flex items-center">
              <KatherineMossIcon className="w-8 h-8 rounded-full mr-2" />
              Katherine Moss
            </td>
            <td className="py-2 pr-4">08134340384</td>
            <td className="py-2">16, Musilicatu ayilaa</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MainContent;
