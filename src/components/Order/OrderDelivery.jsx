
import styled from "styled-components";
import { useEffect, useState } from "react";
import { instance } from "../../redux/modules/instance";

const OrderDelivery = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const access_token = sessionStorage.getItem('accessToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                };
                const response = await instance.get("/customer/address/my-list", config);
                setAddresses(response.data);
            } catch (error) {
            }
        };

        fetchUserData(); // 컴포넌트가 마운트될 때 한 번 데이터 가져오기
    }, []);

    return (
        <div>
            <TitleContainer>
                <Title>배송정보</Title>
                {/* <DeliveryChangeGuideContainer>
                    <DeliveryChangeGuide>배송지 변경 안내 
                        <DeliveryChangeGuideIcon></DeliveryChangeGuideIcon>
                    </DeliveryChangeGuide>
                </DeliveryChangeGuideContainer> */}
            </TitleContainer>
            <Deliveryaddress>
                <DeliveryaddressBox>
                    <DeliveryaddressBoxTitle>배송지</DeliveryaddressBoxTitle>
                    <DeliveryaddressdDetailContainer>
                    <BasicIcon>배송지</BasicIcon>
                    <p>{addresses[0]?.address}</p>
                    <p style={{marginTop: "5px"}}>{addresses[0]?.addressDetail}</p>
                    <BtnContainer>
                        {/* <OrderDeliveryBtn>
                            <span3>변경</span3>
                        </OrderDeliveryBtn> */}
                    </BtnContainer>
                    </DeliveryaddressdDetailContainer>

                </DeliveryaddressBox>
            </Deliveryaddress>
            <div>
            <Deliveryaddress>
                <DeliveryaddressBox>
                    <DeliveryaddressBoxTitle>배송요청사항</DeliveryaddressBoxTitle>
                    <DeliveryaddressdDetailContainer>
                    <span>문앞</span>
                    <SpanIcon></SpanIcon>
                    <span>안전하게 배송 부탁드립니다</span>
                    {/* <p style={{marginTop: "5px"}}>김주영, 010-4288-1828</p> */}
                    {/* <BtnContainer>
                        <OrderDeliveryBtn>
                            <span3>수정</span3>
                        </OrderDeliveryBtn>
                    </BtnContainer> */}
                    </DeliveryaddressdDetailContainer>

                </DeliveryaddressBox>
            </Deliveryaddress>
                


            </div>
        </div>
    )
}

export default OrderDelivery;

const TitleContainer = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
margin-top: 75px;
border-bottom: 1px solid rgb(51, 51, 51);
`;

const Title = styled.h3`
    padding: 16px 0px;
    font-weight: 500;
    font-size: 20px;
    color: rgb(51, 51, 51);
    line-height: 29px;
`;

const DeliveryChangeGuideContainer = styled.div`
    position: relative;
`;

const DeliveryChangeGuide = styled.a`
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: rgb(153, 153, 153);
text-align: right;
cursor: pointer;
`;

export const DeliveryChangeGuideIcon = styled.span`
display: inline-block;
width: 20px;
height: 20px;
margin-top: 2px;
background: url(https://res.kurly.com/mobile/ico/2010/ico_question_v2.svg) 100% 50% / 20px 20px no-repeat;
vertical-align: top;
`;

{/*경계*/}
const Deliveryaddress = styled.div`
    border-bottom: 1px solid rgb(244, 244, 244);
    padding-bottom: 20px;
`;

const DeliveryaddressBox = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
padding-top: 20px;
`;

const DeliveryaddressBoxTitle = styled.span`
display: inline-block;
width: 160px;
margin-right: 30px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: rgb(51, 51, 51);
letter-spacing: -0.32px;
vertical-align: top;
`;

const DeliveryaddressdDetailContainer = styled.div`
flex: 1 1 0%;
`;

const BasicIcon = styled.span`
  display: block;
  width: 74px;
  height: 22px;
  margin-bottom: 7px;
  border-radius: 11px;
  background-color: rgb(247, 247, 247);
  font-weight: 700;
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(149, 5, 38, 0.5);
`;

const OrderDeliveryBtn = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 60px;
    height: 30px;
    border-radius: 3px;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
`;

const BtnContainer = styled.div`
margin-top: 20px;
`;

const SpanIcon = styled.span`
display: inline-block;
width: 1px;
height: 14px;
margin: 6px 8px 0px;
background-color: rgb(221, 221, 221);
box-sizing: border-box;`;