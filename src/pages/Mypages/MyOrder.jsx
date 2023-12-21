import MypageMenu from "../../components/Mypage/MypageMenu.jsx";
import Header from "../../common/Header/Header.jsx";
import Mypage from "./Mypage.jsx";
import {
    Title,
    TitleHead,
    TitleSpan,
    TitleWraper,
    FlexWrapper,
    Container,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import OrderBox from "../../components/Mypage/OrderBox.jsx";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";




const MyOrder = () => {
    const access_token = sessionStorage.getItem("accessToken");
    const baseUrl = process.env.REACT_APP_API;
    const [orderData, setOrderData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${baseUrl}/order/list`, {
              headers: {
                'Authorization': `Bearer ${access_token}`,
              }
            });
            
            setOrderData(response.data.ordersSummary)
            //console.log(response.data.ordersSummary);
            
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []); 

    function generateImageUrl(goodsId) {
        const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
        const imageUrl = `${imageUrlBase}${goodsId}/${goodsId}_0.png`;
        return imageUrl;
      }

    return (
<>
    <Header />
    <MainDiv>
    <Mypage />
    <FlexWrapper>
    <MypageMenu />
        <Container>
    
    <TitleWraper >
        <Title>
            <TitleHead>주문내역</TitleHead>
            <TitleSpan>지난 최대 3년간의 주문 내역까지 확인할 수 있어요</TitleSpan>
        </Title>
    </TitleWraper>
    <UlWrapper style={{borderTop: '2px solid rgb(51, 51, 51)'}}>

    {orderData.map((item) => (
        <OrderBox key={item.orderCode} item={item}
        productImageUrl={generateImageUrl(item.goodsCode)}
        />
    ))}

    </UlWrapper>
    </Container>
    </FlexWrapper>
    <FixedSiderbar />
    </MainDiv>
    <Footer />
</>

    );
}

export default MyOrder;

const MainDiv = styled.div`
position: relative;
    min-width: 1050px;
`;