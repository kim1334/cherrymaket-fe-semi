import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;

export const TitleWraper = styled.div`
    width : 1050px;
    margin : 0 auto;
`;

export const Title = styled.h3`
    margin-top: 50px;
    font-weight: 500;
    font-size: 28px;
    color: rgb(51, 51, 51);
    line-height: 35px;
    letter-spacing: -1px;
    text-align: center;
`;

export const SubTitleWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 180px);
    gap: 20PX 220px;
    overflow: hidden;
    margin: 10px auto;
    padding: 30px 40px;
    border: 1px solid rgb(226, 226, 226);
    line-height: 20px;
`;

export const SubTitleItemWrapper = styled.li`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const SubTitleItem = styled.a`
    letter-spacing: -1px;
    cursor: pointer;
    font-weight: 700;
    color: #C0C0C0;
    :hover {
        color : #950526;
    }
`;

export const ItemWideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1050px;
    margin: 0px auto;
`;

export const ItemBlank = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin-top: 50px;
    margin-bottom: 75px;
`;

export const ItemWrapper = styled.div`
    width : 100%;
`;

export const ItemTopWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 20px;
    line-height: 20px;
`;

export const ItemCount = styled.div`    
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`;

export const ItemSortWrapper = styled.ul` 
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
`;

export const ItemSortItem = styled.li`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: 8px;
    fontize: 14px;
    color: rgb(153, 153, 153);
    ::after {
        content: "";
        display: flex;
        width: 1px;
        height: 10px;
        margin-left: 8px;
        background-color: rgb(226, 226, 226);
    }
    :last-child::after {
        display: none;
    }
`;

export const ItemSort = styled.a`
    letter-spacing: -0.3px;
    font-weight: 500;
    cursor: pointer;
    color: #C0C0C0;
    :hover {
      color : #950526;
    }
`;

export const ItemListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 1050px;
    margin : auto;
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

