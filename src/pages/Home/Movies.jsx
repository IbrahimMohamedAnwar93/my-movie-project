import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const API_KEY = "9c8bdf53b569bd392d33a38db8e6cab6";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
