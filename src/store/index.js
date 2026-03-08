/*
// Jeito que o professor está ensinando (v5/v4)
import { createStore } from 'redux';
const store = createStore(rootReducer);

// Jeito Moderno (Redux Toolkit)
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({ reducer: rootReducer });
*/
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; //aqui é sem chaves pq é direto n é algo especifico de um pacote de muitas coisas.

import persistedReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga); //passo o reducer

export const persistor = persistStore(store);
export default store;
