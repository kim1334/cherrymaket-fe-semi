import styled from "styled-components";

export const Banner = styled.div`
  height: 100%;
`;
export const SwiperWrapper = styled.div`
  position: relative;
  height: fit-content;
  max-width: 1900px;
  margin: 0px auto 40px;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 50%;
  margin: auto 590px auto 0px;
  z-index: 10;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)
    50% 50% no-repeat;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const Swiper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  &:hover {
    ${SlideButton} {
      opacity: 1;
    }
  }
  ${SlideButton} {
    &:nth-child(2) {
      transform: rotate(0deg);
      right: 0%;
      left: 90%;
    }
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transition: all 1s;
`;

export const SlideItems = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;

  cursor: pointer;

  & img {
    width: 100%;
    min-width: 1050px;
    height: 370px;
    object-fit: cover;
  }
`;

export const BannerCount = styled.div`
  position: absolute;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.15);
  z-index: 10;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 55px;
  height: 23px;
  right: 21%;
  bottom: 20px;
  line-height: 23px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
`;
