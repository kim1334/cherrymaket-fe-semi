import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestList = ({ item }) => {
  // console.log("suggestList:", item);
  return (
    <>
      <Wrapper to={`/detail/${item.productId}`}>
        <ListBox>
          <ListImageBox>
            <img src={item.productImage} alt="상품 이미지" />
            <div>
              <CartButton>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  alt="장바구니 아이콘"
                />
              </CartButton>
            </div>
          </ListImageBox>
        </ListBox>
        <ListTitleBox>
          <h3>{item.productName}</h3>
          <ListFooter>
            <PriceBox>
              <PirceDC>5%</PirceDC>
              <span>{(item.price * 0.95).toLocaleString("ko-kr")} 원</span>
            </PriceBox>
          </ListFooter>
          <RealPrice>{item.price.toLocaleString("ko-kr")}</RealPrice>
        </ListTitleBox>
      </Wrapper>
    </>
  );
};

export default SuggestList;

export const Wrapper = styled(Link)`
  margin-left: 6px;
  flex-shrink: 0;
  width: 264.75px;
  height: 100%;
  position: relative;
  transition-property: transform;
  text-decoration: none;
  color: inherit;
`;

export const ListBox = styled.div`
  color: rgb(51, 51, 51);
  cursor: pointer;
  width: 249px;
`;
export const ListImageBox = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  height: 320px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const CartButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  & img {
    width: 45px;
    height: 45px;
  }
`;

export const ListTitleBox = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
  & h3 {
    font-size: 16px;
    line-height: 1.45;
    font-weight: 400;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const ListFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;

  & span {
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
  }
`;

export const PirceDC = styled.span`
  color: rgb(250, 98, 47);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 7px;
`;

export const RealPrice = styled.span`
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
`;
