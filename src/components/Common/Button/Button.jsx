import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ buttonText, onClick, type, isRed }) => (
  <StyledButton onClick={onClick} type={type} isRed={isRed}>
    {buttonText}
  </StyledButton>
);

export default Button;
