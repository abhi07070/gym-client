import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    email: "",
  },

  isloggedIn: false,
  isSignUp: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    setLogin(state) {
      state.isloggedIn = true;
    },
    setSignUp(state) {
      state.isSignUp = true;
    },
    logout() {
      return initialState;
    },
  },
});

export const { setUserData, setLogin, setSignUp, logout } = userSlice.actions;

export default userSlice.reducer;
