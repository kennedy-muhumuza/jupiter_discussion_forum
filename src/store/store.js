import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./reducers/sideBar";

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
  },
});

export default store;
export const sideBarActions = sideBarSlice.actions;
