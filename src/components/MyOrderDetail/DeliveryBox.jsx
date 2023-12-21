import styled from 'styled-components';
import { H3, TitleContainer } from './Style.jsx';


const DeliveryBox = () => {

  return (
    <>
      <TitleContainer>
        <H3>배송조회</H3>
      </TitleContainer>
      <ul style={{ listStyleType: 'none' }}>
        <Li>
          <Div1>
            <Span1>상온</Span1>
          </Div1>
          <StatusSpan>배송완료</StatusSpan>
          <Span1>넥스트마일</Span1>
          <A>배송조회</A>
        </Li>
      </ul>
    </>
  );
}

export default DeliveryBox;

const A = styled.a`
margin-left: 12px;
color: rgb(95, 0, 128);
text-decoration: underline;
cursor: pointer;
`;

const Div1 = styled.div`
  flex: 1 1 0%;
`;

const StatusSpan = styled.span`
    margin-right: 24px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    display: flex;
    padding: 12px 0px;
    font-size: 16px;
`;

const Li = styled.li`
height: 71px;
display: flex;
align-items: center; 
padding-top: 24px;
padding-bottom: 28px;
    margin-bottom: 60px;
    border-bottom: 1px solid rgb(244, 244, 244);
    
`;

const Span1 = styled.span`
display: flex;
    padding: 12px 0px;
    font-size: 16px;
    color: rgb(102, 102, 102);
`;
