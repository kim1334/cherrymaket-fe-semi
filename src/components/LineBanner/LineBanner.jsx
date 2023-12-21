import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LineBanner = () => {
  return (
    <>
      <LinsBannerWrap>
        <div>
          <BannerLink to="/">
            <img
              src="https://product-image.kurly.com/banner/random-band/pc/img/7026bb2c-5b13-43e1-baae-b36974927561.jpg"
              alt="라인배너"
            />
          </BannerLink>
        </div>
      </LinsBannerWrap>
    </>
  );
};

export default LineBanner;

const LinsBannerWrap = styled.div`
  height: 100%;
  & div {
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
  }
`;

const BannerLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  height: 140px;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    border: 0;
  }
`;
