import React from "react";
import {
  FaDonate,
  FaUsers,
  FaRegCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Total Donations",
    value: "$12,450",
    icon: <FaDonate className="text-pink-600 text-3xl" />,
    color: "bg-pink-100",
  },
  {
    id: 2,
    title: "Active Donors",
    value: "345",
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    color: "bg-blue-100",
  },
  {
    id: 3,
    title: "Ongoing Campaigns",
    value: "8",
    icon: <FaRegCalendarCheck className="text-green-600 text-3xl" />,
    color: "bg-green-100",
  },
  {
    id: 4,
    title: "Growth Rate",
    value: "15%",
    icon: <FaChartLine className="text-yellow-600 text-3xl" />,
    color: "bg-yellow-100",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
            <p className="mt-1 text-xl font-bold text-gray-800">{card.value}</p>
          </div>
          <div className={`p-3 rounded-full ${card.color}`}>{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
