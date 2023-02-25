import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./reducers/sideBar";
import authSlice from "./reducers/auth";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sidebar: sideBarSlice.reducer,
  },
});

let baseUrl;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:5000";
} else {
  baseUrl = "https://letschat-backend.onrender.com";
}

export { baseUrl };

export default store;
export const sideBarActions = sideBarSlice.actions;
export const authActions = authSlice.actions;
