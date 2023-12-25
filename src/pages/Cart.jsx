import React from "react";
import styled from "styled-components";
import Layouts from "../common/Layout";
import Header from "../common/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "../components/CartList/CartItems";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../common/Footer/Footer";
import { calcPrice } from "../redux/modules/cartSlice";
import { IoHomeOutline } from "react-icons/io5";
import { getCartAysnc } from "../redux/modules/cartSlice";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart?.totalPrice);
  const isLoggedIn = useSelector((state) => state.login?.isLoggedIn);
  const [userAddress, setUserAddress] = useState([]);
  const baseUrl = process.env.REACT_APP_API;
  const access_token = sessionStorage.getItem('accessToken');
  const [totalDiscounted, setTotalDiscounted] = useState(0);

  const deliveryFee = 2500;

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcPrice(cartData));
  }, [cartData, dispatch]);


  useEffect(() => {
    if (cart && cart.itemsByType) {
      const newCartData = Object.values(cart.itemsByType).flat();
      setCartData(newCartData);
    } else {
      setCartData([]);
    }
  }, [cart]);

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


useEffect(() => {
 
  
    // 디스카운트를 적용한 상품 가격을 계산하고 저장할 배열 초기화
    const calculatedDiscountAmounts = cartData.map((item) => {
      if (item.discountedPrice !== null) {
        return (item.price - item.discountedPrice) * item.quantity;
      } else {
        return 0; // 할인이 적용되지 않은 경우 할인 금액은 0으로 처리
      }
    });
    
    const totalDiscountAmount = calculatedDiscountAmounts.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );


    setTotalDiscounted(totalDiscountAmount);
}, [cartData]); 

const filteredData = cartData?.filter((item) => item.discountedPrice !== null);

const handleGetTotalPrice = () => {
  dispatch(getCartAysnc());
}


  return (
    <>
    <Header cartList = {cart}/>
    < >
      <Layouts>
        <JustCart>
          <h2 style={{marginRight:"30px", marginTop: "10px"}}>장바구니</h2>
        </JustCart>
        <CartWrap >
          <LeftSide>
            <SelectNav></SelectNav>
            <CartContainer>
              <CartItems handleGetTotalPrice={handleGetTotalPrice}></CartItems>
            </CartContainer>
            <SelectNav></SelectNav>
          </LeftSide>
          <RightSide>
            <CartStatusWrap>
            <SelectNav></SelectNav>
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
                    <IoHomeOutline />&nbsp;
                       <span style={{marginBottom : "2px"}}>기본 배송지</span>
                    </span>
                  </button>
                )}
              </SearchLocation>
              <TotalPrice >
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
                    {(totalDiscounted).toLocaleString("ko-kr")}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>배송비</span>
                  <span style={{ fontSize: "18px" }}>
                  {(cartData?.length > 0 ? deliveryFee : 0).toLocaleString("ko-kr")}
                    <span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <FreeDelivery>
                  <span>
                    {/* {40000 - totalPrice >= 0 ? 40000 - totalPrice : 0} */}
                  </span>
                  주문 금액에 따라 상이할 수 있음
                  <span></span>
                </FreeDelivery>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>결제예정금액</span>
                  <span style={{ fontSize: "20px" }}>
                    {(cartData?.length > 0 ? totalPrice - totalDiscounted + deliveryFee : 0).toLocaleString("ko-kr")}
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
    <Footer />
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
padding: 5px 10px 16px 2px;

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
    border: 1px solid rgb(149, 5, 38);
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
      color: rgb(149, 5, 38);
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
  color: rgb(149, 5, 38);
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
    background-color: rgb(149, 5, 38);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    width: 100%;
    height: 56px;
  }
`;
