import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: #20232a;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* width: 100%; */
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

// export const Logo = styled.h1`
//   font-size: 20px;
//   color: #fff;
// `;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-left: 20px;

  /* добавляем стили для текущей страницы */
  &.active {
    a {
      color: #00BFFF;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
