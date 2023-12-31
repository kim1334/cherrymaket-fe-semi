import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, SubTitleWrapper, SubTitleItemWrapper, SubTitleItem, Title, TitleWraper, ItemWideWrapper, ItemBlank, ItemWrapper, ItemTopWrapper, ItemCount, ItemSortWrapper, ItemSortItem, ItemSort, ItemListWrapper, ButtonWrapper, NextButton, PrevButton } from './Style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
const BestItemBoard = () => {
    const [items, setItems] = useState([]);
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
                    'https://server.marketcherry.store/api/goods/listA?sortBy=priceDesc');
                console.log('Response data:', response.data);
                setItems(response.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchItem();
    }, []);

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
                <TitleWraper>
                    <Title>베스트</Title>
                </TitleWraper>

                <SubTitleWrapper>
                    <SubTitleItemWrapper>
                        <SubTitleItem>TOP999</SubTitleItem>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <SubTitleItem>인기급상승</SubTitleItem>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper><SubTitleItem>찜이많은</SubTitleItem>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <SubTitleItem>컬리에만있는</SubTitleItem>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <SubTitleItem>제철신선</SubTitleItem>
                    </SubTitleItemWrapper>
                    <SubTitleItemWrapper>
                        <SubTitleItem>직원추천상품</SubTitleItem>
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

export default BestItemBoard;





