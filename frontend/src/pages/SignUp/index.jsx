import { useState } from "react";
import { Container, Form, Logo } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    // if (!name || !email || !password) {
    //   alert("Preencha todos os campos!");
    // }
    // api
    //   .post("/users", { name, email, password })
    //   .then(() => {
    //     alert("Conta criada com sucesso!");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       alert(error.response.data.message);
    //     } else {
    //       alert("Erro ao criar conta!");
    //     }
    //   });
  };

  return (
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>

        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={(e) => setName(e.target.value)}
          label="Nome"
        />

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
        <Button name="Entrar" onClick={handleSignUp} />
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
