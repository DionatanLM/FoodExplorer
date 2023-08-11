import { Container, Image, ContainerText, Title, Description } from "./styles";

export function Banner() {
  return (
    <Container>
      <Image />
      <ContainerText>
        <Title>Sabores inigualáveis</Title>
        <Description>
          Sinta o cuidado do preparo com ingredientes selecionados.
        </Description>
      </ContainerText>
    </Container>
  );
}
