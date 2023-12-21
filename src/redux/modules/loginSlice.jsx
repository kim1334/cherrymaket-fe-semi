import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";
import jwt_decode from 'jwt-decode';

const initialState = {
  user: {},
  isLoggedIn: false,
  userId: null,
};

// 로그인 thunk
export const loginThunk = createAsyncThunk(
  "loginSlice/loginThunk",
  async (payload, thunkAPI) => {
    try {

      const response = await instance.post("/auth/sign-in", payload);
      sessionStorage.setItem("accessToken", response.data.accessToken); // 토큰을 세션 스토리지에 저장
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      alert(error.response.data.errorMessage); // 에러 발생시 메시지 출력
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    initializeLogin: (state) => {
      const token = sessionStorage.getItem("accessToken"); // 세션 스토리지에서 토큰 가져오기
      if (token) {
        state.isLoggedIn = true;
        const decoded = jwt_decode(token);
        state.user = decoded;
      } else {
        state.isLoggedIn = false;
        state.user = {};
      }
    },
    logout: (state) => {
      sessionStorage.removeItem("accessToken"); // 세션 스토리지에서 토큰 제거
      state.isLoggedIn = false;
      state.user = {};
    }
  },
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [loginThunk.rejected]: (state, action) => {
      state.isLoggedIn = false;
    }
  },
});

export const { initializeLogin } = loginSlice.actions;

export default loginSlice;