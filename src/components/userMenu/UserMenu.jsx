import { useAuth } from 'components/hooks/useAurh';
import { WrapperUserMenu, Text, Button } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <WrapperUserMenu>
      <Text>Welcome, {user.name}</Text>
      <Button type="button">Logout</Button>
    </WrapperUserMenu>
  );
};

export default UserMenu;
