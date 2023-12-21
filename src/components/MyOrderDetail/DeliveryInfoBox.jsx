import { H3, OrderDetailLi, OrderDetailLiValueSpan, OrderDetailTitleSpan, OrderDetailUl, TitleContainer } from './Style.jsx';


const DelivertInfoBox = (props) => {

  const item = props.deliveryInfo;

  return (

    <>
    <TitleContainer>
        <H3>배송정보</H3>
    </TitleContainer>
    <OrderDetailUl>
      <OrderDetailLi>
        <OrderDetailTitleSpan>받는분</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>{item.recipient}</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>핸드폰</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>{item.recipientContact}</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>주소</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>({item.zipCode}) {item.address} {item.addressDetail}</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>받으실 장소</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>{item.place}</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>공동현관 비밀번호</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>공동현관 비밀번호(****)</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>포장방법</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>종이포장재</OrderDetailLiValueSpan>
        </OrderDetailLi>
    </OrderDetailUl>
  
  </>




  )

}

export default DelivertInfoBox;