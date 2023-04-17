import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import movieAPI from '../../components/Services/MovieAPI';
import FilmDetails from '../../components/FilmDetails/FilmDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await movieAPI.fetchMovieDetails(movieId);
      setMovie(data);
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <h2>Loading...</h2>;
  if (movie?.status_code === 34) return <h2>Movie not found</h2>;

  return (
    <div>
      <FilmDetails movie={movie} />
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>{movie.overview}</p>
      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet>
        <div>
          <Cast movieId={movieId} />
        </div>
        <div>
          <Reviews movieId={movieId} />
        </div>
      </Outlet>
    </div>
  );
};

export default MovieDetails;
