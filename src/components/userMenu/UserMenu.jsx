import { useAuth } from 'components/hooks/useAurh';
import { WrapperUserMenu, Text, Button } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <WrapperUserMenu>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </WrapperUserMenu>
  );
};

export default UserMenu;
