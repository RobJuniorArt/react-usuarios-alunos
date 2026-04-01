import * as types from "../types";

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log("Sucesso BOTAO_CLICADO_SUCCESS");
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      const newState = { ...state };
      newState.botaoClicado = false;
      console.log("Ocorreu um erro BOTAO_CLICADO_FAILURE");
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // const newState = { ...state };
      // newState.botaoClicado = !newState.botaoClicado;
      console.log("Estou fazendo a requisição BOTAO_CLICADO_REQUEST");
      return state;
    }

    default:
      return state;
  }
}
