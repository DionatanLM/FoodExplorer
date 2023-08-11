import { Container } from "./styles";

export function ButtonText({
  icon: Icon,
  title,
  loading,
  isActive = false,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest} isActive={isActive}>
      {Icon && <Icon size={30} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
