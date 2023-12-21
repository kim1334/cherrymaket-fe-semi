import React, { useEffect, useState, useRef } from "react";
import {
  SpeacilDealsContainer,
  SpeacilDealsBox,
  TimerBox,
  TimerCount,
  ItemBox,
  ItemImageBox,
  ItemSticker,
  ItemTextBox,
  ItemFooter,
  EventPriceBox,
} from "./styles";
import { CartButton } from "../Suggest/SuggestList";

const SpeacilDeals = ({ children }) => {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, SetSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      SetSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SpeacilDealsContainer>
        <SpeacilDealsBox>
          <TimerBox>
            <h2>새해특가</h2>
            <h3>24시간 한정 특가</h3>

            <TimerCount>
              <span> {hour < 10 ? "0" + hour : hour}:</span>
              <span> {minute < 10 ? "0" + minute : minute}:</span>
              <span> {second < 10 ? "0" + second : second}</span>
            </TimerCount>
            <p>망설이면 늦어요!</p>
          </TimerBox>
          <ItemBox>
            <div>
              <ItemImageBox>
                <img
                  src="https://img-cf.kurly.com/shop/data/goods/163177531664z0.jpg"
                  alt="상품 이미지"
                />
                <ItemSticker>
                  <span>새해특가</span>
                </ItemSticker>
                <CartButton>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="장바구니 아이콘"
                  />
                </CartButton>
              </ItemImageBox>
              <ItemTextBox>
                <div>하루 한 알로 섭취하는 오메가3</div>
                <h3>솔가 오메가-3 700 (60일분)</h3>
                <ItemFooter>
                  <EventPriceBox>
                    <span>57%</span>
                    <span>19,780원</span>
                    <span>46,000원</span>
                  </EventPriceBox>
                </ItemFooter>
              </ItemTextBox>
            </div>
          </ItemBox>
        </SpeacilDealsBox>
      </SpeacilDealsContainer>
    </>
  );
};

export default SpeacilDeals;
