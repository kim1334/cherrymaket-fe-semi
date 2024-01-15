import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';
import styled from 'styled-components';
import { Container, SubTitleWrapper, SubTitleItemWrapper, SubTitleItem, Title, TitleWraper, ItemWideWrapper, ItemBlank, ItemWrapper, ItemTopWrapper, ItemCount, ItemSortWrapper, ItemSortItem, ItemSort, ItemListWrapper, ButtonWrapper, NextButton, PrevButton } from '../components/BestItem/Style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../redux/modules/instance';
import SearchItem from '../components/Search/SearchItem';
import CartMadal from '../components/CartList/CartMadal';
import SearchNone from '../components/Search/SearchNone';
import FixedSiderbar from '../common/FiexDiderbar/FixedSiderbar';


const SearchPage = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticePerPage] = useState(20);
  const indexOfLastNotice = currentPage * noticePerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticePerPage;
  const currentItems = items.slice(indexOfFirstNotice, indexOfLastNotice);
  const totalPages = Math.ceil(items.length / noticePerPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNoResult, setIsNoResult] = useState(false);


  useEffect(() => {
    const fetchProduct = async () => {
      setIsNoResult(false); // 검색 시작 전에는 결과 없음 상태를 false로 설정
      try {
        const response = await instance.get(`/goods/name?goodsName=${name}`);
        console.log(response.data);
        if(response.data.length !== 0) {
          setItems(response.data.content);
          setIsNoResult(false); // 데이터가 있을 때는 결과 없음 상태를 false로 설정
        } else {
          setItems([]);
          setIsNoResult(true); // 데이터가 없을 때는 결과 없음 상태를 true로 설정
        }
      } catch (error) {
        console.error(error);
        setItems([]); // 오류 발생 시 items를 빈 배열로 설정
        setIsNoResult(true); // 오류 발생 시 결과 없음 상태를 true로 설정
      }
    };

    if (name) {
      fetchProduct();
    }
  }, [name]);

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
      <Header />
      <Container1>
          <TitleDiv>
            <Title1>
              '<SearchDiv><SeachName>{name}</SeachName></SearchDiv>' <span style={{fontWeight: "400"}}>에 대한 검색 결과</span>
            </Title1>
          </TitleDiv>
          {/* 아래는 갖고와야함 컨테이너 아래아래꺼  */}
          {isNoResult && <SearchNone />}
          {!isNoResult && items.length > 0 && (
          <>
          <ItemWideWrapper>
                    <ItemBlank>
                        <ItemWrapper>
                            <ItemTopWrapper>
                                <ItemCount>총 {items.length}건</ItemCount>
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
                        <SearchItem
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
                </>
                )}
                <CartMadal isOpen={isModalOpen} closeModal={closeModal} item={selectedItem} />
      </Container1>
      <FixedSiderbar />
      <Footer />
    </>

  )

}

export default SearchPage;

const SeachName = styled.div`
    font-weight: 500;
    color: rgb(149, 5, 38);
  `;

const SearchDiv = styled.div`
max-width: 840px;
    display: inline-block;
    vertical-align: top;
`;

const Title1 = styled.h3`
font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.5px;
`;

const TitleDiv = styled.div`
margin-top: 50px;
text-align: center;

`;

const Container1 = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-bottom: 80px;
`;

