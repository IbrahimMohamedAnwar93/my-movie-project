import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Logo */}
        <Link
          to="/"
          className="text-lg font-bold hover:text-gray-300 transition-colors duration-200"
        >
          Popcorn Picks
        </Link>

        {/* Right Side: Search Icon and Links */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            <FaSearch className="w-5 h-5" />
          </button>
          <nav className="flex space-x-4">
            <Link
              to="/movies"
              className="text-sm hover:text-gray-300 transition-colors duration-200"
            >
              Movies
            </Link>
            <Link
              to="/series"
              className="text-sm hover:text-gray-300 transition-colors duration-200"
            >
              Series
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
