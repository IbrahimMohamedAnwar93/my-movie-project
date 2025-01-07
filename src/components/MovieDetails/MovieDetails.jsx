import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to Favorites!");
    } else {
      alert("Movie already in Favorites!");
    }
  };

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Plot}</p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default MovieDetails;
