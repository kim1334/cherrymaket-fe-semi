import Coupon from "./Coupon.jsx";
import styled from "styled-components";
import PaymentSheetDetail from "./PaymentSheetDetail.jsx";
import Point from "./Point.jsx";
import TossPay from "./TossPay.jsx";
import PaymentGuide from "./PaymentGuide.jsx";
import PaymentBtn from "./PaymentBtn.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { calcPrice } from "../../redux/modules/cartSlice";
import { getCartAysnc } from "../../redux/modules/cartSlice";



const OrderSheetbottom = () => {
    const [cartData, setCartData] = useState([]);
    const totalPrice = useSelector((state) => state?.cart?.totalPrice);
    const [finalPrice, setFinalPrice] = useState(totalPrice);
    const cart = useSelector((state) => state.cart.cart);

    useEffect(() => {
        if (cart && cart.itemsByType) {
          const newCartData = Object.values(cart.itemsByType).flat();
          setCartData(newCartData);
        } else {
          setCartData([]);
        }
      }, [cart]);

      console.log(cartData);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calcPrice(cartData));
      }, [cartData, dispatch]);

    console.log(totalPrice);

    useEffect(() => {
        setFinalPrice(totalPrice)
    }, [totalPrice])

    console.log(finalPrice);
    

    return (
        <OrderSheetbottomContainer>
            <ItemSheet>
                <Coupon />
                {/* <Point /> 시간 남을때 구현하자*/} 
                <TossPay />
                <PaymentGuide />
                <PaymentBtn finalPrice={finalPrice} cartData={cartData}/>
            </ItemSheet>
            <PaymentSheet>
                <PaymentSheetDetail finalPrice={finalPrice}/>
            </PaymentSheet>
        </OrderSheetbottomContainer>
    );
}

export default OrderSheetbottom;

const OrderSheetbottomContainer = styled.div`

    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;

`;

const ItemSheet = styled.div`

width: 742px;

`;

const PaymentSheet = styled.div`

    position: relative;
    width: 284px;

`;