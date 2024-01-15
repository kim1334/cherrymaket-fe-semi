import styled from "styled-components";
import { Link } from "react-router-dom";
import AdminHader from "./AdminHader";
import "../Mypages/Mypage.css";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar";
import UserBox from "../../components/Admin/UserBox";



const Admin = () => {
  return (
    <FlexWrapper>
      <AdminHader />
      <Container>
        <Wrapper>
          <div className="mypageContainer1">
            <div className="mypageContainer">
              <div className="mypageItem">
      
                
              </div>
            </div>
            <FixedSiderbar />
          </div>
          <SubTitle>
            <SubTitleLine>제목</SubTitleLine>
            <SubTitleWriter>작성일</SubTitleWriter>
            <SubTitleWriter>답변상태</SubTitleWriter>
          </SubTitle>
          <UlWrapper>
          <UserBox />
          </UlWrapper>
        </Wrapper>
      </Container>
    </FlexWrapper>
  );
};

export default Admin;

export const SubTitleWriter = styled.th`
    flex-basis: 100px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleLine = styled.th` 
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitle = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px;
    border-top: 2px solid rgb(244, 244, 244); 
`;

export const UlWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: bold;
    list-style-type: none;
`;

const Util = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
`;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Li = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  float: left;
  padding: 0 26px;
  margin: 0;
`;

const Ul = styled.ul`
    width: 271px
    display: inline-block;
    vertical-align: top;
    list-style: none;
`;

const Nabvar = styled.nav`
  height: 66px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const H1 = styled.h1`
  padding: 23px 0;
  font-family: "Nanum Myeongjo";
  font-weight: 800;
  font-size: 1.75em;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #333;
`;

const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  border-bottom: 1px solid;
`;

const Container = styled.div`
  position: relative;
  display: block;
`;

const FlexWrapper = styled.div`
  margin: 0;
  padding: 0;
`;
