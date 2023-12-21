import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
position: relative;
`;

export const ItemDetailWrapper = styled.div`
position: relative;
width: 1050px;
margin: 0px auto;
padding-top: 30px;
`;

export const ItemDetail = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
`;

export const ItemImageWrapper = styled.div`
width: 430px;
height: 552px;
`;

export const ItemTextWrapper = styled.div`
width: 560px;
`;

export const ItemDeliveryText = styled.div`
font-weight: 500;
line-height: 1.36;
letter-spacing: -0.5px;
color: rgb(153, 153, 153);
margin-bottom: 6px;
width: 500px;
`;

export const ItemTitleWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
overflow-wrap: break-word;
`;

export const ItemTitle = styled.h1`
width: 500px;
font-weight: 500;
font-size: 24px;
color: rgb(51, 51, 51);
line-height: 34px;
letter-spacing: -0.5px;
margin-right: 20px;
`;

export const ItemSubTitle = styled.h2`
width: 500px;
padding-top: 5px;
font-size: 14px;
font-weight: 400;
color: rgb(181, 181, 181);
line-height: 19px;
letter-spacing: -0.5px;
`

export const ItemPriceWrapper = styled.h2`
display: flex;
flex-direction: row;
align-items: flex-end;
padding-top: 20px;
font-weight: bold;
line-height: 30px;
letter-spacing: -0.5px;
`;

export const ItemDiscount = styled.span`
padding-right: 9px;
font-size: 28px;
color: rgb(250, 98, 47);
`;

export const ItemPrice = styled.span`
padding-right: 4px;
font-size: 28px;
color: rgb(51, 51, 51);
`;

export const ItemOriginalPriceWrapper = styled.span`
display: flex;
flex-direction: row;
margin-top: 8px;
`;

export const ItemOriginalPrice = styled.span`
font-size: 16px;
color: rgb(181, 181, 181);
letter-spacing: -0.5px;
text-decoration: line-through;
margin-right: 1px;
`;  

export const ItemOriginalPlace = styled.p`
color: rgb(51, 51, 51);
font-size: 24px;
letter-spacing: -0.5px;
margin-top: 8px;
`;

export const ItemBenefit = styled.div`
font-size: 14px;
color: rgb(149, 5, 38);
line-height: 19px;
height: 19px;
letter-spacing: -0.5px;
margin-top: 14px;
`;

export const ItemCuponWrapper = styled.div`
display: inline-flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
width: 350px;
min-height: 38px;
padding: 10px 14px 10px 16px;
background-color: #ff3866;
border-radius: 4px;
margin-top: 12px;
`;

export const ItemCuponText = styled.p`
font-weight: 400;
line-height: 16px;
color: #950526;
letter-spacing: -0.5px;
font-size: 13px;
`;

export const ItemDetailList = styled.li`
display: flex;
flex: 1 1 0%;
flex-direction: row;
align-items: flex-start;
overflow: hidden;
width: 100%;
padding: 17px 0px 18px;
border-top: 1px solid rgb(244, 244, 244);
font-size: 14px;
letter-spacing: -0.5px;
`;

export const ItemDetailListTitle = styled.span`
width: 128px;
height: 100%;
color: rgb(102, 102, 102);
font-weight: 400;
line-height: 19px;
`;

export const ItemDetailListTextWrapper = styled.span`
display: flex;
flex: 1 1 0%;
flex-direction: column;
`;

export const ItemDetailListText = styled.p`
color: rgb(51, 51, 51);
font-weight: 400;
line-height: 19px;
white-space: pre-line;
word-break: break-all;
overflow: hidden;
`;

export const ItemDetailListTextContent = styled.p`
display: block;
font-size: 12px;
color: rgb(102, 102, 102);
padding-top: 4px;
line-height: 16px;
white-space: pre-line;
`;

export const ItemQuantityWrapper = styled.div`
border-bottom: 1px solid rgb(244, 244, 244);    
display: flex;
flex-direction: column;
-webkit-box-pack: justify;
justify-content: space-between;
padding: 11px 10px 11px 15px;
font-size: 12px;
border-left: 1px solid rgb(244, 244, 244);
border-top: 1px solid rgb(244, 244, 244);
border-right: 1px solid rgb(244, 244, 244);
`;

export const ItemDetailListSmallTitleWrapper = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
align-items: flex-start;
`;

export const ItemDetailListSmallTitle = styled.span`
line-height: 16px;
width: 320px;
min-height: 24px;
color: rgb(51, 51, 51);
overflow-wrap: break-word;
`;

export const ItemQuantity = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding-top: 4px;
`;

export const ItemQuantityButtonWrapper = styled.div`
display: inline-flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
border: 1px solid rgb(221, 223, 225);
width: 88px;
border-radius: 3px;
`;

export const ItemQuantityMinusButton = styled.button`
display: inline-flex;
width: 28px;
height: 28px;
border: none;
font-size: 1px;
color: transparent;
background-size: cover;
background-color: transparent;
background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=");
vertical-align: top;
`;

export const ItemQuantityNumber = styled.span`
display: inline-flex;
overflow: hidden;
white-space: nowrap;
-webkit-box-pack: center;
justify-content: center;
font-size: 14px;
font-weight: 600;
color: rgb(51, 51, 51);
text-align: center;
width: 31px;
height: 28px;
line-height: 28px;
`;

export const ItemQuantityPlusButton = styled.button`
display: inline-flex;
width: 28px;
height: 28px;
border: none;
font-size: 1px;
color: transparent;
background-size: cover;
background-color: transparent;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
vertical-align: top;
`;

export const ItemQuantityPrice = styled.span`
font-weight: bold;
font-size: 12px;
color: rgb(51, 51, 51);
padding-right: 4px;
`;

export const TotalPriceWrapper = styled.div`
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
-webkit-box-align: flex-end;
align-items: flex-end;
`;

export const TotalPriceText = styled.span`
padding-right: 12px;
font-size: 13px;
font-weight: 500;
color: #333;
line-height: 20px;
`;

export const TotalPrice = styled.span`
font-weight: bold;
font-size: 32px;
color: #333;
line-height: 36px;
`;

export const ItemAccrualWrapper = styled.div`
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
padding-top: 10px;
`;

export const ItemAccrualBorder = styled.span`
background-color: #ffbf00;
margin: 1px 6px 0 0;
padding: 0 7px;
border-radius: 10px;
font-size: 11px;
font-weight: 500;
color: #fff;
line-height: 20px;
`;

export const ItemAccrualText = styled.span`
line-height: 1.45;
color: #666;
`;

export const ItemCartButtonWrapper = styled.div`
display: flex;
gap: 8px;
margin-top: 20px;
`;

export const ItemCartLikeButton = styled.button`
display: block;
padding: 0 10px;
text-align: center;
overflow: hidden;
width: 56px;
height: 56px;
border-radius: 3px;
color: #333;
background-color: #fff;
border: 1px solid #ddd;
`;

export const ItemCartLikeSpan = styled.span`
display: inline-block;
font-size: 16px;
font-weight: 500;
`;

export const ItemCartLikeImage = styled.button`
border: 0;
vertical-align: top;
background-color: white;
`;

export const ItemCartButton = styled.button`
display: block;
padding: 0 10px;
text-align: center;
overflow: hidden;
width: 100%;
height: 52px;
border-radius: 3px;
color: #fff;
background-color: rgb(149, 5, 38);
border: 0 none;
`;

export const ItemCartButtonSpan = styled.span`
display: inline-block;
font-size: 16px;
font-weight: 500;
`;

export const ItemDetailNavWrapper = styled.div`
z-index: 20;
position: -webkit-sticky;
position: sticky;
top: 56px;
width: 100%;
box-shadow: inset 0 -0.5px 0 0 #ddd;
background-color: #fff;
margin-top: 50px;
`;

export const ItemDetailNavUl = styled.ul`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-flex-wrap: wrap;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
height: 60px;
`;

export const ItemDetailNavLi = styled.li`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
border-width: 1px 0 1px 1px;
border-color: #eee;
border-style: solid;
background-color: #fafafa;
`;

export const ItemDetailNavA = styled.a`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
height: 100%;
`;