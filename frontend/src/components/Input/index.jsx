import { Container } from "./styles";

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
