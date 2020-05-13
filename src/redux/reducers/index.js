import { combineReducers } from "redux";
import linksReducer from "./linksReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
    links: linksReducer,
    alert: alertReducer,
});

export default rootReducer;
