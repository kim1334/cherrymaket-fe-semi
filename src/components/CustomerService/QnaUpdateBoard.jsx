// QnaUpdateBoard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


const OPTIONS = [
    {value : "문의유형을 선택해주세요", name : "문의유형을 선택해주세요"},
    {value : "CANCEL", name : "취소/교환/환불"},
    {value : "MEMBER", name : "회원/이벤트/쿠폰"},
    {value : "GOODS", name : "상품(식품/비식품/티켓"},
    {value : "DELIVERY", name : "배송"},
    {value : "ORDER", name : "주문/결제"},
    {value : "SERVICE", name : "서비스/오류/기타"},

];


const DETAIL_OPTIONS = {
        
    "CANCEL": {
        "상세유형을 선택해주세요": "상세유형을 선택해주세요",
        "CANCEL": "취소",
        "EXCHANGE": "교환",
        "REFUND": "환불",
        // 다른 상세 옵션들...
    },
    "MEMBER": {
        "MEMBER_INFO": "회원 정보",
        "POINT": "포인트 문의",
        "COUPON": "쿠폰 문의",
        // 다른 상세 옵션들...
    },
    "GOODS": {
        "PRODUCT_QUALITY": "상품 품질",
        "FOREIGN_SUBSTANCE": "이물질 발견",
        "PRODUCT_INFO": "상품 정보",
        // 다른 상세 옵션들...
    },
    "DELIVERY": {
        "DIFFERENT_PRODUCT_RECEIPT" :  "다른 상품 수령", 
        "UNRECEIVED_PRODUCT" : "상품 미수령",
        "DELIVERY_IMPROVEMENT" : "배송/포장개선요청",
        "DELIVERY_SCHEDULE_INFO" : "배송일정/정보",
    },
    "ORDER": {
        "INFO_CHANGE" : "정보변경(주소/출입방법)" ,
        "ORDER_HISTORY_RECEIPT" : "주문내역/영수증 발급" ,
        "ORDER_PAYMENT_METHOD" : "주문/결제방법", 
    },
    "SERVICE": {
        "SYSTEM_ERROR" : "시스템 오류/장애",
        "OTHER" : "기타(직접입력)",
        "SERVICE_SUGGESTION" : "서비스 제안/개선", 
    }
};

const QnaUpdateBoard = ({ qna, onUpdateSuccess, onCancel }) => {
  const [type, setType] = useState(qna.type);
  const [detailType, setDetailType] = useState(qna.detailType);
  const [subject, setSubject] = useState(qna.subject);
  const [content, setContent] = useState(qna.content);
  useEffect(() => {
    console.log(`inquiryId: ${qna.inquiryId}`);
    console.log(`type: ${type}`);
    console.log(`detailType: ${detailType}`);
    console.log(`subject: ${subject}`);
    console.log(`content: ${content}`);
}, [type, detailType, subject, content, qna.inquiryId]); // 의존성 배열에 상태를 추가

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    
    try {
        const token = sessionStorage.getItem('accessToken');
        const config = {
                headers: { Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' ,
            },
        };
        // const inquiryId = qna.inquiryId; // 문의 ID
      const inquiryData = {
        inquiryId: qna.inquiryId,
        type : type,
        detailType : detailType,
        subject : subject,
        content : content,
      };

      const response = await axios.patch('https://server.marketcherry.store/api/inquiry/modify-id', 
        inquiryData, config);
        
        if (response.status === 200) {
            console.log("response", response);
            onUpdateSuccess(response.data); // 상위 컴포넌트로 업데이트된 데이터 전달
            alert('문의가 수정되었습니다.');
            window.location.reload();
      }
    } catch (error) {
      console.error('Error updating inquiry:', error);
      alert('문의 수정에 실패했습니다.');
    }
};
  

  return (
    <form onSubmit={handleSubmit}>

      {/* 상세 유형 선택 */}
      <LineWrapper>
      <SubTitleWrapper>유형<Required>*</Required></SubTitleWrapper>
      {/* 유형 선택 */}
      <DropdownContainer>
        <StyledSelect value={type} onChange={e => setType(e.target.value)}>
          {OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
        <DropdownIcon />
      </DropdownContainer>

      <DropdownContainer>
        <StyledSelect value={detailType} onChange={e => setDetailType(e.target.value)}>
          {DETAIL_OPTIONS[type] && Object.entries(DETAIL_OPTIONS[type]).map(([value, name]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </StyledSelect>
        <DropdownIcon />
      </DropdownContainer>
      </LineWrapper>

      {/* 제목 입력 */}
      <LineWrapper>
                                <SubTitleWrapper>제목<Required>*</Required></SubTitleWrapper>
                                <InputWrapper>
                                    <Input 
                                        type="text"
                                        value = {subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </InputWrapper>
                            </LineWrapper>
                            <LineWrapper>
                                <SubTitleWrapper>내용<Required>*</Required></SubTitleWrapper>
                                <TextAreaWrapper>
                                    <TextArea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}>
                                    </TextArea>
                                </TextAreaWrapper>
                            </LineWrapper>
      {/* 제출 및 취소 버튼 */}
      <UpdateDeletButton>
        <UpdateButton type="submit">수정</UpdateButton>
        <DeleteButton type ="button" onClick={onCancel}>취소</DeleteButton>
    </UpdateDeletButton>
      
      
    </form>
  );
};

export default QnaUpdateBoard;


const UpdateDeletButton = styled.div`
width: 100%;
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
-webkit-box-align: center;
align-items: center;
margin-top: 20px;
`;

const UpdateButton = styled.button`
padding: 6px 10px;
border: none;
font-size: 13px;
color: rgb(153, 153, 153);
background-color: transparent;
cursor: pointer;
`;

const DeleteButton = styled.button`
padding: 6px 10px;
border: none;
font-size: 13px;
color: rgb(153, 153, 153);
background-color: transparent;
cursor: pointer;
`;

const FormWrapper = styled.div`
    width: 820px;
    padding: 4px 20px;
    border-top: 2px solid rgb(51, 51, 51);
`;

const LineWrapper = styled.div`
    display: flex;
    padding: 12px 0px;
    -webkit-box-align: start;
    align-items: start;
`;

const SubTitleWrapper = styled.div`
    width: 140px;
    font-size: 14px;
    line-height: 44px;
    padding : 0px;
    font-weight: 700;
    color : gray;
`;

const Required = styled.span`
    color: red;
`;

const InputWrapper = styled.div` 
    position: relative;
    width : 500px;
    height: 44px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;

    &input:focus {

`;
const Input = styled.input`
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "100%"};
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid;
  }
`;

const TextAreaWrapper = styled.div`
    position: relative;
    width : 500px;
    height: 500px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 16px;
    font-size: 16px;
    line-height: 21px;
    word-break: break-all;
    z-index: 1;
    background: none;
    border-radius: 4px;
    color: rgb(51, 51, 51);
    outline: none;
    resize: none;
    border: none;
    &:focus {
    outline: 1px solid;
  }
`;


const CameraWrapper = styled.div`
    padding-top : 3px;
    margin-left : 140px;
    width: 72px;
    height: 72px;
`;

const CameraButton = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 6px;
    cursor: pointer;
`

const Camera = styled.span`
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzB2MzBIMHoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ljc3OSA2LjExMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNzkyIDBjLjM5OSAwIC43MTcuMDU2Ljk1NS4xNy4xNzkuMDg0LjM0Ni4xOTkuNTAzLjM0NGwuMTUzLjE1NS42MzEuNzAzYy4xMjIuMTMuMjM0LjIzMy4zMzcuMzFhLjk1Ljk1IDAgMCAwIC4zNC4xNmMuMTI1LjAzMS4yOTIuMDQ3LjUwMy4wNDdsMi45MDYtLjAwM2MxLjI4NCAwIDIuMzI0IDEuMDYyIDIuMzI0IDIuMzd2MTEuMTUxYzAgMS4zMS0xLjA0IDIuMzctMi4zMjQgMi4zN0gyLjMyNGMtMS4yODMgMC0yLjMyNC0xLjA2LTIuMzI0LTIuMzdWNC4yNTdjMC0xLjMxIDEuMDQtMi4zNyAyLjMyNC0yLjM3aDIuOTgzYy4yNDUtLjAwOS40MzItLjA0NS41NTktLjEwOC4xMS0uMDU1LjIzLS4xNDUuMzYtLjI3bC4xMzQtLjEzNy42MzEtLjcwM2MuMi0uMjIuNDE4LS4zODcuNjU3LS41LjE5LS4wOS40MzItLjE0NC43MjUtLjE2Mkw4LjYwMyAwaDMuMTg5eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMC4xNDIiIGN5PSI5LjUyOSIgcj0iMy41NTYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const ContextWrapper = styled.div`
    margin: 11px 0px 7px;
    line-height: 16px;
    font-size: 13px;
    color: rgb(153, 153, 153);
`;

const SpanWrapper = styled.div`
    margin-left : 140px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const QuestionWrapper = styled.div`
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
`;

const MessageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width : 640px;
`;
const PhoneNumberWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

`;
const PhoneNumber = styled.div`
    position: relative;
    height: 40px;
`;

const PhoneNumberInput = styled.input`
    width: 160px;
    height: 40px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 14px;
    line-height: 42px;
    color : rgb(153, 153, 153);
    outline: none;
    box-sizing: border-box;
    &:disalbed {

    }
`;

const MessageChecked = styled.div`
flex: 1 1 0%;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding: 0px 16px;
`;
const MessageCheckedLabel = styled.label`
padding: 14px 0px 9px;
position: relative;
display: flex;
-webkit-box-align: center;
align-items: center;
font-size: 16px;
vertical-align: top;
line-height: normal;
color: rgb(51, 51, 51);
cursor: pointer;
`;
const MessageCheckedInput = styled.input`
overflow: hidden;
position: absolute;
clip: rect(0px, 0px, 0px, 0px);
clip-path: inset(50%);
width: 1px;
height: 1px;
`;

const MessageCheckedImageWrapper = styled.div`
margin-right : 12px;
padding-top: 2px;
`;


const MessageCheckedImageText = styled.span`
font-size: 12px;
padding-top: -5px;
`;

const InfoUpdateWrapper = styled.div`
display: inline-block;
cursor: pointer;
font-size: 12px;
color : gray;

::after {
    display: inline-block;
    width: 6px;
    height: 9px;
    margin-left: 4px;
    background: url(https://res.kurly.com/kurly/ico/2021/arrow_right_6_9_black.svg) 0px 0px no-repeat;
    content: "";
}
`;

const MessageText = styled.div`
font-size: 12px;
line-height: 20px;
color: rgb(153, 153, 153);
margin-left : 140px;
`;

const MessageTextSpan = styled.span`
font-size: 12px;
line-height: 20px;
padding: 16px 0px 4px;
color: rgb(153, 153, 153);
`;


const InsertButtonWrapper = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding-top: 40px;
`;  

const InsertButton = styled.button`
width: 160px;
height: 56px;
padding: 0px 10px;
text-align: center;
letter-spacing: 0px;
font-size: 16px;
line-height: 20px;
color: white;
background-color: ${(props) => (props.disabled ? "rgb(221, 221, 221)" : "#950526")}; // 조건부 배경색
cursor: ${(props) => (props.disabled ? "default" : "pointer")}; // 조건부 커서
font-family: "Noto Sans", sans-serif;
font-weight: 500;
border-radius: 3px !important;
&:disabled {
    cursor : default;
}
`;


export const DropdownContainer = styled.div`
display : flex;
align-items: center;
width: 200px;
`;

export const StyledSelect = styled.select`
flex : 1;
margin-right: 10px;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  padding-right: 30px; /* 아이콘을 위한 여유 공간 */
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 22px;
  outline: none;
  appearance: none; /* 기본 화살표 제거 */
  cursor: pointer;
`;

export const DropdownIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 클릭 시 select가 반응하도록 */
`;

