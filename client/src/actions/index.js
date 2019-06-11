import _ from "lodash";
import Food2Fork from "../Api/Food2Fork";

const KEY2 = "ab66ca02b7147d205c68ea1572a80598";
const KEY = "5a012ca8f59e2543842ebe500f1804a6";

export const GetTerm = payload => ({
  type: "GET_TERM",
  payload
});

// export const fetchRecipe = term => dispatch => _fetchRecipe(term, dispatch);

// const _fetchRecipe = _.memoize(async (term, dispatch) => {
//   const response = await Food2Fork.get("/search", {
//     params: {
//       key: KEY2,
//       q: term
//     }
//   });

//   dispatch({ type: "FETCH_RECIPES", payload: response.data.recipes });
// });

export const fetchRecipe = term => dispatch => _fetchRecipe(term, dispatch);

const _fetchRecipe = _.memoize(async (term, dispatch) => {
  dispatch({ type: "FETCH_RECIPES" });

  try {
    const response = await Food2Fork.get("/search", {
      params: {
        key: KEY2,
        q: term
      }
    });
    dispatch({
      type: "FETCH_RECIPES_SUCCESS",
      payload: response.data.recipes
    });
  } catch (error) {
    dispatch({ type: "FETCH_RECIPES_FAILURE", error });
  }
});

export const fetchId = payload => ({
  type: "FETCH_ID",
  payload
});

export const fetchIngre = id => dispatch => _fetchIngre(id, dispatch);

const _fetchIngre = _.memoize(async (id, dispatch) => {
  const response = await Food2Fork.get("/get", {
    params: {
      key: KEY2,
      rId: id
    }
  });

  dispatch({ type: "FETCH_INGRE", payload: response.data.recipe });
});

// export function fetchSearchData(args) {
//   return async dispatch => {
//     // Initiate loading state
//     dispatch({ type: FETCH_SEARCH_DATA });

//     try {
//       const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
//       dispatch({
//         type: FETCH_SEARCH_SUCCESS,
//         payload: result,
//         currentPage: args.pageCount
//       });
//     } catch (err) {
//       dispatch({ type: FETCH_SEARCH_FAILURE, error: err });
//     }
//   };
// }
