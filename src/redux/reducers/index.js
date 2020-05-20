import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import linksReducer from "./linksReducer";
import alertReducer from "./alertReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    links: linksReducer,
    alert: alertReducer,
  });

export default createRootReducer;
