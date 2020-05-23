import { SUCCESS_ALERT, ERROR_ALERT, REMOVE_ALERT, INFO_ALERT } from "../types";

export function success_alert(payload) {
  return {
    type: SUCCESS_ALERT,
    payload,
  };
}

export function error_alert(payload) {
  return {
    type: ERROR_ALERT,
    payload,
  };
}

export function info_alert(payload) {
  return {
    type: INFO_ALERT,
    payload,
  };
}

export function remove_alert() {
  return {
    type: REMOVE_ALERT,
  };
}
