import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarDashb = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

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

  const handleProfile = () => navigate("/profile");

  return (
    <div className="
      fixed top-0 right-0 left-0
      md:left-64
      bg-white shadow-md
      px-4 md:px-6
      py-3 md:py-4
      z-50 flex justify-between items-center
    ">
      {/* Title */}
      <input
        type="text"
        defaultValue="Dashboard"
        className="
          text-xl md:text-2xl
          font-semibold text-[#4a342d]
          bg-transparent border-none
          focus:outline-none
          hidden sm:block
        "
      />

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6 ml-auto">
        {/* Notification */}
        <div className="relative">
          <FaBell
            className="text-gray-700 cursor-pointer hover:text-gray-900"
            size={20}
          />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="
              w-9 h-9 md:w-11 md:h-11
              rounded-full overflow-hidden
              border-2 border-gray-700
              cursor-pointer
            "
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={
                user?.profileImage ||
                "https://media.istockphoto.com/id/2151737526/photo/studio-portrait-of-elegant-man-dark-background.webp"
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-50">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleProfile}
              >
                My Profile
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
