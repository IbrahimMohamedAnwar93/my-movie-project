import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [cartoons, setCartoons] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(5); // Start by displaying 5 items

  const API_KEY = "9c8bdf53b569bd392d33a38db8e6cab6";

  const API_URL_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const API_URL_TV = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  const API_URL_CARTOONS = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`;
  const API_URL_DOCUMENTARIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          moviesResponse,
          tvResponse,
          cartoonsResponse,
          documentariesResponse,
        ] = await Promise.all([
          fetch(API_URL_MOVIES),
          fetch(API_URL_TV),
          fetch(API_URL_CARTOONS),
          fetch(API_URL_DOCUMENTARIES),
        ]);

        const moviesData = await moviesResponse.json();
        const tvData = await tvResponse.json();
        const cartoonsData = await cartoonsResponse.json();
        const documentariesData = await documentariesResponse.json();

        setMovies(moviesData.results);
        setTvShows(tvData.results);
        setCartoons(cartoonsData.results);
        setDocumentaries(documentariesData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = useCallback(() => {
    if (displayCount < movies.length) {
      setDisplayCount((prevCount) => prevCount + 5); // Show 5 more items
    }
  }, [displayCount, movies.length]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home">
      <h1>Popular Content</h1>

      <div className="section">
        <h2>Movies</h2>
        <div className="content-grid" onScroll={loadMore}>
          {movies.slice(0, displayCount).map((movie) => (
            <div key={movie.id} className="content-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>TV Shows</h2>
        <div className="content-grid" onScroll={loadMore}>
          {tvShows.slice(0, displayCount).map((show) => (
            <div key={show.id} className="content-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
              <h3>{show.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Cartoons</h2>
        <div className="content-grid" onScroll={loadMore}>
          {cartoons.slice(0, displayCount).map((cartoon) => (
            <div key={cartoon.id} className="content-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${cartoon.poster_path}`}
                alt={cartoon.name}
              />
              <h3>{cartoon.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Documentaries</h2>
        <div className="content-grid" onScroll={loadMore}>
          {documentaries.slice(0, displayCount).map((documentary) => (
            <div key={documentary.id} className="content-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${documentary.poster_path}`}
                alt={documentary.title}
              />
              <h3>{documentary.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
