import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // لإدارة العنصر الحالي المعروض

  const ITEMS_PER_PAGE = 5; // عدد العناصر التي سيتم عرضها في نفس الوقت

  const API_KEY = "d61cf08d6951da6f3d2850795fa49452";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch movies.");
        }
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < filteredMovies.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_PAGE);
    }
  };

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movies.length) return <p>No movies available.</p>;

  return (
    <div className="home">
      <h1>Popular Movies</h1>

      <div className="carousel">
        <button className="arrow left" onClick={handlePrev} disabled={currentIndex === 0}>
          &lt;
        </button>

        <div className="movies-grid">
          {filteredMovies
            .slice(currentIndex, currentIndex + ITEMS_PER_PAGE)
            .map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h3>{movie.title}</h3>
                  <p>Rating: {movie.vote_average}</p>
                </Link>
              </div>
            ))}
        </div>

        <button
          className="arrow right"
          onClick={handleNext}
          disabled={currentIndex + ITEMS_PER_PAGE >= filteredMovies.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
