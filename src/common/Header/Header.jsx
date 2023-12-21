import React, { useCallback, useEffect, useState } from "react";
import {
  HeadTop,
  UserHead,
  HeadUserLink,
  HeadeVertical,
  ServiceCenter,
  ServiceIcon,
  ServiceNav,
  HeadMain,
  HeadLeft,
  LogoButton,
  HeadCenter,
  SearchForm,
  HeadRight,
  HeadRightContents,
  CartIconWrap,
  HeadLogOut,
  CustomerLink,
  RatingIcon,
} from "./styles";
import Headercoupon from "./HeaderNav/Headercoupon";
import logo from "./logo.svg";
import HeaderNav from "./HeaderNav/HeaderNav";
import FixedHeader from "./FixedHeader/FixedHeader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import jwtDecode from "jwt-decode";
import { instance } from "../../redux/modules/instance";
import { IoPersonCircleOutline } from "react-icons/io5";
import { initializeLogin } from '../../redux/modules/loginSlice.jsx';
import axios from 'axios';


const Header = () => {
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const access_token = sessionStorage.getItem('accessToken');
  const baseUrl = process.env.REACT_APP_API;


  // async 함수 정의 
  async function fetchData() {

    try {
      const response = await axios.get(`${baseUrl}/account/my-info`, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      });

      const name = response.data.name;
      setUserName(name);

    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchData();

  useEffect(() => {
    // 세션 스토리지에서 'accessToken'이라는 키로 저장된 토큰을 확인합니다.
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      dispatch(initializeLogin());

    }
  }, [dispatch]);

  const CartList = useSelector((state) => state?.cart?.cart?.cart);


  useEffect(() => {
    function onScroll() {
      window.scrollY > 110
        ? setShowFixedHeader(true)
        : setShowFixedHeader(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showFixedHeader]);


  useEffect(() => {
    if (userData.userName) {
      dispatch(getCartAysnc());
    }
  }, [userData, dispatch]); // userData를 의존성 배열에 추가합니다.



  const onLogOut = useCallback(() => {
    sessionStorage.clear(); // 로그아웃 시 세션 스토리지의 모든 데이터를 삭제합니다.
    window.location.reload(); // 페이지를 새로고침합니다.
  }, [dispatch]);




  const handleQnaClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 기본 링크 동작을 방지합니다.
      alert('로그인 후 이용해주세요.'); // 알림을 표시합니다.
      window.location.href = '/login'; // 로그인 페이지로 이동합니다.
    }
    // 로그인이 되어 있다면, 추가적인 조치는 필요하지 않습니다.
  };

  return (
    <>
      <Headercoupon />
      <HeadTop>
        <UserHead>
          {!isLoggedIn ? (
            <>
              <HeadUserLink to="/join">회원가입</HeadUserLink>
              <HeadeVertical />
              <HeadUserLink to="/login" style={{ color: "inherit" }}>
                로그인
              </HeadUserLink>
            </>
          ) : (
            <>
              {userName === '관리자' && (
                <>
                  <HeadUserLink to="/admin" style={{ color: "red" }}>
                    <b>관리자</b>
                  </HeadUserLink>
                  <HeadeVertical />
                </>
              )}
              <ServiceCenter>
                <HeadUserLink to="/mypage/order" style={{ color: "inherit" }}>
                  <RatingIcon>일반</RatingIcon><span style={{ color: 'rgb(149, 5, 3)' }}>{userName}님</span>
                  <ServiceIcon />
                  <ServiceNav>
                    <CustomerLink to="//mypage/order">
                      <div>주문내역</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/pick">
                      <div>찜한상품</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/address">
                      <div>배송지관리</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/review">
                      <div>상품후기</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/inquiry/products">
                      <div>상품문의</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/point">
                      <div>적립금</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/coupon">
                      <div>쿠폰</div>
                    </CustomerLink>
                    <CustomerLink to="/mypage/info">
                      <div>개인정보수정</div>
                    </CustomerLink>
                    <HeadLogOut onClick={onLogOut} style={{ color: 'rgb(149, 5, 3)' }}>로그아웃</HeadLogOut>
                  </ServiceNav>
                </HeadUserLink>
              </ServiceCenter>

            </>
          )}
          <HeadeVertical />
          <ServiceCenter>
            <HeadUserLink to="/notice" style={{ color: "inherit" }}>
              고객센터
              <ServiceIcon />
              <ServiceNav>
                <CustomerLink to="/notice">
                  <div>공지사항</div>
                </CustomerLink>
                <CustomerLink to="/faq">
                  <div>자주하는 질문</div>
                </CustomerLink>
                <>
                  {!isLoggedIn ? (
                    <CustomerLink to="/login" onClick={handleQnaClick}>
                      <div>1:1 문의</div>
                    </CustomerLink>
                  ) : (
                    <CustomerLink to="/qna">
                      <div>1:1 문의</div>
                    </CustomerLink>
                  )}
                </>
                <div>대량주문 문의</div>
              </ServiceNav>
            </HeadUserLink>
          </ServiceCenter>
        </UserHead>
        <HeadMain>
          <HeadLeft to="/">
            <img src={logo} alt="마켓체리 로고" style={{
              width: '50px',
              height: '80px',
              marginBottom: '10px',
            }} />
            <LogoButton>마켓체리</LogoButton>
          </HeadLeft>
          <HeadCenter>
            <SearchForm>
              <input placeholder="검색어를 입력해주세요" required />
              <button></button>
            </SearchForm>
          </HeadCenter>
          <HeadRight>
            <HeadRightContents>
              <CartIconWrap>
              </CartIconWrap>
              <div></div>
              <button aria-label="찜하기" type="button"><Link to="/mypage/pick"></Link></button>
              <CartIconWrap>
                <Link to="/cart">
                  <button>
                    {CartList?.length > 0 && <span>{CartList?.length}</span>}
                  </button>
                </Link>
              </CartIconWrap>
            </HeadRightContents>
          </HeadRight>
        </HeadMain>
      </HeadTop>
      <HeaderNav />
      {showFixedHeader && <FixedHeader CartList={CartList} />}
    </>
  );
};

export default Header;