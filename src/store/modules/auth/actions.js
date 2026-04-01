import * as types from "../types";

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST, //estou trazendo botao clicado la de types
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS, //estou trazendo botao clicado la de types
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE, //estou trazendo botao clicado la de types
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST, //estou trazendo botao clicado la de types
    payload,
  };
}
export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS, //estou trazendo botao clicado la de types
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS, //estou trazendo botao clicado la de types
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE, //estou trazendo botao clicado la de types
    payload,
  };
}
