import React, { useCallback, useState } from "react";

import styled from "styled-components";

const CategoryList = ["간식과자떡", "간편식밀키트샐러드", "건강식품", "과일견과쌀", "국반찬메인요리", "면양념요리", "베이커리", "생수음료커피", "수산해산", "유제품", "정육계란", "채소"];

const Catergories = ({ onChangeCategory }) => {
  return (
    <>
      <CategoryWrap>
        {CategoryList.map((item, idx) => {
          return (
            <li key={idx}>
              <CategoryButton onClick={onChangeCategory} value={item}>
                {item}
              </CategoryButton>
            </li>
          );
        })}
      </CategoryWrap>
    </>
  );
};

export default Catergories;

export const CategoryWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  place-content: center;
  margin-top: 20px;
  list-style-type: none;
`;

export const CategoryButton = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 22px;
  margin: 0px 5px 20px;
  font-size: 14px;
  height: 40px;
  line-height: 16px;
  background-color: rgb(247, 247, 247);
  color: (51, 51, 51);
  cursor: pointer;
  &:focus {
    background-color: rgb(95, 0, 128);
    color: rgb(255, 255, 255);
  }
`;
