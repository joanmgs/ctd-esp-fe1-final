import { combineReducers } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import personajesReducer from "../reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  personajesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(rootReducer, applyMiddleware(thunk));
