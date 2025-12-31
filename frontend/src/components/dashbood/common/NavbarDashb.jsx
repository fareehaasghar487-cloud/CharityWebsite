import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarDashb = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Get user from Redux
  const { user } = useSelector((state) => state.auth);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="fixed top-0 left-64 right-0 bg-white shadow-md px-6 py-4 z-50 flex justify-between items-center">
      {/* Left / Title */}
      <input
        type="text"
        defaultValue="Dashboard"
        className="text-2xl font-semibold text-[#4a342d] bg-transparent border-none focus:outline-none focus:ring-0"
      />

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div className="relative">
          <FaBell
            className="text-gray-700 cursor-pointer hover:text-gray-900 transition duration-200"
            size={22}
          />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Profile Image */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-700 hover:border-gray-900 transition duration-200 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={user?.profileImage || "https://media.istockphoto.com/id/2151737526/photo/studio-portrait-of-elegant-man-dark-background.webp"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                onClick={handleProfile}
              >
                My Profile
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarDashb;
