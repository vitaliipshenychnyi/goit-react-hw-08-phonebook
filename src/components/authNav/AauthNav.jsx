import { StyledLink, Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Log In</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};
