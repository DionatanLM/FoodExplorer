import { Container } from "./styles";

export function Button({ icon: Icon, name, loading, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={20} />}

      {loading ? "Carregando..." : name}
    </Container>
  );
}
