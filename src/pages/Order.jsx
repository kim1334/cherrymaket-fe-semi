import React from 'react';
import Header from '../common/Header/Header';
import styled from 'styled-components';
import OrderDelivery from '../components/Order/OrderDelivery';
import OrderSheetbottom from '../components/Order/OrderSheetbottom';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderProductItem from '../components/Order/OrderProductItem';
import { instance } from '../redux/modules/instance';
import axios from 'axios';
import Footer from '../common/Footer/Footer';


const OrderProduct = ({ isUp, toggleIcon }) => {

    return (

        <OrderProductWrap>
            <OrderTitles>주문상품</OrderTitles>
            <button data-testid="fold-button" style={{ backgroundColor: "transparent", marginTop: "17px", cursor: "pointer", border: "none" }}
                onClick={toggleIcon}>{isUp ? <ArrowIconUp /> : <ArrowIconDown />}</button>
        </OrderProductWrap>

    )
}

const OrderProductList = ({ isUp, orderList }) => {

    console.log(orderList?.length);
    console.log(orderList[0]?.goodsName);
    return (
        <>

            {!isUp ? (
                <ProductList>
                    {orderList[0]?.goodsName}{' '}
                    {orderList?.length === 1 ? (
                        "상품을 주문합니다"
                    ) : (
                        <span>외 <span style={{ color: 'rgb(149, 5, 38)' }}>{orderList.length - 1}개</span> 상품을 주문합니다</span>
                    )}
                </ProductList>
            ) : (
                orderList.map((item) => (
                    <OrderProductItem key={item.cartId} item={item} />
                ))
            )}

        </>
    )
};

const OrderUser = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const access_token = sessionStorage.getItem('accessToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                };
                const response = await instance.get("/account/my-info", config);
                setUserData(response.data);
            } catch (error) {
            }
        };

        fetchUserData(); // 컴포넌트가 마운트될 때 한 번 데이터 가져오기
    }, []);

    return (
        <div>
            <orderUserContainer>
                <OrderTitles>주문자 정보</OrderTitles>
            </orderUserContainer>
            <OrderUserInfoContainer>
                <OrderUserInfoItem>
                    <OrderUserInfoTitle>보내는분</OrderUserInfoTitle>
                    <OrderUserInfoNameContainer><OrderUserInfoName>{userData.name}</OrderUserInfoName></OrderUserInfoNameContainer>
                </OrderUserInfoItem>
                <OrderUserInfoItem>
                    <OrderUserInfoTitle>휴대폰</OrderUserInfoTitle>
                    <OrderUserInfoNameContainer><OrderUserInfoName>{userData.contact}</OrderUserInfoName></OrderUserInfoNameContainer>
                </OrderUserInfoItem>
                <OrderUserInfoItem>
                    <OrderUserInfoTitle>이메일</OrderUserInfoTitle>
                    <OrderUserInfoNameContainer >
                        {userData.email}
                        <p style={{color: "rgb(149, 5, 38)"}}><small>이메일을 통해 주문처리과정을 보내드립니다.</small></p>
                        <p style={{color: "rgb(149, 5, 38)"}}><small>정보변경은 마이컬리 > 개인정보 수정 메뉴에서 가능합니다.</small></p>
                    </OrderUserInfoNameContainer>
                </OrderUserInfoItem>
            </OrderUserInfoContainer>
        </div>
    )
};


const Order = () => {
    const [orderList, setOrderList] = useState([]);
    const cartList = useSelector((state) => state.cart?.cart);
    const [isUp, setIsUp] = useState(false);
    console.log(cartList);

    useEffect(() => {
        if (cartList && cartList.itemsByType) {
            const newCartData = Object.values(cartList?.itemsByType).flat();
            setOrderList(newCartData);
        } else {
            setOrderList([]);
        }
    }, [cartList]);

    console.log(orderList);




    const toggleIcon = () => {
        setIsUp(!isUp);
    };
    return (
        <div>
            <Header />
            <Container>
                <Title>주문서</Title>
                <OrderWrap>
                    <OrderProduct isUp={isUp} toggleIcon={toggleIcon} />
                    <OrderProductList isUp={isUp} orderList={orderList} />
                    <OrderUser />
                    <OrderDelivery />
                    <OrderSheetbottom />
                </OrderWrap>
            </Container>
            <Footer />
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

// 오더 유저쪽

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
// 여기까지 

const ArrowIconDown = styled(IoIosArrowDropdown)`
  font-size: 27px;
`;

const ArrowIconUp = styled(IoIosArrowDropup)`
  font-size: 27px;
`;

const OrderListTitel = styled.div`
padding: 28px 0px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    border-bottom: 1px solid rgb(244, 244, 244);
`;