import React from "react";
import {
  FaHome,
  FaDonate,
  FaChartLine,
  FaWallet,
  FaFileAlt,
  FaCog,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { id: 1, icon: <FaHome />, name: "Dashboard", path: "/dashboard" },
  { id: 8, icon: <FaUser />, name: "Users", path: "/dashboard/users" },
  { id: 2, icon: <FaDonate />, name: "My Donation", path: "/dashboard/mydonations" },
  { id: 3, icon: <FaChartLine />, name: "Campaigns", path: "/dashboard/campaigns" },
  { id: 4, icon: <FaWallet />, name: "Wallet", path: "/dashboard/wallet" },
  { id: 5, icon: <FaFileAlt />, name: "Report", path: "/dashboard/reports" },
  { id: 6, icon: <FaCog />, name: "Settings", path: "/dashboard/settings" },
  
];

const SideBar = () => {
  return (
    <div className="w-64 min-h-screen flex flex-col justify-between shadow-xl" style={{ backgroundColor: "#F5F5F5" }}>
      {/* Top Section */}
      <div>
        <h1
          className="text-xl text-center font-semibold mt-5 tracking-wide"
          style={{ color: "#821435" }}
        >
          DashBoard
        </h1>

        <nav className="mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-lg mx-3 mb-2 transition-all ${
                  isActive
                    ? "bg-[#821435] text-white font-semibold"
                    : "text-[#821435] hover:bg-[#821435] hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div
        className="p-4 text-center text-sm"
        style={{ borderTop: "1px solid #821435", color: "#821435" }}
      >
        © {new Date().getFullYear()} Donor Dashboard
      </div>
    </div>
  );
};

export default SideBar;
