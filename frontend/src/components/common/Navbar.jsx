import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../../Redux/slices/authSlice.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = (scrolled) =>
    `px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 ${
      scrolled ? "text-black hover:text-[#740e2d]" : "text-black hover:text-[#740e2d]"
    }`;

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/40 py-4"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-black cursor-pointer">
          Qatar Charity
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={navLinkClasses(isScrolled)}>Home</Link>
          <Link to="/campaign" className={navLinkClasses(isScrolled)}>Campaigns</Link>
          <Link to="/about" className={navLinkClasses(isScrolled)}>About</Link>
          <Link to="/donor" className={navLinkClasses(isScrolled)}>Donor</Link>
          <Link to="/contact" className={navLinkClasses(isScrolled)}>Contact</Link>
        </div>

        {/* Profile / Login */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {user ? (
            <div className="relative">
              <img
                src={user.profileImage || "/default-avatar.png"}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-md py-2 z-50">
                  <p className="px-4 py-2 text-gray-700 font-medium">Role: {user.role}</p>
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Profile</Link>
                  {user.role !== "Admin" && (
                    <Link to="/donation-history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Donation History</Link>
                  )}
                  {user.role === "Admin" && (
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Admin Dashboard</Link>
                  )}
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="px-4 py-1 rounded-md border-2 text-[20px] font-bold">Login</Link>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(true)}>
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>

        <div className="flex flex-col mt-4 space-y-4 px-4">
          <Link to="/" className="py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/campaign" className="py-2" onClick={() => setIsOpen(false)}>Campaigns</Link>
          <Link to="/about" className="py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/donor" className="py-2" onClick={() => setIsOpen(false)}>Donor</Link>
          <Link to="/contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>

          {user ? (
            <>
              <Link to="/profile" className="py-2" onClick={() => setIsOpen(false)}>My Profile</Link>
              {user.role !== "Admin" && (
                <Link to="/donation-history" className="py-2" onClick={() => setIsOpen(false)}>Donation History</Link>
              )}
              {user.role === "Admin" && (
                <Link to="/dashboard" className="py-2" onClick={() => setIsOpen(false)}>Admin Dashboard</Link>
              )}
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="py-2 text-left">Logout</button>
            </>
          ) : (
            <Link to="/login" className="py-2" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
