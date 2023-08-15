import React, { useState } from "react";
import { Container, Form, Logo } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres!");
      return;
    }

    try {
      const response = await api.post("/users", { name, email, password });
      if (response.status === 201) {
        alert("Conta criada com sucesso!");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao criar conta!");
      }
    }
  };

  return (
    <Container>
      <Logo />

      <div className="formContainer">
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

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button name="Cadastrar" onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  );
}
