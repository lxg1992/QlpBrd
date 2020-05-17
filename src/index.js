import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux";

import "./styles.scss";
import App from "./App.js";

const store = configureStore();

console.log(store.getState());

const Index = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

//TODO: Setup Redux-Persist
//TODO: Setup PDF download of Note
//TODO: Setup Copy+Paste of Note
//TODO: Setup admin auth of getting all notes
