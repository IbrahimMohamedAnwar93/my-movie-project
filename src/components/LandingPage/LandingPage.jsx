import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showSearch && (
        <div className="search-modal">Search functionality coming soon...</div>
      )}
      <div className="landing-page">
        <nav className="nav-menu">
          <ul>
            <li className="nav-item">
              <FaSearch
                className="search-icon"
                onClick={() => setShowSearch(!showSearch)}
              />
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <h1>Popcorn Picks</h1>
        </div>

        <div className="cta">
          <h2>Explore the best movies of all time</h2>
          <button className="cta-button">
            <Link
              to="/movies"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Watch Now
            </Link>
          </button>
        </div>

        <div
          className="background-image"
          style={{
            backgroundImage: "url('../../assets/Images/Background.jpeg')",
          }}
        />
      </div>
    </>
  );
};

export default LandingPage;
