import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ItemTextDeliveryWrapper,
  ItemTextTitle,
  ItemTextPriceWrapper,
  ItemOriginalPrice,
  ItemSale,
  ItemPrice,
  OriginalPriceSt,
  ItemPriceWrapper,
} from "../NewestItem/ItemList.jsx";
import { useState } from 'react';
import CartModal from '../CartList/CartMadal.jsx';



export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const FixedCard = ({ item, openModal, closeModal, onItemClick }) => {
  if (!item || !item.goodsCode) {
    // item이나 item.goodsCode가 정의되지 않았을 경우 처리
    return null; // 또는 에러 처리를 수행하거나 다른 대안을 고려할 수 있음
  }



  const clickedItems = () => {
    const clickedItem = item.goodsCode;
    let savedItems = getFromLocalStorage('clickedItem') || [];

    // 이미 저장된 상품 중에서 클릭한 상품을 찾음
    const existingIndex = savedItems.indexOf(clickedItem);

    if (existingIndex !== -1) {
      // 이미 저장된 상품이면 해당 상품을 배열에서 제거
      savedItems = savedItems.filter((_, index) => index !== existingIndex);
    }

    // 배열 맨 앞에 클릭한 상품 추가
    savedItems = [clickedItem, ...savedItems.slice(0, 9)]; // 맨 앞에 추가하고, 배열 길이를 10으로 제한

    // 최근 본 상품 목록을 로컬 스토리지에 저장
    saveToLocalStorage('clickedItem', savedItems);
  };


  function generateImageUrl() { //오더코드로 이미지 url 생성
    const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
    const imageUrl = `${imageUrlBase}${item.goodsCode}/${item.goodsCode}_0.png`;
    return imageUrl;
  }
  const formatPrice = (price) => { //숫자 3자리마다 콤마 찍어주는 함수
    return price.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }).replace('₩', '');
  };


  return (
    <>
      <DivSt>
        <CardSt>
          <Link key={item.goodsId} to={`/detailitem/${item.goodsCode}`}>
            <ImageSt onClick={clickedItems}>
              <img
                style={{ width: "250px", height: "300px" }}
                src={generateImageUrl()}
              />
            </ImageSt>
          </Link>
          <ButtonSt
            onClick={() => onItemClick(item)}
          >
            <BsCart /> 담기
          </ButtonSt>
          <h3 style={{ marginLeft: "4px", fontSize: "14px", paddingTop: "10px" }}>
            {item.goodsName}
          </h3>
          <ItemTextPriceWrapper>
            <ItemOriginalPrice>
              {formatPrice(item.price)}원
            </ItemOriginalPrice>
            <ItemPriceWrapper>
              <ItemSale>
                {item.discountRate !== null ? `${item.discountRate}%` : null}
              </ItemSale>
              <ItemPrice>{formatPrice(item.discountedPrice)}원</ItemPrice>
            </ItemPriceWrapper>
          </ItemTextPriceWrapper>
        </CardSt>
      </DivSt>
    </>
  );
};

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CardSt = styled.div`
  /* background-color: gray; */
  width: 267px;
  height: 411px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 9px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageSt = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 305px;
  margin: auto;
`;

const ButtonSt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-top: 0px;
  padding-bottom: 1px;
  font-size: 16px;
  line-height: 29px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3; 
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* 버튼 내부 요소 사이의 간격을 8px로 설정 */
`;

const OriginalPriceSt2 = styled.span`
  display: block;
  padding-top: 2px;
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: line-through;
`;

export default FixedCard;