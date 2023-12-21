import styled from 'styled-components';

export const OrderDetailUl = styled.ul`
padding: 20px 0px 4px;
margin-bottom: 60px;
border-bottom: 1px solid rgb(244, 244, 244);
list-style-type: none;
`;

export const OrderDetailLi = styled.li`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 12px 0px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
`;

export const OrderDetailTitleSpan = styled.span`
    min-width: 160px;
    margin-right: 16px;
    flex-shrink: 1;
    color: rgb(102, 102, 102);
    font-weight: 400;

`;

export const OrderDetailLiValueSpan = styled.span`
-webkit-box-flex: 1;
flex-grow: 1;
color: rgb(51, 51, 51);
word-break: break-all;
`;

export const TitleContainer = styled.div`
display: flex;
    flex-direction: row;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(51, 51, 51);
`;

export const H3 = styled.h3`
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
letter-spacing: -0.43px;
`;