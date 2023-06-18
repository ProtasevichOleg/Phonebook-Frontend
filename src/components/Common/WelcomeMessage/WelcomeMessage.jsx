import { Link } from 'react-router-dom';
import { WellcomeMessageStyled } from './WelcomeMessage.styled';

const WelcomeMessage = ({ type }) => {
  const Contacts = <Link to="/contacts">Contacts</Link>;
  const Login = <Link to="/login">Log in</Link>;
  const Register = <Link to="/register">Register</Link>;

  switch (type) {
    case 'user':
      return (
        <WellcomeMessageStyled>
          <span>Go to the {Contacts} tab</span>
          <span>and manage your contacts!</span>
        </WellcomeMessageStyled>
      );
    case 'anonhymus':
      return (
        <WellcomeMessageStyled>
          <span>
            Please {Login} or {Register}
          </span>
          <span>to see your contacts.</span>
        </WellcomeMessageStyled>
      );
    case 'login':
      return (
        <WellcomeMessageStyled>
          <span>If you already have an account,</span>
          <span>or {Register} if you don't</span>
        </WellcomeMessageStyled>
      );
    case 'register':
      return (
        <WellcomeMessageStyled>
          <span>Or {Login}</span>
          <span>If you already have an account</span>
        </WellcomeMessageStyled>
      );

    default:
      return null;
  }
};

export default WelcomeMessage;
