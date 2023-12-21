import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const CouponBox = () => {




  return (
    <>
      <tbody>
        <tr>
          <FirstTd>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>
              [맛있으면 0칼로리 페스타] 30% 할인쿠폰 (최대 1만5천원)
            </p>
            <P>최대 15,000원 할인</P>
            <P>컬리상품 한정, 특정상품 한정, 일부 상품 제외</P>
            <Btn>사용조건 보기</Btn>
          </FirstTd>
          <Td>할인</Td>
          <Td>30%</Td>
          <Td>23.12.14 11시까지</Td>
          <LastTd>미사용</LastTd>
        </tr>
      </tbody>
    </>
  );
};

export default CouponBox;

const FirstTd = styled.td`
  padding: 16px 0px 0px 10px;
  border-bottom: 1px solid rgb(244, 244, 244);
  color: rgb(0, 0, 0);
  text-align: left;
`;

const Td = styled.td`
  padding: 16px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
  text-align: center;
  color: rgb(0, 0, 0);
`;

const LastTd = styled.td`
  padding: 16px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
  text-align: center;
  color: rgb(95, 0, 128);
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: rgb(51, 51, 51);
`;

const Btn = styled.button`
  margin-left: -16px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  color: rgb(95, 0, 128);
  padding: 16px;
  background-color: transparent;
`;
