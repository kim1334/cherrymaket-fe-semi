import React from 'react';
import styled from 'styled-components';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ItemList = ({ id, name, originalPrice, sale, description, goodsCode,discountedPrice}) => {
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat({ style: 'currency', currency: 'KRW' }).format(price);
  };
  return (
    <>
     <Link key = {id} to = {`/detailitem/${goodsCode}`}>
      <ItemListWrapper>
        <ItemImageWrapper>
          <ItemImageSpan>
            <ItemImage key = {id} src = {`https://kr.object.ncloudstorage.com/cherry-product/${goodsCode}/${goodsCode}_0.png`}/>
          </ItemImageSpan>
        </ItemImageWrapper>
        <ItemButtonWrapper>
          <ItemButton>
            <ItemButtonSvg><TiShoppingCart /></ItemButtonSvg>담기
          </ItemButton>
        </ItemButtonWrapper>
        <ItemTextWrapper>
          <ItemTextDeliveryWrapper>
            <ItemTextDelivery>샛별배송</ItemTextDelivery>
          </ItemTextDeliveryWrapper>
          
          <ItemTextDeliveryWrapper>
            <ItemTextTitle>{name}</ItemTextTitle>
          </ItemTextDeliveryWrapper>
        </ItemTextWrapper>
        <ItemTextSubTitle>
          {description}
        </ItemTextSubTitle>
        <ItemTextPriceWrapper>
          <ItemOriginalPrice>{sale !== null ? (
            `${formatPrice(originalPrice)}원` ) : (null) }
            </ItemOriginalPrice>
        <ItemPriceWrapper>
          <ItemSale>{sale !== null ? (
            `${sale}%` ) : (null
          )}</ItemSale>
          <ItemPrice>{formatPrice(discountedPrice)}원</ItemPrice>
        </ItemPriceWrapper>
        </ItemTextPriceWrapper>
        <CommentWrapper>
          <CommentImageSpan>
            <FaRegCommentDots />
          </CommentImageSpan>
          <Comment>9999+</Comment>
        </CommentWrapper>
      </ItemListWrapper>
      </Link>
    </>
  );
};


export default ItemList;

const ItemListWrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 573px;
  color: rgb(51, 51, 51);
  cursor: pointer;
`;

const ItemImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  width: 249px;
  height: 320px;
`;

const ItemImageSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ItemImage = styled.img`
width: 100%; // 이미지가 부모의 전체 너비를 차지하도록 설정
height: 100%; // 이미지가 부모의 전체 높이를 차지하도록 설정
object-fit: contain; // 이미지 비율을 유지하면서 부모 컨테이너에 맞춤
border: 0;
padding: 0;
margin: auto; // 이미지를 중앙에 위치시킴
`;

const ItemButtonWrapper = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 6px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const ItemButton = styled.button`
color: rgb(51, 51, 51);
width: 100%;
height: 32px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
cursor: pointer;
& button {
  height: 36px;
  font-size: 16px;
  line-height: 19px;
}
`;

const ItemButtonSvg = styled.svg`
  margin-right: 4px;
  width: 22px;  
  height: 22px;
  padding-top : 2px;
  font-size: 18px;
`;

const ItemTextWrapper = styled.div`
  padding: 8px 10px 0px 0px;
  text-align: left;
`;

const ItemTextDeliveryWrapper = styled.span`
  display: block;
  padding-bottom: 2px;
  
`;

const ItemTextDelivery = styled.span`
  font-size: 14px;
  color: rgb(153, 153, 153);
  letter-spacing: -0.5px;
  text-align: left;
  
`;
const ItemTextTitle = styled.span`
  max-height: 58px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ItemTextSubTitle = styled.p`
  text-align: left;
  padding-top: 4px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  line-height: 18px;
  letter-spacing: normal;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ItemTextPriceWrapper = styled.div`
text-align: left;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

const ItemOriginalPrice = styled.span`
font-size: 14px;
color: rgb(181, 181, 181);
text-decoration: line-through;
`;

const ItemPriceWrapper = styled.div`
  text-align: left;
`;

const ItemSale = styled.span`
font-weight: 800;
font-size: 16px;
line-height: 24px;
white-space: nowrap;
letter-spacing: -0.5px;
color : #950526;
margin-right: 4px;
`;

const ItemPrice = styled.span`
font-weight: 800;
font-size: 16px;
line-height: 24px;
white-space: nowrap;
letter-spacing: -0.5px;
`;

const CommentWrapper = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
padding-top: 8px;
font-weight: 500;
font-size: 13px;
color: rgb(153, 153, 153);
line-height: 17px;
text-align: left;
`;

const CommentImageSpan = styled.span`
width: 15px;
height: 15px;
margin: 1px -1px 0px 0px;
`;

const CommentImage = styled.svg`
  overflow: hidden;
  width: 100%;
  height: 100%;
  fill: none;
`;

const Comment = styled.span`
padding-left: 3px;
font-weight: 400;
pont-size: 13px;
color : rgb(153, 153, 153);
`;