import {
  AnyAction,
  PreloadedState,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import thunk from "redux-thunk";
import filmReducer from "./film/filmSlice";
import peopleReducer from "./people/peopleSlice";

const rootReducer = combineReducers({
  film: filmReducer,
  people: peopleReducer,
});

export default function configureAppStore(
  preloadedState?: PreloadedState<RootState>,
) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState,
  });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
