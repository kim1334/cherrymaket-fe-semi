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
import PickBox from "../../components/Mypage/PickBox.jsx";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";


const Pick = () => {


    return (
        <>
        <Header />
        <Mypage />
        <FlexWrapper>
        
        <MypageMenu />
            <Container>
        
        <TitleWraper >
            <Title>
                <TitleHead>찜한상품()</TitleHead>
                <TitleSpan>찜한 상품은 최대 200개까지 저장됩니다.</TitleSpan>
            </Title>
        </TitleWraper>
        <UlWrapper style={{borderTop: '2px solid rgb(51, 51, 51)'}}>
        <PickBox />
        <PickBox />
        </UlWrapper>
        </Container>
        </FlexWrapper>
        <FixedSiderbar />
        <Footer />
        </>
    )
}

export default Pick;