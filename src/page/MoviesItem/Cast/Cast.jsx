import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCast } from 'components/api/fetch';
import Loader from 'components/Loader/Loader';
import { List } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);

  const idMovies = useParams();

  useEffect(() => {
    fetchMoviesCast(idMovies.id).then(fetchCast => setCast(fetchCast.cast));
  }, [idMovies.id]);

  const notPhoto =
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png';

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <List>
          {cast.map(person => {
            return (
              <li key={person.id}>
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : notPhoto
                  }
                  alt={`${person.name}`}
                />
                <div>
                  <p>{person.name}</p>
                  <p>Character: {person.character}</p>
                </div>
              </li>
            );
          })}
        </List>
      </div>
    </Suspense>
  );
}

export default Cast;
