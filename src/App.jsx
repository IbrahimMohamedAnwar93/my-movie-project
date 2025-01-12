import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Home/Movies";
import Series from "./pages/Home/Series";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
          <Link to="/series" className="nav-link">
            Series
          </Link>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button>
              <i className="search-icon">🔍</i>
            </button>
          </div>
        </nav>
      </header>

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
