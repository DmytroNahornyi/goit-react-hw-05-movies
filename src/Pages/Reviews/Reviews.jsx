import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieAPI from '../../components/Services/MovieAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await MovieAPI.fetchMovieReviews(movieId);
      setReviews(response.results);
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </>
  );
};

export default Reviews;
