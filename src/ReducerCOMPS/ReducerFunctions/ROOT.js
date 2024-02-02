import { combineReducers } from "redux";
import { reducer } from "./AddAndSub";
import { SecondReducer } from "./Multiply";

export const RootReducer = combineReducers({
  reducer,
  SecondReducer,
});
