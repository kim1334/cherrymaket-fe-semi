
import styled from "styled-components";
import { Link } from "react-router-dom";
import AdminHader from "./AdminHader";



const Admin = () => {

  return (
    
    <FlexWrapper>
        <AdminHader />
            <Container>
                <Wrapper>
                        


                    <h1>어드민 메인 막 아무거나 하면 됨</h1>



                </Wrapper>
            </Container>
    </FlexWrapper>
    
  )
};

export default Admin;

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
    font-family: 'Nanum Myeongjo';
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
border-bottom: 1px solid 
`;

const Container = styled.div`
position: relative;
display: block;
`;

const FlexWrapper = styled.div`
    margin: 0;
    padding: 0;
`;


