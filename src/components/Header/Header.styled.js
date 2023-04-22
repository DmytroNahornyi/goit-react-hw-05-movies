import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapHeader = styled.header`
  background-color: #333;
  padding: 1rem 2rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    color: #f00;
    text-decoration: underline;
  }
`;
