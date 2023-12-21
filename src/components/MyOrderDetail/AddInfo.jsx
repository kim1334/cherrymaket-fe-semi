import { H3, OrderDetailLi, OrderDetailLiValueSpan, OrderDetailTitleSpan, OrderDetailUl, TitleContainer } from './Style.jsx';


const AddInfo = () => {


  return (
    <>
    <TitleContainer>
        <H3>추가정보</H3>
    </TitleContainer>
    <OrderDetailUl>
      <OrderDetailLi>
        <OrderDetailTitleSpan>미배송 시 조치방법</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>결제수단으로 환불</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>메세지 전송시점</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>배송 직후</OrderDetailLiValueSpan>
        </OrderDetailLi>
    </OrderDetailUl>
  </>
  )

}

export default AddInfo;