import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Series.css";

const API_KEY = "d61cf08d6951da6f3d2850795fa49452";

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
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
    <div className="series">
      <h2>Popular Series</h2>
      <div className="series-list">
        {series.map((show) => (
          <div key={show.id} className="series-item">
            <Link to={`/series/${show.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="series-poster"
              />
              <h3>{show.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;
