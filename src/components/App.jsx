import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Layout from 'components/Layout';
import { MainTitle, SubTitle } from './Titles';

const App = () => (
  <Layout>
    <MainTitle title="Phonebook" />
    <ContactForm />
    <SubTitle title="Contacts" />
    <Filter />
    <ContactList />
  </Layout>
);

export default App;
