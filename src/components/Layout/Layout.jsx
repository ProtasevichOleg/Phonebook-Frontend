import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Spinner, Container } from 'components/Common';
import { AnonhymusHeader, UserHeader } from 'components/Header';
import { LayoutWrapper, Header, HeaderContent } from './Layout.styled';
import { Main, Footer, FooterContent, Copyright } from './Layout.styled';

const Layout = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <LayoutWrapper>
      <Header>
        <Container>
          <HeaderContent>
            {!isLoggedIn && <AnonhymusHeader />}
            {isLoggedIn && <UserHeader />}
          </HeaderContent>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <Container>
          <FooterContent>
            <Copyright>© Developed by Oleh Protasevych 2023</Copyright>
          </FooterContent>
        </Container>
      </Footer>
    </LayoutWrapper>
  );
};
export default Layout;
