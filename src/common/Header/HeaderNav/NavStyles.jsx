import styled from "styled-components";

export const NavBody = styled.div`
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: rgb(255, 255, 255);
  position: relative;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 100%;
`;

export const NavWrap = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
`;

export const NavRight = styled.div``;
export const Categorywrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
  }
`;

export const NavLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  & a {
    height: 32px;
    padding: 6px 16px;
    border-radius: 18px;
    border: 1px solid rgb(238, 238, 238);
    color: rgb(102, 102, 102);
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.32px;
    text-decoration: none;
  }
  & span {
    font-weight: 500;
    color: #950526;
  }
`;