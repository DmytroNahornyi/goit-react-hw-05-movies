import { useEffect, useState } from 'react';

import { fetchTrending } from 'components/api/fetch';
import HomeList from 'components/HomeList/HomeList';
import { WrapHomeStyle } from './Home.styled';

function Home() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetchTrending().then(trendings => {
      setTrendings(trendings);
    });
  }, []);

  return (
    <WrapHomeStyle>
      <h1>Top Movies Today</h1>
      <ul>{trendings.length > 0 && <HomeList trendings={trendings} />}</ul>
    </WrapHomeStyle>
  );
}

export default Home;
