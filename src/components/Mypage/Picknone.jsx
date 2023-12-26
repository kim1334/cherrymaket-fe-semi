import styled from 'styled-components';
import { BsHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Picknone = () => {


  return (
      <>
      <Container>
          <Div1><HeartIcon /></Div1>
          <Striong>찜한 상품이 없습니다.</Striong>
          <Link to ="/bestitem">
          <Btn>
              <Span>베스트 상품 보기</Span>
          </Btn>
          </Link>
      </Container> 
      </>
  )

}

export default Picknone;

const HeartIcon = styled(BsHeart)`
font-size: 100px;
color : rgb(181, 181, 181);
margin-bottom: 20px;
`;

const Span = styled.span`
font-size: 14px;
    line-height: 44px;
`;

const Btn = styled.button`
  display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 150px;
    height: 44px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(149, 5, 38);
    border: 0px none;
    cursor: pointer;
`;

const Striong = styled.strong`
display: block;
margin-bottom: 20px;
font-size: 16px;
font-weight: normal;
color: rgb(181, 181, 181);
`;

const Div1 = styled.div`

`;

const Container = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
width: 100%;
height: 557px;
`;

