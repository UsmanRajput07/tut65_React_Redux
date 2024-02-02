import { legacy_createStore as createStore } from "redux";
import { RootReducer } from "./ReducerFunctions/ROOT";

export const store = createStore(RootReducer)