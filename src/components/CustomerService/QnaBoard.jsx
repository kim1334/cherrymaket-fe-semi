import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import {
    FlexWrapper,
    Container,
    TitleWraper,
    Title,
    TitleHead,
    SubTitle,
} from './Style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import QnaUpdateBoard from './QnaUpdateBoard';
const QnaBoard = () => {
    const [qnaList, setQnaList] = useState([]);
    const [isOpen, setIsOpen] = useState(null);
     // 페이징
   const [currentPage, setCurrentPage] = useState(1);
   const [noticePerPage] = useState(5);
   const [answers, setAnswers] = useState({});
    const toggleQna = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };
    const TYPE_MAPPINGS = {
        'CANCEL': '취소/교환/반품',
        'MEMBER': '회원/이벤트/쿠폰',
        'GOODS': '상품(식품/비식품/티켓)',
        'DELIVERY': '배송',
        'ORDER': '주문/결제',
        'SERVICE': '서비스/오류/기타',
        // 기타 type 매핑
    };
    
    const DETAIL_TYPE_MAPPINGS = {
        "CANCEL": "취소",
        "EXCHANGE": "교환",
        "REFUND" : '환불',
        "COUPON" : "쿠폰/할인혜택",
        "POINT" : "적립금",
        "MEMBER_INFO" : "회원정보/등급",
        "EVENT" : "이벤트 내용/참여",
        "SIGN_UP" : "회원가입/탈퇴",
        "PRODUCT_QUALITY" : "상품품질",
        "FOREIGN_SUBSTANCE" : "상품 내 이물질",
        "PRODUCT_INFO" : "상품정보",
        "DIFFERENT_PRODUCT_RECEIPT" : "다른 상품 수령",
        "UNRECEIVED_PRODUCT" : "상품 미수령",
        "DELIVERY_IMPROVEMENT" : "배송/포장개선요청",
        "DELIVERY_SCHEDULE_INFO" : "배송일정/정보",
        "INFO_CHANGE" : "정보변경(주소/출입방법)",
        "ORDER_HISTORY_RECEIPT" : "주문내역/영수증 발급",
        "ORDER_PAYMENT_METHOD" : "주문/결제방법",
        "SYSTEM_ERROR" : "시스템 오류/장애",
        "OTHER" : "기타(직접입력)",
        "SERVICE_SUGGESTION" : "서비스 제안/개선",
        // 기타 detailType 매핑
    };

    

const fetchAnswer = async (inquiryId) => {
    try {
        const token = sessionStorage.getItem('accessToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(`https://server.marketcherry.store/api/inquiryAnswer/search-answerId?inquiryId=${inquiryId}`, config);
        console.log(`Answer for inquiryId ${inquiryId}:`, response.data);
        setAnswers(prev => ({ ...prev, [inquiryId]: response.data }));
    } catch (error) {
    
    }

};

useEffect(() => {
    const fetchQnA = async () => {
        
        
            try {
                const token = sessionStorage.getItem('accessToken');

                // 인증 헤더 설정
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const response = await axios.get('https://server.marketcherry.store/api/inquiry/list/my', config); // API 엔드포인트
                const userQnA = response.data.content
                // .filter(qna => qna.userId === userId);
                setQnaList(userQnA);

                userQnA.forEach(qna => fetchAnswer(qna.inquiryId));
            } catch (error) {
                console.error('Error fetching QnA data:', error);
            }
        };
        
    fetchQnA();
                    
}, []);

const handleDelete = async (inquiryId) => {
    try {
        const token = sessionStorage.getItem('accessToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const userConfirmed = window.confirm('정말로 삭제하시겠습니까?');

        if (userConfirmed) {
            const response = await axios.delete(`https://server.marketcherry.store/api/inquiry/delete/id?inquiryId=${inquiryId}`, config);

            if (response.status === 200) {
                // 삭제가 성공한 경우, 화면에서 해당 문의를 제거합니다.
                const updatedQnaList = qnaList.filter((qna) => qna.inquiryId !== inquiryId);
                setQnaList(updatedQnaList);
            }
        }
    } catch (error) {
        console.error('Error deleting inquiry:', error);
    }
};

const indexOfLastNotice = currentPage * noticePerPage;
const indexOfFirstNotice = indexOfLastNotice - noticePerPage;
const currentQnalist = qnaList.slice(indexOfFirstNotice, indexOfLastNotice);

const totalPages = Math.ceil(qnaList.length / noticePerPage);

const handlePrev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };




    const renderAnswerStatus = (status) => {
        const style = {
            color : status === 'ACCEPTING' ? 'inherit' : '#950526',
        }

        return (
            <div style = {style}>
                {status === 'ACCEPTING' ? '답변 대기' : '답변 완료'}
            </div>
        );    
};
   
const [editMode, setEditMode] = useState(null); // 수정 모드 상태 추가
  const [editingQna, setEditingQna] = useState(null); // 수정 중인 문의 정보

  // 수정 버튼 클릭 시 수정 모드로 전환
  const handleEditClick = (qna) => {
    setEditMode(qna.inquiryId);
    setEditingQna(qna);
  };

  // 수정 모드에서 취소 버튼 클릭 시 읽기 모드로 전환
  const handleCancelEdit = () => {
    setEditMode(null);
    setEditingQna(null);
  };

  
    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>1:1 문의</TitleHead>
                        </Title>
                    </TitleWraper>
                    <SubTitle>
                        <SubTitleLine>제목</SubTitleLine>
                        <SubTitleWriter>작성일</SubTitleWriter>
                        <SubTitleWriter>답변상태</SubTitleWriter>
                    </SubTitle>
                    {currentQnalist.map((qna, index) => (
                    <React.Fragment key={index}>
                        
                        <SubTitle onClick = {() => toggleQna(qna.inquiryId)}>
                            
                               <SubTitleLine>
                                    <div>{qna.subject}</div>
                                </SubTitleLine>
                                <SubTitleWriter>
                                    <div>{new Date(qna.createDate).toLocaleDateString()}</div>
                                </SubTitleWriter>   
                                <SubTitleWriter>
                                    {renderAnswerStatus(qna.answerStatus)}
                                </SubTitleWriter>
                                </SubTitle>
                                {isOpen === qna.inquiryId && (
                                <SubTitleContent>
                                    <OptionsWrapper>
                                        <span>{TYPE_MAPPINGS[qna.type] || qna.type}&nbsp;&gt;&nbsp;</span><span>{DETAIL_TYPE_MAPPINGS[qna.detailType] || qna.detailType}</span>
                                    </OptionsWrapper>
                                    <QuestionSubject>
                                        <span>Q</span>
                                        <QuestionSubjectContent>
                                            <span>{qna.content}</span>
                                            <br />
                                        </QuestionSubjectContent>
                                    </QuestionSubject>
                                    <QuestionContentWrapper>
                                        <QuestionContent>A</QuestionContent>
                                        <QuestionAnswer>
                                            {answers[qna.inquiryId] ? answers[qna.inquiryId].content : '답변을 불러오는 중...'}
                                        </QuestionAnswer>

                                    </QuestionContentWrapper>
                                    {/* 수정 및 삭제 버튼 */}
                                    {editMode !== qna.inquiryId && qna.answerStatus === 'ACCEPTING' && (
                <UpdateDeletButton>
                  <UpdateButton onClick={() => handleEditClick(qna)}>수정</UpdateButton>
                  <DeleteButton onClick={() => handleDelete(qna.inquiryId)}>삭제</DeleteButton>
                </UpdateDeletButton>
              )}

              {editMode === qna.inquiryId && (
                <QnaUpdateBoard
                  qna={editingQna}
                  onUpdateSuccess={() => handleCancelEdit()}
                  onCancel={() => handleCancelEdit()}
                />
              )}
                                </SubTitleContent>
                                )}
                    </React.Fragment>
                    ))}

                    <ButtonWrapper>
                        <div>
                            <PrevButton onClick={handlePrev}
                                disabled={currentPage === 1}
                                currentPage={currentPage}></PrevButton>
                            <NextButton onClick={handleNext} disabled={currentPage === totalPages}></NextButton>
                            <Link to="/qnaInsert"> {/* Link 컴포넌트 사용 */}
                                <InsertButton>문의하기</InsertButton>
                            </Link>
                        </div>
                    </ButtonWrapper>

                </Container>
            </FlexWrapper>

        </>
    );
};

export default QnaBoard;

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

const QuestionAnswer = styled.div`
width: 100%;
margin-left: 9px;
padding-top: 2px;
word-break: break-all;
& > span {
    font-size: 14px;
    line-height: 23px;
    color: rgb(102, 102, 102);
}
`;

const QuestionContentWrapper = styled.div`
padding-top: 20px;   
width: 100%;
padding-bottom: 0px;
margin-top: 0.75rem;
display: flex;
`;

const QuestionContent = styled.span`
    color : white;
    background-color: #950526;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    line-height: 24px;
    width: 24px;
    height: 24px;
    display: block;
`;

const QuestionSubject = styled.div`
display: flex; 
& > span {
    color : white;
    background-color: #950526;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    line-height: 24px;
    width: 24px;
    height: 24px;
}
`;

const QuestionSubjectContent = styled.div`
width: 744px;
margin-top: 3px;
margin-left: 12px;
& > span {
    font-size: 14px;
    line-height: normal;
    color: rgb(51, 51, 51);
}
`;

const SubTitleContent = styled.div`
padding: 20px 20px 30px;
background-color: rgb(250, 250, 250);
`

const OptionsWrapper = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
line-height: 20px;
letter-spacing: -0.075em;
margin-bottom: 20px;
 & > span {
    font-size: 12px;
    font-family: "Noto Sans", serif;
    color: rgb(153, 153, 153);
 }
`;

export const SubTitleLine = styled.th` 
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleWriter = styled.th`
    flex-basis: 100px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;
const ButtonWrapper = styled.div`
    position: relative;
    min-height: 44px;
    margin-top: 20px;
    text-align: center;
`;
const PrevButton = styled.button`
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg);
    cursor: default;
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;

    background-color: transparent;
    
    background-repeat: no-repeat;
    background-size: cover;
    ${({ currentPage }) => currentPage >= 2 && `
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg);
    cursor: pointer;`
}
`;
const NextButton = styled.button`
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-disabled.svg);
    cursor: default;
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    cursor: pointer;
    background-color: transparent;
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg);
    background-repeat: no-repeat;
    background-size: cover;
`;

const InsertButton = styled.button`
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 120px;
    height: 44px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: #950526;
    border: 0px none;
`;



