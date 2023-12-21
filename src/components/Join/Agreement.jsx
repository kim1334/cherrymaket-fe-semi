import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "./checkbox.svg";
import { useState } from "react";
import { useEffect } from "react";

const Agreement = ({
  onServiceAgreementChange,
  onPrivacyAgreementChange,
  onMarketingAgreementChange,
}) => {
  const [serviceAgreement, setServiceAgreement] = useState(false);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [marketingAgreement, setMarketingAgreement] = useState(false);
  const [allAgreements, setAllAgreements] = useState(false);

  // 전체 동의 체크박스 클릭 시
  const handleCheckAll = () => {
    const newValue = !allAgreements;
    setAllAgreements(newValue);
    setServiceAgreement(newValue);
    setPrivacyAgreement(newValue);
    setMarketingAgreement(newValue);
    // 개별 동의 항목의 값을 상위 컴포넌트로 전달
    onServiceAgreementChange(newValue);
    onPrivacyAgreementChange(newValue);
    onMarketingAgreementChange(newValue);
  };

  

  // 개별 동의 체크박스 클릭 시
  const handleServiceAgreementChange = () => {
    const newValue = !serviceAgreement;
    setServiceAgreement(newValue);
    // 상위 컴포넌트로 전달
    onServiceAgreementChange(newValue);
  };

  const handlePrivacyAgreementChange = () => {
    const newValue = !privacyAgreement;
    setPrivacyAgreement(newValue);
    // 상위 컴포넌트로 전달
    onPrivacyAgreementChange(newValue);
  };

  const handleMarketingAgreementChange = () => {
    const newValue = !marketingAgreement;
    setMarketingAgreement(newValue);
    // 상위 컴포넌트로 전달
    onMarketingAgreementChange(newValue);
  };

  return (
    <AgreementSection>
      <div>
        <label>이용약관동의</label>
      </div>
      <div>
        <AgreeAll>
          <label>
            <CheckboxInput
              type="checkbox"
              checked={allAgreements}
              onChange={handleCheckAll}
            />
            <ImageWrapper>
              <Checkbox />
            </ImageWrapper>
            전체 동의합니다.
          </label>
          <p>
            선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
            수 있습니다.
          </p>
        </AgreeAll>
        <AgreeOneItem>
          <div>
            <label>
              <CheckboxInput
                type="checkbox"
                checked={serviceAgreement}
                onChange={handleServiceAgreementChange}
              />
              <ImageWrapper>
                <Checkbox />
              </ImageWrapper>
              이용약관 동의
            </label>
            <span>(필수)</span>
          </div>
          <Term>약관보기 {">"}</Term>
        </AgreeOneItem>
        <AgreeOneItem>
          <div>
            <label>
              <CheckboxInput
                name="privacyAgreement"
                type="checkbox"
                checked={privacyAgreement}
                onChange={handlePrivacyAgreementChange}
              />
              <ImageWrapper>
                <Checkbox />
              </ImageWrapper>
              개인정보 수집 및 이용 동의
            </label>
            <span>(필수)</span>
          </div>
          <Term>약관보기 {">"}</Term>
        </AgreeOneItem>
        <AgreeOneItem>
          <div>
            <label>
              <CheckboxInput
                name="marketingAgreement"
                type="checkbox"
                checked={marketingAgreement}
                onChange={handleMarketingAgreementChange}
              />
              <ImageWrapper>
                <Checkbox />
              </ImageWrapper>
              본인은 만 14세 이상입니다.
            </label>
            <span>(필수)</span>
          </div>
          <Term>약관보기 {">"}</Term>
        </AgreeOneItem>
      </div>
    </AgreementSection>
  )
};

export default Agreement;

const AgreementSection = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 10px 0 10px 20px;
  & > div:nth-child(1) {
    width: 139px;
    padding-top: 12px;
    & label {
      font-weight: 500;
      color: rgb(51, 51, 51);
      line-height: 20px;
    }
  }
  & > div:nth-child(2) {
    flex: 1 1 0%;
  }
`;
const AgreeAll = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 12px 0 8px 0;
  & label {
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: top;
    line-height: normal;
    color: rgb(51, 51, 51);
    padding: 0px;
    font-weight: 500;
    font-size: 18px;
  }
  & p {
    font-size: 11px;
    color: rgb(102, 102, 102);
    padding-top: 4px;
    padding-left: 36px;
  }
`;
const CheckboxInput = styled.input`
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
   &:checked + div {
    background-color: rgb(149, 5, 38);
  }
  }
`;
const ImageWrapper = styled.div`
  display: inline-block;
  margin-right: 12px;
  vertical-align: top;
`;
const AgreeOneItem = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
  & label {
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: top;
    line-height: normal;
    color: rgb(51, 51, 51);
    padding: 0px;
    font-size: 14px;
  }
  & span {
    padding-left: 5px;
    color: rgb(153, 153, 153);
  }
`;
const Term = styled.p`
  padding-right: 22px;
  color: rgb(149, 5, 38); // 변경된 색상
  letter-spacing: 0px;
  text-decoration: none;
`;
