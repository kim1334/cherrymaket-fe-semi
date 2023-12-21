import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { FlexWrapper,
        PrevButton,
        NextButton,
        ButtonWrapper,
        Container,
        TitleWraper,
        Title,
        TitleHead,
        TitleSpan,
        SubTitle,
} from './Style';
import { useState, useEffect } from 'react';

import axios from 'axios';

const NoticeDetail = styled.div`
display : flex;
display: ${({ isOpen }) => (isOpen ? "block" : "none")};
background-color: #f8f8f8;
padding: 30px 30px 30px 70px;
text-align: left;
color: rgb(76, 76, 76);
white-space: pre-line;
`;

const NoticeBoard = () => {
   const [isOpen, setIsOpen] = useState(null);
   const [notice, setNotice] = useState([]);
   const baseUrl = process.env.REACT_APP_API;
   // 페이징
   const [currentPage, setCurrentPage] = useState(1);
   const [noticePerPage] = useState(10);
   

   useEffect(() => {
    const fetchNotice = async () => {
        try {
            const response = await axios.get(`https://server.marketcherry.store/api/notice/notice-list
            `);
            setNotice(response.data.content);
        } catch (error) {
            console.log(`Error fetching notices : ` , error);
        }
    };
    fetchNotice();
}, []);

const indexOfLastNotice = currentPage * noticePerPage;
const indexOfFirstNotice = indexOfLastNotice - noticePerPage;
const currentNotices = notice.slice(indexOfFirstNotice, indexOfLastNotice);

const totalPages = Math.ceil(notice.length / noticePerPage);

const toggleNotice = (index) => {
    setIsOpen(isOpen === index ? null : index);
};

const handlePrev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };


    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>공지사항</TitleHead>
                            <TitleSpan>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</TitleSpan>
                        </Title>
                    </TitleWraper>
                    <SubTitle>     
                        <SubTitleNo>번호</SubTitleNo>
                        <SubTitleLine>제목</SubTitleLine>
                        <SubTitleWriter>작성자</SubTitleWriter>
                        <SubTitleWriter>작성일</SubTitleWriter>
                    </SubTitle>
                    {currentNotices.map((notice, index) => (
                    <React.Fragment key={notice.noticeId}>
                        <SubTitle>
                        <SubTitleNo>{index + 1 + (currentPage - 1) * noticePerPage}</SubTitleNo>
                        <SubTitleLine onClick={() => toggleNotice(index)}>{notice.subject}</SubTitleLine>
                        <SubTitleWriter>체리</SubTitleWriter>
                        <SubTitleWriter>{new Date(notice.createDate).toLocaleDateString()}</SubTitleWriter>
                        </SubTitle>
                        {isOpen === index && (
                        <NoticeDetail isOpen={isOpen === index}>
                            <div style = {{
                                marginBottom: '20px',
                                fontWeight: 'bold',
                            }}>
                                <span>{notice.subject}</span>
                            </div>
                            <div>
                                <span
                                style={{ whiteSpace: 'pre-wrap' }}>{notice.content}</span>
                            </div>
                            <div>
                                <span
                                style={{
                                    fontSize: '12px',
                                    color: '#999',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>{notice.createDate}</span>
                            </div>
                        </NoticeDetail>
                        )}
                    </React.Fragment>
                    ))}
                    <ButtonWrapper>
                        <div>
                            <PrevButton
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                currentPage={currentPage}
                            ></PrevButton>
                            <NextButton onClick={handleNext} disabled={currentPage === totalPages}></NextButton>
                        </div>
                    </ButtonWrapper>

                </Container>
            </FlexWrapper>  
            
        </>
    );
};

export default NoticeBoard;



const SubTitleNo = styled.th`
    flex-basis: 50px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

const SubTitleLine = styled.th` 
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

const SubTitleWriter = styled.th`
    flex-basis: 100px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;





