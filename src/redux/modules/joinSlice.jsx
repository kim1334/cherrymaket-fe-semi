import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./instance";

// 초기값 선언
const initialState = {
  isJoinSucceed: false,
  isIdUsable: false,
  isEmailUsable: false,
};

// thunk함수(회원가입) 선언
export const joinThunk = createAsyncThunk(
  "joinSlice/joinThunk",
  async (payload, thunkAPI) => {
    try {
      console.log("페이로드 데이터:", payload);
      const response = await instance.post("/account/sign-up", payload);
      console.log(instance.post);
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response); //통신 실패시 에러값 반환
    }
  }
);

// id중복확인 thunk함수
export const idCheckThunk = createAsyncThunk(
  "joinSlice/idCheckThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("/user/auth", {
        key: "userId",
        value: payload,
      });
      return thunkAPI.fulfillWithValue(response.data); //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (iderror) {
      return thunkAPI.rejectWithValue(iderror.response.data); //통신 실패시 에러값 반환
    }
  }
);

// email 중복확인 thunk함수
export const emailCheckThunk = createAsyncThunk(
  "joinSlice/emailCheckThunk",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/account/check-email`, {
        params: {
          email: payload,
        },
      });
      console.log(response.config.params.email);
      return thunkAPI.fulfillWithValue(response.config.params.email+"는 사용 가능한 이메일 입니다.");
     
 //thunkAPI를 이용해 통신 성공할 시 값 반환
    } catch (emailerror) {
      return thunkAPI.rejectWithValue("사용 불가능한 아이디"); //통신 실패시 에러값 반환
    }
  }
);


// email 인증번호 보내는 thunk함수
// export const emailAuthThunk = createAsyncThunk(
//   "joinSlice/emailAuthThunk",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await instance.post("/user/email", {
//         key: "email",
//         value: payload,
//       });
//       return thunkAPI.fulfillWithValue(response);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// 슬라이스
const joinSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    resetJoinState: (state, action) => {
      state.isJoinSucceed = false;
      state.isIdUsable = false;
      state.isEmailUsable = false;
    },
  },
  extraReducers: {
    [joinThunk.fulfilled]: (state, action) => {
      //action.payload = response.data
      alert("회원가입이 완료되었습니다.");
      state.isJoinSucceed = true;
    },
    [joinThunk.rejected]: (state, action) => {
      alert("다시 시도해주세요.");
      state.isJoinSucceed = false;
    },
    [idCheckThunk.fulfilled]: (state, action) => {
      state.isIdUsable = true;
      alert(action.payload.Message); // 사용 가능한 아이디 입니다.
    },
    [idCheckThunk.rejected]: (state, action) => {
      state.isIdUsable = false;
      alert(action.payload.errorMessage); // 중복된 아이디 입니다.
    },
    [emailCheckThunk.fulfilled]: (state, action) => {
      state.isEmailUsable = true;
      alert(action.payload.Message); // 사용 가능한 이메일 입니다.
    },
    [emailCheckThunk.rejected]: (state, action) => {
      state.isEmailUsable = false;
      alert(action.payload.errorMessage); // 중복된 이메일 입니다.
    },
    // [emailAuthThunk.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    // },
    // [emailAuthThunk.rejected]: (state, action) => {
    //   console.log(action.payload);
    // },
  },
});

// reducer export
export const { resetJoinState } = joinSlice.actions;

// extra reducer export
export default joinSlice;
