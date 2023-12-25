import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, SubTitleWrapper, SubTitleItemWrapper, SubTitleItem, Title, TitleWraper, ItemWideWrapper, ItemBlank, ItemWrapper, ItemTopWrapper, ItemCount, ItemSortWrapper, ItemSortItem, ItemSort, ItemListWrapper, ButtonWrapper, NextButton, PrevButton } from './Style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CartMadal from '../CartList/CartMadal';
const NewestItemBoard = () => {
    const [items, setItems] = useState([]);
    // 페이징
    const [currentPage, setCurrentPage] = useState(1);
    const [noticePerPage] = useState(20);
    const indexOfLastNotice = currentPage * noticePerPage;
    const indexOfFirstNotice = indexOfLastNotice - noticePerPage;
    const currentItems = items.slice(indexOfFirstNotice, indexOfLastNotice);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const totalPages = Math.ceil(items.length / noticePerPage);
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(
                    'https://server.marketcherry.store/api/goods/listA');
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

    
    const handleItemClick = (items) => {
        setSelectedItem(items);
        openModal();
      };

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      // 모달 닫기 함수
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <>
            <Container>
                <NewestBanner>
                <img
                        src="https://img-cf.kurly.com/category/banner/pc/e8443748-7800-4e0a-a8bc-268d72f8e29c"
                        alt="배너 이미지"
                        style={{
                            width: '100%', // 이미지의 너비를 100%로 설정
                            cursor: 'pointer', // 커서를 포인터로 변경
                            maxWidth: '1050px', // 이미지의 최대 너비를 100%로 설정
                          }}
                    />
                </NewestBanner>
                <NewestHeader>신상품</NewestHeader>
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
                  {Array.isArray(currentItems) && currentItems.map((item)=> (
                    <ItemList
                    id={item.goodsId}
                    name={item.goodsName}
                    goodsCode={item.goodsCode}
                    description={item.description}
                    originalPrice={item.price}
                    discountedPrice = {item.discountedPrice}
                    sale={item.discountRate}
                    onItemClick={handleItemClick}
                    item={item}
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
                <CartMadal isOpen={isModalOpen} closeModal={closeModal} item={selectedItem} />
            </Container>

        </>
    );
};

export default NewestItemBoard;


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





