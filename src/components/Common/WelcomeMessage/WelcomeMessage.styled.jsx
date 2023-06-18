import styled from 'styled-components';

export const WellcomeMessageStyled = styled.p`
  display: flex;
  flex-direction: column;
  color: #2e2d2dbc;
  text-align: center;
  font-size: 16px;
  height: 40px;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.mainTextAccent};
  }
`;
