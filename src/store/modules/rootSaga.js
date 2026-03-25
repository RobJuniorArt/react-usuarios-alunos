import { all } from "redux-saga/effects";

import auth from "./auth/sagas";

export default function* rootSagas() {
  return yield all([auth]); //se tivesse mais eu poderia colocar mais coisas dentro do array separado por virgula.
}
