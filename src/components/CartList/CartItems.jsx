import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import styled from "styled-components";
import CartMap from "./CartMap";
import { BsCartX } from "react-icons/bs";

const CartItems = ({ handleGetTotalPrice }) => {
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.cart?.cart);
  const dispatch = useDispatch();
  const [frozenData, setFrozenData] = useState([]);
  const [refrigeratorData, setRefrigeratorData] = useState([]);
  const [roomTemperatureData, setRoomTemperatureData] = useState([]);

  console.log(cart)

  useEffect(() => {
    if (cart && cart.itemsByType) {
      const newCartData = Object.values(cart.itemsByType).flat();
      setCartData(newCartData);
    } else {
      setCartData([]);
    }
  }, [cart]);

  useEffect(() => {
    if (cart && cart.itemsByType && cart.itemsByType.FROZEN) {
      const frozen = cart.itemsByType.FROZEN;
      setFrozenData(frozen)
      console.log(frozenData)
    } else {
      setFrozenData([]);
    }
    if (cart && cart.itemsByType && cart.itemsByType.REFRIGERATOR) {
      const refrigerator = cart.itemsByType.REFRIGERATOR;
        setRefrigeratorData(refrigerator)
      console.log(refrigeratorData)
    } else {
      setRefrigeratorData([]);
    }
    if (cart && cart.itemsByType && cart.itemsByType.ROOM_TEMPERATURE) {
      const roomTemperature = cart.itemsByType.ROOM_TEMPERATURE;
      setRoomTemperatureData(roomTemperature)
      console.log(roomTemperatureData)
    } else {
      setRoomTemperatureData([]);
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getCartAysnc());
  }, [dispatch]);



  return (
    <>
      {cartData?.length === 0 && <CartX><CartXP><SearchIcon></SearchIcon>   장바구니에 담긴 상품이 없습니다.</CartXP></CartX>}
      {refrigeratorData?.length > 0 && <ListWrap>
          <H4 style={{borderBottom: '1px solid rgba(94, 196, 158, 0.5)'}}>
            <TypeSpan>
                <TypeSpan1>
                  <ImgSpanrefrigerator></ImgSpanrefrigerator>
                </TypeSpan1>
              냉장 상품
            </TypeSpan>
          </H4>
        {refrigeratorData?.map((item, index) => (
          <CartMap key={index} item={item} handleGetTotalPrice={handleGetTotalPrice} />
        ))}
        </ListWrap>}
        {frozenData?.length > 0 && <ListWrap>
          <H4 style={{borderBottom: '1px solid rgba(111, 175, 243, 0.5)'}}>
            <TypeSpan>
                <TypeSpan1>
                  <FrozenDataSpan></FrozenDataSpan>
                </TypeSpan1>
              냉동 식품
            </TypeSpan>
          </H4>          
        {frozenData?.map((item, index) => (
          <CartMap key={index} item={item} handleGetTotalPrice={handleGetTotalPrice} />
        ))}
        </ListWrap>}
        {roomTemperatureData?.length > 0 && <ListWrap>
          <H4 style={{borderBottom: '1px solid rgba(255, 155, 92, 0.5)'}}>
            <TypeSpan>
                <TypeSpan1>
                  <RoomTemperatureSpan></RoomTemperatureSpan>
                </TypeSpan1>
              상온 상품
            </TypeSpan>
          </H4>          
        {roomTemperatureData?.map((item, index) => (
          <CartMap key={index} item={item} handleGetTotalPrice={handleGetTotalPrice} />
        ))}
        </ListWrap>}
    </>
  );
};
export default CartItems;

const SearchIcon = styled(BsCartX )`
font-size: 30px;
color: rgb(181, 181, 181);

`;

const RoomTemperatureSpan = styled.span`
width: 30px;
height: 30px;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNSA0KSIgc3Ryb2tlPSIjRkY5QjVDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMSIgcj0iNiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMS41IDB2Mk0xOS4yNzggMy4yMjJsLTEuNDE0IDEuNDE0TTIyLjUgMTFoLTJNMTkuMjc4IDE4Ljc3OGwtMS40MTQtMS40MTRNMTEuNSAyMnYtMk0zLjcyMiAxOC43NzhsMS40MTQtMS40MTRNLjUgMTFoMk0zLjcyMiAzLjIyMmwxLjQxNCAxLjQxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
display: inline-block;
background-size: cover;
background-position: center center;
`;

const FrozenDataSpan = styled.span`
width: 30px;
    height: 30px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNS4wNDQgNGEuNzUuNzUgMCAwIDEgLjc0NC42NDhsLjAwNi4xMDJ2Mi42ODlsMS43Mi0xLjcyYS43NS43NSAwIDAgMSAuOTc3LS4wNzJsLjA4NC4wNzNhLjc1Ljc1IDAgMCAxIC4wNzIuOTc2bC0uMDcyLjA4NC0yLjc4IDIuNzgtLjAwMSA0LjM5IDMuODAyLTIuMTk0IDEuMDE4LTMuNzk4YS43NS43NSAwIDAgMSAxLjQ3LjI3OWwtLjAyLjEwOS0uNjMgMi4zNSAyLjMyOS0xLjM0NmEuNzUuNzUgMCAwIDEgLjgzNCAxLjI0M2wtLjA4NC4wNTctMi4zMjggMS4zNDQgMi4zNDguNjNhLjc1Ljc1IDAgMCAxIC41NS44MDlsLS4wMi4xMWEuNzUuNzUgMCAwIDEtLjgxLjU1bC0uMTA4LS4wMi0zLjc5OC0xLjAxOC0zLjgwMyAyLjE5NCAzLjgwMiAyLjE5NiAzLjc5OS0xLjAxOGEuNzUuNzUgMCAwIDEgLjQ5MyAxLjQxM2wtLjEwNS4wMzYtMi4zNS42MyAyLjMzIDEuMzQ0YS43NS43NSAwIDAgMS0uNjU5IDEuMzQ0bC0uMDkxLS4wNDQtMi4zMjgtMS4zNDQuNjI4IDIuMzQ4YS43NS43NSAwIDAgMS0uNDI1Ljg4MmwtLjEwNS4wMzdhLjc1Ljc1IDAgMCAxLS44ODItLjQyNmwtLjAzNy0uMTA1LTEuMDE3LTMuNzk3LTMuODAzLTIuMTk3djQuMzkxbDIuNzggMi43OGEuNzUuNzUgMCAwIDEtLjk3NiAxLjEzNGwtLjA4NC0uMDczLTEuNzItMS43MnYyLjY5YS43NS43NSAwIDAgMS0xLjQ5My4xMDJsLS4wMDctLjEwMnYtMi42ODhsLTEuNzIgMS43MThhLjc1Ljc1IDAgMCAxLS45NzYuMDczbC0uMDg0LS4wNzNhLjc1Ljc1IDAgMCAxLS4wNzMtLjk3NmwuMDczLS4wODQgMi43OC0yLjc4di00LjM5MWwtMy44MDEgMi4xOTUtMS4wMTggMy43OThhLjc1Ljc1IDAgMCAxLTEuNDctLjI3OWwuMDItLjEwOS42My0yLjM1LTIuMzI5IDEuMzQ2YS43NS43NSAwIDAgMS0uODM1LTEuMjQzbC4wODUtLjA1NyAyLjMyOC0xLjM0NC0yLjM0OC0uNjNhLjc1Ljc1IDAgMCAxLS41NTEtLjgwOWwuMDItLjExYS43NS43NSAwIDAgMSAuODEtLjU1bC4xMS4wMiAzLjc5NyAxLjAxOCAzLjgwMi0yLjE5NS0zLjgwMS0yLjE5NS0zLjc5OSAxLjAxOGEuNzUuNzUgMCAwIDEtLjQ5My0xLjQxM2wuMTA1LS4wMzYgMi4zNS0uNjMtMi4zMy0xLjM0NGEuNzUuNzUgMCAwIDEgLjY1OS0xLjM0NGwuMDkxLjA0NCAyLjMyOCAxLjM0NC0uNjI4LTIuMzQ4YS43NS43NSAwIDAgMSAuNDI1LS44ODJsLjEwNS0uMDM3YS43NS43NSAwIDAgMSAuODgyLjQyNmwuMDM3LjEwNSAxLjAxNyAzLjc5NyAzLjgwMiAyLjE5NnYtNC4zOWwtMi43OC0yLjc4YS43NS43NSAwIDAgMSAuOTc3LTEuMTM0bC4wODQuMDczIDEuNzIgMS43MTlWNC43NWEuNzUuNzUgMCAwIDEgLjc1LS43NXoiIGZpbGw9IiM2RkFGRjMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K);
    display: inline-block;
    background-size: cover;
    background-position: center center;
`;

const ImgSpanrefrigerator = styled.span`
width: 30px;
height: 30px;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVFQzQ5RSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjI3IDI1LjI1NWE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNi03LjYyN2MwLTIuODA4LTIuNTQyLTcuMTg0LTcuNjI2LTEzLjEyOEM5LjU0MiAxMC40NDQgNyAxNC44MiA3IDE3LjYyOGE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNyA3LjYyN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYyNyAyMC42NmEzLjgxMyAzLjgxMyAwIDAgMCAzLjgxMy0zLjgxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
display: inline-block;
background-size: cover;
background-position: center center;

`;

const TypeSpan1 = styled.span`
margin-right: 8px;
    vertical-align: top;
`;

const TypeSpan = styled.span`
display: flex;
-webkit-box-align: center;
align-items: center;
font-weight: 500;

`;

const H4 = styled.h4`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
height: 60px;
padding: 15px 5px 15px 0px;
border-top: 1px solid rgb(51, 51, 51);
font-weight: 700;
font-size: 18px;
line-height: 26px;

`;

const ListWrap = styled.ul`
  border-top: 1px solid black;
  
`;

const CartXP = styled.p`
    padding: 115px 0px;
    border-top: 1px solid rgb(51, 51, 51);
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgb(181, 181, 181);
`;

const CartX = styled.div`
border-bottom: 1px solid rgb(244, 244, 244);
margin-bottom: 30px
`;

