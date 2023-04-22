import { Link, useLocation } from 'react-router-dom';

function SearchList({ searchMovies }) {
  const location = useLocation();

  return (
    <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
      {searchMovies.map((movie, index) => (
        <li key={movie.id} style={{ marginBottom: '20px' }}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <span style={{ marginRight: '10px' }}>{index + 1}.</span>
            <span>{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
