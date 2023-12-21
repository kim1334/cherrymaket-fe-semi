import React from "react";
import styled from "styled-components";
import Header from "../common/Header/Header";
import Layouts from "../common/Layout";
import JoinForm from "../components/Join/JoinForm";

function Join() {
  return (
    <>
      <Header />
      <Layouts>
        <JoinTitle>회원가입</JoinTitle>
        <JoinBody>
          <RequirementInfo>
            <span>*</span> 필수입력사항
          </RequirementInfo>
          <JoinForm></JoinForm>
        </JoinBody>
      </Layouts>
    </>
  );
}

export default Join;

const JoinTitle = styled.div`
  margin: 50px 0;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -1px;
  color: #333;
`;
const JoinBody = styled.div`
  width: 640px;
  margin: 0 auto;
`;
const RequirementInfo = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(51, 51, 51);
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 17px;
  text-align: right;

  & span {
    color: #ee6a7b;
  }
`;
