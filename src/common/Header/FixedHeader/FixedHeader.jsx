import React, { useState, useCallback } from "react";
import { FixedHeaderWrap, FixedHeaderLeft, FixedInput } from "./styles";
import Category from "../elements/Category";
import { Categorywrap } from "../HeaderNav/NavStyles";
import HeadNavCenter from "../elements/NavCenter";
import { HeadRight, HeadRightContents, CartIconWrap } from "../styles";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const FixedHeader = ({ CartList }) => {
  const [showHover, setShowHover] = useState(false);

  const showNav = useCallback(() => {
    setShowHover(true);
  }, []);
  const hiddenNav = useCallback(() => {
    setShowHover(false);
  }, []);
  return (
    <FixedHeaderWrap>
      <FixedHeaderLeft>
        <Categorywrap onMouseEnter={showNav} onMouseLeave={hiddenNav}>
          <Category showHover={showHover} />
        </Categorywrap>
        <HeadNavCenter />
      </FixedHeaderLeft>
      <FixedInput>
        <input placeholder="검색어를 입력해주세요." required />
        <button></button>
      </FixedInput>
      <HeadRight>
        <HeadRightContents>
          <div></div>
          <button aria-label="찜하기" type="button"></button>
          <CartIconWrap>
            <Link to="/cart">
              <button>
                {CartList?.length > 0 && <span>{CartList.length}</span>}
              </button>
            </Link>
          </CartIconWrap>
        </HeadRightContents>
      </HeadRight>
    </FixedHeaderWrap>
  );
};

export default FixedHeader;
