import styled from "styled-components";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { StyledIcon } from "../Mypage/AddressBox.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AddressMadal = ({ isOpen, onClose, itemAddrss, zipCode }) => {
  const accessToken = sessionStorage.getItem("accessToken");
  const baseUrl = process.env.REACT_APP_API;

  const serverSaveAddress = async (userAddress) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰을 Authorization 헤더에 추가
        },
      };
      const response = await axios.post(`${baseUrl}/customer/address/add`, userAddress, config);
      console.log('데이터가 성공적으로 저장되었습니다.', response.data);
      alert("저장되었습니다.")
      window.location.reload();
      return response.data; // 원하는 경우 서버 응답 데이터를 반환할 수 있음
    } catch (error) {
      console.error('데이터 저장 중 오류가 발생했습니다.', error);
      throw error; // 오류 처리 및 전파
    }
  };

  

  const [userAddress, setUserAddress] = useState({
    name: "",
    zipcode: "",
    address: "",
    addressDetail: "",
    isDefault: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserAddress((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };

  const handleSave = () => {
    serverSaveAddress(userAddress); // 서버에 데이터 저장 요청
    onClose(); // 모달 닫기
  };

  useEffect(() => {
    setUserAddress((prevState) => ({
        ...prevState,
        address: itemAddrss,
        zipcode: zipCode, // 집 코드 업데이트
    }));
}, [itemAddrss, zipCode]); // itemAddrss와 zipCode의 변경을 모두 감지

 console.log(userAddress);
  return (
    <>
      <ModalWrapper isOpen={isOpen}>
        <div style={{ padding: "0px 30px" }}>
          <div style={{ letterSpacing: "-0.5px" }}>
            <div>
              <Strong>
                <span style={{ color: "rgb(37, 124, 216)" }}>하루배송</span>
                지역입니다
                <P>오늘 주문하면 다음 날 바로 도착해요. (일요일 휴무)</P>
              </Strong>
            </div>
            <div style={{ paddingBottom: "12px" }}>
              <div style={{ position: "relative", height: "44px" }}>
                <DetailInput
                  placeholder="받으실 분"
                  name="name"
                  onChange={handleInput}
                ></DetailInput>
              </div>
            </div>
            <InputDiv>
              <InputValP name="address" onChange={handleInput}>
                {itemAddrss}
              </InputValP>
              <SeachBtn>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  재검색
                </span>
              </SeachBtn>
            </InputDiv>
            <div style={{ paddingBottom: "12px" }}>
              <div style={{ position: "relative", height: "44px" }}>
                <DetailInput
                  placeholder="나머지 주소를 입력해주세요"
                  name="addressDetail"
                  onChange={handleInput}
                ></DetailInput>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <DefaultAddressLabel>
                <DefaultAddressInput type="checkbox"></DefaultAddressInput>
                <div>
                  <StyledIcon />
                </div>
                <span>기본 배송지로 저장</span>
              </DefaultAddressLabel>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <p style={{ fontSize: "12px", color: "153, 153, 153" }}>
                로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.
              </p>
            </div>
            <SaveBtn onClick={handleSave}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>저장</span>
            </SaveBtn>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default AddressMadal;

const SaveBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(149, 5, 38); // Updated color
  border: 0px none;
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%; /* 화면 상단에서 절반만큼 내려간 위치에 모달을 배치 */
  left: 50%; /* 화면 왼쪽에서 절반만큼 오른쪽으로 이동한 위치에 모달을 배치 */
  transform: translate(-50%, -50%); /* 화면 중앙에 모달을 정확히 배치 */
  width: 400px; /* 모달의 가로 크기를 설정 */
  height: 500px; /* 모달의 세로 크기를 설정 */
  background: white;
  z-index: 1000;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Strong = styled.div`
  display: block;
  padding: 40px 0px 34px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: rgb(51, 51, 51);
  text-align: center;
`;

const P = styled.p`
  display: block;
  padding-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(102, 102, 102);
`;

const InputDiv = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const addressInput = styled.input`
  display: inline-flex;
  overflow: hidden;
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0px 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  line-height: 42px;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InputValP = styled.p`
  display: inline-flex;
  overflow: hidden;
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0px 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  line-height: 42px;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SeachBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  border-radius: 3px;
  color: rgb(149, 5, 38);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(149, 5, 38);
`;

const DetailInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 14px;
  line-height: 42px;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`;

const DefaultAddressLabel = styled.label`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: top;
  line-height: normal;
  color: rgb(51, 51, 51);
  padding: 8px 0px 0px;
  font-size: 14px;
`;

const DefaultAddressInput = styled.input`
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
`;
