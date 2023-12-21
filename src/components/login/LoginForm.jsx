import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/modules/loginSlice";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import { Input } from "../../elements/Input";
import { Btn } from "../../elements/Btn";
import naverIcon from "../../assets/naverIcon.png";
import kakaoIcon from "../../assets/kakaoIcon.png";
import googleIcon from "../../assets/googleIcon.png";


function LoginForm() {

const nav = useNavigate();
const dispatch = useDispatch();

const [email, onIdHandler] = useInput("");
const [password, onPasswordHandler] = useInput("");

const isLoggedIn = useSelector((state => state.login.isLoggedIn));

const submitHandler = (e) => {
  e.preventDefault();
  if (email === "" || password === "") {
    alert("아이디 혹은 비밀번호를 입력해주세요");
    return;
  }

  // loginThunk 액션을 디스패치합니다.
  dispatch(loginThunk({ email, password }));
};

// 로그인 상태(isLoggedIn)가 업데이트 되면, 메인 페이지로 리디렉트 합니다.
useEffect(() => {
  if (isLoggedIn) {
    nav("/");
  }
}, [isLoggedIn, nav]);

// 로컬 스토리지에 토큰이 있으면 메인 페이지로 이동합니다.
useEffect(() => {
  const loginCheck = localStorage.getItem("token");
  if (loginCheck) {
    nav("/");
  }
}, [nav]);

  return (
    <Container>
      <Title>로그인</Title>
      <Body>
        <form>
          <InputArea>
            <InputWrapper>
              <Input
                height="54px"
                fontSize="14px"
                placeholder="아이디를 입력해주세요"
                type="text"
                name="email"
                value={email}
                name="email"
                value={email}
                onChange={onIdHandler}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                height="54px"
                fontSize="14px"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                name="password"
                value={password}
                onChange={onPasswordHandler}
              />
            </InputWrapper>
          </InputArea>
          <FindUserInfoArea>
            <p>아이디 찾기</p>
            <span></span>
            <p>비밀번호 찾기</p>
          </FindUserInfoArea>
          <BtnWrapper>
            <Btn
              type="submit"
              width="100%"
              height="54px"
              border="0px none"
              backgroundColor="rgb(149, 5, 38);"
              color="white"
              fontSize="16px"
              onClick={submitHandler}
            >
              로그인
            </Btn>
            <div style={{ height: "10px" }}></div>
            <Btn
              type="button"
              width="100%"
              height="54px"
              fontSize="16px"
              color = "rgb(149, 5, 38);"
              border = "1px solid rgb(149, 5, 38);"
              onClick={() => nav("/join")}
            >
              회원가입
            </Btn>
          </BtnWrapper>
          <SocialLoginButtonContainer>
            <SocialButton>
            <IconImage src={naverIcon} alt="네이버 로그인" />
            <ButtonText>네이버 로그인</ButtonText>
            </SocialButton>
            <SocialButton>
            <IconImage src={kakaoIcon} alt="카카오 로그인" />
            <ButtonText>카카오 로그인</ButtonText>
            </SocialButton>
            <SocialButton>
            <IconImage src={googleIcon} alt="구글 로그인" />
            <ButtonText>구글 로그인</ButtonText>
            </SocialButton>
          </SocialLoginButtonContainer>
        </form>
      </Body>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`;
const Body = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
`;
const InputArea = styled.div`
  margin-top: 30px;
`;
const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

const FindUserInfoArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 13px;
  & p {
    color: rgb(51, 51, 51);
    font-size: 13px;
    letter-spacing: -0.6px;
  }

  & span {
    width: 1px;
    height: 10px;
    margin: 3px 6px 0px;
    background-color: rgb(51, 51, 51);
  }
`;
const BtnWrapper = styled.div`
  margin-top: 28px;
  position: relative;
  height: 48px;
`;

const SocialLoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center;
  height: 170px; 
  margin-top: 28px;
  margin-left: 6px;
`;

const SocialButton = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  width: calc(100% / 3); 
  cursor: pointer;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
`;
// 이미지 스타일
const IconImage = styled.img`
  height: 48px;
  margin-top: 30px;
`;

// 텍스트 스타일
const ButtonText = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: #000;
  text-align: center;
`;