import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: ${p =>
    p.isRed
      ? p.theme.colors.redButtonBackgroundDefault
      : p.theme.colors.buttonBackgroundDefault};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  width: ${p => (p.isFullWith ? '100%' : 'auto')};
  box-sizing: border-box;

  &:active,
  &:hover,
  &:focus {
    background-color: ${p =>
      p.isRed
        ? p.theme.colors.redButtonBackgroundHover
        : p.theme.colors.buttonBackgroundHover};
  }
`;
