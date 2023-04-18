import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieDetailsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin-top: 20px;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover,
    &.active {
      background-color: #0074d9;
      color: #fff;
    }
  }
`;
