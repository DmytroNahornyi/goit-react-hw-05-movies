import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import movieAPI from '../../components/Services/MovieAPI';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await movieAPI.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
