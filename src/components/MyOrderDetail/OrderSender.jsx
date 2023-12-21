import { H3, OrderDetailLi, OrderDetailLiValueSpan, OrderDetailTitleSpan, OrderDetailUl, TitleContainer } from './Style.jsx';




const OrderSender = (sender) => {


   return (
    <>
      <TitleContainer>
          <H3>주문 정보</H3>
      </TitleContainer>
      <OrderDetailUl>
        <OrderDetailLi>
          <OrderDetailTitleSpan>주문번호</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>{sender.orderCode}</OrderDetailLiValueSpan>
          </OrderDetailLi>
          <OrderDetailLi>
          <OrderDetailTitleSpan>보내는분</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>{sender.sender.name}</OrderDetailLiValueSpan>
          </OrderDetailLi>
          <OrderDetailLi>
          <OrderDetailTitleSpan>결제일시</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>{sender.sender.approveAt}</OrderDetailLiValueSpan>
          </OrderDetailLi>
      </OrderDetailUl>
    
    </>
   )

}

export default OrderSender;