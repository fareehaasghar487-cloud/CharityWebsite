import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarDashb = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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

  return (
    <div className="fixed top-0 left-0 right-0 md:left-64 bg-white shadow z-40 flex items-center justify-between px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-gray-700 relative z-50"
          onClick={onMenuClick}
        >
          <FaBars size={22} />
        </button>
        <h1 className="text-lg md:text-2xl font-semibold text-[#4a342d]">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <FaBell className="cursor-pointer" />

        <div className="relative" ref={dropdownRef}>
          <img
            src={
              user?.profileImage ||
              "https://media.istockphoto.com/id/2151737526/photo/studio-portrait-of-elegant-man-dark-background.webp"
            }
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-gray-700 cursor-pointer object-cover"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow border rounded">
              <button
                onClick={() => navigate("/profile")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
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
