// Main.js
import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import MainBanner from "../components/MainBanner/MainBanner";
import Suggest from "../components/Suggest/Suggest";
import LineBanner from "../components/LineBanner/LineBanner";
import SpeacilDeals from "../components/SpecialDeals/SpecialDeals";

import { getProductAsync } from "../redux/modules/productSlice";
import { getCategoryAsync } from "../redux/modules/categorySlice";
import FixedImg from "../components/Main/CardList";
import PopupList from '../components/PopUp/PopupList';
import FixedSiderbar from "../common/FiexDiderbar/FixedSiderbar";
import CartModal from '../components/CartList/CartMadal';

const Main = () => {
  const [category, setCategory] = useState("추석선물세트");
  const dispatch = useDispatch();
  const CateogryFilter = useSelector((state) => state.category.data);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(getCategoryAsync(category));
  }, [category]);

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const list = useSelector((state) => state.product.data);

  // const popupData1 = [
  //   {
  //     imageUrl: "https://kr.object.ncloudstorage.com/cherry-resource/popup_1.jpg",
  //     externalLink: "https://www.kurly.com/shop/event/kurlyEventV2.php?lego=event/2023/0911/join/coupon",
  //   },
  //   {
      
  //     imageUrl: "https://kr.object.ncloudstorage.com/cherry-resource/popup_2.jpg",
  //     externalLink: "https://www.kurly.com/member/membership",
  //   },
  // ];
  
  // localStorage.setItem('popupData', JSON.stringify(popupData1));

  const storedPopupData = localStorage.getItem('popupData');
  const popupData = storedPopupData ? JSON.parse(storedPopupData) : null;

  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <CartModal />

      <Header />
      <MainBanner />
      <FixedImg openModal={openModal} closeModal={closeModal} />
      <PopupList popupData={popupData} />
      <Suggest list={list}>이 상품 어때요?</Suggest>
      <LineBanner />
      <SpeacilDeals>추석특가</SpeacilDeals>
      <Suggest list={CateogryFilter}>
      </Suggest>
      <FixedSiderbar />
      
      <Footer/>
    </>
  );
};

export default Main;
