import  React from "react";
import styled from "styled-components";


const Coupon = () => {

return (
    <div> {/* 기본 하나 있어야함 */}
        <CouponContainer1>
            <Title>쿠폰</Title>
        </CouponContainer1>
        <CouponContainer2>
            <CouponSpan>쿠폰적용</CouponSpan>
            <BtnDiv>
                <BtnC>
                    <CouponBtn1>
                    사용가능 쿠폰 0장 / 전체 0
                    <CouponListBtn></CouponListBtn>
                    </CouponBtn1>
                </BtnC>
            </BtnDiv>
            <CouponBtn type="button">
                <TextSapn>쿠폰 사용 문의(카카오톡)</TextSapn>
            </CouponBtn>
        </CouponContainer2>
    </div>

);

}

export default Coupon;

const CouponContainer1 = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
margin-top: 60px;
border-bottom: 1px solid rgb(51, 51, 51);
`;

const CouponContainer2 = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
padding-top: 20px;
`;

const Title = styled.h3`
padding: 16px 0px;
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
line-height: 29px;

`;

const BtnDiv = styled.div`
flex: 1 1 0%;
`;

const CouponBtn = styled.button`
color: rgb(95, 0, 128);
    font-size: 12px;

`;

const CouponBtn1 = styled.button`
position: relative;
    width: 100%;
    height: 44px;
    padding: 0px 54px 0px 16px;
    border: 1px solid rgb(221, 221, 221);
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    background: rgb(250, 250, 250);
    color: rgb(204, 204, 204);


`;

const CouponSpan = styled.span`
display: inline-block;
    width: 160px;
    margin-right: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 44px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.32px;
    vertical-align: top;
`;

const BtnC = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

const CouponListBtn = styled.span`
position: absolute;
top: 10px;
right: 16px;
}
`;

const TextSapn = styled.span`
display : flex; 
align-items: center;
`;