import React from 'react';
import Header from '../common/Header/Header';
import styled from 'styled-components';
import OrderDelivery from '../components/Order/OrderDelivery';
import OrderSheetbottom from '../components/Order/OrderSheetbottom';


const OrderProduct = () => {
    return (
     
        <OrderProductWrap>
        <OrderTitles>주문상품</OrderTitles>
        <button data-testid="fold-button"></button>
        </OrderProductWrap>

    )
}

const OrderProductList = () => {
    return (
        <ProductList>
             상품을 주문합니다
        </ProductList>
    )
};

const OrderUser = () => {
    return (
        <div>
            <orderUserContainer>
              <OrderTitles>주문자 정보</OrderTitles>
            </orderUserContainer>
            <OrderUserInfoContainer>
            <OrderUserInfoItem>
                <OrderUserInfoTitle>보내는분</OrderUserInfoTitle>
                <OrderUserInfoNameContainer><OrderUserInfoName>김주영</OrderUserInfoName></OrderUserInfoNameContainer>
            </OrderUserInfoItem>
            <OrderUserInfoItem>
                <OrderUserInfoTitle>휴대폰</OrderUserInfoTitle>
                <OrderUserInfoNameContainer><OrderUserInfoName>010-4288-1828</OrderUserInfoName></OrderUserInfoNameContainer>
            </OrderUserInfoItem>
            <OrderUserInfoItem>
            <OrderUserInfoTitle>이메일</OrderUserInfoTitle>
            <OrderUserInfoNameContainer>
                mo131@naver.com
                <p><small>이메일을 통해 주문처리과정을 보내드립니다.</small></p>
                <p><small>정보변경은 마이컬리 > 개인정보 수정 메뉴에서 가능합니다.</small></p>
            </OrderUserInfoNameContainer>
            </OrderUserInfoItem>
        </OrderUserInfoContainer>
        </div>
    )
};


const OrderUserInfoContainer = styled.div`
padding: 10px 0px;
`;

const OrderUserInfoItem = styled.div`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 8px 0px;
`;

const OrderUserInfoName = styled.div`
display: inline-flex;
-webkit-box-align: center;
align-items: center;
line-height: 24px;
`;

const OrderUserInfoNameContainer = styled.div`
flex: 1 1 0%;
`;

const OrderUserInfoTitle = styled.span`
    display: inline-block;
    width: 160px;
    margin-right: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.32px;
    vertical-align: top;    
`;

const Order = () => {
    return (
        <div>
          <Header />
          <Container>
              <Title>주문서</Title>
              <OrderWrap>
              <OrderProduct />
              <OrderProductList />
              <OrderUser />
              <OrderDelivery />
                <OrderSheetbottom />
              </OrderWrap>
          </Container>
            <h1>나와라 나와라 나와라라</h1>
        </div>
    )
}

export default Order;

const Container = styled.div`
  width: 1050px;
  padding: 60px 0px;
  margin: 0px auto;
`;

const Title = styled.h2`
font-weight: 500;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.5px;
padding-bottom: 48px;
text-align: center;
    `;

const OrderWrap = styled.div`
letter-spacing: -0.5px;
`;

const OrderProductWrap = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
border-bottom: 1px solid rgb(51, 51, 51);
`;

const ProductList = styled.div`
    padding: 28px 0px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const OrderTitles = styled.h3`
padding: 16px 0px;
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
line-height: 29px;
}
`;

const orderUserContainer = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 75px;
    border-bottom: 1px solid rgb(51, 51, 51);
`;
