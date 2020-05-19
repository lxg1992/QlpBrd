import {
  SUCCESS_ALERT,
  ERROR_ALERT,
  REMOVE_ALERT,
  SUCCESS,
  ERROR,
} from "../types";

const initialState = {
  text: "",
  visible: false,
  category: null,
};
export default function alertReducer(state = initialState, action = null) {
  switch (action.type) {
    case SUCCESS_ALERT:
      return {
        text: action.payload,
        visible: true,
        category: SUCCESS,
      };
    case ERROR_ALERT:
      return {
        text: action.payload,
        visible: true,
        category: ERROR,
      };
    case REMOVE_ALERT:
      return {
        text: "",
        visible: false,
        category: null,
      };
    default:
      return state;
  }
}
