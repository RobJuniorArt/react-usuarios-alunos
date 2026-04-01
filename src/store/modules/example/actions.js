import * as types from "../types";

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST, //estou trazendo botao clicado la de types
  };
}

export function clicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS, //estou trazendo botao clicado la de types
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE, //estou trazendo botao clicado la de types
  };
}
