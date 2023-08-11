import { Container } from "./styles";

export function Select({ label, children, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <select {...rest}>{children}</select>
    </Container>
  );
}
