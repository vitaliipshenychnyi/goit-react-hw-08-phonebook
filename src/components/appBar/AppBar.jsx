import { Navigation } from 'components/mavigation/Navigation';
import { AuthNav } from 'components/authNav/AauthNav';
import UserMenu from 'components/userMenu/UserMenu';
import { useAuth } from 'components/hooks/useAurh';
import { HeaderWrapper } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderWrapper>
  );
};

export default AppBar;
