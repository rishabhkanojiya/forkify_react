import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import termReducer from "./termReducer";
import IngreReducer from "./IngreReducer";
import recipeIdReducer from "./recipeIdReducer";
import saveItem from "./saveItem";
import saveIngre from "./saveIngre";

export default combineReducers({
  term: termReducer,
  rID: recipeIdReducer,
  recipe: recipeReducer,
  ingre: IngreReducer,
  savID: saveItem,
  saveIngre
});
