import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { fetchMoviesId } from 'components/api/fetch';
import { BackLinkStyle } from 'components/BackLink/BackLink.styled';
import { MovieInformation } from 'components/MovieInformation/MovieInformation';
import {
  BackLinkWrap,
  WrapDescr,
  WrapImg,
  WrapSection,
} from './MoviesItem.styled';

function MoviesItem() {
  const [movies, setMovies] = useState({});

  const idMovie = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    if (movies.length) return;
    fetchMoviesId(idMovie.id).then(movies => {
      setMovies(movies);
    });
  }, [idMovie.id, movies.length]);

  return (
    <>
      {Object.keys(movies).length !== 0 && (
        <>
          <BackLinkWrap>
            <BackLinkStyle
              onClick={() => {
                navigate(backLinkHref.current);
              }}
            >
              Go back
            </BackLinkStyle>
          </BackLinkWrap>
          <WrapSection>
            <WrapImg>
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt=""
              />
              <div>
                <WrapDescr>
                  <h2>{movies.title}</h2>
                  <p>User Schore: {(movies.vote_average * 10).toFixed()}%</p>
                </WrapDescr>
                <WrapDescr>
                  <strong>Overview</strong>
                  <p>{movies.overview}</p>
                </WrapDescr>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <WrapDescr>
                    <strong>Genres</strong>
                    <p>{movies.genres.map(genre => genre.name).join(', ')}</p>
                  </WrapDescr>
                </div>
                <MovieInformation />
              </div>
            </WrapImg>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </WrapSection>
        </>
      )}
    </>
  );
}

export default MoviesItem;
