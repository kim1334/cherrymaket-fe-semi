import styled from 'styled-components';


const OrderProductItem = ({item}) => {


  function generateImageUrl() {
    const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
    const imageUrl = `${imageUrlBase}${item?.goodsCode}/${item?.goodsCode}_0.png`;
    return imageUrl;
  }



  return (
    <>
      <Container>
        <Img src={generateImageUrl()} />
        <NameSpan>
          <ProductName>{item.goodsName}</ProductName>
        </NameSpan>
        <QuantitySpan>{item.quantity}개</QuantitySpan>
        <PriceSpan>
          <DiscountSpan> {(item?.discountedPrice * item.quantity).toLocaleString('ko-KR')}원</DiscountSpan>
          <OriginalSpan>{item?.price?.toLocaleString('ko-KR')}원</OriginalSpan>
        </PriceSpan>
      </Container>
    </>
  )

}

export default OrderProductItem;

const OriginalSpan = styled.span`
display: block;
    font-size: 14px;
    line-height: 24px;
    color: rgb(181, 181, 181);
    word-break: break-all;
    text-decoration: line-through;

`;

const DiscountSpan = styled.span`
display: block;
font-weight: 700;
font-size: 16px;
color: rgb(51, 51, 51);
line-height: 22px;
word-break: break-all;

`;

const ProductName = styled.span`
max-height: 48px;
font-size: 16px;
line-height: 24px;
color: rgb(0, 0, 0);
display: -webkit-box;
overflow: hidden;
word-break: break-all;
white-space: normal;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;


const Container = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    padding: 25px 0px;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const Img =   styled.img`
width: 60px;
height: 78px;
cursor: pointer;
background-color: rgb(245, 245, 245);
`;

const NameSpan = styled.span`
overflow: hidden;
width: 720px;
padding: 0px 20px;
flex: 1 1 0%;
`;

const QuantitySpan = styled.span`
width: 100px;
font-size: 14px;
line-height: 22px;
text-align: center;

`;

const PriceSpan = styled.span`
width: 126px;
    text-align: right;

`;

