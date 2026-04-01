import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { isEmpty, get } from "lodash";
import * as actions from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/");
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email) || isEmpty(email)) {
      formErrors = true;
      toast.error("Email Inválido.");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 50 caracteres");
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua Senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
