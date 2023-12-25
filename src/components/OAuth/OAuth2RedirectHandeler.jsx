// 리다이렉트될 화면
// OAuth2RedirectHandler.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../redux/modules/user";
import { RingLoader } from "react-spinners"; // react-spinners 패키지에서 가져오기


const OAuth2RedirectHandler = (props) => {
    const dispatch = useDispatch();

    // 인가 코드
    const code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(() => {
        // 카카오 로그인 API 호출
        console.log("카카오 로그인 API 호출");
        dispatch(kakaoLogin(code));
    }, []);

    // return <Spinner />;
    return <RingLoader color={"#123abc"} loading={true} />;
};

export default OAuth2RedirectHandler;