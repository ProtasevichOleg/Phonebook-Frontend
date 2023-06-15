import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.label};
`;

export const MessageContainer = styled.div`
  min-height: 20px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border: ${({ error }) => error && '2px solid red'};
  border: ${({ warning }) => warning && '2px solid orange'};
  border: ${({ success }) => success && '2px solid green'};
  width: 100%;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBackgroundDefault};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
`;
