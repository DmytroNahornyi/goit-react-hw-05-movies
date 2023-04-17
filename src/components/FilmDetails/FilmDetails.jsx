import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmDetailsContainer, Button } from './FilmDetails.styled';

const FilmDetails = ({ movie }) => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <FilmDetailsContainer>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Button onClick={handleGoBackClick}>Go back</Button>
    </FilmDetailsContainer>
  );
};

export default FilmDetails;
