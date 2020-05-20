import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer from "./reducers"; //rootReducer

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    compose(...enhancers)
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
