import { LabelStyled, Span, Input } from './Label.styled';

const Label = ({
  labelTitle,
  type,
  name,
  value,
  onChange,
  onBlur,
  validationStatus,
  id,
  title,
}) => {
  return (
    <LabelStyled>
      <Span>{labelTitle}</Span>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        validationStatus={validationStatus}
        id={id}
        title={title}
        required
      />
    </LabelStyled>
  );
};

export default Label;
