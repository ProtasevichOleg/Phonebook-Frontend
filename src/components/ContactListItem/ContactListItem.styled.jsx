import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.itemBorder};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ContactInfoList = styled.ul`
  max-width: 400px;
  overflow: hidden;
`;

export const ContactInfoItem = styled.li`
  &.name {
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBackgroundDefault};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
`;
