import styled from "styled-components";


const PaymentGuide = () => {

    return(
        <div>
            <GuideUl>
                <GuideLi>※ 카카오페이, 토스, 네이버페이, 페이코 결제 시, 결제하신 수단으로만 환불되는 점 양해부탁드립니다.</GuideLi>
                <GuideLi>※ 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 토스 페이먼츠의 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</GuideLi>
            </GuideUl>
            <TitleDiv>
                <Title>개인정보수집/제공</Title>
            </TitleDiv>
            <TermsContainer>
                <TermsItemDiv>
                    <span>개인정보 수집∙이용 및 처리 동의</span>
                    <TermsBtn>보기</TermsBtn>
                </TermsItemDiv>
                <TermsItemDiv style={{marginTop: '15px'}}>
                    <span>전자지급 결제대행 서비스 이용약관 동의</span>
                    <TermsBtn>보기</TermsBtn>
                </TermsItemDiv>
                <TermsStrong>위 내용을 확인하였으며 결제에 동의합니다</TermsStrong>
            </TermsContainer>
            <TermsP>※ 주문완료 상태일 경우에만 주문 취소가 가능하며, 상품 미배송 시 결제하신 수단으로 환불됩니다.</TermsP>
            <TermsP style={{paddingTop: '4px'}}>※ 컬리 내 개별 판매자가 등록한 오픈마켓 상품의 경우 컬리는 통신판매중개자로서 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</TermsP>
        </div>

    );

};

export default PaymentGuide;

const GuideUl = styled.ul`
margin-top: 20px;
    border-top: 1px solid rgb(244, 244, 244);
    padding-top: 20px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(102, 102, 102);
    list-style-type: none;
`;

const GuideLi = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    border-top: 1px solid rgb(244, 244, 244);
    padding-top: 1px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(102, 102, 102);

`;

const TitleDiv = styled.div`
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

const TermsContainer = styled.div`
padding: 20px 0px;
margin-bottom: 20px;
border-bottom: 1px solid rgb(244, 244, 244);
`;

const TermsItemDiv = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
`;

const TermsBtn = styled.button`
color: rgb(153, 153, 153);
    text-decoration: underline;
`;

const TermsStrong = styled.strong`
display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: rgb(51, 51, 51);
    padding-top: 20px;

`;

const TermsP = styled.p`
font-size: 12px;
line-height: 16px;
color: rgb(102, 102, 102);
`;

