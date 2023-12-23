import styled from 'styled-components';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { instance } from '../redux/modules/instance';
import { useParams } from 'react-router-dom';




const CompletePayment = () => {
  const { orderCode } = useParams();
  const [orderData, setOrderData] = useState([]);
  const [userName, setUserName] = useState('');
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('');

  useEffect(() => { //오더 상세 호출 
    const fetchData = async () => {
      const access_token = sessionStorage.getItem("accessToken");
          const config = { 
            headers: {
            'Authorization': `Bearer ${access_token}` },}
      try {
        const response = await instance.get(`order/list/${orderCode}/order-details`, config);
        
        setOrderData(response.data)
        //console.log(response.data.ordersSummary);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []); 

  useEffect(() => {
    setAmount(orderData?.amountInfo?.totalAmount)
  },[orderData])

  useEffect(() => {
    setAddress(orderData?.shippingDetailsInfo?.address + ' ' + orderData?.shippingDetailsInfo?.addressDetail)
  },[orderData])

  useEffect(() => {
    setUserName(orderData?.consumerInfo?.name)
  },[orderData])


  




  

  return (
    <>
      <Header />
<Container>
<Warpper>
  <Warpper1>
  <Div1>
      <CheckIcon />
      <Div1Title>
        <p style ={{fontSize: "20px"}}>{userName}님의 주문이 완료되었습니다.</p>
        <MessageP>모레(수) 새벽에 만나요!</MessageP>
      </Div1Title>
  </Div1>
  <Div2>
    <Div2Address>서울 관악구 남부순환로길 뭐뭐 빌라</Div2Address>
    <Div2Jo></Div2Jo>
    <OrderCode>
      <OrderCodeSpan>주문번호</OrderCodeSpan>
      <OrderCodeP>{orderCode}</OrderCodeP>
    </OrderCode>
  </Div2>
  <Div3>
<PaymentPrice>
<PriceSpna>결제금액</PriceSpna>
<PriceSpan>{(amount)?.toLocaleString('ko-kr')}<WonSpan>원</WonSpan></PriceSpan>
</PaymentPrice>
  </Div3>
  <Div4>
<DivBox>
  <img src="https://cdn.pixabay.com/photo/2023/10/31/16/00/banner-8355422_1280.jpg" alt="크리스마스 이미지"></img>
</DivBox>
  </Div4>
  <Div5>
    <ul style={{listStyleType: "none"}}>
    <Li>[주문완료] 상태일 경우에만 주문내역 상세페이지에서 주문 취소가 가능합니다.</Li>
    <Li>엘리베이터 이용이 어려운 경우 6층 이상부터는 공동 현관 앞 또는 경비실로 대응 배송 될 수 있습니다.</Li>
    <Li>실제 출입 정보가 다를 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.</Li>
    <Li>주문 / 배송 및 기타 문의가 있을 경우, 1:1 문의에 남겨주시면 신속히 해결해드리겠습니다.</Li>
    </ul>
  </Div5>
  <Div6>
      <Link to = {`/mypage/myorderdetail/${orderCode}`}>
      <DetailBtn><BtnSpan>주문 상세보기</BtnSpan></DetailBtn>
      </Link>
      <Link to = "/" >
      <MainBtn><BtnSpan>계속하기</BtnSpan></MainBtn>
      </Link>
  </Div6>
  </Warpper1>
</Warpper>
</Container>

      <Footer />
    </>
  )

}

export default CompletePayment;

const BtnSpan = styled.span`
display: inline-block;
font-size: 16px;
font-weight: 500;
`;

const MainBtn = styled.button`
margin-top: 10px;
display: block;
padding: 0px 10px;
text-align: center;
overflow: hidden;
width: 100%;
height: 56px;
color: rgb(255, 255, 255);
background-color: rgb(149, 5, 38);
border: 0px none;
border-radius: 3px;
cursor: pointer;
`;

const DetailBtn = styled.button`
display: block;
padding: 0px 10px;
text-align: center;
overflow: hidden;
width: 100%;
height: 56px;
color: rgb(51, 51, 51);
background-color: rgb(255, 255, 255);
border: 1px solid rgb(221, 221, 221);
border-radius: 3px;
cursor: pointer;

`;

const Li = styled.li`
position: relative;
    padding-top: 4px;
    font-size: 14px;
    line-height: 19px;
    padding-left: 11px;
    color: rgb(153, 153, 153);
    text-align: left;
    &::before {
      overflow: hidden;
      position: absolute;
      width: 3px;
      height: 3px;
      margin: 9px 8px 0 -10px;
      background: rgb(204, 204, 204);
      vertical-align: top;
      border-radius: 50%;
      content: "";
    }
`;

const DivBox = styled.div`
    height: 70px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    min-height: 40px;
    overflow: hidden;
    border-radius: 3px;
    background-color: rgb(244, 236, 255);
`;

const WonSpan = styled.span`
padding-left: 2px;
    font-size: 16px;
    font-weight: normal;
    vertical-align: bottom;
}
`;

const PriceSpan = styled.span`
text-align: right;
font-size: 20px;
line-height: 24px;
font-weight: bold;
`;

const PriceSpna = styled.span`
width: 100px;
font-size: 16px;
line-height: 24px;
white-space: nowrap;
`;

const PaymentPrice = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
padding-top: 10px;
}
`;

const OrderCodeP = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: rgb(102, 102, 102);
`;

const OrderCodeSpan = styled.span`
font-size: 13px;
    font-weight: 400;
    color: rgb(102, 102, 102);
`;

const OrderCode = styled.div`
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
`;

const Div2Jo = styled.div`
margin: 0px auto 15px;
    width: 90%;
    height: 1px;
    background-color: rgb(242, 242, 242);
`;

const Div2Address = styled.div`
padding-bottom: 12px;
font-size: 14px;
font-weight: 400;
text-align: center;
line-height: 19px;
color: rgb(51, 51, 51);
`;

const MessageP = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 26px;
`;

const Div1Title = styled.div`
padding-top: 24px;
    font-size: 18px;
    line-height: 26px;
`;

const CheckIcon = styled(FaRegCircleCheck)`
width: 50px;
height: 50px;
color : rgb(149, 5, 38);
`;

const Div6 = styled.div`
box-sizing: border-box;
margin: 0;
`;

const Div5 = styled.div`
padding: 20px 0px;
text-align: left;
}
`;

const Div4 = styled.div`
margin-top: 32px;
`;

const Div3 = styled.div`
border-top: 1px solid rgb(244, 244, 244);
    margin-top: 32px;
    padding-top: 16px;
    text-align: left;
`;

const Div2 = styled.div`
border-radius: 6px;
padding: 20px 20px 17px;
text-align: center;
background-color: rgb(250, 250, 250);
`;

const Div1 = styled.div`
padding: 30px 0px 20px;
    text-align: center;
}
`;

const Warpper1 = styled.div`
position: relative;
width: 400px;
padding: 30px;
margin: 0px auto;
background: rgb(255, 255, 255);
text-align: center;
`;

const Warpper = styled.div`
width: 1050px;
padding: 60px 0;
margin: 0 auto;
`;

const Container = styled.div`
background: rgb(244, 244, 244);
`;