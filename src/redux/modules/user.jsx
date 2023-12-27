// user.jsx

import axios from 'axios';
import { instance } from './instance';

// Action Types
const KAKAO_LOGIN_START = 'KAKAO_LOGIN_START';
const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';

// Action Creators
const kakaoLoginStart = () => ({ type: KAKAO_LOGIN_START });
const kakaoLoginSuccess = (accessToken) => ({ type: KAKAO_LOGIN_SUCCESS, payload: accessToken });
const kakaoLoginFailure = (error) => ({ type: KAKAO_LOGIN_FAILURE, payload: error });

// Thunk for Kakao Login
export const kakaoLogin = (code) => {
    return async function (dispatch, getState) {
        try {
            dispatch(kakaoLoginStart());

            // Modify the request to use POST method
            const response = await instance.post("/oauth/kakao/sign-in", {
                authCode: code,
                provider: "KAKAO",
                status: getState
            });
            // 토큰 받아오기 성공
            console.log("토큰 받아오기 시작");
            const accessToken = response.data.accessToken;
            console.log("토큰 받아오기 성공:"+ accessToken);
            sessionStorage.setItem('accessToken', accessToken);

            dispatch(kakaoLoginSuccess(accessToken));
            window.location.replace("/"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)

        } catch (error) {
            console.error('Kakao login error:', error);
            dispatch(kakaoLoginFailure(error));
            window.alert('로그인에 실패했습니다.');
        }
    };
};

// Reducer
const initialState = {
    accessToken: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case KAKAO_LOGIN_START:
            return { ...state, loading: true, error: null };
        case KAKAO_LOGIN_SUCCESS:
            return { ...state, accessToken: action.payload, loading: false };
        case KAKAO_LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default userReducer;