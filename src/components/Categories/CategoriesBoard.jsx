import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, SubTitleWrapper, SubTitleItemWrapper, SubTitleItem, Title, TitleWraper, ItemWideWrapper, ItemBlank, ItemWrapper, ItemTopWrapper, ItemCount, ItemSortWrapper, ItemSortItem, ItemSort, ItemListWrapper, ButtonWrapper, NextButton, PrevButton } from './Style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // useParams와 useLocation 훅 임포트

import ItemList from './ItemList';
const CategoriesBoard = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams(); // categoryId 파라미터 사용
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryName = searchParams.get('name'); // categoryName 쿼리 파라미터 사용
    // 페이징
    const [currentPage, setCurrentPage] = useState(1);
    const [noticePerPage] = useState(20);
    const indexOfLastNotice = currentPage * noticePerPage;
    const indexOfFirstNotice = indexOfLastNotice - noticePerPage;
    const currentItems = items.slice(indexOfFirstNotice, indexOfLastNotice);

    const totalPages = Math.ceil(items.length / noticePerPage);
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(
                    `https://server.marketcherry.store/api/goods/category?categoryId=${categoryId}&size=50`);
                console.log('Response data:', response.data);
                setItems(response.data.content);
            } catch (e) {
                console.error(e);
            }
        };
        fetchItem();
    }, [categoryId, categoryName]);

    if (!Array.isArray(items)) {
        console.error('items is not array', items);
        return null;
    }

    const handlePrev = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
    };
    return (
        <>
            <Container>

                <NewestHeader>{categoryName}</NewestHeader>

                <SubTitleWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/1?name=채소`}>
                            <SubTitleItem>채소</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/2?name=과일•견과•쌀`}>
                            <SubTitleItem>과일•견과•쌀</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/3?name=수산•해산•건어물`}>
                            <SubTitleItem>수산•해산•건어물</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/4?name=정육•계란`}>
                            <SubTitleItem>정육•계란</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/5?name=국•반찬•메인요리`}>
                            <SubTitleItem>국•반찬•메인요리</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/6?name=샐러드•간편식`}>
                            <SubTitleItem>샐러드•간편식</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/7?name=양념•오일`}>
                            <SubTitleItem>양념•오일</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/8?name=생수•음료•우유•커피`}>
                            <SubTitleItem>생수•음료•우유•커피</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/9?name=간식•과자•떡`}>
                            <SubTitleItem>간식•과자•떡</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/10?name=베이커리•치즈`}>
                            <SubTitleItem>베이커리•치즈</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <Link to={`/category/11?name=건강식품`}>
                            <SubTitleItem>건강식품</SubTitleItem>
                        </Link>
                    </SubTitleItemWrapper>

                </SubTitleWrapper>

                <ItemWideWrapper>
                    <ItemBlank>
                        <ItemWrapper>
                            <ItemTopWrapper>
                                <ItemCount>총{items.length}건</ItemCount>
                                <ItemSortWrapper>
                                    <ItemSortItem>
                                        <ItemSort>
                                            추천순
                                        </ItemSort>
                                    </ItemSortItem>
                                    <ItemSortItem>
                                        <ItemSort>
                                            신상품순
                                        </ItemSort>
                                    </ItemSortItem>
                                    <ItemSortItem>
                                        <ItemSort>
                                            판매량순
                                        </ItemSort>
                                    </ItemSortItem>
                                    <ItemSortItem>
                                        <ItemSort>
                                            혜택순
                                        </ItemSort>
                                    </ItemSortItem>
                                    <ItemSortItem>
                                        <ItemSort>
                                            낮은 가격순
                                        </ItemSort>
                                    </ItemSortItem>
                                    <ItemSortItem>
                                        <ItemSort>
                                            높은 가격순
                                        </ItemSort>
                                    </ItemSortItem>
                                </ItemSortWrapper>
                            </ItemTopWrapper>
                        </ItemWrapper>
                    </ItemBlank>
                </ItemWideWrapper>
                <ItemListWrapper>
                    {Array.isArray(currentItems) && currentItems.map((item) => (
                        <ItemList
                            id={item.goodsId}
                            name={item.goodsName}
                            goodsCode={item.goodsCode}
                            description={item.description}
                            originalPrice={item.price}
                            discountedPrice={item.discountedPrice}
                            sale={item.discountRate}
                        />
                    ))}
                </ItemListWrapper>
                <ButtonWrapper>
                    <div>
                        <PrevButton
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            currentPage={currentPage}
                        ></PrevButton>
                        <NextButton onClick={handleNext} disabled={currentPage === totalPages}></NextButton>
                    </div>
                </ButtonWrapper>
            </Container>

        </>
    );
};

export default CategoriesBoard;


export const NewestBanner = styled.div`
  padding-bottom: 28px;
  text-align: center;
  & img {
    width: 100%;
    vertical-align: top;
    cursor: pointer;
    border: 0;
    max-width: 100%;
  }
`;
export const NewestHeader = styled.h3`
  padding: 23px 0px 20px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;