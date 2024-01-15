import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../components/Order/style.css";
import Foorter from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { useEffect} from "react";
import { instance } from '../redux/modules/instance';
import { useDispatch, useSelector } from "react-redux";
import { calcPrice } from "../redux/modules/cartSlice";

export function SuccessPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart?.totalPrice);
  const cart = useSelector((state) => state.cart.cart);
  const [cartData, setCartData] = useState([]);
  const deliveryFee = 2500;

  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calcPrice(cartData));
  }, [cartData, dispatch]);

  useEffect(() => {
    if (cart && cart.itemsByType) {
      const newCartData = Object.values(cart.itemsByType).flat();
      setCartData(newCartData);
    } else {
      setCartData([]);
    }
  }, [cart]);

  console.log("totalPrice", totalPrice);


  console.log("paymentKey", paymentKey);
  console.log("orderId", orderId);
  console.log("amount", amount);

  async function confirmPayment() {
    const secret = "test_sk_Z61JOxRQVE1RmbXmvADyVW0X9bAq";
    const encodedSecret = btoa(secret);
  
    const formData = new FormData();
    formData.append("orderId", orderId);
    formData.append("paymentKey", paymentKey);
    formData.append("amount", amount);
  
    // FormData 객체를 문자열로 변환
    const formDataString = new URLSearchParams(formData).toString();
  
    try {
      const response = await fetch("https://server.marketcherry.store/api/order/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${encodedSecret}`,
        },
        body: formDataString,
      });
  
      if (response.ok) {
        console.log(response);
        setIsConfirmed(true);
        postDataToServer();
        // navigate('/order/completepayment');
      }
    } catch (error) {
      console.error("Error:", error);

      
    }
  }

  // useEffect(() => {
  //   confirmPayment();
  // }, []);

  if (!cartData){
    return
  }

  const postDataToServer = async () => {
    try {
      const access_token = sessionStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      const goodsInfo = cartData?.map((item) => {
        return {
          goodsId: item.goodsId.toString(), // 상품 ID를 문자열로 변환
          quantity: item.quantity.toString(), // 수량을 문자열로 변환
        };
      });

      const disCount = (totalPrice-deliveryFee-amount).toString();
      console.log(disCount);

      const couponAmount = "0";
      const rewardAmount = "0";
      

      const requestData = {
        orderCode: orderId,
        orderStatus: "PROCESSING",
        goodsInfo: goodsInfo,
        amountInfo: {
          totalAmount: totalPrice,
          discount:  disCount,
          couponAmount: couponAmount,
          rewardAmount: rewardAmount,
          deliveryFee: deliveryFee.toString(),
        },
      };

      console.log(requestData);

      const response = await instance.post("/order/create", requestData ,config);
  
      if (response.status === 201) {
           
        cartData?.forEach((item) => {
          console.log("item.goodsId", item.cartId); // 각 객체에서 goodsId에 접근
          deleteGoodsFromCart(item.cartId);
        });


          const goodsInfo = cartData?.map((item) => {
        return {
          goodsId: item.goodsId.toString(), // 상품 ID를 문자열로 변환
          quantity: item.quantity.toString(), // 수량을 문자열로 변환
        };
      });

        
        return response.data;
      }
    } catch (error) {
      // 에러 처리
      throw error;
    }
  };

  const deleteGoodsFromCart = async (cartId) => {
    try {
      const access_token = sessionStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };
  
      const url = `https://server.marketcherry.store/api/cart/delete?cartId=${cartId}`;
  
      const response = await instance.delete(`https://server.marketcherry.store/api/cart/delete?cartId=${cartId}`, config);
  
      if (response.status === 200) {
        console.log(`DELETE 요청 성공: goodsId=${cartId}`);
        navigate(`/order/completepayment/${orderId}`);
      }
    } catch (error) {
      console.error(`DELETE 요청 실패: goodsId=${cartId}, 에러:`, error);
    }
  };



  return (
    <>
    <Header />
    <div className="wrapper w-100">
      {isConfirmed ? (
        <div
          className="flex-column align-center confirm-success w-100 max-w-540"
          style={{
            display: "flex"
          }}
        >
          <img
            src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
            width="120"
            height="120"
          />
          <h2 className="title">결제를 완료했어요</h2>
          <div className="response-section w-100">
            <div className="flex justify-between">
              <span className="response-label">결제 금액</span>
              <span id="amount" className="response-text">
                {(amount).toLocaleString("ko-kr")}원
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">주문번호</span>
              <span id="orderId" className="response-text">
                {orderId}
              </span>
            </div>
            {/* <div className="flex justify-between">
              <span className="response-label">paymentKey</span>
              <span id="paymentKey" className="response-text">
                {paymentKey}
              </span>
            </div> */}
          </div>

          <div className="w-100 button-group">
            <a class="btn primary" href='/my/payment-logs' target="_blank" rel="noreferrer noopener"></a>
            <div className="flex" style={{ gap: "16px" }}>
              <a
                className="btn w-100"
                href="https://developers.tosspayments.com/sandbox"
              >
              </a>
              <a
                className="btn w-100"
                href="https://docs.tosspayments.com/guides/payment-widget/integration"
                target="_blank"
                rel="noopner noreferer"
              >
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-column align-center confirm-loading w-100 max-w-540">
          <div className="flex-column align-center">
            <img
              src="https://static.toss.im/lotties/loading-spot-apng.png"
              width="120"
              height="120"
            />
            <h2 className="title text-center">최종 승인요청 대기중입니다.</h2>
            <h4 className="text-center description">결제 승인하기 버튼을 눌러주세요</h4>
          </div>
          <div className="w-100">
            <button className="btn primary w-100" onClick={confirmPayment}>
              결제 승인하기
            </button>
          </div>
        </div>
      )}
    </div>
    <Foorter />
    </>
  );
}