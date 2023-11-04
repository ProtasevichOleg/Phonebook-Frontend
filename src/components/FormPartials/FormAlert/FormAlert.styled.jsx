import styled, { css } from 'styled-components';

export const AlertWrapper = styled.div`
  min-height: 25px;
`;

export const Message = styled.p`
  font-size: 16px;
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
