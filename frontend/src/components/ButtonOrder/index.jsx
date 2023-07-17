import { Container } from "./styles";

export function ButtonOrder({ icon: Icon, name, loading, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={30} />}

      {loading ? "Carregando..." : name}
    </Container>
  );
}
