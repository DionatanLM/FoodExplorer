import { useState } from "react";
import { Container, Form, Logo } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // try {
    //   if (email && password) {
    //     signIn({ email, password });
    //   }
    // } catch (e) {
    //   if (e.response) {
    //     alert(e.response.data.message);
    //   } else {
    //     alert("Não foi possivel entrar.");
    //   }
    // }
  };

  return (
    <Container>
      <Logo />

      <Form>
        <h1>Faça login</h1>

        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
        />
        <Button name="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  );
}
