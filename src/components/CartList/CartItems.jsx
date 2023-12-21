import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import styled from "styled-components";
import CartMap from "./CartMap";

const CartItems = () => {
  const [cartData, setCartData] = useState([null]);

  const cart = useSelector((state) => state.cart.cart);

  console.log(cartData);

  const dispatch = useDispatch();

  useEffect(() => {
    // cart 객체가 변경되었을 때 cartData 상태를 업데이트합니다.
    if (cart && cart.itemsByType) {
      const newCartData = Object.values(cart.itemsByType).flat();
      setCartData(newCartData);
    } else {
      // cart 객체 또는 itemsByType이 존재하지 않는 경우, cartData를 빈 배열로 설정합니다.
      setCartData([]);
    }
  }, [cart]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 한 번만 실행되도록 dispatch(getCartAysnc())를 호출합니다.
    dispatch(getCartAysnc());
  }, []);

  return (
    <ListWrap>
      {cartData?.map((item, index) => (
        <CartMap key={index} item={item} />
      ))}
    </ListWrap>
  );
};
export default CartItems;

const ListWrap = styled.ul`
  border-top: 1px solid black;
`;

