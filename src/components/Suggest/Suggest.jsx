import React, { Fragment } from "react";
import {
  SuggestWraper,
  SuggestBox,
  SuggestHead,
  SuggestBody,
  NextButton,
  PrevButton,
} from "./styles";
import Slider from "react-slick";
import SuggestList from "./SuggestList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickArrowLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <div {...props}>{children}</div>
);
const SlickArrowRight = ({ currentSlide, slideCount, children, ...props }) => (
  <div {...props}>{children}</div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  nextArrow: (
    <SlickArrowLeft>
      <NextButton />
    </SlickArrowLeft>
  ),
  prevArrow: (
    <SlickArrowRight>
      <PrevButton />
    </SlickArrowRight>
  ),
};

const Suggest = ({ children, list }) => {
  return (
    <SuggestWraper>
      <SuggestBox>
        <SuggestHead>
          <div>{children && <span>{children}</span>}</div>
        </SuggestHead>
        <SuggestBody>
          <Slider {...settings}>
            {list?.map((item) => (
              <SuggestList key={item.productId} item={item} />
            ))}
          </Slider>
        </SuggestBody>
      </SuggestBox>
    </SuggestWraper>
  );
};

export default Suggest;
