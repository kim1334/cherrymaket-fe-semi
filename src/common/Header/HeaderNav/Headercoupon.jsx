import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { MdOutlineCancel } from "react-icons/md";
import styled from 'styled-components';
import { useEffect } from 'react';

const Headercoupon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [cookies, setCookie] = useCookies(['hide-header-top']);

  // 쿠키 확인
  useEffect(() => {
    if (cookies['hide-header-top'] === 'true') {
      setIsVisible(false);
    }
  }, [cookies]);

  const handleClose = () => {
    setCookie('hide-header-top', 'true', { path: '/' });
    setIsVisible(false);
  };

  const handleTextClick = () => {
    // 쿠폰 발급 페이지 이동
    window.location.href = '/coupon';
  };

  if (!isVisible) return null;

  return (
    <HeaderCouponTop>
     <CouponSpan onClick = {handleTextClick}>
        지금 가입하고,
        <b> 1만원 할인 쿠폰 </b>
        받아가세요!
      </CouponSpan>
      <CloseButton onClick={handleClose}>
      <MdOutlineCancel />
      </CloseButton>
    </HeaderCouponTop>
  );
};

export default Headercoupon;


const HeaderCouponTop = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #950526; // Adjust the background color as per your image.
  color: white;
  padding: 10px 0;
  text-align: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 0px 0px;
  font-size: 18px;
  right: 10px;
  top: 7px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
`;

const CouponSpan = styled.span`
  cursor: pointer;
`;