import { combineReducers } from "redux";
import { darkModeReducer } from "./themeReducers";

const reducers = combineReducers({
  // lista de reducers
  darkMode: darkModeReducer,
  
});
export default reducers;