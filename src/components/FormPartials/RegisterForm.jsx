import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/authorization';
import { handleAuthFieldBlur } from 'utils';
import { Form, Label, FormAlert, SubmitButton } from 'components/FormPartials';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [usernameFieldAlert, setUsernameFieldAlert] = useState(null);
  const [emailFieldAlert, setEmailFieldAlert] = useState(null);
  const [passwordFieldAlert, setPasswordFieldAlert] = useState(null);
  const [confirmFieldAlert, setConfirmFieldAlert] = useState(null);

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.auth);

  const handleUsernameBlur = () =>
    handleAuthFieldBlur('Username', name, setUsernameFieldAlert);

  const handleEmailBlur = () =>
    handleAuthFieldBlur('Email', email, setEmailFieldAlert);

  const handlePasswordBlur = () => {
    handleAuthFieldBlur('Password', password, setPasswordFieldAlert);
  };

  const handleConfirmBlur = () => {
    handleAuthFieldBlur(
      'Confirm Password',
      confirm,
      setConfirmFieldAlert,
      true,
      password
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      if (!isLoading && !error) {
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
        setUsernameFieldAlert(null);
        setEmailFieldAlert(null);
        setPasswordFieldAlert(null);
        setConfirmFieldAlert(null);
      }
    }
  };

  const handleUsernameInputChange = event => setName(event.target.value);
  const handleEmailInputChange = event => setEmail(event.target.value);
  const handlePasswordInputChange = event => setPassword(event.target.value);
  const handleConfirmInputChange = event => setConfirm(event.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Label
        labelTitle="Username"
        type="text"
        name="name"
        value={name}
        onChange={handleUsernameInputChange}
        onBlur={handleUsernameBlur}
        validationStatus={usernameFieldAlert}
      />
      <FormAlert fieldAlert={usernameFieldAlert} />
      <Label
        labelTitle="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailInputChange}
        onBlur={handleEmailBlur}
        validationStatus={emailFieldAlert}
      />
      <FormAlert fieldAlert={emailFieldAlert} />
      <Label
        labelTitle="Password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordInputChange}
        onBlur={handlePasswordBlur}
        validationStatus={passwordFieldAlert}
      />
      <FormAlert fieldAlert={passwordFieldAlert} />
      <Label
        labelTitle="Confirm Password"
        type="password"
        name="confirm"
        value={confirm}
        onChange={handleConfirmInputChange}
        onBlur={handleConfirmBlur}
        validationStatus={confirmFieldAlert}
      />
      <FormAlert fieldAlert={confirmFieldAlert} />
      <SubmitButton buttonText="Register" />
    </Form>
  );
};

export default RegisterForm;
