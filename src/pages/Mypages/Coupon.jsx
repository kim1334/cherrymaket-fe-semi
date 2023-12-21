import MypageMenu from "../../components/Mypage/MypageMenu.jsx";
import Header from "../../common/Header/Header.jsx";
import Mypage from "./Mypage.jsx";
import {
    Title,
    TitleHead,
    TitleSpan,
    TitleWraper,
    FlexWrapper,
    Container,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import styled from 'styled-components';
import CouponBox from '../../components/Mypage/CouponBox.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import { useEffect } from "react";
import React, { useState } from 'react';
import axios from "axios";


const Coupon = () => {


    return (
        <>
            <Header />
            <Mypage />
            <FlexWrapper>

                <MypageMenu />
                <Container>

                    <TitleWraper >
                        <Title>
                            <TitleHead>쿠폰</TitleHead>
                        </Title>
                    </TitleWraper>
                    <InputContainer>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '0px' }}>
                                <div style={{ height: 'auto' }}>
                                    <Input type='text' placeholder='발급된 쿠폰번호를 입력해주세요' data-testid="input-box" />
                                </div>
                            </div>
                            <CouponBtn>쿠폰 등록</CouponBtn>
                        </div>
                        <P>쿠폰에 하이픈 '-'이 포함되어 있을 경우, 하이픈 '-'을 반드시 입력해주세요.</P>
                    </InputContainer>
                    <GudieContainer>
                        <P1>쿠폰은 적용 가능한 상품이 따로 적용되어 있는 경우 해당 상품 구매 시에만 사용이 가능합니다.</P1>
                        <P2>사용가능쿠폰: 1장</P2>
                    </GudieContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <FirstTh>쿠폰명</FirstTh>
                                <Th style={{ width: '70px' }}>기능</Th>
                                <Th style={{ width: '100px' }}>할인/적립</Th>
                                <Th style={{ width: '150px' }}>사용가능기간</Th>
                                <Th style={{ width: '100px' }}>사용여부</Th>
                            </Tr>
                        </Thead>
                        <CouponBox />
                    </Table>
                    <UlWrapper>

                    </UlWrapper>
                </Container>
            </FlexWrapper>
            <FixedSiderbar />
            <Footer />
        </>
    )
}

export default Coupon;

const InputContainer = styled.div`
padding: 19px 29px 14px;
border: 1px solid rgb(221, 221, 221);
`;

const Input = styled.input`
margin-right: 10px;
    width: 210px;
    height: 34px;
    padding: 0px 10px;
    border-radius: 0px;
    border: 1px solid rgb(26, 26, 26);
    font-size: 12px;
    color: rgb(0, 0, 0);
    line-height: 32px;
    outline: none;
    letter-spacing: -0.6px;
`;

const CouponBtn = styled.button`
width: 140px;
height: 34px;
border: none;
background-color: rgb(95, 0, 128);
font-size: 12px;
font-weight: 400;
color: rgb(255, 255, 255);
`;

const P = styled.p`
margin-top: 13px;
    font-size: 12px;
    color: rgb(240, 63, 64);
`;

const GudieContainer = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
color: rgb(102, 102, 102);
font-weight: 400;
padding: 35px 0px 15px;
`;

const P1 = styled.p`
display: flex;
-webkit-box-align: center;
align-items: center;
font-size: 12px;

&::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: rgb(76, 76, 76);
    margin-right: 6px;
  }
`;

const P2 = styled.p`
-webkit-box-pack: justify;
justify-content: space-between;
font-size: 13px;
margin-right: 6px;
`;

const Table = styled.table`
width: 820px;
border-collapse: collapse;
    border-spacing: 0;
`;

const Thead = styled.thead`
display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
`;

const Tr = styled.tr`

border-bottom: 1px solid rgb(51, 51, 51);
    border-top: 2px solid rgb(51, 51, 51);
}
`;

const FirstTh = styled.th`
    width: auto;
    padding: 18px 10px 19px;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
`;

const Th = styled.th`
    padding: 18px 0px 19px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
`;
