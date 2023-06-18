import styled from 'styled-components';

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.label};
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid
    ${({ theme, validationStatus }) => {
      const type = validationStatus?.type;
      switch (type) {
        case 'error':
          return 'red';
        case 'warning':
          return 'orange';
        case 'success':
          return 'green';
        default:
          return theme.colors.inputBorder;
      }
    }};
  width: 100%;
  box-sizing: border-box;
`;
