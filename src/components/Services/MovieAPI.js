import axios from 'axios';

const API_KEY = '7d23f984db6827219fae104a9cbe345d';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieAPI = {
  fetchMovies(page = 1) {
    return axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
      .then(response => response.data)
      .catch(error => {
        console.log('Error fetching movies:', error);
        return Promise.reject(error);
      });
  },

  searchMovies(query, page = 1) {
    return axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      )
      .then(response => response.data)
      .catch(error => {
        console.log('Error searching movies:', error);
        return Promise.reject(error);
      });
  },

  fetchMovieDetails(movieId) {
    return axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.log('Error fetching movie details:', error);
        return Promise.reject(error);
      });
  },

  fetchMovieCast(movieId) {
    return axios
      .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.log('Error fetching movie cast:', error);
        return Promise.reject(error);
      });
  },

  fetchMovieReviews(movieId) {
    return axios
      .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.log('Error fetching movie reviews:', error);
        return Promise.reject(error);
      });
  },

  getTrendingMovies(page = 1) {
    return axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
      .then(response => response.data)
      .catch(error => {
        console.log('Error fetching trending movies:', error);
        return Promise.reject(error);
      });
  },
};

export default movieAPI;