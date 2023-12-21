import Coupon from "./Coupon.jsx";
import styled from "styled-components";
import PaymentSheetDetail from "./PaymentSheetDetail.jsx";
import Point from "./Point.jsx";
import TossPay from "./TossPay.jsx";
import PaymentGuide from "./PaymentGuide.jsx";
import PaymentBtn from "./PaymentBtn.jsx";



const OrderSheetbottom = () => {

    return (
        <OrderSheetbottomContainer>
            <ItemSheet>
                <Coupon />
                <Point />
                <TossPay />
                <PaymentGuide />
                <PaymentBtn />
            </ItemSheet>
            <PaymentSheet>
                <PaymentSheetDetail />
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