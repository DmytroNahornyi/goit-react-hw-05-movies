import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'components/api/fetch';
import { Reviewe, RevieweItem } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const idMovies = useParams();

  useEffect(() => {
    fetchMovieReviews(idMovies.id).then(reviews => {
      setReviews(reviews.results);
    });
  }, [idMovies.id]);

  if (!reviews.length)
    return (
      <Reviewe>
        <h3>We don't have any reviews for this movie.</h3>
      </Reviewe>
    );

  return (
    <Reviewe>
      <ul>
        {reviews.map(review => {
          return (
            <RevieweItem key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </RevieweItem>
          );
        })}
      </ul>
    </Reviewe>
  );
}

export default Reviews;
