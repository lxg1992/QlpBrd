import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App.js";
import store from "./redux";
import { Provider } from "react-redux";
console.log(store.getState());

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
ReactDOM.render(<Index />, document.getElementById("root"));
