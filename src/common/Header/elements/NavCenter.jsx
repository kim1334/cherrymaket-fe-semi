import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadNavCenter = () => {
  return (
    <NavCenter>
      <li>
        <NavLink to="/newest">신상품</NavLink>
      </li>
      <li>
        <NavLink to="/bestitem">베스트</NavLink>
      </li>
      <li>
        <span>알뜰쇼핑</span>
      </li>
      <li>
        <span>특가/혜택</span>
      </li>
    </NavCenter>
  );
};

export default HeadNavCenter;

export const NavCenter = styled.ul`
  flex: 0 0 0%;
  display: flex;

  list-style-type: none;

  & li {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 150px;
    height: 55px;
    padding-top: 18px;
    line-height: 20px;
    text-align: center;

    & :hover {
      color : #950526;
      border-bottom: 2px solid #950526;
    }

  }

  & span {
    height: fit-content;
    font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  cursor: pointer;
`;
