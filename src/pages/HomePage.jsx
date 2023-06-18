// HomePage.jsx
import { useSelector } from 'react-redux';

import { Container, MainTitle, Section } from 'components/Common';
import { WelcomeMessage } from 'components/Common';

const HomePage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Container>
        <MainTitle title="Welcome to PHONEBOOK!" />
        {isLoggedIn && <WelcomeMessage type={'user'} />}
        {!isLoggedIn && <WelcomeMessage type={'anonhymus'} />}
      </Container>
    </Section>
  );
};

export default HomePage;
