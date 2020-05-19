import {
  ADD_LINK,
  REMOVE_LINK,
  //// SET_LINKS,
  CLEAR_LINKS,
} from "../types";

export function addLink(payload) {
  return {
    type: ADD_LINK,
    payload,
  };
}

export function removeLink(payload) {
  return {
    type: REMOVE_LINK,
    payload,
  };
}

// // export function setLinks(payload) {
// //   return {
// //     type: SET_LINKS,
// //     payload,
// //   };
// // }

export function clearLinks() {
  return {
    type: CLEAR_LINKS,
  };
}
