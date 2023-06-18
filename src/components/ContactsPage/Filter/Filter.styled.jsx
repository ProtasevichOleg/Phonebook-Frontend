import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: ${({ theme }) => theme.colors.label};
`;

export const FilterInput = styled.input`
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  margin-bottom: 20px;
  box-sizing: border-box;
`;
