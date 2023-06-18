// RegisterPage.jsx
import {
  Container,
  MainTitle,
  Section,
  WelcomeMessage,
} from 'components/Common';
import { RegisterForm } from 'components/FormPartials';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <MainTitle title="Register new user" />
        <RegisterForm />
        <WelcomeMessage type={'register'} />
      </Container>
    </Section>
  );
};

export default RegisterPage;
