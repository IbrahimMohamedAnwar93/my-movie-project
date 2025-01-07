import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesPage.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "9csbdf53b569bd392d33a38db8e6cab6";

  const fetchMovies = async (query = "marvel") => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    );
    const data = await response.json();
    if (data.results) {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies-page">
      <h2>Movies</h2>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
