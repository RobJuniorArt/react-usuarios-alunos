import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Hello</small>
      </Title>
      <Paragrafo>lorem ipsum sit met dolor</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
