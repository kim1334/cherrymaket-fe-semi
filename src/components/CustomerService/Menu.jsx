import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
function Menu() {
    
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const handleQnaClick = (e) => {
        if (!isLoggedIn) {
          e.preventDefault(); // 기본 링크 동작을 방지합니다.
          alert('로그인 후 이용해주세요.'); // 알림을 표시합니다.
          window.location.href = '/login'; // 로그인 페이지로 이동합니다.
        } else {
            // 로그인이 되어 있다면, 추가적인 조치는 필요하지 않습니다.
            window.location.href = '/qna';
        }

      };

    return (
        <>
        
            <Container>
                <Title><h2>고객센터</h2></Title>
                <Customerul>
                    <ul style={{listStyle : 'none'}}>
                    <Customerli> 
                        <li><a href = "notice">공지사항<IoIosArrowForward/></a></li>
                        <li><a href = "faq">자주하는질문<IoIosArrowForward/></a></li>
                        <li onClick = {handleQnaClick}><a>1:1문의<IoIosArrowForward/></a></li>
                        <li><a>대량 주문 문의<IoIosArrowForward/></a></li>
                    </Customerli>
                    </ul>
                </Customerul>
                <Customera>
                    <a onClick = {handleQnaClick}>
                        <div>
                            <span>도움이 필요하신가요?<br />
                            1:1 문의하기</span>
                        </div>
                    </a>
                </Customera>
            </Container>
                
        </>
    );
};

export default Menu;

export const Container = styled.div`
    width: 200px;
    height : 100%;
    margin-top : -30px;
    padding: 40px 0px;
    box-sizing: border-box;
`;
export const Title = styled.h2`
    height : 75px;
    padding : 5px 0 35px 1px;
    font-size: 20px;
    font-weight: 500;
    line-height: 35px;
    color : #333;
    letter-spacing: -1px;
`;
export const Customerul = styled.ul`
    border: 1px solid #f2f2f2;
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const Customerli = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    & a {
        cursor: pointer;
        border-bottom: 1px solid #f2f2f2;
        padding: 15px 13px 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 19px;
        letter-spacing: 0.3px;
        font-size: 14px;
        text-decoration:none !important;
        color : inherit
        ;
    }
    & a:hover, active{
        background-color: #fafafa;
        color: #950526;
        font-weight: bold;
    }
`;

export const Customera = styled.a`
    cursor: pointer;
    width : 100%;
    height : 60px;
    padding : 0px 14px 0px 20px;
    margin-top : 20px;
    display : flex;
    -webkit-box-pack : justify;
    justify-content : space-between;
    -webkit-box-align : center;
    align-items : center;
    background-color : rbg(250, 250, 250);
    lien-height : 19px;
    text-decoration:none !important;
    color : inherit;
    & div {
        display: flex;
        flex-direction: column;
        color: rgb(51, 51, 51);
    }
    & div span:first-child {
        font-size: 14px;
        font-weight: 500;
    }
    & div span:last-child {
        font-size: 12px;
        color: rgb(153, 153, 153);
    }
`;