import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  //component, diz se esta aberta ou fechada e o resto das propriedades
  const isLoggedIn = false; //essa variavel, vai estar dentro do estado do Redux, como se fosse um estado global

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }} //pego onde ele está e mando para rota anterior
      />
    );
  }
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false, //aqui dou um valor padráo para isclosed
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]) //aqui eu valido o que component pode ser, pode ser um componente ou uma funcao
    .isRequired, //componente é requerido
  isClosed: PropTypes.bool, //isclosed é booleano, pode ser true ou false
};
