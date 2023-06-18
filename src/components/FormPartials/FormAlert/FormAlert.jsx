import React from 'react';
import PropTypes from 'prop-types';
import { AlertWrapper, Message } from './FormAlert.styled';

const FormAlert = ({ fieldAlert }) => {
  const type = fieldAlert?.type;
  const message = fieldAlert?.message;

  return (
    <AlertWrapper>
      {fieldAlert && <Message type={type}>{message}</Message>}
    </AlertWrapper>
  );
};

FormAlert.propTypes = {
  fieldAlert: PropTypes.shape({
    type: PropTypes.oneOf(['error', 'warning', 'success']),
    message: PropTypes.string.isRequired,
  }),
};

export default FormAlert;
