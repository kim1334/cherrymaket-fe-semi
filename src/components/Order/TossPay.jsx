
import styled from 'styled-components';
import { CheckoutPage } from './Checkout';

const TossPay = () => {

  return(

    <div>
      <TossPayTitleContainer>
        <Title>결제수단</Title>
      </TossPayTitleContainer>
      <TossPayContainer>
          <TossPaySpan>결제수단 선택</TossPaySpan>
          <TossPayBox><CheckoutPage /></TossPayBox>
      </TossPayContainer>
    </div>


  );
};

export default TossPay;

const TossPayTitleContainer = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
margin-top: 75px;
border-bottom: 1px solid rgb(51, 51, 51);
`;

const Title = styled.h3`
padding: 16px 0px;
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
line-height: 29px;
`;

const TossPayContainer = styled.div`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-top: 20px;
`;

const TossPaySpan = styled.span`
display: inline-block;
    width: 160px;
    margin-right: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 44px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.32px;
    vertical-align: top;
`

const TossPayBox = styled.div`
flex: 1 1 0%;
`;