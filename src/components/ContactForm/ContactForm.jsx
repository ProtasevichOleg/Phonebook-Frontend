import { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from 'redux/contacts';
import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  MessageContainer,
  Input,
  Span,
  SubmitButton,
} from './ContactForm.styled';
import {
  nameValidationMessage,
  numberValidationMessage,
} from 'assets/validationMessages';
import InputMessage from 'components/InputMessage';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [nameFieldNotification, setNameFieldNotification] = useState(null);
  const [numberFieldNotification, setNumberFieldNotification] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = useRef(nanoid());
  const numberInputId = useRef(nanoid());

  const validatePhoneNumber = phoneNumber => {
    const phoneNumberRegex = new RegExp('^\\+?[0-9\\s\\-\\(\\)]+$');
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleBlur = useMemo(
    () => (fieldName, fieldValue, setNotification) => {
      const trimmedValue = fieldValue.trim();

      if (trimmedValue === '') {
        setNotification({
          type: 'warning',
          message: `${fieldName} field can't be empty.`,
        });
        return;
      }

      if (fieldName === 'Number' && !validatePhoneNumber(trimmedValue)) {
        setNotification({
          type: 'error',
          message: `Phone number is not valid.`,
        });
        return;
      }

      const isExist = contacts.find(
        contact => contact[fieldName.toLowerCase()] === trimmedValue
      );

      if (isExist) {
        setNotification({
          type: 'error',
          message: `${fieldName} "${trimmedValue}" is already exists.`,
        });
      } else {
        setNotification({
          type: 'success',
          message: `${fieldName} "${trimmedValue}" is available.`,
        });
      }
    },
    [contacts]
  );

  const handleNameBlur = () =>
    handleBlur('Name', name, setNameFieldNotification);

  const handleNumberBlur = () =>
    handleBlur('Number', number, setNumberFieldNotification);

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

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={handleNameBlur}
          title={nameValidationMessage}
          id={nameInputId.current}
          error={nameFieldNotification?.type === 'error'}
          warning={nameFieldNotification?.type === 'warning'}
          success={nameFieldNotification?.type === 'success'}
          required
        />
      </Label>

      <MessageContainer>
        {nameFieldNotification && (
          <InputMessage
            type={nameFieldNotification.type}
            message={nameFieldNotification.message}
          />
        )}
      </MessageContainer>

      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          onBlur={handleNumberBlur}
          pattern="\+?[0-9\s\-\(\)]+"
          title={numberValidationMessage}
          id={numberInputId.current}
          error={numberFieldNotification?.type === 'error'}
          warning={numberFieldNotification?.type === 'warning'}
          success={numberFieldNotification?.type === 'success'}
          required
        />
      </Label>

      <MessageContainer>
        {numberFieldNotification && (
          <InputMessage
            type={numberFieldNotification.type}
            message={numberFieldNotification.message}
          />
        )}
      </MessageContainer>

      <SubmitButton
        type="submit"
      >
        Add contact
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;
