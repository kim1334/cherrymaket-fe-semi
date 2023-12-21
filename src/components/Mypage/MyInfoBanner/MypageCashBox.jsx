import styled from "styled-components";
import { Link } from "react-router-dom";



const MypageCashBox= () => {

    return (
        <MyPageCash>
            <MyPageCashItem>
                <Link to="/mypage/point">
                <CashBtn>
                    <CashItem>
                        적립금
                        <CashBtnImage />
                    </CashItem>
                    <Barogo>
                        바로가기
                    </Barogo>
                </CashBtn>
                </Link>
            </MyPageCashItem>
            <MyPageCashItem>
                <Link to="/mypage/coupon">
                    <CashBtn>
                        <CashItem>
                            쿠폰
                            <CashBtnImage />
                        </CashItem>
                        <Barogo>
                            1개
                        </Barogo>
                    </CashBtn>
                </Link>
            </MyPageCashItem>
            <MyPageCashItem>
                <MyPageCashItem>
                    <Link to="/mypage/address">
                        <CashBtn>
                            <CashItem>
                                배송지관리
                                <CashBtnImage />
                            </CashItem>
                            <Barogo>
                                수정하기
                            </Barogo>
                        </CashBtn>
                    </Link>
                </MyPageCashItem>
            </MyPageCashItem>
        </MyPageCash>
    );
}

export default MypageCashBox;

const MyPageCash = styled.div`
    display: flex;
    column-gap: 4px;
`;

const MyPageCashItem = styled.div`
    flex: 1 1 0%;
    overflow: hidden;
    background: rgb(255, 255, 255);
`;

const CashBtn = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 26px 0px 30px 30px;
    background-color: transparent;
    cursor: pointer;
`;

const CashItem = styled.div`
    position: relative;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: rgb(51, 51, 51);
`;

const CashBtnImage = styled.span`
    width: 23px;
    height: 23px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/OVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAxYGNhJAM7wjAAAAd0lEQVRYw+3UsQ2AMAwAQQfRsESWiCmp2I+aJagYgZYBaGGItGYEIhQZIf3VVl5OYREAAP4oxRTrvdYUzGzh6EfHYFiss7Ve8pEFnZNpJkmSJEnT/ObGltzSrzl/KTly5PxzIjo5X8501sy1BTODyX657QcAgL8b8j9nkEwifVYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMjJUMDY6NTQ6MTYrMDA6MDClJXo+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTIyVDA2OjU0OjE2KzAwOjAw1HjCggAAAABJRU5ErkJggg==) 50% 50% / cover no-repeat;
`;

const Barogo = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: rgb(149, 5, 38);
    margin-top: 20px;
    
`;