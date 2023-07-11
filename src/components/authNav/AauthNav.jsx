import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
    </ul>
  );
};
