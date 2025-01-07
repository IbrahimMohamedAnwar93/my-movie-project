import React from "react";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((movie) => (
          <div key={movie.id} className="favorite-movie">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
