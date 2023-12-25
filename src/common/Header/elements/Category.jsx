import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트


const Category = ({ showHover }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (event) => {
    // 'data-category-id'와 카테고리 이름을 읽어옴
    const categoryId = event.currentTarget.dataset.categoryId;
    const categoryName = event.currentTarget.querySelector('#categoryName').innerText;

    // categoryId와 categoryName을 함께 전달
    navigate(`/category/${categoryId}?name=${encodeURIComponent(categoryName)}`);
  };


  return (
    <>
      <CatrgoryIcon></CatrgoryIcon>
      <span id="categoryName">카테고리</span>
      <CategoryNav>
        {showHover && (
          <HeadSideBar>
            <div>
              <ul>
                <HeadSideBarItmes>
                  <div data-category-id="1" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/1/D2tq9D88GPQCRZd2FC04ct0BI0xId0Z1wTFWb7Wu.png"
                      alt="채소"
                    />
                    <span id="categoryName">채소</span>
                  </div>
                  <div data-category-id="2" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/2/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png"
                      alt="과일•견과•쌀"
                    />
                    <span id="categoryName">과일•견과•쌀</span>
                  </div>
                  <div data-category-id="3" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/3/ZDTiP71KkstnCGkPmu67wHr0wcIo3QMLjyg2Kho3.png"
                      alt="수산•해산•건어물"
                    />
                    <span id="categoryName">수산•해산•건어물</span>
                  </div>
                  <div data-category-id="4" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/4/EOMHR0scDTojmp9yxY6ZK6U01fkqUEg19nPMyQFG.png"
                      alt="정육•계란"
                    />
                    <span id="categoryName">정육•계란</span>
                  </div>
                  <div data-category-id="5" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/5/TmOAqHrU3DaZ9GtkfircoZQmd0xGaplSNoXw2q8V.png"
                      alt="국•반찬•메인요리"
                    />
                    <span id="categoryName">국•반찬•메인요리</span>
                  </div>
                  <div data-category-id="6" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/6/LZjcLmIFN6IqVsraCsArIE2zPh3u2i7foirsWHQZ.png"
                      alt="샐러드•간편식"
                    />
                    <span id="categoryName">샐러드•간편식</span>
                  </div>
                  <div data-category-id="7" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/7/u9ClAhIMBYYrC3U9b3dvn9MEzqGPpL48E5fLldNv.png"
                      alt="양념•오일"
                    />
                    <span id="categoryName">양념•오일</span>
                  </div>
                  <div data-category-id="8" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/8/PsTvzGzTKzgmANHetZ1XDCBoIvHj874L9goGSKXx.png"
                      alt="생수•음료•우유•커피"
                    />
                    <span id="categoryName">생수•음료•우유•커피</span>
                  </div>
                  <div data-category-id="9" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/9/NQcAF49piGDLu6VFgONSsIHWF1xU01o95Azs7usZ.png"
                      alt="간식•과자•떡"
                    />
                    <span id="categoryName">간식•과자•떡</span>
                  </div>
                  <div data-category-id="10" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/10/H4Ivs7jCWSuhqh7ru3NetkS6Hhof7pvq3tWbujBr.png"
                      alt="베이커리•치즈"
                    />
                    <span id="categoryName">베이커리•치즈</span>
                  </div>
                  <div data-category-id="11" onClick={handleCategoryClick}>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/11/MFavdtAkcl2J3q5fiyKDYKBtKiu0D28z9fLd1JhN.png"
                      alt="건강식품"
                    />
                    <span id="categoryName">건강식품</span>
                  </div>
                </HeadSideBarItmes>
              </ul>
            </div>
          </HeadSideBar>
        )}
      </CategoryNav>
    </>
  );
};

export default Category;

export const CatrgoryIcon = styled.span`
  width: 16px;
  height: 14px;
  margin-right: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
    0px 0px / 16px 14px no-repeat;
`;

export const CategoryNav = styled.div`
  max-height: calc(95vh-55px);
  font-weight: Normal;
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 46px;
  padding-top: 10px;
`;

export const HeadSideBar = styled.div`
  max-height: calc(95vh-55px);
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 0px;
  padding-top: 10px;
  & div {
    position: relative;
    z-index: 21;
    width: 249px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    animation: 0 linear 0s 1 normal none running animation-w43n76;
  }
  & ul {
    overflow-y: none;
    width: 247px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const HeadSideBarItmes = styled.li`
  padding: 7px 0px 9px 14px;

  & div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border: none;
    padding-top: 20px;
  }
  & img {
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  &span {
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
  }
`;
