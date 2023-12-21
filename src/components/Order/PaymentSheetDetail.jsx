import styled from 'styled-components';


const FinalAmount = () => {

    return (
        <FinalAmountContainer>
          <FinalAmountTitle>
            <Title>결제 금액</Title>
          </FinalAmountTitle>
          <DetailBoxContainer>
            <DetailContainer>
                <div>주문금액</div>
                <div><span>28,000원</span></div>
            </DetailContainer>
            <DownTagContainer>
                <div>상품금액</div>
                <div><span>32,890원</span></div>
            </DownTagContainer>
            <DownTagContainer>
                <div>상품할인금액</div>
                <div><span>-4,185원</span></div>
            </DownTagContainer>
            <DetailContainer>
            <div>배송비</div>
                <div><span>+3,000원</span></div>
            </DetailContainer>
            <DetailContainer>
            <div>쿠폰할인</div>
                <div><span>0원</span></div>
            </DetailContainer>
            <DetailContainer>
            <div>카드즉시할인</div>
                <div><span>0원</span></div>
            </DetailContainer>
            <DetailContainer>
            <div>적립금</div>
                <div><span>0원</span></div>
            </DetailContainer>
            <DetailContainer>
                <div>최종결제금액</div>
                <div><span style={{fontSize: '26px'}}>31,705원</span></div>
            </DetailContainer>
            <BonusPoint>
                컬리카드 결제시 최대 1,585원 추가 적립
            </BonusPoint>
          </DetailBoxContainer>
          <BenefitsBtn>
            <BenefitsSpan>
            <Img src="https://product-image.kurly.com/banner/da-banner/91f7f182-22c2-45fc-b5a8-ebbf605520ad.png" alt='BenefitsBtn'/>
            </BenefitsSpan>
          </BenefitsBtn>

        </FinalAmountContainer>
    );
}

export default FinalAmount;

const FinalAmountContainer = styled.div`
position: absolute;
width: 284px;
top: 0px;
`;

const FinalAmountTitle = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
`;

const Title = styled.h3`
padding: 16px 0px;
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
line-height: 29px;
`;



const DetailContainer = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
margin-top: 16px;
font-size: 16px;
color: rgb(51, 51, 51);
`;

const DetailBoxContainer = styled.div`
width: 100%;
    padding: 17px 16px 18px 18px;
    background: rgb(250, 250, 250);
    border: 1px solid rgb(242, 242, 242);
`

const DownTagContainer = styled.div`
display: flex;
margin-top: 8px;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
font-size: 14px;
color: rgb(153, 153, 153);
`;

const BonusPoint = styled.div`
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
-webkit-box-align: center;
align-items: center;
margin-top: 6px;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.5px;
color: rgb(141, 76, 196);
`;

const BenefitsBtn = styled.button`
width: 100%;
    vertical-align: top;
    max-width: none;
`;

const BenefitsSpan = styled.span`
box-sizing: border-box;
display: block;
overflow: hidden;
width: initial;
height: initial;
background: none;
opacity: 1;
border: 0px;
margin: 0px;
padding: 0px;
position: relative !important;
inset: 0px;

`;

const Img = styled.img`

position: relative !important;;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: auto !important;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;

`;
