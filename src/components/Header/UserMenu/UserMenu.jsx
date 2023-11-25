import { logOut } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserMenuStyled,
  Avatar,
  UserName,
  LogoutButton,
} from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  console.log(user);
  const { name, avatarURL } = user;
  const dispatch = useDispatch();
  const onLogoutBtnClick = () => dispatch(logOut());
  return (
    <UserMenuStyled>
      <Avatar src={avatarURL} alt="Avatar" />
      <UserName>{name}</UserName>
      <LogoutButton type="button" onClick={onLogoutBtnClick}>
        Log out
      </LogoutButton>
    </UserMenuStyled>
  );
};

export default UserMenu;
