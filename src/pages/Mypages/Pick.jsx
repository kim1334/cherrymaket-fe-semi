import {
  Title,
  TitleHead,
  TitleSpan,
  TitleWraper,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import Picknone from "../../components/Mypage/Picknone.jsx";
import MyPageLayout from "../../components/Mypage/MyPageLayout.jsx";

const Pick = () => {
  return (
    <>
      <MyPageLayout>
        <TitleWraper>
         <Title>
            <TitleHead>찜한상품()</TitleHead>
            <TitleSpan>찜한 상품은 최대 200개까지 저장됩니다.</TitleSpan>
          </Title>
        </TitleWraper>
        <UlWrapper style={{ borderTop: "2px solid rgb(51, 51, 51)" }}>
          <Picknone />
          {/* <PickBox /> */}
        </UlWrapper>
      </MyPageLayout>
    </>
  );
};

export default Pick;
