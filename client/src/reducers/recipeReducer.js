import _ from "lodash";
const initialState = {
  payload: [],
  isLoading: false,
  error: {}
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case "FETCH_RECIPES":
      return { ...state, isLoading: true };

    case "FETCH_RECIPES_SUCCESS":
      return { ...state, payload, isLoading: false };
    // ..._.mapKeys(payload, "recipe_id")
    case "FETCH_RECIPES_FAILURE":
      return { ...state, error: error, isLoading: false };

    default:
      return state;
  }
};

// export function searchReducer(state=initialState, action) {
//   switch(action.type) {
//       case FETCH_SEARCH_DATA:
//          return {        ...state,        isLoading: true    };
//               case FETCH_SEARCH_SUCCESS:
//                 return {        ...state,        payload: action.payload,        isLoading: false      };
//                  case FETCH_SEARCH_FAILURE:
// return {        ...state,        error: action.error,        isLoading: false            };
