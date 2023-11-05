import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.p`
  //
`;

export const LogoutButton = styled.button`
  padding: 5px 15px;
  font-size: 0.875rem;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    outline: none;
    background-color: #c82333;
  }
`;
