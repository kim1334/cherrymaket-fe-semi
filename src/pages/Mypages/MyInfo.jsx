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
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";


const MyInfo = () => {


    return (
        <>
            <Header />
            <Mypage />
            <FlexWrapper>

                <MypageMenu />
                <Container>

                    <TitleWraper >
                        <Title>
                            <TitleHead>개인정보수정</TitleHead>
                        </Title>
                    </TitleWraper>
                    <ValidationContainer>
                        <H4>비밀번호 재확인</H4>
                        <P>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요.</P>
                        <form action='#'>
                            <FormDiv1>
                                <FormDiv3>
                                    <div style={{ width: '139px', paddingTop: '12px' }}>
                                        <Label for="userID">아이디</Label>
                                    </div>
                                    <div style={{ flex: '1 1 0%' }}>
                                        <div style={{padding: '0px'}}>
                                            <div style={{position:'relative', height:'48px;'}}>
                                                <Input type='text' placeholder='아이디' id="userID" name="userID" data-testid="input-box" />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '120px', marginLeft: '8px' }}></div>
                                </FormDiv3>
                                <FormDiv3>
                                    <div style={{ width: '139px', paddingTop: '12px' }}>
                                    <Label for="userID">비밀번호</Label>
                                    <span style={{color:'rgb(238, 106, 123)'}}>*</span>
                                    </div>
                                    <div style={{ flex: '1 1 0%' }}>
                                    <div style={{padding: '0px'}}>
                                            <div style={{position:'relative', height:'48px;'}}>
                                                <Input type='password' placeholder='현재 비밀번호를 입력해주세요' id="password" name="password" data-testid="input-box" autoComplete='off'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '120px', marginLeft: '8px' }}></div>
                                </FormDiv3>
                            </FormDiv1>
                            <FormDiv2>
                                <Btn>
                                    <Span>확인</Span>
                                </Btn>
                            </FormDiv2>
                        </form>

                    </ValidationContainer>

                    <UlWrapper>

                    </UlWrapper>
                </Container>
            </FlexWrapper>
            <FixedSiderbar />
            <Footer />
            
        </>
    )
}

export default MyInfo;

const ValidationContainer = styled.div`
width: 820px;
    margin: 0px auto;
`;

const H4 = styled.h4`
padding-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
`;

const P = styled.p`
padding-bottom: 20px;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(102, 102, 102);
`;

const FormDiv1 = styled.div`
padding: 7px 60px 7px 120px;
    border-top: 2px solid rgb(51, 51, 51);
    border-bottom: 1px solid rgb(221, 221, 221);
`;

const FormDiv2 = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
margin-top: 40px;
`;

const FormDiv3 = styled.div`
display: inline-flex;
    width: 100%;
    padding: 10px 20px;
`;

const Label = styled.label`
font-weight: 500;
color: rgb(51, 51, 51);
line-height: 20px;
`;

const Input = styled.input`
width: 100%;
height: 46px;
padding: 0px 11px 1px 15px;
border-radius: 4px;
border: 1px solid rgb(221, 221, 221);
font-weight: 400;
font-size: 14px;
line-height: 1.5;
color: rgb(51, 51, 51);
outline: none;
box-sizing: border-box;
}
`;

const Btn = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 240px;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
`;

const Span = styled.span`
display: inline-block;
    font-size: 16px;
    font-weight: 500;
`;