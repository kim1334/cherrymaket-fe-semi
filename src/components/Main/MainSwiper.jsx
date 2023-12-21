import React, { useState, useEffect } from "react";
import axios from "axios";
import FixedCard from "./FixedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const MainSwiper = () => {
  const [mainImg, setMainImg] = useState([]); // 상태 초기화

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // API 호출을 위한 URL 주소를 확인하세요.
        const response = await axios.get('YOUR_API_ENDPOINT');
        // 서버 응답으로부터 데이터를 추출하고 상태에 저장
        setMainImg(response.data.map(product => ({
          id: product.GOODS_ID,
          src: `https://kr.object.ncloudstorage.com/cherry-product/${product.GOODS_CODE}/${product.GOODS_CODE}_0.png`,
          alt: product.GOODS_NM,
          sale: product.DSCNT_ID, // 할인율 정보가 있다면 여기에 추가
          price: product.GOODS_PRICE,
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // 빈 의존성 배열로 컴포넌트 마운트 시에만 실행

  return (
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
    >
      {mainImg.map((item) => (
        <SwiperSlide key={item.id}>
          <FixedCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;