import styled, { css } from 'styled-components';

export const Message = styled.p`
  user-select: none;
  font-family: 'Poppins', sans-serif;
  ${({ type }) => {
    switch (type) {
      case 'error':
        return css`
          color: red;
        `;
      case 'warning':
        return css`
          color: orange;
        `;
      case 'success':
        return css`
          color: green;
        `;
      default:
        return css`
          color: black;
        `;
    }
  }}
`;
