import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from "./actions";
import * as types from "../types";

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao); //posso passar parametroz depois de virgula, ex: nome, sobrenome
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error("Ocorreu um Erro na requisição.");
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
