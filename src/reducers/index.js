import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const masterReducer = combineReducers({
  moviesState: movieReducer,
  favoritesState: favoritesReducer,
});

export default masterReducer;
