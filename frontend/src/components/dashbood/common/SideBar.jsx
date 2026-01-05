// import React, { useState } from "react";
// import {
//   FaHome,
//   FaDonate,
//   FaChartLine,
//   FaWallet,
//   FaFileAlt,
//   FaCog,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { id: 1, icon: <FaHome />, name: "Dashboard", path: "/dashboard" },
//   { id: 8, icon: <FaUser />, name: "Users", path: "/dashboard/users" },
//   { id: 2, icon: <FaDonate />, name: "My Donation", path: "/dashboard/mydonations" },
//   { id: 3, icon: <FaChartLine />, name: "Campaigns", path: "/dashboard/campaigns" },
//   { id: 4, icon: <FaWallet />, name: "Wallet", path: "/dashboard/wallet" },
//   { id: 5, icon: <FaFileAlt />, name: "Report", path: "/dashboard/reports" },
//   { id: 6, icon: <FaCog />, name: "Settings", path: "/dashboard/settings" },
// ];

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 text-[#821435]"
//         onClick={() => setIsOpen(true)}
//       >
//         <FaBars size={24} />
//       </button>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed md:static top-0 left-0 z-50
//           w-64 min-h-screen
//           transform transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//           flex flex-col justify-between shadow-xl
//         `}
//         style={{ backgroundColor: "#F5F5F5" }}
//       >
//         {/* Close Button (Mobile) */}
//         <div className="md:hidden flex justify-end p-4">
//           <button onClick={() => setIsOpen(false)}>
//             <FaTimes size={22} className="text-[#821435]" />
//           </button>
//         </div>

//         {/* Top Section */}
//         <div>
//           <h1
//             className="text-xl text-center font-semibold mt-2 tracking-wide"
//             style={{ color: "#821435" }}
//           >
//             DashBoard
//           </h1>

//           <nav className="mt-8">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.id}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-5 py-3 rounded-lg mx-3 mb-2 transition-all ${
//                     isActive
//                       ? "bg-[#821435] text-white font-semibold"
//                       : "text-[#821435] hover:bg-[#821435] hover:text-white"
//                   }`
//                 }
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="font-medium">{item.name}</span>
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         {/* Bottom Section */}
//         <div
//           className="p-4 text-center text-sm"
//           style={{ borderTop: "1px solid #821435", color: "#821435" }}
//         >
//           © {new Date().getFullYear()} Donor Dashboard
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;


import React from "react";
import {
  FaHome,
  FaDonate,
  FaChartLine,
  FaWallet,
  FaFileAlt,
  FaCog,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1, icon: <FaHome />, name: "Dashboard", path: "/dashboard" },
  { id: 2, icon: <FaUser />, name: "Users", path: "/dashboard/users" },
  { id: 3, icon: <FaDonate />, name: "My Donation", path: "/dashboard/mydonations" },
  { id: 4, icon: <FaChartLine />, name: "Campaigns", path: "/dashboard/campaigns" },
  { id: 5, icon: <FaWallet />, name: "Wallet", path: "/dashboard/wallet" },
  { id: 6, icon: <FaFileAlt />, name: "Report", path: "/dashboard/reports" },
  { id: 7, icon: <FaCog />, name: "Settings", path: "/dashboard/settings" },
];

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        flex flex-col justify-between
      `}
    >
      {/* Close button for mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={() => setIsOpen(false)}>
          <FaTimes size={22} />
        </button>
      </div>

      {/* Menu */}
      <div>
        <h2 className="text-xl font-bold text-center text-[#821435] mt-2">
          Dashboard
        </h2>

        <nav className="mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 mx-3 mb-2 rounded-lg ${
                  isActive
                    ? "bg-[#821435] text-white"
                    : "text-[#821435] hover:bg-[#821435] hover:text-white"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-sm p-4 border-t text-[#821435]">
        © {new Date().getFullYear()} Donor Dashboard
      </div>
    </div>
  );
};

export default SideBar;
