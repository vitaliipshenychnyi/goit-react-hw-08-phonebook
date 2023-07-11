import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/selectors/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
