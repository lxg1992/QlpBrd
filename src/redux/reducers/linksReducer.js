import { ADD_LINK, REMOVE_LINK, SET_LINKS, CLEAR_LINKS } from "../types";

export default function linksReducer(state = [], { type, payload = null }) {
    switch (type) {
        case ADD_LINK:
            // if (state.contains(payload)) {
            //     return state;
            // }
            return [...state, payload];
        case REMOVE_LINK:
            return [...state.filter((link) => link !== payload)];
        case SET_LINKS:
            return payload;
        case CLEAR_LINKS:
            return [];
        default:
            return state;
    }
}
