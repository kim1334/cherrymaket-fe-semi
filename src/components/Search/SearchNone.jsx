import styled from 'styled-components';
import { MdSearchOff } from "react-icons/md";

const SearchNone = () => {

  return (

    <Container>
          <SearchIcon />
        <Span>검색된 상품이 없습니다.<br />
          다른 검색어를 입력해주세요.
        </Span>
    </Container>



  )

}

export default SearchNone;

const SearchIcon = styled(MdSearchOff)`
font-size: 100px;
color: rgb(181, 181, 181);
`;

const Span = styled.span`
text-align: center;
    font-size: 16px;
    color: rgb(181, 181, 181);
    margin-top: 16px;
    line-height: normal;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 480px;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
margin: auto;
padding: 100px 0px;
`;



