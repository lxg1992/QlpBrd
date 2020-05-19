import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore, { history } from "./redux";

import "./styles.scss";
import App from "./App.js";

const { store, persistor } = configureStore();

console.log(store.getState());

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

//done: Setup Redux-Persist
//TODO: Setup Alert Show
//TODO: Setup PDF download of Note
//TODO: Setup Copy+Paste of Note
//TODO: Setup admin auth of getting all notes
