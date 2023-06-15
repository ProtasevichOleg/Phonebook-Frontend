import PropTypes from 'prop-types';
import { Message } from './InputMessage.styled';

const InputMessage = ({ message, type }) => {
  return <Message type={type}>{message}</Message>;
};

InputMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']),
};

InputMessage.defaultProps = {
  type: 'error',
};

export default InputMessage;
