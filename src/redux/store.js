import { configureStore } from "@reduxjs/toolkit";
import initialState from "./preloaded/preloadedState";
import { appReducer } from "./reducers/app-reducer";
import aprReducer from "./reducers/apr-reducer";

const store = configureStore({
 reducer: {
  apr: aprReducer,
  app: appReducer
 },
 preloadedState: initialState,
});


export default store;
