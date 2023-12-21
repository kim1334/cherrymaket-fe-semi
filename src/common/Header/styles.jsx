import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadTop = styled.div`
  position: relative;
  width: 1050px;
  height: 100px;
  margin: 0 auto;
  letter-spacing: -0.3px;
`;

export const UserHead = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 20;
  display: flex;
  -webkit-box-align: center;
  font-size: 12px;
  align-items: center;
`;

export const HeadUserLink = styled(Link)`
  display: block;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  color: rgb(149, 5, 38);
`;

export const HeadeVertical = styled.div`
  width: 1px;
  height: 13px;
  margin: 0px 12px;
  background-color: rgb(217, 217, 217);
`;

export const ServiceIcon = styled.span`
  width: 8px;
  height: 5px;
  background-image: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png);
  background-size: cover;
  background-position: center center;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 1px;
`;

export const ServiceNav = styled.div`
  position: absolute;
  right: 0px;
  top: 34px;
  width: 90px;
  padding: 3px 9px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  display: none;
  & > div {
    display: block;
    height: 24px;
    line-height: 24px;
    color: rgb(64, 64, 64);
    cursor: pointer;
  }
`;

export const ServiceCenter = styled.div`
  line-height: 35px;
  position: relative;
  & :hover ${ServiceNav} {
    display: block;
  }
`;

export const HeadMain = styled.div`
  height: 100px;
  padding-top: 36px;
`;

export const HeadLeft = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 63px;
  text-decoration: none;
  & > img {
    flex: 0 0 82px;
  }
`;

export const LogoButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  flex-shrink: 0;
  // margin-left: 10px;
  font-size: 18px;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: rgb(181, 181, 181);
  border-radius: 0;
  cursor: pointer;
  font-weight: 600;
  color: #e72956;
  border: none;
  background-color: inherit;
`;

export const HeadCenter = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
`;

export const SearchForm = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: absolute;
  left: 325px;
  top: -55px;
  width: 400px;
  height: 48px;
  padding-left: 14px;
  border: 1px solid #c0163d;
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(247 247 247) 0px 0px 0px 1px inset;

  & > input {
    width: 300px;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: -0.33px;
  }
  & > Button {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 10px;
    bottom: 3px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
      0px 0px no-repeat;
    cursor: pointer;
  }
`;

export const HeadRight = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
`;

export const HeadRightContents = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  right: -6px;
  top: -49px;

  & > div:first-child {
    width: 36px;
    height: 36px;
    margin-right: 20px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K)
      50% 50% no-repeat;
    cursor: pointer;
  }
  & > button {
    width: 36px;
    height: 36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
      50% 50% no-repeat;
    cursor: pointer;
  }
`;

export const CartIconWrap = styled.div`
  position: relative;
  margin-left: 20px;
  & button {
    display: block;
    width: 36px;
    height: 36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
    cursor: pointer;
  }
  & span {
    position: absolute;
    right: -4px;
    top: -1px;
    min-width: 20px;
    height: 20px;
    padding: 1px 5px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 10px;
    background-color: rgb(95, 0, 128);
    font-size: 9px;
    color: rgb(255, 255, 255);
    line-height: 15px;
    text-align: center;
    white-space: nowrap;
  }
`;

export const HeadLogOut = styled.div`
  display: block;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
`;
export const CustomerLink = styled(Link)`
text-decoration: none;
color: inherit;
`;

export const RatingIcon = styled.span`
    display: inline-block;
    min-width: 44px;
    height: 16px;
    margin-right: 6px;
    padding: 0px 4px;
    border-radius: 30px;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.3px;
    vertical-align: 0px;
    color: rgb(149, 5, 3);
    border: 1px solid rgb(149, 5, 3);
    background-color: rgb(255, 255, 255);
`;