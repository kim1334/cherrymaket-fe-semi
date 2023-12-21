import styled from "styled-components";
import { A, Img } from "../../components/Mypage/PickBox.jsx";

const ProductInquiryBox = () => {
  return (
    <Li>
      <LiBtn>
        <LiDvi1>
          <a style={{padding: '0px 20px'}}>
            <ImgSpan>
            <Img src="https://product-image.kurly.com/product/image/0b18df9b-7f8f-4381-9109-c599af7ef33d.jpg"></Img>
            </ImgSpan>
          </a>
          <div>
            <P>[이노센트]맛있는 거</P>
            <TextDiv>
              <P1>칼로리</P1>
            </TextDiv>
          </div>
        </LiDvi1>
        <LiDiv2>23.12.10</LiDiv2>
        <LiDiv2>답변대기</LiDiv2>
      </LiBtn>
    </Li>
  );
};

export default ProductInquiryBox;

const Li = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

const LiBtn = styled.button`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const LiDvi1 = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  flex-basis: 75%;
  overflow: hidden;
`;

const LiDiv2 = styled.div`
  flex-basis: 12.5%;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 14px;
  color: rgb(153, 153, 153);
`;

const P = styled.p`
  margin-bottom: 4px;
  color: rgb(153, 153, 153);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  overflow: hidden;
  max-width: 500px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const P1 = styled.p`
  overflow: hidden;
  max-width: 480px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 22px;
  color: rgb(51, 51, 51);
  margin-right: 6px;
`;

const ImgSpan = styled.span`
display: block;
    position: relative;
    width: 60px;
    height: 60px;
    background-color: rgb(245, 245, 245);
`;

const TextDiv = styled.div`
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
`;
