import {
  NAME_CHARACTERS_CHECK_REGEX,
  NAME_EDGE_CHAR_VALIDATION_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
  PASSWORD_REGEX,
} from './constants';

export const isFieldEmpty = (fieldName, fieldValue, setNotification) => {
  const trimmedValue = fieldValue.trim();
  if (trimmedValue === '') {
    setNotification({
      type: 'warning',
      message: `${fieldName} field can't be empty`,
    });
    return true;
  }
  return false;
};

export const isNameValid = (name, setNotification) => {
  if (name.trim().length < 6 || name.trim().length > 30) {
    setNotification({
      type: 'error',
      message: 'Name must be 6-30 characters long',
    });
    return false;
  }

  if (!NAME_CHARACTERS_CHECK_REGEX.test(name.trim())) {
    setNotification({
      type: 'error',
      message:
        'Name can only include letters, numbers, underscores, hyphens, and periods',
    });
    return false;
  }

  if (!NAME_EDGE_CHAR_VALIDATION_REGEX.test(name.trim())) {
    setNotification({
      type: 'error',
      message: 'Name cannot begin or end with a hyphen or a period',
    });
    return false;
  }

  return true;
};

export const isEmailValid = (email, setNotification) => {
  if (!EMAIL_REGEX.test(email.trim())) {
    setNotification({
      type: 'error',
      message: `Email is not valid`,
    });
    return false;
  }

  return true;
};

export const isPhoneNumberValid = (phoneNumber, setNotification) => {
  if (!PHONE_REGEX.test(phoneNumber.trim())) {
    setNotification({
      type: 'error',
      message: `Phone number can only contain numbers, spaces, dashes, and parentheses`,
    });
    return false;
  }

  return true;
};

export const isPasswordValid = (password, setNotification) => {
  if (password.trim().length < 6) {
    setNotification({
      type: 'error',
      message: 'Password must be at least 6 characters long',
    });
    return false;
  }
  if (!PASSWORD_REGEX.test(password.trim())) {
    setNotification({
      type: 'error',
      message: `Password must contain at least one letter, one digit, and can include periods, commas, and hyphens`,
    });
    return false;
  }

  return true;
};

export const isConfirmationMatch = (
  confirmValue,
  password,
  setNotification
) => {
  if (confirmValue !== password) {
    setNotification({
      type: 'error',
      message: `Password confirmation does not match`,
    });
    return false;
  }
  if (password.trim().length < 6) {
    setNotification({
      type: 'error',
      message: 'Password must be at least 6 characters long',
    });
    return false;
  }
  if (!PASSWORD_REGEX.test(password.trim())) {
    setNotification({
      type: 'error',
      message: `Password must contain at least one letter, one digit, and can include periods, commas, and hyphens`,
    });
    return false;
  }

  return true;
};

export const isContactExist = (
  contacts,
  fieldName,
  fieldValue,
  setNotification
) => {
  const isExist = contacts.find(
    contact => contact[fieldName.toLowerCase()] === fieldValue.trim()
  );

  if (isExist) {
    setNotification({
      type: 'error',
      message: `${fieldName} "${fieldValue.trim()}" is already exists`,
    });
    return true;
  }

  return false;
};

export const handleAuthFieldBlur = (
  fieldName,
  fieldValue,
  setAlert,
  isConfirm = false,
  confirmValue = null
) => {
  if (isFieldEmpty(fieldName, fieldValue, setAlert)) return;
  if (fieldName === 'Name' && !isNameValid(fieldValue, setAlert)) return;
  if (fieldName === 'Email' && !isEmailValid(fieldValue, setAlert)) return;
  if (fieldName === 'Password' && !isPasswordValid(fieldValue, setAlert))
    return;
  if (isConfirm && !isConfirmationMatch(fieldValue, confirmValue, setAlert))
    return;
  setAlert({
    type: 'success',
    message: `${fieldName} is valid`,
  });
};
