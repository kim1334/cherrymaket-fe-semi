import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import styled from "styled-components";

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

const PaymentBtn = () => {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const agreementWidgetRef = useRef(null);
    const [price, setPrice] = useState(1000);

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
            { value: price },
            { variantKey: "DEFAULT" }
          );
    
          /**
           * 약관을 렌더링합니다. 
           * @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement%EC%84%A0%ED%83%9D%EC%9E%90-%EC%98%B5%EC%85%98
           */
          agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement('#agreement', { variantKey: 'DEFAULT' });
    
          paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
      }, []);

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
              orderId: "cherryOrder",
              orderName: "토스 티셔츠 외 2건",
              customerName: "네클3주문&결제",
              customerEmail: "customer123@gmail.com",
              successUrl: window.location.origin + "/sandbox/success" + window.location.search,
              failUrl: window.location.origin + "/sandbox/fail" + window.location.search
            });
          } catch (error) {
            // TODO: 에러 처리
          }
        }}
      >
        31,705원 결제하기
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
    background-color: rgb(95, 0, 128);
    border: 0px none;
    margin: 40px auto 30px;
    font-weight: 500;
`;