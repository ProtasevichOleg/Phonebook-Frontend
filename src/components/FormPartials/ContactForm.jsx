import { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact, selectContacts } from 'redux/contacts';
import {
  isFieldEmpty,
  isContactExist,
  isPhoneNumberValid,
} from 'utils';
import {
  nameValidationMessage,
  phoneValidationMessage,
} from 'assets';
import { Form, Label, FormAlert, SubmitButton } from 'components/FormPartials';

const ContactForm = () => {
  const [nameFieldNotification, setNameFieldNotification] = useState(null);
  const [phoneFieldNotification, setPhoneFieldNotification] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = useRef(nanoid());
  const phoneInputId = useRef(nanoid());

  const handleContactsFieldBlur = useMemo(
    () => (fieldName, fieldValue, setAlert) => {
      if (isFieldEmpty(fieldName, fieldValue, setAlert)) return;
      if (
        fieldName === 'Phone number' &&
        !isPhoneNumberValid(fieldValue, setAlert)
      )
        return;
      if (isContactExist(contacts, fieldName, fieldValue, setAlert)) return;
      setAlert({
        type: 'success',
        message: `${fieldName} "${fieldValue.trim()}" is available.`,
      });
    },
    [contacts]
  );

  const handleNameBlur = () =>
    handleContactsFieldBlur('Name', name, setNameFieldNotification);

  const handlePhoneBlur = () =>
    handleContactsFieldBlur('Phone number', phone, setPhoneFieldNotification);

  const handleSubmit = event => {
    event.preventDefault();

    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isPhoneExist = contacts.find(contact => contact.phone === phone);

    if (isNameExist || isPhoneExist) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };

    dispatch(addContact(contact));
    setName('');
    setPhone('');
    setNameFieldNotification(null);
    setPhoneFieldNotification(null);
  };

  const handleNameInputChange = event => setName(event.target.value);
  const handlePhoneInputChange = event => setPhone(event.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Label
        labelTitle="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleNameInputChange}
        onBlur={handleNameBlur}
        validationStatus={nameFieldNotification}
        id={nameInputId.current}
        title={nameValidationMessage}
      />
      <FormAlert fieldAlert={nameFieldNotification} />
      <Label
        labelTitle="Phone"
        type="tel"
        name="phone"
        value={phone}
        onChange={handlePhoneInputChange}
        onBlur={handlePhoneBlur}
        validationStatus={phoneFieldNotification}
        id={phoneInputId.current}
        title={phoneValidationMessage}
      />
      <FormAlert fieldAlert={phoneFieldNotification} />
      />
      <SubmitButton buttonText="Add contact" />
    </Form>
  );
};

export default ContactForm;
