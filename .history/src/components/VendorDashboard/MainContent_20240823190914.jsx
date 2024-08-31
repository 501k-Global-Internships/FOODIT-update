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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<TotalMenuIcon />}
          title="Total Menu"
          value={12}
          iconColor="#19ACA0"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
  const [timeframe, setTimeframe] = useState('weekly');
  const [chartHeight, setChartHeight] = useState('320px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight('250px');
      } else {
        setChartHeight('320px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(255, 171, 18, 0.11)');
          gradient.addColorStop(1, 'rgba(255, 171, 18, 1)');
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
          padding: 15,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        ticks: {
          padding: 10,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 20,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-lg font-semibold mb-2 sm:mb-0">Sales</h2>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="timeframe"
              value="daily"
              checked={timeframe === 'daily'}
              onChange={() => setTimeframe('daily')}
              className="mr-2 accent-[#F8A307]"
            />
            Daily
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="timeframe"
              value="weekly"
              checked={timeframe === 'weekly'}
              onChange={() => setTimeframe('weekly')}
              className="mr-2 accent-[#F8A307]"
            />
            Weekly
          </label>
        </div>
      </div>
      <div style={{ height: chartHeight }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const RevenueChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('Feb');
  const [averageType, setAverageType] = useState('above');
  const [chartHeight, setChartHeight] = useState('280px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight('250px');
      } else {
        setChartHeight('280px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [60, 45, 70, 65, 50, 45, 55, 75, 70, 65, 50, 60],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index % 2 === 0 ? "#F8A307" : "#E8F2C7";
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
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

          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          padding: 5,
          font: {
            size: 10,
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 10,
        top: 10,
        bottom: 15,
      },
    },
  };

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold mb-2 sm:mb-0">Revenue</h2>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="averageType"
                value="above"
                checked={averageType === 'above'}
                onChange={() => setAverageType('above')}
                className="mr-2 accent-[#F8A307]"
              />
              Above Average
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="averageType"
                value="below"
                checked={averageType === 'below'}
                onChange={() => setAverageType('below')}
                className="mr-2 accent-[#F8A307]"
              />
              Below Average
            </label>
          </div>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm mt-2 sm:mt-0"
        >
          {months.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <div style={{ height: chartHeight }}>
        <Bar data={data} options={options} />
      </div>
      <div className="text-center mt-1 text-sm text-gray-600">Days</div>
    </div>
  );
};

const OrdersTable = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNo: "#CM9801",
      clientName: "Katherine Moss",
      phoneNumber: "08134340384",
      address: "16, Musilicatu ayilas",
    },
    {
      id: 2,
      orderNo: "#CM9802",
      clientName: "John Doe",
      phoneNumber: "08134340385",
      address: "17, Example Street",
    },
    {
      id: 3,
      orderNo: "#CM9803",
      clientName: "Jane Smith",
      phoneNumber: "08134340386",
      address: "18, Sample Avenue",
    },
    {
      id: 4,
      orderNo: "#CM9804",
      clientName: "Bob Johnson",
      phoneNumber: "08134340387",
      address: "19, Test Road",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setOrders(orders.map((order) => ({ ...order, selected: !selectAll })));
  };

  const handleSelectOne = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, selected: !order.selected } : order
      )
    );
    setSelectAll(orders.every((order) => order.selected));
  };

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
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  className="accent-[#F8A307]"
                  checked={order.selected || false}
                  onChange={() => handleSelectOne(order.id)}
                />
              </td>
              <td className="py-2 pr-4">{order.orderNo}</td>
              <td className="py-2 pr-4 flex items-center">
                <KatherineMossIcon className="w-8 h-8 rounded-full mr-2" />
                {order.clientName}
              </td>
              <td className="py-2 pr-4">{order.phoneNumber}</td>
              <td className="py-2">{order.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
