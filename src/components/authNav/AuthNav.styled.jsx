import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #edf3fb;
  ul {
    display: flex;
    font-size: 0;
    align-items: center;
    gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  &.active {
    color: orange;
  }
`;
