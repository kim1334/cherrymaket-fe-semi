import styled from "styled-components";

export const FlexWrapper = styled.div`
    display: flex;
    width: 1050px;
    padding: 50px 0px 80px;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const PrevButton = styled.button`
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg);
    cursor: default;
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;

    background-color: transparent;
    
    background-repeat: no-repeat;
    background-size: cover;
    ${({ currentPage }) => currentPage >= 2 && `
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg);
    cursor: pointer;
  `}
`;

export const NextButton = styled.button`
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg);
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 60px 0px 30px;
`;

export const Container = styled.div`
    width: 820px;
    margin: 0px auto;
`;

export const TitleWraper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    -webkit-box-pack: justify;
    padding-bottom: 27px;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`;
export const TitleHead = styled.h2`
    font-weight: 500;
    font-size: 24px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.5px;
    line-height: 48px;
`
export const TitleSpan = styled.span`
    padding-left: 11px;
    font-size: 14px;
    letter-spacing: -0.3px;
    color: rgb(153, 153, 153);
    line-height: 20px;
`;

export const SubTitle = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px;
    border-top: 2px solid rgb(244, 244, 244); 
`;