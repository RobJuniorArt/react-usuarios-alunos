import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

import * as exampleActions from "../../store/modules/example/actions";

export default function Aluno() {
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>Aluno</h2>
    </Container>
  );
}
