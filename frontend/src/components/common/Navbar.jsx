import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = (scrolled) =>
    `px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 ${scrolled ? "text-black hover:text-[#740e2d]" : "text-black hover:text-[#740e2d]"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/40 py-4"
        }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[#740e2d] via-[#821435] to-[#a01b40] p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
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
              <span className="text-3xl font-extrabold text-black">
                Qatar Charity
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={navLinkClasses(isScrolled)}>Home</Link>
            <Link to="/campaign" className={navLinkClasses(isScrolled)}>Campaigns</Link>
            <Link to="/about" className={navLinkClasses(isScrolled)}>About</Link>
            <Link to="/donor" className={navLinkClasses(isScrolled)}>Donor</Link>
            <Link to="/contact" className={navLinkClasses(isScrolled)}>Contact</Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-4 py-1 rounded-md border-2 text-[20px] font-bold transition-colors duration-300 ${isScrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-black hover:bg-gradient-to-r hover:from-[#740e2d] hover:via-[#821435] hover:to-[#a01b40] hover:text-white"
                }`}
            >
              Log in
            </Link>

            <Link
              to="/makedonation"
              className="px-4 py-2.5 bg-gradient-to-r from-[#543D2E] via-[#740e2d] to-[#821435] text-white text-[15px] font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-black rounded-md"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-xl">
          <Link to="/" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">Home</Link>
          <Link to="/campaign" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">Campaigns</Link>
          <Link to="/about" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">About</Link>
          <Link to="/donor" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">Donor</Link>
          <Link to="/contact" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">Contact</Link>
          <Link to="/login" className="block px-3 py-2 text-black rounded-md hover:bg-[#f5e8e8]">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
