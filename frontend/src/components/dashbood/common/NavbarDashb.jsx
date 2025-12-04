import React from "react";
import { FaBell } from "react-icons/fa";

const NavbarDashb = () => {
  return (
    <div className="flex justify-between items-center bg-green-50 shadow-md px-6 py-4 rounded-xl">
      {/* 🔍 Search Bar */}
      <div className="flex items-center w-full max-w-sm">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-green-200 rounded-full 
          focus:outline-none focus:ring-2 mr-3 focus:ring-green-300 focus:border-green-400 
          transition duration-200 bg-white placeholder-green-600 text-green-800"
        />
      </div>

      {/* 👤 Profile Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <FaBell className="text-green-700 cursor-pointer hover:text-green-600 transition-colors duration-200" size={22} />

        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600 hover:border-green-500 transition-colors duration-200">
          <img
            src="https://media.istockphoto.com/id/2151737526/photo/studio-portrait-of-elegant-man-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HMdSi8qNYm6hJogQvEtJq6_8X9MEPXPaMBuy1LqRsn4="
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashb;
