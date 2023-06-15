import {
  Container,
  Header,
  Nav,
  Main,
  Footer,
  Copyright,
} from './Layout.styled';
import Spinner from 'components/Spinner';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Spinner />
        <Nav>PHONEBOOK</Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Copyright>© Developed by Oleh Protasevych 2023</Copyright>
      </Footer>
    </Container>
  );
};
export default Layout;
