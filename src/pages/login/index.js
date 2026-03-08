import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

import * as exampleActions from "../../store/modules/example/actions";

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
    dispatch({
      type: "BOTAO_CLICADo_2",
      //payload: { email, senha }, //posso ter dados aqui
    });
  }
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Hello</small>
      </Title>
      <Paragrafo>lorem ipsum sit met dolor</Paragrafo>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
}
