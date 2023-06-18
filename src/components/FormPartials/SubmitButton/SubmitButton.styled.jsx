import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBackgroundDefault};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
`;
