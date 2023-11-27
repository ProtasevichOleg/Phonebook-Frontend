import { useState, useRef, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact, selectContacts } from 'redux/contacts';
import {
  isFieldEmpty,
  isContactExist,
  isContactNameValid,
  isPhoneNumberValid,
  isEmailValid,
} from 'utils';
import {
  nameValidationMessage,
  phoneValidationMessage,
  emailValidationMessage,
} from 'assets';
import { Form, Label, FormAlert } from 'components/FormPartials';
import { countries } from 'utils/countries';
import Button from 'components/Common/Button/Button';

const ContactForm = () => {
  const [nameFieldNotification, setNameFieldNotification] = useState(null);
  const [phoneFieldNotification, setPhoneFieldNotification] = useState(null);
  const [emailFieldNotification, setEmailFieldNotification] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const contacts = useSelector(selectContacts);
  const nameInputId = useRef(nanoid());
  const phoneInputId = useRef(nanoid());
  const emailInputId = useRef(nanoid());
  const countrySelectorRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[235]);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const selectOption = country => {
    setSelectedCountry(country);
    setIsActive(false);
    setCountrySearchQuery('');
  };

  const searchCountry = event => {
    setCountrySearchQuery(event.target.value.toLowerCase());
  };

  const handleTogglerMousedown = event => {
    setIsActive(!isActive);
  };

  const handleTogglerFocus = () => {
    setIsActive(true);
  };

  const handleInputFocus = () => setIsActive(false);

  const handleClickOutside = event => {
    if (
      countrySelectorRef.current &&
      !countrySelectorRef.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCountries = countrySearchQuery
    ? countries.filter(country => {
        return country.name.toLowerCase().includes(countrySearchQuery);
      })
    : countries;

  const handleContactsFieldBlur = useMemo(
    () => (fieldName, fieldValue, setAlert) => {
      if (isFieldEmpty(fieldName, fieldValue, setAlert)) return;
      if (fieldName === 'Name' && !isContactNameValid(fieldValue, setAlert))
        return;
      if (fieldName === 'Phone' && !isPhoneNumberValid(fieldValue, setAlert))
        return;
      if (fieldName === 'Email' && !isEmailValid(fieldValue, setAlert)) return;
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
    handleContactsFieldBlur('Phone', phone, setPhoneFieldNotification);

  const handleEmailBlur = () =>
    handleContactsFieldBlur('Email', email, setEmailFieldNotification);

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
      name: name,
      phone: `+${selectedCountry.phone}${phone}`,
      email: email,
    };

    dispatch(addContact(contact));
    setName('');
    setPhone('');
    setEmail('');
    setNameFieldNotification(null);
    setPhoneFieldNotification(null);
    setEmailFieldNotification(null);
  };

  const handleNameInputChange = evt => setName(evt.target.value);
  const handlePhoneInputChange = evt => {
    const filteredValue = evt.target.value.replace(/\D/g, '');
    setPhone(filteredValue);
  };
  const handleEmailInputChange = evt => setEmail(evt.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Label
        id={nameInputId.current}
        labelTitle="Name"
        type="text"
        name="name"
        value={name}
        onFocus={handleInputFocus}
        onChange={handleNameInputChange}
        onBlur={handleNameBlur}
        title={nameValidationMessage}
        validationStatus={nameFieldNotification}
        maxLength={100}
      />
      <FormAlert fieldAlert={nameFieldNotification} />
      <Label
        id={phoneInputId.current}
        labelTitle="Phone"
        type="tel"
        name="phone"
        value={phone}
        onFocus={handleInputFocus}
        onChange={handlePhoneInputChange}
        onBlur={handlePhoneBlur}
        title={phoneValidationMessage}
        validationStatus={phoneFieldNotification}
        maxLength={12}
        handleTogglerMousedown={handleTogglerMousedown}
        handleTogglerFocus={handleTogglerFocus}
        countrySelectorRef={countrySelectorRef}
        selectedCountry={selectedCountry}
        selectOption={selectOption}
        countrySearchQuery={countrySearchQuery}
        isActive={isActive}
        filteredCountries={filteredCountries}
        searchCountry={searchCountry}
        handleFocus={handleTogglerFocus}
      />
      <FormAlert fieldAlert={phoneFieldNotification} />
      <Label
        id={emailInputId.current}
        labelTitle="Email"
        type="email"
        name="email"
        value={email}
        onFocus={handleInputFocus}
        onChange={handleEmailInputChange}
        onBlur={handleEmailBlur}
        title={emailValidationMessage}
        validationStatus={emailFieldNotification}
        maxLength={100}
      />
      <FormAlert fieldAlert={emailFieldNotification} />
      <Button type="submit" buttonText="Add contact" />
    </Form>
  );
};

export default ContactForm;
