import React, { useState, useCallback } from "react";
import useInterval from "../../hooks/useInterval";
import {
  Banner,
  SlideButton,
  SlideItems,
  SlideWrapper,
  SwiperWrapper,
  Swiper,
  BannerCount,
} from "./styles";

const slides = [
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-1.jpg",
  },

  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-2.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-3.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-4.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-5.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-6.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-7.jpg",
  },
  {
    src: "https://kr.object.ncloudstorage.com/cherry-resource/banner-8.jpg",
  },
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopInterval, setStopInterval] = useState(false);

  const handleSwipe = (direction) => {
    if (currentIndex + direction === slides.length) {
      setCurrentIndex(0);
    } else if (currentIndex + direction < 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex((currentIndex) => currentIndex + direction);
    }
  };

  const onMouseEnter = useCallback(() => {
    setStopInterval(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setStopInterval(false);
  }, []);

  const onMouseDown = useCallback(() => {
    setStopInterval(true);
  }, []);
  const onMouseUp = useCallback(() => {
    setStopInterval(false);
  }, []);

  useInterval(
    () => {
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    },
    stopInterval ? null : 2000
  );

  return (
    <Banner>
      <SwiperWrapper>
        <Swiper>
          <SlideButton
            direction="prev"
            onClick={() => handleSwipe(-1)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          ></SlideButton>
          <SlideButton
            direction="next"
            onClick={() => handleSwipe(1)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          ></SlideButton>
          <SlideWrapper
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `translateX(${currentIndex * -100}%) `,
            }}
          >
            {slides.map((list, idx) => {
              return (
                <SlideItems key={idx}>
                  <img src={list.src} alt="배너이미지" />
                </SlideItems>
              );
            })}
          </SlideWrapper>
        </Swiper>
        <BannerCount>
          {currentIndex + 1} / {slides.length}
        </BannerCount>
      </SwiperWrapper>
    </Banner>
  );
};

export default MainBanner;
