import { ContactList, Filter } from 'components/ContactsPage';
import { Container, MainTitle, Section, SubTitle } from 'components/Common';
import { useState } from 'react';
import Modal from 'components/Common/Modal/Modal';
import Button from 'components/Common/Button/Button';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <Section>
        <MainTitle title="Contacts" isHidden />
        <Button buttonText="Open Contact Form" onClick={toggleModal} />
        <SubTitle title="Your Contacts" />
        <Filter />
        <ContactList />
      </Section>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </Container>
  );
};

export default ContactsPage;
