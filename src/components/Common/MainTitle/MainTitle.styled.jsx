import styled from 'styled-components';

export const StyledMainTitle = styled.h1`
  display: ${p => (p.isHidden ? 'none' : 'block')};
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;
