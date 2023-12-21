
import styled from 'styled-components';
import { BsCart2 } from "react-icons/bs";

function PickBox() {
  return (
    <div className="App">
      <Container>
        <Div1>
            <A>
              <Img src='https://3p-image.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/files/926051d9-61ab-4999-a1c6-b83cca277048/670930a2-668d-4ede-aef6-e843b560cadb.jpg'></Img>
            </A>
            <Div2>
                <div style={{padding: '0px 20px'}}>
                  <Div3>
                  <TextA>[멋있는]와인잔</TextA>
                  </Div3>
                  <div style={{marginTop: '6px', fontSize: '16px'}}>
                    <Span1>11%</Span1>
                    <Span2>141,000원</Span2>
                    <Span3>160,000원</Span3>
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <DeleteBtn><span>삭제</span></DeleteBtn>
                  <CartBtn><span><BsCart2 style={{width:'20px', verticalAlign:'center', display:'inline-block'}} />담기</span></CartBtn>
                </div>
            </Div2>
        </Div1>
      </Container>
    </div>
  );
}

export default PickBox;

const Container = styled.div`
width: auto;
    height: 128px;
    max-width: 780px;
    max-height: 128px;
    overflow: hidden;
    position: relative;
`;

const Div1 = styled.div`
    height: 128px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    display: flex;  
    padding: 24px 20px;
    border-top: 1px solid rgb(244, 244, 244);

`;

export const A = styled.a`
display: block;
    position: relative;
    width: 60px;
    height: 78px;
    background-color: rgb(245, 245, 245);
`;

const Div2 = styled.div`
width: calc(100% - 90px);
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
padding-left: 16px
`;

const Div3 = styled.div`
display: -webkit-box;
overflow: hidden;
word-break: break-all;
white-space: normal;
-webkit-line-clamp: 2;
font-size: 16px;
line-height: normal;
`;

const TextA = styled.a`
display: block;
background-color: transparent;
    text-decoration: none;
    color: inherit;
`

const Span1 = styled.span`
margin-right: 4px;
line-height: 19px;
color: rgb(250, 98, 47);
font-weight: bold;
`;

const Span2 = styled.span`
margin-right: 4px;
line-height: 19px;
color: rgb(51, 51, 51);
font-weight: bold;
`;

const Span3 = styled.span`
margin-right: 4px;
line-height: 19px;
color: rgb(181, 181, 181);
    font-size: 14px;
    text-decoration: line-through;
`;

const DeleteBtn = styled.button`
display: block;
    padding: 0px;
    text-align: center;
    overflow: hidden;
    width: 104px;
    height: 36px;
    border-radius: 4px;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    margin-bottom: 8px;
`;

const CartBtn = styled.button`
display: block;
    padding: 0px;
    text-align: center;
    overflow: hidden;
    width: 104px;
    height: 36px;
    border-radius: 4px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
`;

export const Img = styled.img`
position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    vertical-align: top;
`
