import { SET_AVAILABLE_CATEGORIES } from "../actions/types";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AVAILABLE_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export default categoryReducer