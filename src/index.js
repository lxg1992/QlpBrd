import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/lib/integration/react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, purple } from "@material-ui/core/colors";

import configureStore, { history } from "./redux";

import "./styles.scss";
import App from "./App.js";

const { store, persistor } = configureStore();

const Index = () => {
  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: grey,
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <CssBaseLine />
            <App />
          </ThemeProvider>
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
