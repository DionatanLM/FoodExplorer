import { Container } from "./styles";

export function Input({
  icon: Icon,
  label,
  widthContainer,
  textarea,
  ...rest
}) {
  return (
    <Container style={widthContainer}>
      {label && <label>{label}</label>}
      {textarea ? <textarea {...rest} rows="4" cols="50" /> : <input {...rest} />}
    </Container>
  );
}
