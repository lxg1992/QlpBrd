import {
  SUCCESS_ALERT,
  ERROR_ALERT,
  REMOVE_ALERT,
  INFO_ALERT,
  SUCCESS,
  ERROR,
  INFO,
  HIDDEN,
} from "../types";

const initialState = {
  text: "",
  visible: false,
  category: null,
};
export default function alertReducer(state = initialState, action) {
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
    case INFO_ALERT:
      return {
        text: action.payload,
        visible: true,
        category: INFO,
      };
    case REMOVE_ALERT:
      return {
        text: "",
        visible: false,
        category: HIDDEN,
      };
    default:
      return state;
  }
}
