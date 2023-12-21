import MypageMenu from "../../components/Mypage/MypageMenu.jsx";
import Header from "../../common/Header/Header.jsx";
import Mypage from "./Mypage.jsx";
import {
  FlexWrapper,
  Container,
  SubTitle,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import {
  SubTitleLine,
  SubTitleWriter,
} from "../../components/CustomerService/QnaBoard.jsx";
import styled from "styled-components";
import ProductInquiryBox from "../../components/Mypage/ProductInpquryBox.jsx";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";

const ProductInquiry = () => {
  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper>
            <Title>
              <TitleLastDiv>
              <Span>상품문의</Span>
              </TitleLastDiv>
            </Title>
            <TitleUl>
              <TitleLi>
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </TitleLi>
              <TitleLi>
                배송관련, 주문(취소/교환/환불) 관련 문의 및 요청사항은 마이컬리
                내 <A href="/qna">1:1</A> 문의에 남겨주세요.
              </TitleLi>
            </TitleUl>
          </TitleWraper>
          <SubTitle>
            <SubTitleLine>제목</SubTitleLine>
            <SubTitleWriter>작성일</SubTitleWriter>
            <SubTitleWriter>답변상태</SubTitleWriter>
          </SubTitle>
          <UlWrapper>
            <ProductInquiryBox />
          </UlWrapper>
        </Container>
      </FlexWrapper>
      <FixedSiderbar />
      <Footer />
    </>
  );
};

export default ProductInquiry;

const TitleWraper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
`;

const TitleLastDiv = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`;


const Span = styled.span`
font-weight: 500;
font-size: 24px;
color: rgb(51, 51, 51);
letter-spacing: -0.5px;
line-height: 48px;
`;

const TitleUl = styled.ul`
margin-top: 20px;
margin-bottom: 18px;
font-size: 14px;
line-height: 24px;
font-weight: 400;
color: rgb(153, 153, 153);
list-style-type: none;
`;

const TitleLi = styled.li`
  padding-left: 12px;
  display: list-item;
  text-align: -webkit-match-parent;

  &::before {
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 11px 6px 0px -10px;
    background: rgb(153, 153, 153);
    vertical-align: top;
    content: "";
`;

const A = styled.a`
  font-weight: 700;
  color: rgb(153, 153, 153);
  text-decoration: underline;
`;


