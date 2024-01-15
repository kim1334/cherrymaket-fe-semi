import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import Mypage from "../../pages/Mypages/Mypage";
import MypageMenu from "./MypageMenu";
import styled from "styled-components";


const MyPageLayout = ({ children }) => {


    return (
        <>
        <Header />
        <Mypage />
        <FlexWrapper>
            <MypageMenu />
            <Container>
                {children}
            </Container>
        </FlexWrapper>
        <FixedSiderbar />
        <Footer />
        </>
    )
}


export default MyPageLayout;

const FlexWrapper = styled.div`
    display: flex;
    width: 1050px;
    padding: 50px 0px 80px;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

const Container = styled.div`
    width: 820px;
    margin: 0px auto;
`;