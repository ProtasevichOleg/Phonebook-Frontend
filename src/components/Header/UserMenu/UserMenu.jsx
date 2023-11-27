import { logOut } from 'redux/authorization';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenuStyled, Avatar, UserName } from './UserMenu.styled';
import Button from 'components/Common/Button/Button';

const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const { name, avatarURL } = user;
  const dispatch = useDispatch();
  const onLogoutBtnClick = () => dispatch(logOut());
  return (
    <UserMenuStyled>
      <Avatar src={avatarURL} alt="Avatar" />
      <UserName>{name}</UserName>
      <Button onClick={onLogoutBtnClick} buttonText={'Log out'} isRed="isRed" />
    </UserMenuStyled>
  );
};

export default UserMenu;
