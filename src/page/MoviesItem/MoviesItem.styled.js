import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapSection = styled.section`
  border-radius: 1em;

  width: 1250px;
  padding: 15px 15px;
  margin: 0 auto;

  background-color: #fff;
  box-shadow: rgb(150, 150, 150) 2px 2px 10px;

  & img {
    width: 300px;
    border-radius: 0.5em;
  }
`;

export const WrapImg = styled.section`
  display: flex;
  gap: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const WrapDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  & h2 {
    margin-bottom: 8px;
  }

  & strong {
    margin-bottom: 8px;
  }
`;

//!======================

export const Information = styled.div`
  margin-top: 40px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const InformationLink = styled(Link)`
  padding: 5px 10px;
  border-radius: 0.5em;

  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;
//!======================
export const InformationList = styled.ul`
  list-style: none;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 20px;
`;

export const BackLinkWrap = styled.div`
  width: 1280px;
  margin: 0 auto 20px;
`;

export const BackLinkStyle = styled.button`
  padding: 7px 15px;
  border-radius: 0.5em;

  display: flex;
  width: max-content;
  border: none;

  font-size: 18px;
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;
