import { StyledSubmitButton } from './SubmitButton.styled';

const SubmitButton = ({ buttonText }) => {
  return <StyledSubmitButton type="submit">{buttonText}</StyledSubmitButton>;
};

export default SubmitButton;
