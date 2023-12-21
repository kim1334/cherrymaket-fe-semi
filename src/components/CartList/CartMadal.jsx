// import styled from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';


const CartMadal = ({ isOpen, closeModal, item }) => {
  const [quantity, setQuantity] = useState(1);
  const access_token = sessionStorage.getItem("accessToken");
  const baseUrl = process.env.REACT_APP_API;
  const [cartAdd, setCartAdd] = useState([]);

  if (!item) {
    return null; // item이 정의된 경우에만 출력
  }

  console.log(item);

  function generateImageUrl() {
    const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
    const imageUrl = `${imageUrlBase}${item.goodsCode}/${item.goodsCode}_0.png`;
    return imageUrl;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 수량을 감소시키는 함수
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCancel = () => {
    closeModal();
    setQuantity(1); // 모달을 닫을 때 수량을 1로 재설정
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat({ style: 'currency', currency: 'KRW' }).format(price);
};

const handleAddToCart = async () => {
  try {
    const goodsId = item.goodsId;
    const quantityToAdd = quantity;

    const response = await axios.post(
      `${baseUrl}/cart/add`,
      {
        goodsId: goodsId,
        quantity: quantityToAdd,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);
    setQuantity(1);
  } catch (error) {
    console.error('Error:', error);
  }
};



  return (
    <ModalWrapper isOpen={isOpen}>
      <div style={{ padding: "0px 30px" }}>
        <div style={{ letterSpacing: "-0.5px", marginTop: "50px" }}>
          <Div1>
            <Div1Img>
              <Div1ImgSpan>
                <Img src={generateImageUrl()} alt='상품 이미지'></Img>
              </Div1ImgSpan>
            </Div1Img>
            <Div1Title>
              <TitleSpan>{item.goodsName}</TitleSpan>
            </Div1Title>
          </Div1>
          <Div2>
            <Div2Wrapper>
              <Div2Title>
                <Div2Span>{item.goodsName}</Div2Span>
              </Div2Title>
              <Div2PriceWrapper>
                <div style={{ paddingTop: '3px' }}>
                  <SlaePrice>{formatPrice(item.discountedPrice)}</SlaePrice>
                  <OriginalPrice>{formatPrice(item.price)}</OriginalPrice>
                </div>
                <QtyDiv>
                  <MinusBtn onClick={decreaseQuantity} quantity={quantity}
                  
                  ></MinusBtn>
                  <QtyDiv2>{quantity}</QtyDiv2>
                  <PlusBtn onClick={increaseQuantity}></PlusBtn>
                </QtyDiv>
              </Div2PriceWrapper>
            </Div2Wrapper>
          </Div2>
          <Div3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TotalDiv>
                <TotlaP></TotlaP>
                <div style={{ margin: '0px', padding: '0px' }}>
                  <PriceSpan>{formatPrice(item.discountedPrice * quantity)}</PriceSpan>
                  <WonSpan>원</WonSpan>
                </div>
              </TotalDiv>
              <RewordDiv>
                    <RewordSpan>적립</RewordSpan>
                    <RewordSpan2>로그인 후, 적립 혜택 제공</RewordSpan2>
                </RewordDiv>
            </div>
          </Div3>
          <Div4>
            <CBtn onClick={handleCancel}><BtnSpan>취소</BtnSpan></CBtn>
            <ABtn onClick={handleAddToCart}><BtnSpan>장바구니 담기</BtnSpan></ABtn>
          </Div4>
        </div>
      </div>
    </ModalWrapper >
  )

}

export default CartMadal;

const RewordSpan2 = styled.span`
font-size: 12px;
line-height: 18px;
color: rgb(51, 51, 51);
`;

const RewordSpan = styled.span`
width: 30px;
height: 18px;
margin-right: 4px;
border-radius: 9px;
background-color: rgb(255, 191, 0);
font-size: 10px;
font-weight: 500;
color: rgb(255, 255, 255);
line-height: 18px;
text-align: center;
letter-spacing: -0.5px;
`;

const RewordDiv = styled.div`
display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding-top: 11px;
`;
const SaveBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(149, 5, 38); // Updated color
  border: 0px none;
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%; /* 화면 상단에서 절반만큼 내려간 위치에 모달을 배치 */
  left: 50%; /* 화면 왼쪽에서 절반만큼 오른쪽으로 이동한 위치에 모달을 배치 */
  transform: translate(-50%, -50%); /* 화면 중앙에 모달을 정확히 배치 */
  width: 400px; /* 모달의 가로 크기를 설정 */
  height: 400px; /* 모달의 세로 크기를 설정 */
  background: white;
  z-index: 1000;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Strong = styled.div`
  display: block;
  padding: 40px 0px 34px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: rgb(51, 51, 51);
  text-align: center;
`;

const P = styled.p`
  display: block;
  padding-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(102, 102, 102);
`;

const InputDiv = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const addressInput = styled.input`
  display: inline-flex;
  overflow: hidden;
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0px 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  line-height: 42px;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InputValP = styled.p`
  display: inline-flex;
  overflow: hidden;
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0px 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  line-height: 42px;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SeachBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  border-radius: 3px;
  color: rgb(149, 5, 38);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(149, 5, 38);
`;

const DetailInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 14px;
  line-height: 42px;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`;

const DefaultAddressLabel = styled.label`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: top;
  line-height: normal;
  color: rgb(51, 51, 51);
  padding: 8px 0px 0px;
  font-size: 14px;
`;

const DefaultAddressInput = styled.input`
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
`;


// const CartModal = ({props, isOpen}) => {

//   return (
//     <>

//     <Container isOpen={isOpen}>
//       <Wrapper>
//           <Div1>
//             <Div1Img>
//               <Div1ImgSpan>
//                     <Img></Img>
//               </Div1ImgSpan>
//             </Div1Img>
//             <Div1Title>
//               <TitleSpan>여기제목</TitleSpan>
//             </Div1Title>
//           </Div1>
//           <Div2>
//             <Div2Wrapper>
//               <Div2Title>
//                 <Div2Span>여기도 제목</Div2Span>
//               </Div2Title>
//               <Div2PriceWrapper>
//                 <div style={{paddingTop:'3px'}}>
//                   <SlaePrice>판매가</SlaePrice>
//                   <OriginalPrice>세일전 가격</OriginalPrice>
//                 </div>
//                 <QtyDiv>
//                 <MinusBtn></MinusBtn>
//                 <QtyDiv2>1</QtyDiv2>
//                 <PlusBtn></PlusBtn>
//                 </QtyDiv>
//               </Div2PriceWrapper>
//             </Div2Wrapper>
//           </Div2>
//           <Div3>
//             <div style={{display:"flex", flexDirection:"column"}}>
//             <TotalDiv>
//               <TotlaP></TotlaP>
//               <div style={{margin: '0px', padding: '0px'}}>
//                   <PriceSpan>10000</PriceSpan>
//                   <WonSpan>원</WonSpan>
//               </div>
//             </TotalDiv>
//             </div>
//           </Div3>
//           <Div4>
//             <CBtn><BtnSpan>취소</BtnSpan></CBtn>
//             <ABtn><BtnSpan>장바구니 담기</BtnSpan></ABtn>
//           </Div4>
//       </Wrapper>
//     </Container>

//   </>

//   )

//   }

//   export default CartModal;

//   const ModalWrapper = styled.div`
//   display: ${(props) => (props.isOpen ? "block" : "none")};
//   position: fixed;
//   top: 50%; /* 화면 상단에서 절반만큼 내려간 위치에 모달을 배치 */
//   left: 50%; /* 화면 왼쪽에서 절반만큼 오른쪽으로 이동한 위치에 모달을 배치 */
//   transform: translate(-50%, -50%); /* 화면 중앙에 모달을 정확히 배치 */
//   width: 400px; /* 모달의 가로 크기를 설정 */
//   height: 500px; /* 모달의 세로 크기를 설정 */
//   background: white;
//   z-index: 1000;
//   border-radius: 20px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
// `;

const BtnSpan = styled.span`
  display: inline-block;
    font-size: 16px;
    font-weight: 500;

  `;

const ABtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  width: 50%;
  margin: 0px 4px;
  margin-right: 0px;
  cursor: pointer;

  `;

const CBtn = styled.button`
  margin-left: 0px;
  width: 50%;
    margin: 0px 4px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    height: 56px;
    border-radius: 3px;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    cursor: pointer;
  `;

const WonSpan = styled.span`
  margin-left: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  vertical-align: 3px;

  `;

const PriceSpan = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  `;

const TotlaP = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  `;

const TotalDiv = styled.div`
  display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

  `;



const PlusBtn = styled.button`
  display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    vertical-align: top;

  `;

const QtyDiv2 = styled.div`
  display: inline-flex;
    overflow: hidden;
    white-space: nowrap;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(51, 51, 51);
    text-align: center;
    width: 31px;
    height: 28px;
    line-height: 28px;

  `;

const MinusBtn = styled.button`
display: inline-flex;
width: 28px;
height: 28px;
border: none;
font-size: 1px;
color: transparent;
background-size: cover;
background-color: transparent;
background-image: ${props =>
  props.quantity === 1
    ? 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=")'
    : 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=")'
};
vertical-align: top;
  `;

const QtyDiv = styled.div`
  flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    border-radius: 3px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 88px;
    height: 30px;

  `;

const OriginalPrice = styled.span`
  margin-left: 4px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  line-height: 16px;
  letter-spacing: -0.5px;

  `;
const SlaePrice = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(51, 51, 51);
  line-height: 19px;
  `;


const Div2Span = styled.span`
  font-size: 14px;
    line-height: 19px;
    color: rgb(51, 51, 51);
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

  `;

const Div2PriceWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 5px;
  `;

const Div2Title = styled.div`
  display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

  `;

const Div2Wrapper = styled.div`
  padding: 12px 0px;
  border-radius: 3px;
  border-bottom: 1px solid rgb(244, 244, 244);
  `;

const TitleSpan = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  `;

const Img = styled.img`
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
  `

const Div1ImgSpan = styled.span`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  inset: 0px;
  `;

const Div1Title = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 50px;
  margin-top: 2px;
  word-break: break-all;
  `;

const Div1Img = styled.div`
  flex: 0 0 50px;
    overflow: hidden;
    position: relative;
    height: 50px;
    margin-right: 14px;
    border-radius: 3px;

  `;


const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  `;

const Div3 = styled.div`
  padding: 14px 0px 20px;
  `;

const Div2 = styled.div`
  overflow: hidden auto;
  max-height: 355px;

  `;

const Div1 = styled.div`

  display: flex;
  padding: 5px 0px 12px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid rgb(244, 244, 244);

  `;

const Wrapper = styled.div`

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  max-width: 90%; /* 모달이 너무 커질 경우 최대 너비 제한 */
  background: white;
  z-index: 1000;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  `;

const Container = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 모달 이외의 배경은 반투명하게 처리 */
  z-index: 1000;
  `;