import { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact, selectContacts } from 'redux/contacts';
import { isFieldEmpty, isContactExist, isPhoneNumberValid } from 'utils';
import { nameValidationMessage, numberValidationMessage } from 'assets';
import { Form, Label, FormAlert, SubmitButton } from 'components/FormPartials';

const ContactForm = () => {
  const [nameFieldNotification, setNameFieldNotification] = useState(null);
  const [numberFieldNotification, setNumberFieldNotification] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = useRef(nanoid());
  const numberInputId = useRef(nanoid());

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

  const handleNumberBlur = () =>
    handleContactsFieldBlur('Phone number', number, setNumberFieldNotification);

  const handleSubmit = event => {
    event.preventDefault();

    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumberExist = contacts.find(contact => contact.number === number);

    if (isNameExist || isNumberExist) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
    setNameFieldNotification(null);
    setNumberFieldNotification(null);
  };

  const handleNameInputChange = event => setName(event.target.value);
  const handleNumberInputChange = event => setNumber(event.target.value);

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
        labelTitle="Number"
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberInputChange}
        onBlur={handleNumberBlur}
        validationStatus={numberFieldNotification}
        id={numberInputId.current}
        title={numberValidationMessage}
      />
      <FormAlert fieldAlert={numberFieldNotification} />
      <SubmitButton buttonText="Add contact" />
    </Form>
  );
};

export default ContactForm;
