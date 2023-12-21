import Header from '../../common/Header/Header';
import { Container, FlexWrapper, Title, TitleHead, TitleWraper } from '../../components/CustomerService/Style';
import MypageMenu from '../../components/Mypage/MypageMenu';
import Mypage from './Mypage';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import Total from '../../components/Point/Total';
import Footer from '../../common/Footer/Footer';
import FixedSiderbar from '../../common/FiexDiderbar/FixedSiderbar';


const Point = () => {

  const [selectedDiv, setSelectedDiv] = useState(null);
  return (


    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper style={{ borderBottom: '1px solid rgb(51,51,51)' }}>
            <Title>
              <TitleHead>적립금</TitleHead>
            </Title>
          </TitleWraper>
          <Div1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <span style={{ fontSize: '12px', lineHeight: '18px' }}>사용 가능 적립금</span>
                  <div style={{ marginLeft: '4px', cursor: 'pointer', lineHeight: '4px' }}><GuideIcon /></div>
                </div>
              </div>
            </div>
            <PointDiv>
              <PointDiv2>
                <PointSpan1>1,431</PointSpan1>
                <PointSpan>원</PointSpan>
              </PointDiv2>
            </PointDiv>
            <GuideDiv1>
              <GuideDiv2>
                <GuideSpan1>소멸예정 금액 (30일 이내)</GuideSpan1>
                <GuideSpan2>0 원</GuideSpan2>
              </GuideDiv2>
              <GuideDiv2 style={{ marginTop: '6px' }}>
                <GuideSpan1>총 누적 적립금 (가입일 기준)</GuideSpan1>
                <GuideSpan2>1,431 원</GuideSpan2>
              </GuideDiv2>
            </GuideDiv1>
            <ImgWarpper></ImgWarpper>
            <img alt="컬리 배너" src="https://www.kurlypay.co.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIntroduceKurlyPayBanner.d8dd601a.png&w=1200&q=75"></img>
            <ImgWarpper></ImgWarpper>
            <ActivityContainer>
              <BtnContainer>
                {['전체', '적립', '시용', '소멸'].map((name, index) => (
                  <DivButton
                    key={name}
                    selected={selectedDiv === index}
                    onClick={() => setSelectedDiv(index)}
                  >
                    {name}
                  </DivButton>
                ))}
              </BtnContainer>
              <CountDiv>
                <CountSpan>총 0건</CountSpan>
                <CountDiv1>
                  <CheckDiv>
                    <span style={{ color: '#333' }}>3개월</span>
                  </CheckDiv>
                </CountDiv1>
              </CountDiv>
                <HistoryContainer>
                      <Total />
                      <Total />
                      <Total />
                      <Total />
                      <Total />
                </HistoryContainer>
            </ActivityContainer>
          </Div1>
        </Container>
      </FlexWrapper>
      <FixedSiderbar />
      <Footer />
    </>
  );
}

export default Point;



const HistoryContainer = styled.div`
flex-grow: 1;
flex-direction: column;
display: flex;

`;

const CheckDiv = styled.div`
padding-top: 14px;
padding-left: 16px;
padding-bottom: 14px;
line-height: 0;
flex-direction: row;
display: flex;
cursor: pointer;
align-items: center;
`;

const CountDiv1 = styled.div`
position: relative;
display: inline-block;
`;

const CountSpan = styled.span`
font-weight: 500;
font-size: 15px;
    line-height: 20px;
`;

const CountDiv = styled.div`
padding-right: 20px;
padding-left: 24px;
justify-content: space-between;
flex-direction: row;
display: flex;
align-items: center;
`;

const DivButton = styled.div`

  height: 42px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 0;
  justify-content: center;
  flex-grow: 1;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  align-items: center;

  /* 선택된 DivButton의 스타일 */
  ${props => props.selected && css`
    border-color: #5f0080;
    color: #5f0080; // 선택된 DivButton의 텍스트 색상
  `}

  /* 선택되지 않은 DivButton의 스타일 */
  ${props => !props.selected && css`
    border-color: #ddd;
    color: #333; // 기본 텍스트 색상
    margin-left: 6px; /* 첫 번째 DivButton을 제외한 나머지에만 적용됩니다. */
  `}

  /* 첫 번째 DivButton에는 margin-left를 적용하지 않습니다. */
  &:first-child {
    margin-left: 0;
  }
`;

const BtnContainer = styled.div`
display: flex;
padding-top: 20px;
padding-right: 20px;
padding-left: 20px;
padding-bottom: 12px;
flex-direction: row;
}

`;

const ActivityContainer = styled.div`
margin-top: 0;
flex-grow: 1;
flex-direction: column;
display: flex;
}
`;

const GuideIcon = styled.span`
display: inline-block;
width: 20px;
height: 20px;
margin-top: 2px;
background: url(https://res.kurly.com/mobile/ico/2010/ico_question_v2.svg) 100% 50% / 20px 20px no-repeat;
vertical-align: top;
`;

const H1 = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    min-width: 0;
    box-sizing: border-box;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
`;

const Div1 = styled.div`
display: flex;
padding-top: 24px;
padding-bottom: 24px;
padding-left: 20px;
padding-right: 20px;
flex-direction: column;
`;

const PointDiv = styled.div`
margin-top: 6px;
justify-content: center;
display: flex;
align-items: center;
`;

const PointDiv2 = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
`;

const PointSpan1 = styled.span`
font-weight: 600;
font-size: 24px;
    line-height: 30px;
    color: #333;
`;

const PointSpan = styled.span` 
margin-left: 2px;
font-size: 16px;
    line-height: 20px;
    color: #333;
`;

const GuideDiv1 = styled.div`
margin-top: 24px;
display: flex;
flex-direction: column;
`;

const GuideDiv2 = styled.div`
justify-content: space-between;
flex-direction: row;
display: flex;
`;

const GuideSpan1 = styled.span`
font-size: 14px;
    line-height: 20px;
    color: #666;
`;

const GuideSpan2 = styled.span`
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #333;
`;

const ImgWarpper = styled.div`
margin-top: 0;
width: 100%;
height: 8px;
display: block;
background-color: #f4f4f4;
`;
