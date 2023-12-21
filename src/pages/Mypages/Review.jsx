import React, { useEffect, useState } from 'react';
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
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import styled, { css } from "styled-components";
import WriteReview from '../../components/Mypage/WriteReview.jsx';
import WrittenReview from '../../components/Mypage/WrittenReview.jsx';
import FixedSiderbar from '../../common/FiexDiderbar/FixedSiderbar.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import axios from 'axios';




const Review = () => {

  const [myReview, setMyReview] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;
  const access_token = sessionStorage.getItem('accessToken');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}/goods-review/list-my`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        });

        console.log(response);
        setMyReview(response.data.content);

      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  console.log(myReview);



  const [activeTab, setActiveTab] = useState('write');

  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>

        <MypageMenu />
        <Container>

          <TitleWraper s>
            <Title>
              <TitleHead>상품후기</TitleHead>
            </Title>
          </TitleWraper>
          <BtnDiv>
            <TabButton
              type="button"
              active={activeTab === 'write'}
              onClick={() => setActiveTab('write')}
            >
              작성가능 후기
            </TabButton>
            <TabButton
              type="button"
              active={activeTab === 'written'}
              onClick={() => setActiveTab('written')}
            >
              작성한 후기
            </TabButton>
          </BtnDiv>
          {activeTab === 'write' && <WriteReview />}
          {activeTab === 'written' && 
            <Div1>
              <CountSpan>총 {myReview.length}개</CountSpan>
              <GuideBtn><span>작성 시 유의사항</span><GuideIcon></GuideIcon></GuideBtn>
              {myReview.map((item) => (
              <WrittenReview item={item} />
              ))}
            </Div1>
        }

        </Container>
      </FlexWrapper>
      <FixedSiderbar />
      <Footer />
    </>
  )
}

export default Review;

const BtnDiv = styled.div`
display: flex;
flex-wrap: nowrap;
width: 100%;
height: 60px;
background-color: rgb(250, 250, 250);
`;

const TabButton = styled.button`
  flex: 1 1 0%;
  border: 1px solid rgb(244, 244, 244);
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  cursor: pointer;

  /* 선택되지 않은 버튼의 하단 테두리 스타일 */
  border-bottom: 1px solid rgb(244, 244, 244);

  /* 선택된 버튼에 대한 스타일 */
  ${(props) =>
    props.active
      ? css`
          color: rgb(95, 0, 128);
          border-color: rgb(244, 244, 244);
          border-bottom: none; /* 선택된 탭은 하단 테두리가 없음 */
          background-color: rgb(255, 255, 255); // 선택된 버튼의 배경색
        `
      : css`
          background-color: #f8f8f8; // 선택되지 않은 버튼의 배경색
        `}
`;

const Div1 = styled.div`
position: relative;
width: 100%;
min-height: 600px;
border-top: 1px solid rgb(51, 51, 51);
margin-top: 69px;
`;

export const GuideBtn = styled.button`
position: absolute;
top: -38px;
right: 3px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
font-weight: 500;
font-size: 14px;
line-height: 14px;
color: rgb(153, 153, 153);
background-color: transparent;
`;

export const GuideIcon = styled.span`
display: inline-block;
width: 20px;
height: 20px;
margin-top: 2px;
background: url(https://res.kurly.com/mobile/ico/2010/ico_question_v2.svg) 100% 50% / 20px 20px no-repeat;
vertical-align: top;
`;

export const CountSpan = styled.span`
position: absolute;
    top: -38px;
    left: 0px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
`;



