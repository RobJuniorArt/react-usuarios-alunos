import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

const createPersistReducer = (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: "CONSUMO-API",
      storage,
      whitelist: ["auth"], //se eu quiser salvar outro modulo, so separar por virgula
    },
    reducers,
  );
  return persistedReducers;
};

export default createPersistReducer;
