import React, { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import movieAPI from '../../components/Services/MovieAPI';
import FilmDetails from '../../components/FilmDetails/FilmDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import {
  MovieDetailsContainer,
  MovieDetailsContent,
  Navigation,
} from './MovieDetails.styled';


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
    <MovieDetailsContainer>
      <FilmDetails movie={movie} />
      <MovieDetailsContent>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p>{movie.overview}</p>
        <Navigation>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </Navigation>
        <Outlet>
          <Cast movieId={movieId} />
        </Outlet>
      </MovieDetailsContent>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
