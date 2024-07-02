import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("gym-media");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Error loading state from localStorage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem("gym-media", serializedState);
  } catch (error) {
    console.log("Error saving state to localStorage:", error);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    user: AuthSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
