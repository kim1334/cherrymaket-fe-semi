import styled from 'styled-components';
import { H3, TitleContainer } from './Style.jsx';
import { useState, useEffect } from 'react';

const PatmentBox = (props) => {
    const [paymentDetail, setPaymentDetail] = useState([]);

    useEffect(() => {

        if (props.paymentDetail.amountInfo) {
            setPaymentDetail(props.paymentDetail.amountInfo);
        }
      }, [props.paymentDetail.amountInfo]);


  return (
    <>
    <TitleContainer>
        <H3>결제정보</H3>
    </TitleContainer>
    <Ul>
        <Li>
            <TitleSapn>상품금액</TitleSapn>
            <PriceSpan>{paymentDetail.totalAmount-paymentDetail.deliveryFee}원</PriceSpan>
        </Li>
        <Li>
            <TitleSapn>배송비</TitleSapn>
            <PriceSpan>{paymentDetail.deliveryFee}원</PriceSpan>
        </Li>
        <Li>
            <TitleSapn>적립금</TitleSapn>
            <PriceSpan>0원</PriceSpan>
        </Li>
        <Li>
            <TitleSapn>결제금액</TitleSapn>
            <PriceSpan>{paymentDetail.totalAmount}원</PriceSpan>
        </Li>
        <Li>
            <TitleSapn>적립금액</TitleSapn>
            <span style={{marginRight:'4px', color:'rgb(153, 153, 153)'}}>배송완료 7일후 적립</span>
            <PriceSpan>{paymentDetail.rewordAmount}원</PriceSpan>
        </Li>
        <Li>
            <TitleSapn>결제방법</TitleSapn>
            <PriceSpan>{paymentDetail.method}</PriceSpan>
        </Li> 
    </Ul>
    
    </>
  )

}

export default PatmentBox;

const PointSpan = styled.span`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
color: rgb(153, 153, 153);
padding-bottom: 8px;
font-size: 14px;
letter-spacing: -0.5px;
line-height: 20px;
`;

const PointLi = styled.li`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(153, 153, 153);
    padding-bottom: 8px;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 20px;
    padding-top: 8px;
}
`;

const PriceSpan = styled.span`
font-weight: 500;
color: rgb(51, 51, 51);
`;

const TitleSapn = styled.span`
flex: 1 1 0%;
    color: rgb(102, 102, 102);
`;

const Li = styled.li`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 24px;
    font-size: 16px;
    line-height: 21px;
`;

const Ul = styled.ul`
padding: 20px 0px 4px;
margin-bottom: 60px;
border-bottom: 1px solid rgb(244, 244, 244);
list-style-type: none;
`;