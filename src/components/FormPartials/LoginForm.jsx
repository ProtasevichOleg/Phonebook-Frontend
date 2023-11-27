import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginization } from 'redux/authorization';
import { handleAuthFieldBlur } from 'utils';
import { Form, Label, FormAlert } from 'components/FormPartials';
import Button from 'components/Common/Button/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFieldAlert, setEmailFieldAlert] = useState(null);
  const [passwordFieldAlert, setPasswordFieldAlert] = useState(null);

  const dispatch = useDispatch();

  const handleEmailBlur = () =>
    handleAuthFieldBlur('Email', email, setEmailFieldAlert);

  const handlePasswordBlur = () => {
    handleAuthFieldBlur('Password', password, setPasswordFieldAlert);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(loginization({ email, password }));
    setEmail('');
    setPassword('');
    setEmailFieldAlert(null);
    setPasswordFieldAlert(null);
  };

  const handleEmailInputChange = event => setEmail(event.target.value);
  const handlePasswordInputChange = event => setPassword(event.target.value);

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit" buttonText="Log in" />
    </Form>
  );
};

export default LoginForm;
