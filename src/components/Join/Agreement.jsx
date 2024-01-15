import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "./checkbox.svg";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Agreement = ({
  onServiceAgreementChange,
  onPrivacyAgreementChange,
  onMarketingAgreementChange,
}) => {
  // const [serviceAgreement, setServiceAgreement] = useState(false);
  // const [privacyAgreement, setPrivacyAgreement] = useState(false);
  // const [marketingAgreement, setMarketingAgreement] = useState(false);
  const [serviceAgreementLocal, setServiceAgreementLocal] = useState(false);
  const [privacyAgreementLocal, setPrivacyAgreementLocal] = useState(false);
  const [marketingAgreementLocal, setMarketingAgreementLocal] = useState(false);
  const [allAgreementsLocal, setAllAgreementsLocal] = useState(false);
  const [allAgreements, setAllAgreements] = useState(false);

  // const allAgreementsChecked = serviceAgreement && privacyAgreement && marketingAgreement;

  

    console.log(serviceAgreementLocal, privacyAgreementLocal, marketingAgreementLocal, allAgreementsLocal);
  



  useEffect(() => {
    const allChecked = serviceAgreementLocal && privacyAgreementLocal && marketingAgreementLocal;
    setAllAgreementsLocal(allChecked);

    // 상위 컴포넌트에 상태 업데이트를 알립니다.
    onServiceAgreementChange(serviceAgreementLocal);
    onPrivacyAgreementChange(privacyAgreementLocal);
    onMarketingAgreementChange(marketingAgreementLocal);
  }, [serviceAgreementLocal, privacyAgreementLocal, marketingAgreementLocal]);

  

  const handleCheckAll = () => {
    const newValue = !allAgreementsLocal;
    setAllAgreementsLocal(newValue);
    setServiceAgreementLocal(newValue);
    setPrivacyAgreementLocal(newValue);
    setMarketingAgreementLocal(newValue);
  };

  const handleServiceAgreementChange = () => {
    setServiceAgreementLocal(!serviceAgreementLocal);
  };

  const handlePrivacyAgreementChange = () => {
    setPrivacyAgreementLocal(!privacyAgreementLocal);
  };

  const handleMarketingAgreementChange = () => {
    setMarketingAgreementLocal(!marketingAgreementLocal);
  };
  // };

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
            <CheckIcon checked={allAgreementsLocal} />
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
              name="serviceAgreement"
                type="checkbox"
                checked={serviceAgreementLocal}
                onChange={handleServiceAgreementChange}
              />
              <ImageWrapper>
              <CheckIcon checked={serviceAgreementLocal} />
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
                checked={privacyAgreementLocal}
                onChange={handlePrivacyAgreementChange}
                // onChange={handlePrivacyAgreementChange}
              />
              <ImageWrapper>
              <CheckIcon checked={privacyAgreementLocal} />
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
                checked={marketingAgreementLocal}
                onChange={handleMarketingAgreementChange}
              />
              <ImageWrapper>
              <CheckIcon checked={marketingAgreementLocal} />
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

const CheckIcon = styled(IoIosCheckmarkCircleOutline)`
  margin-top : 10px;
  font-size: 24px;
  color: ${props => (props.checked ? '#fff' : '#000')}; 
  background-color: ${props => (props.checked ? 'rgb(149, 5, 38)' : 'transparent')}; 
  border-radius: 50%; // 원형 아이콘 표현
  transition: background-color 0.3s, color 0.3s, transform 0.3s; 

  &:hover {
    transform: scale(1.1); 
  }
`;

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
  //  &:checked + div {
  //   background-color: rgb(149, 5, 38);
  // }
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
