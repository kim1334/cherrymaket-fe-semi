import {
    Container, 
    ItemDetailWrapper,
    ItemDetail,
    ItemImageWrapper,
    ItemTextWrapper,
    ItemDeliveryText,
    ItemTitle,
    ItemTitleWrapper,
    ItemSubTitle,
    ItemPriceWrapper,
    ItemDiscount,
    ItemPrice,
    ItemOriginalPriceWrapper,
    ItemOriginalPrice,
    ItemOriginalPlace,
    ItemBenefit,
    ItemCuponWrapper,
    ItemCuponText,
    ItemDetailList,
    ItemDetailListTitle,
    ItemDetailListTextWrapper,
    ItemDetailListText,
    ItemDetailListTextContent,
    ItemQuantityWrapper,
    ItemDetailListSmallTitle,
    ItemDetailListSmallTitleWrapper,
    ItemQuantity,
    ItemQuantityButtonWrapper,
    ItemQuantityMinusButton,
    ItemQuantityNumber,
    ItemQuantityPlusButton,
    ItemQuantityPrice,
    TotalPriceWrapper,
    TotalPriceText,
    TotalPrice,
    ItemAccrualBorder,
    ItemAccrualWrapper,
    ItemAccrualText,
    ItemCartButtonWrapper,
    ItemCartLikeButton,
    ItemCartLikeImage,
    ItemCartButton,
    ItemCartButtonSpan,
    ItemDetailNavWrapper,
    ItemDetailNavUl,
    ItemDetailNavLi,
    ItemDetailNavA,
} from './Style'
import { FaRegHeart, FaHeart, FaRegBell, FaBell } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import GoodsRevw from './GoodsRevw';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function DetailItemBoard() {

    const TYPE_MAPPINGS = {
    
        'ROOM_TEMPERATURE': '상온',
        'REFRIGERATOR': '냉장',
        'FROZEN': '냉동',
        'FREEZER' : '냉동',
    }

    const [isLiked, setIsLiked] = useState(false);
    const [isBell, setIsBell] = useState(false);
    // 수량
    const [quantity, setQuantity] = useState(1);
    const { goodsCode } = useParams();
    const [productData, setProductData] = useState(null);
  

    // nav 이동
    const descriptionRef = useRef(null);
    const detailsRef = useRef(null);
    const reviewsRef = useRef(null);
    useEffect(() => {

        // Axios를 사용하여 서버에서 데이터를 가져옵니다.
        axios.get(`https://server.marketcherry.store/api/goods/${goodsCode}`)
            .then(response => {
                setProductData(response.data);
                console.log("response.data", response.data);
            })
            .catch(error => {
                console.error('Error fetching product data', error);
            });
    }, [goodsCode]); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

    // 수량 증가 핸들러
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    // 수량 감소 핸들러
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    // 숫자를 원 단위로 변경
    const formatPrice = (price) => {
        return new Intl.NumberFormat({ style: 'currency', currency: 'KRW' }).format(price);
    };
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }


    const handleBellClick = () => {
        setIsBell(!isBell);
    }

    

        return (
        <>
            <Container>
                <ItemDetailWrapper>
                    <ItemDetail>
                        <ItemImageWrapper>
                            <img src = {`https://kr.object.ncloudstorage.com/cherry-product/${goodsCode}/${goodsCode}_0.png`}></img>
                        </ItemImageWrapper>
                        <ItemTextWrapper>
                            <ItemDeliveryText>
                                샛별배송
                            </ItemDeliveryText>
                        <ItemTitleWrapper>
                            <ItemTitle>
                                {productData ? productData.goodsName : "상품이름"}
                            </ItemTitle>
                            <ItemSubTitle>
                            {productData ? productData.description : "상품설명"}
                            </ItemSubTitle>
                            <ItemPriceWrapper>
                                <ItemDiscount>
                                    {productData && productData.discountRate !== null ? (
                                        `${productData.discountRate}%`
                                    ) : (
                                        null
                                    )}
                                </ItemDiscount>
                                <ItemPrice>
                                    {productData ? formatPrice(productData.discountedPrice) : "상품가격"}원
                                </ItemPrice>
                            </ItemPriceWrapper>
                            <ItemOriginalPriceWrapper>
                                <ItemOriginalPrice>
                                {productData && productData.discountRate !== null ? (
                                        `${formatPrice(productData.price)}원`
                                    ) : (
                                        null
                                    )}
                                </ItemOriginalPrice>
                            </ItemOriginalPriceWrapper>
                            <ItemOriginalPlace>
                               원산지 : {productData ? productData.originPlace : "원산지"}
                            </ItemOriginalPlace>
                            <ItemBenefit>
                                로그인 후, 적립혜택이 제공됩니다.
                            </ItemBenefit>
                            <ItemCuponWrapper>
                                <ItemCuponText>
                                    <strong>2000원</strong> 적립금+할인쿠폰 받고 구매하기
                                </ItemCuponText>
                            </ItemCuponWrapper>
                            <ul style={{marginTop : "20px"}}>
                                <ItemDetailList>
                                    <ItemDetailListTitle>배송</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            샛별배송
                                        </ItemDetailListText>
                                        <ItemDetailListTextContent>
                                            23시 이전 주문 시 내일 아침 7시 전 도착
                                        </ItemDetailListTextContent>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>
                                
                                <ItemDetailList>
                                    <ItemDetailListTitle>판매자</ItemDetailListTitle>
                                        <ItemDetailListTextWrapper>
                                            <ItemDetailListText>
                                                {productData ? productData.makerName : "판매자"}
                                            </ItemDetailListText>
                                        </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>포장타입</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                        {TYPE_MAPPINGS[productData?.storageType] || productData?.storageType}/종이포장
                                        </ItemDetailListText>
                                        <ItemDetailListTextContent>
                                            택배는 에코포장이 스티로폼으로 대체됩니다.
                                        </ItemDetailListTextContent>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>판매단위</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            {productData ? productData.capacity : "판매단위"}
                                        </ItemDetailListText>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>중량/용량</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            옵션별 상이
                                        </ItemDetailListText>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>알레르기 정보</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            {productData ? productData.allergyInfo : "알레르기 정보"}
                                        </ItemDetailListText>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>유통기한(또는 소비기한)정보</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            {productData ? productData.expDate : "유통기한(또는 소비기한)정보"}
                                        </ItemDetailListText>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>

                                <ItemDetailList>
                                    <ItemDetailListTitle>수량 선택</ItemDetailListTitle>
                                    <ItemDetailListTextWrapper>
                                        <ItemDetailListText>
                                            <ItemQuantityWrapper>
                                                <ItemDetailListSmallTitleWrapper>
                                                  
                                                </ItemDetailListSmallTitleWrapper>
                                                <ItemQuantity>
                                                    <ItemQuantityButtonWrapper>
                                                        <ItemQuantityMinusButton
                                                            onClick = {handleDecreaseQuantity} 
                                                            disabled={quantity === 1}
                                                            style={{
                                                                backgroundColor: quantity === 1 ? "#f1f3f5" : "white",
                                                            }}                                            
                                                        >
                                                        </ItemQuantityMinusButton>
                                                        <ItemQuantityNumber>
                                                            {quantity}
                                                        </ItemQuantityNumber>
                                                        <ItemQuantityPlusButton
                                                        onClick = {handleIncreaseQuantity}
                                                        >
                                                        </ItemQuantityPlusButton>
                                                    </ItemQuantityButtonWrapper>
                                                    <div style={{
                                                            paddingTop: "4px",
                                                        }}
                                                        >
                                                            <ItemQuantityPrice>
                                                            {productData ? formatPrice(productData.discountedPrice) : "상품가격"}원
                                                            </ItemQuantityPrice>
                                                        </div>
                                                </ItemQuantity>
                                            </ItemQuantityWrapper>
                                        </ItemDetailListText>
                                    </ItemDetailListTextWrapper>
                                </ItemDetailList>
                            </ul>
                            <div style={{
                                            paddingTop: "30px",
                            }}   
                            >
                                <div style = {{
                                    letterSpacing: "-0.5px",
                                }}>
                                    <TotalPriceWrapper>
                                        <TotalPriceText>
                                            총 상품금액 :
                                        </TotalPriceText>
                                        <TotalPrice>{productData ? formatPrice(productData.discountedPrice * quantity) : "상품가격"}원</TotalPrice>
                                    </TotalPriceWrapper>
                                    <ItemAccrualWrapper>
                                        <ItemAccrualBorder>
                                            적립
                                        </ItemAccrualBorder>
                                        <ItemAccrualText>
                                            로그인 후, 적립혜택 제공
                                        </ItemAccrualText>
                                    </ItemAccrualWrapper>
                                </div>
                            </div>
                            <ItemCartButtonWrapper>
                                <ItemCartLikeButton onClick={handleLikeClick}>
                                    <ItemCartLikeImage>
                                        {isLiked ?  <FaHeart /> : <FaRegHeart />}
                                    </ItemCartLikeImage>
                                </ItemCartLikeButton>
                                <ItemCartLikeButton onClick = {
                                    handleBellClick}>
                                    <ItemCartLikeImage>
                                        {isBell ?  <FaBell /> : <FaRegBell />}
                                        
                                    </ItemCartLikeImage>
                                </ItemCartLikeButton>    
                                <ItemCartButton>
                                    <ItemCartButtonSpan>
                                        장바구니 담기
                                    </ItemCartButtonSpan>
                                </ItemCartButton>
                            </ItemCartButtonWrapper>
                        </ItemTitleWrapper>
                        </ItemTextWrapper>
                    </ItemDetail>


                        {/* Nav */}
                        <ItemDetailNavWrapper>
                            <ItemDetailNavUl>
                                <ItemDetailNavLi>
                                    <ItemDetailNavA onClick={() => descriptionRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                        상품설명
                                    </ItemDetailNavA>
                                </ItemDetailNavLi>
                                <ItemDetailNavLi>
                                    <ItemDetailNavA onClick={() => detailsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                        상세정보
                                    </ItemDetailNavA>
                                </ItemDetailNavLi>
                                <ItemDetailNavLi>
                                    <ItemDetailNavA onClick={() => reviewsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                        후기
                                    </ItemDetailNavA>
                                </ItemDetailNavLi>
                                <ItemDetailNavLi>
                                    <ItemDetailNavA>
                                        문의
                                    </ItemDetailNavA>
                                </ItemDetailNavLi>
                            </ItemDetailNavUl>
                        </ItemDetailNavWrapper>

                        {/* 상품설명 */}
                        <div style = {{
                            width: "100%",
                        }}
                        >
                            <img style = {{ width: "100%",}} src = {`https://kr.object.ncloudstorage.com/cherry-product/${goodsCode}/${goodsCode}_1.png`} ref={descriptionRef}></img>
                            <img style = {{ width: "100%",}} src = {`https://kr.object.ncloudstorage.com/cherry-product/${goodsCode}/${goodsCode}_2.png`} ref={detailsRef}></img>
                        </div>            
                    <div ref={reviewsRef}>
                        <GoodsRevw/>
                    </div>
                    </ItemDetailWrapper>    

                
            </Container>
            
        </>
    );
};

export default DetailItemBoard;

