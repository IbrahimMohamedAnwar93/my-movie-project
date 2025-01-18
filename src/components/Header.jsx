import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="logo">Popcorn Picks</h1>
            <p className="tagline">Discover every movie</p>
          </div>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
          </nav>

          <div className="search-box">
            <input type="text" placeholder="Search for movies..." />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
