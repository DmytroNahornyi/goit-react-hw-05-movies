import { Link, useLocation } from 'react-router-dom';

function HomeList({ trendings }) {
  const location = useLocation();

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
      }}
    >
      {trendings.map((trending, index) => (
        <li key={trending.id} style={{ marginBottom: '20px' }}>
          <Link to={`movies/${trending.id}`} state={{ from: location }}>
            <span style={{ marginRight: '10px' }}>{index + 1}.</span>
            <span style={{ fontSize: '20px' }}>{trending.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomeList;
