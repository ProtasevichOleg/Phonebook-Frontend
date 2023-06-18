import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo: address }) => {
  const { isLoggedIn, isRefreshing } = useSelector(state => state.auth);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={address} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};