import styled from 'styled-components';

const Point = () => {

    return (

      <div>
          <PontTitleContainer>
              <Title>적립금</Title>
          </PontTitleContainer>
          <PointContainer>
            <TitleSpan>적립금</TitleSpan>
            <div style={{flex: '1 1 0%'}}>
                <BalanceContainer>
                    <BalanceText>적립금 사용가능 잔액</BalanceText>
                    <Balance>3,201원</Balance>
                </BalanceContainer> 
                <UsePointContainer>
                  <InputDiv>
                      <InputContainer>
                    <InputBalance type="text" placeholder="0" data-testid="input-box" />
                    <InputCancelIcon></InputCancelIcon>
                      </InputContainer>
                  </InputDiv>
                  <UseAllBtn>
                      <span>모두 사용</span>
                  </UseAllBtn>
                </UsePointContainer>
            </div>
          </PointContainer>
      </div>

    );

};


export default Point;

const PontTitleContainer = styled.div`
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
margin-top: 75px;
border-bottom: 1px solid rgb(51, 51, 51);
-webkit-box-pack: start;
justify-content: flex-start;
gap: 8px;
`;

const Title = styled.h3`
padding: 16px 0px;
font-weight: 500;
font-size: 20px;
color: rgb(51, 51, 51);
line-height: 29px;
`;

const PointContainer = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
padding-top: 20px;
border-top: 1px solid rgb(244, 244, 244);
`;

const TitleSpan = styled.span`
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

const BalanceContainer = styled.div`
display: flex;
padding-bottom: 8px;
-webkit-box-pack: justify;
justify-content: space-between;
line-height: 24px;
letter-spacing: -0.5px;
color: rgb(51, 51, 51);
`;

const BalanceText = styled.span`
  font-size: 14px;
    font-weight: 400;

`;

const Balance = styled.span`
font-size: 16px;
font-weight: 500;
`;

const UsePointContainer = styled.div`
display: flex;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
`;

const InputDiv = styled.div`
position: relative;
height: 44px;
margin-top: 20px;
`;

const InputBalance = styled.input`
width: 100%;
height: 44px;
padding: 0px 11px 1px 15px;
border-radius: 4px;
border: 1px solid rgb(221, 221, 221);
font-weight: 400;
font-size: 16px;
line-height: 42px;
color: rgb(51, 51, 51);
outline: none;
box-sizing: border-box;
`;

const InputCancelIcon = styled.button`
position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    height: 16px;
    width: 16px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjOTk5IiBvcGFjaXR5PSIuNSIgY3g9IjgiIGN5PSI4IiByPSI4Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPHBhdGggZD0ibTEwLjg5NyAxMC43ODYtNS43Ny01Ljc2OU01LjEyMiAxMC43ODVsNS43NzUtNS43NzUiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) 0% 0% / 16px 16px no-repeat transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
`;

const InputContainer = styled.div`
position: relative;
    height: 44px;
`;

const UseAllBtn = styled.button`
display: block;
padding: 0px 10px;
text-align: center;
overflow: hidden;
width: 100px;
height: 44px;
border-radius: 3px;
color: rgb(51, 51, 51);
background-color: rgb(255, 255, 255);
border: 1px solid rgb(221, 221, 221);
margin-top: 20px;
`;


const InputDiv1 = styled.div`
  display: flex;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
`;