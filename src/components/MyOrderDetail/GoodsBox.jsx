
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const  GoodsBox = (props) => {

  const access_token = sessionStorage.getItem("accessToken");
  const baseUrl = process.env.REACT_APP_API;
  const [goodsCode, setGoodsCode] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/goods/detail?goodsId=${props.item.goodsId}`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        });

        setGoodsCode(response.data.goodsCode);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []); 

  function generateImageUrl() {
    const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
    const imageUrl = `${imageUrlBase}${goodsCode}/${goodsCode}_0.png`;
    return imageUrl;
  }

  return (
    <>

    <Container>
      <Img src={generateImageUrl()}></Img>
      <TitleDiv>
        <A>{props.item.goodsName}</A>
        <PriceDiv>
          <PriceSpan>{props.item.price}원</PriceSpan>
          <CountSpna>{props.item.quantity}개</CountSpna>
        </PriceDiv>
      </TitleDiv>
      <StatusSpan>{props.orderStatus}</StatusSpan>
      <BtnWapr>
      <Link to="/mypage/review">
        <ReviewBtn>
          <BtnSpan>후기작성</BtnSpan>
        </ReviewBtn>
        </Link>
        <CartBtn>
          <BtnSpan>장바구니 담기</BtnSpan>
        </CartBtn>
      </BtnWapr>
    </Container>
    </>
  )

}

export default GoodsBox;

const BtnSpan = styled.span`
font-size: 12px;
    font-weight: 500;
    line-height: 17px;
`;

const CartBtn = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 96px;
    height: 36px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    cursor: pointer;
`;

const ReviewBtn = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 96px;
    height: 36px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
    cursor: pointer;
`;

const BtnWapr = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: justify;
justify-content: space-between;
margin-left: 40px;
gap: 6px;

`;

const StatusSpan = styled.span`
  font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`;

const CountSpna  = styled.span`
letter-spacing: -0.22px;
color: rgb(51, 51, 51);

&::before {
  content: "|";
  margin-right: 8px;
  color: rgb(221, 221, 221);
  font-size: 12px;
}
`;

const PriceSpan = styled.span`
margin-right: 6px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.22px;
    color: rgb(51, 51, 51);
`;

const Container = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 20px;
    padding: 24px 0px;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const Img = styled.img`
width: 60px;
height: 78px;
margin-right: 20px;
cursor: pointer;
background-color: rgb(245, 245, 245);
`;

const TitleDiv = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 0%;
margin-right: 20px;
`;

const A = styled.a`
margin-bottom: 8px;
padding-bottom: 2px;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
display: -webkit-box;
overflow: hidden;
word-break: break-all;
white-space: normal;
-webkit-line-clamp: 2;
cursor: pointer;
`;

const PriceDiv = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
`;