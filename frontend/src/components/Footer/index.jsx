import { Logo } from "../../icons/Logo";
import { Container, Text, FooterLimit } from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterLimit>
        <Logo />
        <Text>© 2023 - Todos os direitos reservados.</Text>
      </FooterLimit>
    </Container>
  );
}
