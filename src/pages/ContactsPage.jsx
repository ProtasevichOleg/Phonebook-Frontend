// ContactPage.jsx
import { ContactList, Filter } from 'components/ContactsPage';
import { ContactForm } from 'components/FormPartials';
import { Container, MainTitle, Section, SubTitle } from 'components/Common';

const ContactsPage = () => (
  <>
    <Section>
      <Container>
        <MainTitle title="Contacts" />
        <SubTitle title="Add a new one..." />
        <ContactForm />
      </Container>
    </Section>
    <Section>
      <Container>
        <SubTitle title="Your Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </Section>
  </>
);

export default ContactsPage;
