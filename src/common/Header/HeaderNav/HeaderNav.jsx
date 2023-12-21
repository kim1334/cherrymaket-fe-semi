import React, { useState, useCallback } from "react";
import { NavBody, NavWrap, Categorywrap, NavRight, NavLeft } from "./NavStyles";
import Category from "../elements/Category";
import HeadNavCenter from "../elements/NavCenter";

const HeaderNav = () => {
  const [showHover, setShowHover] = useState(false);

  const showNav = useCallback(() => {
    setShowHover(true);
  }, []);
  const hiddenNav = useCallback(() => {
    setShowHover(false);
  }, []);
  return (
    <>
      <NavBody>
        <NavWrap>
          <NavRight>
            <Categorywrap onMouseEnter={showNav} onMouseLeave={hiddenNav}>
              <Category showHover={showHover} />
            </Categorywrap>
          </NavRight>
          <HeadNavCenter />
          <NavLeft>
            <a href="">
              <span>샛별・하루 </span>
              배송안내
            </a>
          </NavLeft>
        </NavWrap>
      </NavBody>
    </>
  );
};

export default HeaderNav;
