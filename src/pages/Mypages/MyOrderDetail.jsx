
import {
  Title,
  TitleHead,
  TitleWraper,
} from "../../components/CustomerService/Style.jsx";
import PaymentBox from "../../components/MyOrderDetail/PaymentBox";
import OrderSender from "../../components/MyOrderDetail/OrderSender";
import DelivertInfoBox from "../../components/MyOrderDetail/DeliveryInfoBox";
import AddInfo from "../../components/MyOrderDetail/AddInfo.jsx";
import ProductDetail from "../../components/MyOrderDetail/ProductDetail.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyPageLayout from "../../components/Mypage/MyPageLayout.jsx";

const MyOrderDetail = () => {
  
  
  const { orderCode } = useParams();
  const [details, setDetails] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState([]);
  const [sender, setSender] = useState([]);
  const baseUrl = process.env.REACT_APP_API;
  const access_token = sessionStorage.getItem("accessToken");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/order/list/${orderCode}/order-details`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        });
        
        setDetails(response.data)
        setSender(response.data.consumerInfo)
        setDeliveryInfo(response.data.shippingDetailsInfo)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
          <MyPageLayout>
          <TitleWraper>
            <Title>
              <TitleHead>주문 내역 상세</TitleHead>
            </Title>
          </TitleWraper>
          <ProductDetail goodsDetails={details} orderCode={orderCode}/>
          {/* <DeliveryBox /> */}
          <PaymentBox paymentDetail={details}/>
             <OrderSender sender={sender} orderCode={orderCode}/> 
          <DelivertInfoBox deliveryInfo={deliveryInfo}/> 
          <AddInfo />
          </MyPageLayout>

    </>
  );
};

export default MyOrderDetail;