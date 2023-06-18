import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.colors.layoutBackground};
  color: ${props => props.theme.colors.layoutText};

  a {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.layoutText};

    &:hover {
      color: ${props => props.theme.colors.layoutTextActive};
    }

    &.active {
      color: ${props => props.theme.colors.layoutTextActive};

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.layoutTextActive};
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 100%;
`;

export const Main = styled.main`
  padding-top: 70px;
  flex-grow: 1;
`;

export const Footer = styled.footer`
  background-color: ${props => props.theme.colors.layoutBackground};
`;

export const FooterContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.layoutText};
`;
