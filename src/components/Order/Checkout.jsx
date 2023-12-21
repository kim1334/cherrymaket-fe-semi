import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import "./style.css";

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

export function CheckoutPage() {
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
    <div className="wrapper w-100">
      <div className="max-w-540 w-100">
        <div id="payment-method" className="w-100" />
        <div id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <p className="test-payment">실제로 금액이 빠져나가지 않는 테스트에요</p>
        </div>
      </div>
    </div>
  );
}