import React from "react";
import styled from "styled-components";
import Layouts from "../common/Layout";
import Header from "../common/Header/Header";
import { useSelector } from "react-redux";
import CartItems from "../components/CartList/CartItems";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {
  const CartList = useSelector((state) => state.cart.cart?.cart);
  const totalPrice = useSelector((state) => state.cart?.totalPrice);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [userAddress, setUserAddress] = useState([]);
  const baseUrl = process.env.REACT_APP_API;
  const access_token = sessionStorage.getItem('accessToken');

  let userData = [];
  if (sessionStorage.getItem("accessToken")) {
  userData = jwtDecode(sessionStorage.getItem("accessToken"));
}

useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get(`${baseUrl}/customer/address/my-list`, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      });
      console.log(response.data[0].address)
      setUserAddress(response.data[0].address + ' ' +response.data[0].addressDetail);

    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchData();
}, []);







  return (
    <>
      <Header CartList={CartList} />
      <Layouts>
        <JustCart>
          <h2>장바구니</h2>
        </JustCart>
        <CartWrap>
          <LeftSide>
            <SelectNav></SelectNav>
            <CartContainer>
              <CartItems></CartItems>
            </CartContainer>
            <SelectNav></SelectNav>
          </LeftSide>
          <RightSide>
            <CartStatusWrap>
              <SearchLocation>
                <h3>배송지</h3>
                <div>
                  {!isLoggedIn ? (
                    <p>
                      <span>배송지를 등록</span>하고
                      <br />
                      구매 가능한 상품을 확인하세요!
                    </p>
                  ) : (
                    <p>{userAddress}</p>
                  )}
                </div>
                {!userData.address && (
                  <button>
                    <span>
                      <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />
                      주소 확인
                    </span>
                  </button>
                )}
              </SearchLocation>
              <TotalPrice>
                <PriceWrap>
                  <span>상품금액</span>
                  <span style={{ fontSize: "18px" }}>
                    {totalPrice?.toLocaleString("ko-kr") || 0}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>상품할인 금액</span>
                  <span style={{ fontSize: "18px" }}>
                    {totalPrice * 0.05 || 0}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>배송비</span>
                  <span style={{ fontSize: "18px" }}>
                    {totalPrice >= 40000 ? 0 : "+3,000"}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <FreeDelivery>
                  <span>
                    {40000 - totalPrice >= 0 ? 40000 - totalPrice : 0}
                  </span>
                  원 추가주문 시,
                  <span>무료배송</span>
                </FreeDelivery>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>결제예정금액</span>
                  <span style={{ fontSize: "20px" }}>
                    {totalPrice * 0.95 || 0}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <Text>
                  <span>적립</span>
                  로그인 후 회원 등급에 따라 적립
                </Text>
              </TotalPrice>
              <Done>
                <Link to="/order">
                <button>주문하기</button>
                </Link>
              </Done>
            </CartStatusWrap>
          </RightSide>
        </CartWrap>
      </Layouts>
    </>
  );
};

export default Cart;

const JustCart = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0 50px 48px;

  h2 {
    font-size: 28px;
    font-weight: 600;
  }
`;

const CartWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 942px;
  max-height: 100%;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  width: 742px;
`;

const CartContainer = styled.div`
  height: auto;
`;

const SelectNav = styled.div`
  padding: 18px 10px 16px 2px;
  height: 60px;
`;

const ButtonWrap = styled.div`
  height: 26px;
  display: flex;

  span {
    border: 1px solid #dddddd;
    height: 14px;
    margin: 6px 21px 0px 22px;
  }

  button {
    border: none;
    background-color: transparent;
    font-weight: 600;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 600;

  input {
    width: 1px;
    height: 1px;
    border: none;
    visibility: hidden;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const RightSide = styled.div`
  width: 284px;
`;

const CartStatusWrap = styled.div`
  position: sticky;
  top: 4em;
  height: auto;
`;

const SearchLocation = styled.div`
  padding: 23px 19px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;

  button {
    width: 100%;
    height: 36px;
    border: 1px solid #5f0080;
    background-color: transparent;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    padding-top: 12px;
  }

  h3 {
    font-size: 16px;

    padding-left: 24px;
    background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg)
      0 50% no-repeat;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 16px;
  }

  span {
    &:first-child {
      color: #5f0080;
      font-weight: 600;
    }

    &:last-child {
      font-size: 12px;
      display: flex;
      align-items: center;
    }
  }
`;

const TotalPrice = styled.div`
  padding: 19px 18px 18px 20px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
`;
const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      width: 100px;
      font-weight: bold;
    }
  }
`;

const FreeDelivery = styled.p`
  color: #5f0080;
  text-align: right;
  font-size: 12px;
  padding-top: 4px;

  span {
    &:last-child {
      font-weight: bold;
    }
  }
`;
const Text = styled.div`
  font-size: 12px;
  text-align: right;
  padding-top: 15px;

  span {
    background-color: #ffbf00;
    font-size: 10px;
    padding: 2px 6px;
    margin: 0 4px 0 0;
    color: white;
    border-radius: 9px;
    text-align: center;
  }
`;

const Done = styled.div`
  padding: 20px 0 0;

  button {
    background-color: #5f0080;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    width: 100%;
    height: 56px;
  }
`;
