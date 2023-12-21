
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function OrderBox(props) {


  return (
      <ItemContainer>
        <Div1>
          <ItemSpan>{props.item.createdAt}</ItemSpan>
          <Link to={`/mypage/myorderdetail/${props.item.orderCode}`}>
          <ItemA>주문내역상세보기</ItemA>
          </Link>
        </Div1>
        <Div2>
          <Div3>
            <Img src={props.productImageUrl}></Img>
            <div style={{display:'flex', flexDirection:'column'}}>
            <Dl>
            <Dt>상품명</Dt>
            <TitleDd>{props.item.orderName}</TitleDd>
            </Dl>
            <Dl>
              <Dt>주문번호</Dt>
              <Dd>{props.item.orderCode}</Dd>
            </Dl>
            <Dl>
              <Dt>결제방법</Dt>
              <Dd>{props.item.paymentMethod}</Dd>
            </Dl>
            <Dl>
              <Dt>결제금액</Dt>
              <Dd>{props.item.amount}</Dd>
            </Dl>
            </div>
          </Div3>

          <Div4>
              <Span>{props.item.orderStatus}</Span>
              <div style={{width: '96px'}}>
                <Link to ="/qna">
                <Btn>
                  <span style={{fontSize:'12px', fontWeight: '500'}}>1:1 문의</span>
                </Btn>
                </Link>
              </div>
          </Div4>
        </Div2>
      </ItemContainer>
  );
}

export default OrderBox;



const ItemContainer = styled.div`
    width: 100%;
    padding: 16px 20px;
    margin-bottom: 14px;
`;

const Div1 = styled.div`
    display: flex;
    padding: 8px 0px 13px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgb(221, 223, 225);
`;

const Div2 = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
padding: 14px 0px 16px;
`;

const ItemSpan = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    color: rgb(51, 51, 51);
`;

const ItemA = styled.a `
align-self: center;
    padding-right: 10px;
    line-height: 1.33;
    font-size: 12px;
    color: rgb(51, 51, 51);
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBzdHJva2U9IiMzMzMiPgogICAgICAgICAgPHBhdGggZD0iTTAgMEw0IDQgMCA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxNS4wMDAwMDAsIC02OTkuMDAwMDAwKSB0cmFuc2xhdGUoMTk1LjAwMDAwMCwgNTczLjAwMDAwMCkgdHJhbnNsYXRlKDIzMC4wMDAwMDAsIDk2LjAwMDAwMCkgdHJhbnNsYXRlKDIwLjAwMDAwMCwgMTYuMDAwMDAwKSB0cmFuc2xhdGUoNjMwLjAwMDAwMCwgMTAuMDAwMDAwKSB0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNS4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) right center / 10px 10px no-repeat;
    cursor: pointer;
`;

const Div3 = styled.div `
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`;

const Div4 = styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const Img = styled.img`
width: 60px;
height: 78px;
margin-right: 20px;
background-color: rgb(245, 245, 245);
`;

const Dl = styled.dl`
display: flex;
    padding-top: 6px;
    flex-direction: row;
    color: rgb(0, 0, 0);
    line-height: 20px;
`;

const Dt = styled.dt`
width: 50px;
    line-height: 1.58;
    margin-right: 10px;
    font-size: 12px;
    color: rgb(51, 51, 51);
`;

const TitleDd = styled.dd`
flex: 1 1 0%;
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 1.36;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

const Dd = styled.dd`
flex: 1 1 0%;
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 1.36;
`;

const Span = styled.span`
width: 100px;
    font-size: 16px;
    font-weight: 500;
    text-align: right;
    color: rgb(51, 51, 51);
    margin-right: 20px;
`;

const Btn = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 36px;
    border-radius: 3px;
    color: rgb(149, 5, 38);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(149, 5, 38);
    cursor: pointer;
`;