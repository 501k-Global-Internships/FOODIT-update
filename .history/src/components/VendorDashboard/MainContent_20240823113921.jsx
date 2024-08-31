import React, { useState, useEffect } from "react";
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
    <div className="space-y-6 mt-16 p-6 bg-gray-100">
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          icon={<TotalMenuIcon />}
          title="Total Menu"
          value={12}
          iconColor="#C3F4F0"
        />
        <StatCard
          icon={<TotalDishesIcon />}
          title="Total Dishes"
          value={4}
          iconColor="#FFF5D9"
        />
        <StatCard
          icon={<ActiveDishesIcon />}
          title="Active Dishes"
          value={13}
          iconColor="#E4EDFF"
        />
        <StatCard
          icon={<LiveMenuIcon />}
          title="Live Menu"
          value={10}
          iconColor="#FCE3E3"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <SalesChart />
        <RevenueChart />
      </div>

      <OrdersTable />
    </div>
  );
};

const StatCard = ({ icon, title, value, iconColor }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center">
    <div
      className={`rounded-full p-2 mr-4`}
      style={{ backgroundColor: iconColor }}
    >
      {icon}
    </div>
    <div>
      <div className="text-sm text-gray-600">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  </div>
);

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [50, 70, 55, 80, 60, 85, 95],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(255, 171, 18, 0.2)");
          gradient.addColorStop(1, "rgba(255, 171, 18, 0.8)");
          return gradient;
        },
        borderColor: "#FFAB12",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          padding: 10,
          callback: function (value) {
            return value + "%";
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          padding: 10,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 30,
        top: 20,
        bottom: 10,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow" style={{ height: "350px" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales</h2>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="timeframe"
              value="daily"
              checked={timeframe === "daily"}
              onChange={() => setTimeframe("daily")}
              className="mr-2 accent-[#F8A307]"
            />
            Daily
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="timeframe"
              value="weekly"
              checked={timeframe === "weekly"}
              onChange={() => setTimeframe("weekly")}
              className="mr-2 accent-[#F8A307]"
            />
            Weekly
          </label>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

const RevenueChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("Feb");
  const [averageType, setAverageType] = useState("above");

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [60, 45, 70, 65, 50, 45, 55, 75, 70, 65, 50, 60],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index % 2 === 0 ? "#F8A307" : "#E8F2C7";
        },
        barThickness: 20,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          padding: 10,
          callback: function (value) {
            return value + "%";
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          padding: 10,
          align: "center",
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
          drawTicks: true,
          tickLength: 4,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 30,
        top: 20,
        bottom: 10,
      },
    },
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow" style={{ height: "350px" }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="averageType"
                value="above"
                checked={averageType === "above"}
                onChange={() => setAverageType("above")}
                className="mr-2 accent-[#F8A307]"
              />
              Above Average
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="averageType"
                value="below"
                checked={averageType === "below"}
                onChange={() => setAverageType("below")}
                className="mr-2 accent-[#F8A307]"
              />
              Below Average
            </label>
          </div>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

const OrdersTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedOrders([0, 1, 2, 3]); // Assuming 4 orders
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (index) => {
    if (selectedOrders.includes(index)) {
      setSelectedOrders(selectedOrders.filter((i) => i !== index));
    } else {
      setSelectedOrders([...selectedOrders, index]);
    }
  };

  useEffect(() => {
    if (selectedOrders.length === 4) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedOrders]);

  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Orders</h2>
      <table className="w-full min-w-max">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="pb-2 pr-4">
              <input
                type="checkbox"
                className="accent-[#F8A307]"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="pb-2 pr-4">Order No</th>
            <th className="pb-2 pr-4">Client's Name</th>
            <th className="pb-2 pr-4">Phone Number</th>
            <th className="pb-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  className="accent-[#F8A307]"
                  checked={selectedOrders.includes(index)}
                  onChange={() => handleSelectOrder(index)}
                />
              </td>
              <td className="py-2 pr-4">#CM9801</td>
              <td className="py-2 pr-4 flex items-center">
                <KatherineMossIcon className="w-8 h-8 rounded-full mr-2" />
                Katherine Moss
              </td>
              <td className="py-2 pr-4">08134340384</td>
              <td className="py-2">16, Musilicatu ayilas</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
