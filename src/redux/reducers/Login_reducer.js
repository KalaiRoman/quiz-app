import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userData: {},
  loading: false,
  error: "",
};

const login_reducer = createSlice({
  name: "Login",
  initialState: initialState,
  reducers: {
    LoginRequest(state, action) {
      state.loading = true;
      state.userData = {};
      state.error = "";
    },
    LoginSuccess(state, action) {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    },
    LoginFailed(state, action) {
      state.loading = false;
      state.userData = {};
      state.error = action.payload;
    },
  },
});

export const { LoginRequest, LoginSuccess, LoginFailed } =
  login_reducer.actions;
export default login_reducer.reducer;
