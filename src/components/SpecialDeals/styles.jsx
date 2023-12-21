import styled from "styled-components";

export const SpeacilDealsContainer = styled.div`
  height: 100%;
`;

export const SpeacilDealsBox = styled.div`
  width: 1050px;
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 80px 0px;
`;

export const TimerBox = styled.div`
  width: 249px;
  & h2 {
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.26px;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 16px;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: normal;
    margin-bottom: 24px;
  }
  & p {
    font-size: 14px;
    color: rgb(204, 204, 204);
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: -0.4px;
    margin-top: 32px;
  }
`;

export const Timer = styled.div`
  display: flex;
`;

export const TimerIcon = styled.div`
  margin-right: 5px;
  & svg {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    overflow: hidden;
  }
`;

export const TimerCount = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 136px;
  font-size: 32px;
  font-weight: 800;
  color: rgb(51, 51, 51);
`;

export const ItemBox = styled.div`
  display: flex;
  gap: 18px;
  & div {
    color: rgb(51, 51, 51);
    cursor: pointer;
    padding: 0px;
    display: block;
  }
`;

export const ItemImageBox = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  height: 347px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const ItemSticker = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0.9;
  background-color: rgb(189, 118, 255);
  & span {
    font-size: 14px;
    line-height: 1.43px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    height: 32px;
  }
`;

export const ItemTextBox = styled.div`
  & div {
    font-size: 14px;
    padding: 14px 0px 0px;
    position: relative;
    font-weight: 400;
    color: rgb(153, 153, 153);
    margin-bottom: 8px;
    line-height: 1.38;
    word-break: break-word;
  }
  & h3 {
    font-size: 16px;
    line-height: 1.45;
    color: rgb(51, 51, 51);
    font-weight: 400;
    margin-bottom: 6px;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

export const EventPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  & span {
    color: rgb(51, 51, 51);
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
    font-size: 20px;
  }
  & span:first-child {
    color: rgb(250, 98, 47);
    margin-right: 7px;
  }
  & span:last-child {
    margin-left: 6px;
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;
  }
`;
