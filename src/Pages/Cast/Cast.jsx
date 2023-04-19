import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import movieAPI from '../../components/Services/MovieAPI';

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      console.log('No movieId provided');
      return;
    }

    const fetchMovieCast = async () => {
      try {
        const { cast } = await movieAPI.fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (!movieId) {
    return <p>No movieId provided</p>;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://via.placeholder.com/200x300?text=No+photo'
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
