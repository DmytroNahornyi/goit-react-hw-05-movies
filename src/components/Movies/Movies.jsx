import React, { useState } from 'react';
import MovieAPI from '../Services/MovieAPI';
import FilmList from '../FilmList/FilmList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = async event => {
    event.preventDefault();
    const { results } = await MovieAPI.searchMovies(searchQuery); // fixed line
    setMovies(results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <FilmList movies={movies} />}
    </div>
  );
};

export default Movies;
