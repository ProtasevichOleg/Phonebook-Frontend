import { logOut } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenuStyled } from './UserMenu.styled';

const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const onLogoutBtnClick = () => dispatch(logOut());
  return (
    <UserMenuStyled>
      <p>{email}</p>
      <button type="button" onClick={onLogoutBtnClick}>
        Log out
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;
