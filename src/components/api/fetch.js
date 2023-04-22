import axios from 'axios';

const API_KEY = '?api_key=7d23f984db6827219fae104a9cbe345d';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrending() {
  const trending = await axios.get(`${BASE_URL}/trending/movie/day${API_KEY}`);

  if (trending.status === 200) {
    return trending.data.results;
  }
}

export async function fetchMoviesId(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMovieReviews(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}/reviews${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMoviesCast(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}/credits${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMoviesSearch(query) {
  const trending = await axios.get(
    `${BASE_URL}/search/movie${API_KEY}&query=${query}`
  );

  if (trending.status === 200) {
    return trending.data;
  }
}
