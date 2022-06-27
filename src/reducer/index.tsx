import { savedPostsReducer } from "./SavePostSlice/index";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  savePostReducer: savedPostsReducer, // if we just use { a } instead of {a: a} it is not recongnizing another states in later usages
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
