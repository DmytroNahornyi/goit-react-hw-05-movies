import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import MovieAPI from '../../components/Services/MovieAPI';
import FilmList from '../../components/FilmList/FilmList';
import {
  Container,
  Form,
  Input,
  Button,
  Loading,
  Error,
  GoBackButton,
  Title,
  Wrapper, // добавлен экспорт компонента Wrapper
} from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    setSearchQuery(query);
    if (query) {
      setLoading(true);
      MovieAPI.searchMovies(query)
        .then(({ results }) => setMovies(results))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [location.search]);

const handleSearchFormSubmit = async event => {
  event.preventDefault();
  try {
    setLoading(true);
    const { results } = await MovieAPI.searchMovies(searchQuery);
    setMovies(results);
    // перенаправляем пользователя на новую страницу с поисковым запросом
    setTimeout(() => {
      window.location.replace(`/movies?query=${searchQuery}`);
    }, 1000);
  } catch (error) {
    console.error(error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  async function handlePopstate(event) {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query') || '';
    setSearchQuery(query);
    if (query) {
      setLoading(true);
      try {
        const { results } = await MovieAPI.searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setMovies([]);
    }
  }
  window.addEventListener('popstate', handlePopstate);
  return () => window.removeEventListener('popstate', handlePopstate);
}, []);



  const handleGoBackClick = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Wrapper>
      <Title>Search Movies</Title>
      <Container>
        <Form onSubmit={handleSearchFormSubmit}>
          <Input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          <Button type="submit">Search</Button>
        </Form>
        {loading && <Loading>Loading...</Loading>}
        {error && <Error>{error}</Error>}
        {movies.length > 0 && <FilmList movies={movies} />}
        <GoBackButton onClick={handleGoBackClick}>Go back</GoBackButton>
      </Container>
    </Wrapper>
  );
};

export default Movies;
