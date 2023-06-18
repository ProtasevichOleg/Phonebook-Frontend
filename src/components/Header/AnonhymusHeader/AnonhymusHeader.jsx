import { NavLink } from 'react-router-dom';

import { Navigation } from 'components/Header';
import { AuthorizationWrapper } from './AnonhymusHeader.styled';

const AnonhymusHeader = () => (
  <>
    <Navigation>
      <NavLink to="/">Home</NavLink>
    </Navigation>
    <AuthorizationWrapper>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </AuthorizationWrapper>
  </>
);

export default AnonhymusHeader;
