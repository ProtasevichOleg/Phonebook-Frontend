import { NavLink } from 'react-router-dom';
import { UserMenu, Navigation } from 'components/Header';

const UserHeader = () => {
  return (
    <>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Navigation>
      <UserMenu />
    </>
  );
};

export default UserHeader;
