import { Container, HeaderLimit, Search, Logout, Logo } from "./styles";
import { RiShutDownLine, RiSearchLine } from "react-icons/ri";
import { PiReceiptLight } from "react-icons/pi";
//import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  //const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    //signOut();
  }
  return (
    <Container>
      <HeaderLimit>
        <Logo />

        <Search>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={RiSearchLine}
          />
        </Search>
        <Button name="Pedidos (0)" icon={PiReceiptLight} />

        <Logout onClick={handleSignOut}>
          <RiShutDownLine />
        </Logout>
      </HeaderLimit>
    </Container>
  );
}
