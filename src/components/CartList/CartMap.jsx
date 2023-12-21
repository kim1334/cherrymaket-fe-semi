import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { calcPrice, deleteCartAysnc } from "../../redux/modules/cartSlice";

const CartMap = ({ list }) => {
  const cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];
  const ItemCount = cartItem.find(
    (item) => list.productId === item.productId
  )?.quantity;

  const [count, setCount] = useState(ItemCount || list.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addItem = {
    productId: list.productId,
    quantity: list.quantity,
    price: list.price * count,
  };

  useEffect(() => {
    let isExists = false;
    cartItem.forEach((item) => {
      if (item.productId === list.productId) {
        // 로컬 스토리지 아이디 중복이면 내용만 수정
        item.quantity = count || list.quantity;
        item.price = list.price * count;
        isExists = true;
      }
    });
    if (!isExists) {
      // 중복이 아니면 푸쉬
      cartItem.push(addItem);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
    dispatch(calcPrice(cartItem));
  }, [count]);

  const deleteCart = () => {
    const cartFilter = cartItem?.filter((item) => {
      return item.productId !== list.productId;
    });
    // console.log(cartFilter);
    localStorage.setItem("cartItems", JSON.stringify(cartFilter));
    dispatch(deleteCartAysnc(list.productId));
    navigate("/cart");
    window.location.reload();
  };

  return (
    <CartLine>
      <CheckButton />
      <Img src={list.productImage}></Img>
      <Title>{list.productName}</Title>
      <ButtonWrap>
        {count > 0 ? (
          <Minus
            onClick={() => {
              setCount(count - 1);
            }}
          ></Minus>
        ) : (
          <Minus
            disabled={true}
            onClick={() => {
              setCount(count - 1);
            }}
          ></Minus>
        )}

        <Number>{count}</Number>
        <Plus
          onClick={() => {
            setCount(count + 1);
          }}
        ></Plus>
      </ButtonWrap>
      <CostWrap>
        <SaleCost>
          {(count * list.price * 0.95).toLocaleString("ko-kr")}
        </SaleCost>
        <PrimeCost>{(count * list.price).toLocaleString("ko-kr")}</PrimeCost>
      </CostWrap>
      <DeleteButton onClick={deleteCart}>
        <span></span>
      </DeleteButton>
    </CartLine>
  );
};
export default CartMap;

const CartLine = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 20px 0px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
`;

const CheckButton = styled.div`
  margin: 0 26px 0px 0;
`;

const Img = styled.img`
  width: 60px;
  height: 78px;
  margin-right: 20px;
  object-fit: cover;
`;

const Title = styled.p`
  width: 345px;
  margin-right: 20px;
  font-weight: 600;
  overflow: hidden;
`;

//수량 버튼 관련 묶음
const ButtonWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
`;

const Minus = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  vertical-align: top;
  :disabled {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  }
`;

const Number = styled.div`
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;

const Plus = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
  vertical-align: top;
`;
//가격관련 묶음

const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const SaleCost = styled.span`
  width: 127px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 51, 51);
`;

const PrimeCost = styled.span`
  width: 127px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  padding-top: 4px;
`;

//삭제 버튼
const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 9px;
  background-color: transparent;
  cursor: pointer;

  span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    background-size: cover;
    background-position: center center;
  }
`;
