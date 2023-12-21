
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import FixedCard from './FixedCard';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import mainImg from './mainImg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
// import "swiper/css";
import "./swiperCss.css";
import CartMadal from '../CartList/CartMadal';




// 카드 리스트 + 아래쪽 카드 고정값
const FixedImg = () => {
  const [FiexdItemPrice, setFiexdItemPirce] = useState([]);
  const brseUrl = process.env.REACT_APP_API;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${brseUrl}/goods/findDiscount`)

        console.log(response.data)
        setFiexdItemPirce(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  console.log(setFiexdItemPirce)

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
    <Container>

      {/* 여기서부터 고정값 */}
      <Div>✨놓치면 후회할 가격🏅
        <P>최대82%! 올해 마지막 뷰티 음식 혜택</P>
      </Div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          height: '500px',
        }}
      >
        <DivSt>
          {/* 지금 현재는 mainImg 안에 있는 정보들을 map 돌려 붙여넣기 */}
          {FiexdItemPrice.map((item) => (
            <SwiperSlide key={item.id}><FixedCard key={item.id} item={item} openModal={openModal} closeModal={closeModal} onItemClick={handleItemClick} /></SwiperSlide>
          ))}
        </DivSt>
      </Swiper>

      <Div>놓치면 후회할 가격🧐
        <P>최대82%! 올해 마지막 뷰티 음식 혜택</P>
      </Div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          height: '500px',
        }}
      >
        <DivSt>
          {/* 지금 현재는 mainImg 안에 있는 정보들을 map 돌려 붙여넣기 */}
          {FiexdItemPrice.map((item) => (
            <SwiperSlide key={item.id}><FixedCard key={item.id} item={item} openModal={openModal} closeModal={closeModal} onItemClick={handleItemClick} /></SwiperSlide>
          ))}
        </DivSt>
      </Swiper>
      <CartMadal isOpen={isModalOpen} closeModal={closeModal} item={selectedItem} />
    </Container>
  );
}

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
`

const Div = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`

const Div1 = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: -30px;
  font-family: 'Noto Sans KR', sans-serif;
`

const Div2 = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`

const Container = styled.div`
width: 1050px;
margin: 0px auto;
-webkit-box-pack: justify;
justify-content: space-between;
padding: 5 0px;
`

const P = styled.p`
font-size: 16px;
font-weight: normal;
line-height: 1.45;
letter-spacing: -0.2px;
text-align: center;
color: rgb(153, 153, 153);
margin-top: 2px;
`

export default FixedImg;