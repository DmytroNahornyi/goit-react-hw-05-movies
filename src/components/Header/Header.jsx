import { StyledLink, StyledNav, WrapHeader } from './Header.styled';

export const Header = () => {
  return (
    <WrapHeader>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    </WrapHeader>
  );
};
