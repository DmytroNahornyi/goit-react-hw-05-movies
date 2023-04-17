import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  Navigation,
//   Logo,
  NavList,
  NavItem,
  NavLink,
} from './Header.styles';

const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <Navigation>
        {/* <Logo>Movies</Logo> */}
        <NavList>
          <NavItem className={location.pathname === '/' ? 'active' : ''}>
            <NavLink to="/" >Home</NavLink>
          </NavItem>
          <NavItem className={location.pathname === '/movies' ? 'active' : ''}>
            <NavLink to="/movies">Movies</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
