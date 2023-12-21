
import styled from 'styled-components';
import { GrFormNext } from "react-icons/gr";
import GoodsBox from './GoodsBox';
import DeliveryBox from './DeliveryBox';
import PaymentBox from './PaymentBox';
import OrderSender from './OrderSender';
import { H3, TitleContainer } from './Style.jsx';
import DelivertInfoBox from './DeliveryInfoBox';
import AddInfo from './AddInfo.jsx';
import { useState, useEffect } from 'react';


const ProductDetail = ({goodsDetails, orderCode}) => {
  const [goodsItem, setGoodsItem] = useState([]);
  const orderStatus = goodsDetails?.shippingDetailsInfo?.shippingStatus;

  

  useEffect(() => { // 프록스로 받은 값 goodsItem 에 저장

    if (goodsDetails.goodsDetailsInfo) {
      setGoodsItem(goodsDetails.goodsDetailsInfo);
    }
  }, [goodsDetails.goodsDetailsInfo]);


  return (
    <>
    <TitleContainer>
        <H3>주문번호 <Span> {orderCode}</Span></H3>
        <Spna1>배송 또는 상품에 문제가 있나요?&nbsp;&nbsp;&nbsp;<A href='/qna'>1:1문의<StyledIcon /></A></Spna1>
    </TitleContainer>
     {goodsItem.map((item) => (
       <GoodsBox key={item.id} item={item} orderStatus={orderStatus}/>
     ))}
    <BtnContainer>
      <Bnt><BtnSpan>전체 상품 다시 담기</BtnSpan></Bnt>
      <Bnt style={{marginLeft:'12px'}}><BtnSpan>전체 상품 주문 취소</BtnSpan></Bnt>
    </BtnContainer>
    <GuideSpan>주문취소는 [주문완료] 상태일 경우에만 가능합니다.</GuideSpan>
    </>
  )

}

export default ProductDetail;

const GuideSpan = styled.span`
display: block;
    margin-bottom: 60px;
    line-height: 1.43;
    text-align: center;
    color: rgb(102, 102, 102);
`;

const BtnSpan = styled.span`
font-weight: 500;
`;

const Bnt = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 200px;
    height: 56px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
`;

const BtnContainer = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
margin: 30px 0px 20px;
`;





const Span = styled.span`
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
letter-spacing: -0.43px;
`;

const Spna1 = styled.span`
flex: 1 1 0%;
    text-align: right;
    margin: 0px 4px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(102, 102, 102);
`;

const A = styled.a`
font-weight: 500;
    color: rgb(95, 0, 128);
`;

const StyledIcon = styled(GrFormNext)`
  position: relative;
  top: 2px; // 원하는 만큼 아래로 이동
`;