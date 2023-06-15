import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.layoutBackground};
  color: ${props => props.theme.colors.layoutText};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 14px;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
  min-width: 320px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: ${props => props.theme.colors.layoutBackground};
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.layoutText};
`;
