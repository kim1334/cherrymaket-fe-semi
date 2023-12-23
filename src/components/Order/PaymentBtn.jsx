import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import styled from "styled-components";
import { instance } from "../../redux/modules/instance";


const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

const PaymentBtn = (finalPrice, {cartData}) => {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const agreementWidgetRef = useRef(null);
    const [price, setPrice] = useState(finalPrice);
    const deliveryFee = 2500;
    const [userData, setUserData] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const access_token = sessionStorage.getItem("accessToken");
          const config = {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          };
          const res = await instance.get("/account/my-info", config);
          setUserData(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []); 


  const orderName = finalPrice?.cartData?.length === 1
  ? finalPrice?.cartData[0]?.goodsName
  : `${finalPrice?.cartData[0]?.goodsName}외 ${finalPrice?.cartData?.length - 1}개`;


    useEffect(() => {
      setPrice(finalPrice.finalPrice)
    }, [finalPrice]);

    const finalAmount = price - (price * 0.25) + deliveryFee;

    
    useEffect(() => {
        (async () => {
          const paymentWidget = await loadPaymentWidget("test_ck_nRQoOaPz8LN1nXR0LEyzVy47BMw6",  ANONYMOUS); // 비회원 customerKey
    
          if (paymentWidgetRef.current == null) {
            paymentWidgetRef.current = paymentWidget;
          }
    
          /**
           * 결제창을 렌더링합니다.
           * @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B2%B0%EC%A0%9C-%EA%B8%88%EC%95%A1
           */
          const paymentMethodsWidget = paymentWidgetRef.current.renderPaymentMethods(
            "#payment-method",
            { value: finalAmount },
            { variantKey: "DEFAULT" }
          );
    
          /**
           * 약관을 렌더링합니다. 
           * @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement%EC%84%A0%ED%83%9D%EC%9E%90-%EC%98%B5%EC%85%98
           */
          agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement('#agreement', { variantKey: 'DEFAULT' });
    
          paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
      }, [finalPrice]); //여기 수정해야될 수도 


    return (
        <ActionBtn
        className="btn primary"
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;

          try {
            /**
             * 결제 요청
             * @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment%EA%B2%B0%EC%A0%9C-%EC%A0%95%EB%B3%B4
             */
            await paymentWidget?.requestPayment({
              orderId: generateRandomString(),
              orderName: orderName,
              customerName: userData?.name,
              customerEmail: userData?.email,
              successUrl: window.location.origin + "/sandbox/success" + window.location.search,
              failUrl: window.location.origin + "/sandbox/fail" + window.location.search
            });
          } catch (error) {
            // TODO: 에러 처리
          }
        }}
      >
        {new Intl.NumberFormat("ko-KR").format(finalAmount)}원 결제하기
      </ActionBtn>

    );

};




export default PaymentBtn;

const ActionBtn = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 240px;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(149, 5, 38);
    border: 0px none;
    margin: 40px auto 30px;
    font-weight: 500;
`;