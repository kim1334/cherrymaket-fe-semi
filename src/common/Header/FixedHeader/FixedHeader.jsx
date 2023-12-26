import React, { useState, useCallback } from "react";
import { FixedHeaderWrap, FixedHeaderLeft, FixedInput } from "./styles";
import Category from "../elements/Category";
import { Categorywrap } from "../HeaderNav/NavStyles";
import HeadNavCenter from "../elements/NavCenter";
import { HeadRight, HeadRightContents, CartIconWrap } from "../styles";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FixedHeader = ({ CartList, cartLength }) => {
  const [showHover, setShowHover] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const showNav = useCallback(() => {
    setShowHover(true);
  }, []);
  const hiddenNav = useCallback(() => {
    setShowHover(false);
  }, []);


  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      // 검색어가 비어 있지 않으면 검색 실행
      performSearch(searchQuery);
    } else {
      alert("검색어를 입력해주세요."); // 검색어가 비어 있을 때 경고 메시지 표시
    }
  };


  // 검색을 수행하는 함수 (파라미터로 검색어를 받음)
  const performSearch = (searchQuery) => {
    // 여기에서 검색어를 사용하여 원하는 동작을 수행할 수 있습니다.
    console.log("검색어:", searchQuery);
    navigate(`/search/${searchQuery}`);

  };

  return (
    <FixedHeaderWrap>
      <FixedHeaderLeft>
        <Categorywrap onMouseEnter={showNav} onMouseLeave={hiddenNav}>
          <Category showHover={showHover} />
        </Categorywrap>
        <HeadNavCenter />
      </FixedHeaderLeft>
      <FixedInput>
        <input
          placeholder="검색어를 입력해주세요."
          required
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // 검색어 입력 시 상태 업데이트
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // 엔터 키가 눌렸을 때 검색 기능 실행
              handleSearchButtonClick();
            }
          }}
        />
        <button></button>
      </FixedInput>
      <HeadRight>
        <HeadRightContents>
          <div></div>
          <button aria-label="찜하기" type="button"></button>
          <CartIconWrap>
            <Link to="/cart">
              <button>
                {cartLength?.length > 0 && <span>{cartLength.length}</span>}
              </button>
            </Link>
          </CartIconWrap>
        </HeadRightContents>
      </HeadRight>
    </FixedHeaderWrap>
  );
};

export default FixedHeader;
