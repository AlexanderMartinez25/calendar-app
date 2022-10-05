import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "cheking", // 'authenticated', 'not-authenticated',
    user: {},
    errorMesagge: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMesagge = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMesagge = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMesagge = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMesagge = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
