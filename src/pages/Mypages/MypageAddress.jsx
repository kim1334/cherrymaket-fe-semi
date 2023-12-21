import MypageMenu from "../../components/Mypage/MypageMenu.jsx";
import Header from "../../common/Header/Header.jsx";
import Mypage from "./Mypage.jsx";
import {
  Title,
  TitleHead,
  TitleSpan,
  TitleWraper,
  FlexWrapper,
  Container,
  SubTitle,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import styled from "styled-components";
import AddressBox from "../../components/Mypage/AddressBox.jsx";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import AddressMadal from "../../components/PopUp/AddressMadal.jsx";

const MypageAddress = () => {
  const [addressItem, setAddressItem] = useState([]);
  const baseUrl = process.env.REACT_APP_API;
  const access_token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}/customer/address/my-list`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        console.log(response.data);
        setAddressItem(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const [modal, setModal] = useState(false);
  const [isAddressMadal, setIsAddressMadal] = useState(false);
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const showModal = () => {
    setModal(!modal);
  };

  const scriptUrl =
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    fullAddress = fullAddress;
    
    // 가져온 fullAddress를 state에 저장!
    setIsAddressMadal(true);
    setAddress(fullAddress);
    setZipCode(data.zonecode);
  };

  const openAddressModal = () => {
    setIsAddressMadal(true);
  };

  const closeAddressModal = () => {
    setIsAddressMadal(false);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };


  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper>
            <Title>
              <TitleHead>배송지관리</TitleHead>
              <TitleSpan>찜한 상품은 최대 200개까지 저장됩니다.</TitleSpan>
            </Title>
            <div>
              <SecondDiv>
                <div>
                  <StBtn onClick={handleClick}>
                    <Span1>
                      <StyledImg
                        src="https://res.kurly.com/pc/ico/2006/ico_add_16x16.svg"
                        alt="새 배송지 추가"
                      />
                      새 배송지 추가
                    </Span1>
                  </StBtn>
                  <AddressMadal
                    isOpen={isAddressMadal}
                    onClose={closeAddressModal}
                    itemAddrss={address}
                    zipCode={zipCode}
                  />
                </div>
              </SecondDiv>
            </div>
          </TitleWraper>
          <SubTitle>
            <TextDiv style={{ flexBasis: "60px" }}>선택</TextDiv>
            <TextDiv style={{ flex: "1 1 0%" }}>주소</TextDiv>
            <TextDiv style={{ flexBasis: "120px" }}>받으실 분</TextDiv>
            <TextDiv style={{ flexBasis: "100px" }}>연락처</TextDiv>
            <TextDiv style={{ flexBasis: "100px" }}>배송유형</TextDiv>
            <TextDiv style={{ flexBasis: "60px" }}>수정</TextDiv>
          </SubTitle>
          <UlWrapper>
            {addressItem.map((item) => (
                    <AddressBox key={item.addressId} item={item}/>
            ))}
          </UlWrapper>
        </Container>
      </FlexWrapper>
      <FixedSiderbar />
      <detailModal />
      <Footer />
    </>
  );
};

export default MypageAddress;

const TextDiv = styled.div`
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`;

const SecondDiv = styled.div`
  flex: 1 1 0%;
  text-align: right;
`;

const StBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 60px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Span1 = styled.span`
  font-weight: 500;
  line-height: 24px;
`;

const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 5px;
  vertical-align: top;
`;
