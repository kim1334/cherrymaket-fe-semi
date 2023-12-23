import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import styled from "styled-components";
import CartMap from "./CartMap";

const CartItems = () => {
  
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart && cart.itemsByType) {
      const newCartData = Object.values(cart.itemsByType).flat();
      setCartData(newCartData);
    } else {
      setCartData([]);
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getCartAysnc());
  }, [dispatch]);

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

