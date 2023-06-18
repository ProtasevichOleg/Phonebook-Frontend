// LoginPage.jsx
import { Container, MainTitle, Section } from 'components/Common';
import { LoginForm } from 'components/FormPartials';
import { WelcomeMessage } from 'components/Common';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <MainTitle title="Log in" />
        <LoginForm />
        <WelcomeMessage type={'login'} />
      </Container>
    </Section>
  );
};

export default LoginPage;
