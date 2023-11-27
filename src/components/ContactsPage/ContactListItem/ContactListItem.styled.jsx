import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.itemBorder};
  border-radius: 5px;
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
