import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import termReducer from "./termReducer";
import IngreReducer from "./IngreReducer";
import recipeIdReducer from "./recipeIdReducer";

export default combineReducers({
  term: termReducer,
  rID: recipeIdReducer,
  recipe: recipeReducer,
  ingre: IngreReducer
});
