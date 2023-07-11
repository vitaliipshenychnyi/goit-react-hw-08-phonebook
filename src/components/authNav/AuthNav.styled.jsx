import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  &.active {
    color: orange;
  }
`;
