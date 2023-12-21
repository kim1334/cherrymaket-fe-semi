import styled from 'styled-components';

const  Total = () => {

    return (
      <HistoryWrapper>{/* 여기가 출력 컴포넌트 시작 나중에 분리해야함 . */ }
      <HistoryItemDiv>
          <ItemDate><span style={{fontWeight:'500'}}>2023.12.06</span></ItemDate>
          <ItemDiv1>
              <ItemDiv2>
                <div style={{position:' relative'}}>
                  <IconDivContainer></IconDivContainer>
                  <IconWrapperDiv>
                        <IconWrapper>
                          <IconSpan>적립</IconSpan>
                        </IconWrapper>
                  </IconWrapperDiv>
                </div>
                <div style={{marginLeft: '12px', display:'flex', flexDirection:'column'}}>
                    <Span1>구매 적립 5% 적립</Span1>
                    <Spna2>주문번호(2325319590024)</Spna2>
                </div>
              </ItemDiv2>
              <ItemDiv3>
                <PSpan>+1,290원</PSpan>
                <PSpan1>24.06.30만료</PSpan1>
              </ItemDiv3>
          </ItemDiv1>
      </HistoryItemDiv>
  </HistoryWrapper>
    )
}


export default Total;

const PSpan = styled.span`
    font-size: 14px;
    line-height: 20px;
    color: #5f0080;
`;

const PSpan1 = styled.span`
margin-top: 4px;
font-size: 12px;
line-height: 18px;
color: #666;
`;



const HistoryWrapper = styled.div`
flex-direction: column;
display: flex;
`;


const Spna2 = styled.span`
margin-top: 4px;
font-size: 12px;
    line-height: 18px;
    color: #666;
`;

const Span1 = styled.span`
font-size: 14px;
line-height: 20px;
color: #333;
`;

const IconSpan = styled.span`
text-align: center;
font-size: 11px;
    line-height: 13px;
    color: #5f0080;
`;

const IconWrapper = styled.div`
justify-content: center;
flex-grow: 1;
display: flex;
align-items: center;
`;

const IconWrapperDiv = styled.div`
top: 0;
right: 0;
position: absolute;
padding: 4px;
left: 0;
flex-direction: row;
display: flex;
bottom: 0;
`;

const IconDivContainer = styled.div`
padding: 18px;
display: block;
border-radius: 9999px;
background-color: #efe5f2;
`;

const ItemDiv3 = styled.div`
margin-left: 20px;
display: flex;
flex-shrink: 0;
flex-direction: column;
align-items: flex-end;
`;

const ItemDiv1 = styled.div`
display: flex;
padding-top: 12px;
padding-right: 20px;
padding-left: 20px;
padding-bottom: 12px;
justify-content: space-between;
flex-direction: row;
align-items: flex-start;
`;

const ItemDiv2 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
`;

const ItemDate = styled.div`
padding-top: 16px;
padding-right: 20px;
padding-left: 20px;
padding-bottom: 8px;
flex-direction: row;
display: flex;
`;

const HistoryItemDiv = styled.div`
border-color: #f4f4f4;
border-bottom-width: 1px;
border-bottom-style: solid;
`;


