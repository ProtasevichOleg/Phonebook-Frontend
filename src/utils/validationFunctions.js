export const isFieldEmpty = (fieldName, fieldValue, setNotification) => {
  const trimmedValue = fieldValue.trim();
  if (trimmedValue === '') {
    setNotification({
      type: 'warning',
      message: `${fieldName} field can't be empty.`,
    });
    return true;
  }
  return false;
};

export const isPhoneNumberValid = (phoneNumber, setNotification) => {
  const phoneNumberRegex = new RegExp('^\\+?[0-9\\s\\-\\(\\)]+$');
  const validatePhoneNumber = phoneNumberRegex.test(phoneNumber.trim());

  if (!validatePhoneNumber) {
    setNotification({
      type: 'error',
      message: `Phone number can only contain numbers, spaces, dashes, and parentheses.`,
    });
    return false;
  }

  return true;
};

export const isEmailValid = (email, setNotification) => {
  const emailRegex = new RegExp('^\\S+@\\S+\\.\\S+$');
  const validateEmail = emailRegex.test(email.trim());

  if (!validateEmail) {
    setNotification({
      type: 'error',
      message: `Email is not valid.`,
    });
    return false;
  }

  return true;
};

export const isPasswordValid = (password, setNotification) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d.,-]{8,}$/;
  const validatePassword = passwordRegex.test(password.trim());

  if (!validatePassword) {
    setNotification({
      type: 'error',
      message: `Password must contain at least one letter, one digit, and be at least 8 characters long.`,
    });
    return false;
  }

  return true;
};

export const isUsernameValid = (username, setNotification) => {
  const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
  const validateUsername = usernameRegex.test(username.trim());

  if (!validateUsername) {
    setNotification({
      type: 'error',
      message: `Username must be 4-20 characters long and contain only letters, numbers and underscores.`,
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
      message: `Password confirmation does not match.`,
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
      message: `${fieldName} "${fieldValue.trim()}" is already exists.`,
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
  if (fieldName === 'Username' && !isUsernameValid(fieldValue, setAlert))
    return;
  if (fieldName === 'Email' && !isEmailValid(fieldValue, setAlert)) return;
  if (fieldName === 'Password' && !isPasswordValid(fieldValue, setAlert))
    return;
  if (isConfirm && !isConfirmationMatch(fieldValue, confirmValue, setAlert))
    return;
  setAlert({
    type: 'success',
    message: `${fieldName} is valid.`,
  });
};
