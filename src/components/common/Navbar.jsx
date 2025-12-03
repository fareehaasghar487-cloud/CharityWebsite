import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[palegreen] to-[palegreen] p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-black" : "text-black"
                }`}
              >
                Qatar Charity
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/hero"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-[palegreen]"
                    : "text-black hover:text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about-cause"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-[palegreen]"
                    : "text-black hover:text-gray-700"
                }`}
              >
                Campaigns
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-[palegreen]"
                    : "text-black hover:text-gray-700"
                }`}
              >
                About
              </Link>

              {/* Donor Dropdown */}
              <div className="relative group">
              <Link to='/donor'>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    isScrolled
                      ? "text-black group-hover:text-[palegreen]"
                      : "text-black group-hover:text-gray-700"
                  }`}
                >
                  Donor
                </span>
              </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">

                </div>
              </div>

              {/* Contact Dropdown */}
              <div className="relative group">
            <Link to="/contact">
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    isScrolled
                      ? "text-black group-hover:text-[palegreen]"
                      : "text-black group-hover:text-gray-700"
                  }`}
                >
                  Contact
                </span></Link>
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
  
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-black hover:bg-white/10"
              }`}
            >
              Log in
            </Link>
            <Link
              to="/makedonation"
              className="px-4 py-2 bg-gradient-to-r from-[palegreen] to-[palegreen] text-black text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link
              to="/donate"
              className="mr-4 px-3 py-1 bg-gradient-to-r from-[palegreen] to-[palegreen] text-black text-sm font-medium rounded-md shadow-md"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-black" : "text-black"
              }`}
            >
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? "bg-white" : "bg-gray-800"
          }`}
        >
          <Link to="/hero" className={`block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-black hover:bg-gray-700"}`}>Home</Link>
          <Link to="/about-cause" className={`block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-black hover:bg-gray-700"}`}>Campaigns</Link>
          <Link to="/who-we-are" className={`block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-black hover:bg-gray-700"}`}>About</Link>

          {/* Donor links mobile */}
          <div>
            <p className={`px-3 py-2 text-base font-semibold ${isScrolled ? "text-black" : "text-black"}`}>
              Donor
            </p>

          </div>

          {/* Contact in mobile */}
          <p className={`px-3 py-2 text-base font-semibold ${isScrolled ? "text-black" : "text-black"}`}>Contact</p>
          <Link to="/contact-hero" className="block px-5 py-2 text-sm text-black hover:bg-gray-100">Contact Hero</Link>
          <Link to="/contact-form" className="block px-5 py-2 text-sm text-black hover:bg-gray-100">Contact Form</Link>
          <Link to="/map" className="block px-5 py-2 text-sm text-black hover:bg-gray-100">Map</Link>

          <Link to="/login" className={`block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-black hover:bg-gray-700"}`}>Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
