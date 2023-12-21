import styled from "styled-components";


const MypageUserBox = () => {
    return (
        <MyPageUser>
        <UserItem1>
            <UserLevel>일반</UserLevel>
            <UserContainer>
                <strong>김주영 님</strong>
                <RatingContainer>
                    <RatingBtn>다음달 등급 확인</RatingBtn>
                    <Unber></Unber>
                    <RatingBtn>전체 등급 확인</RatingBtn>
                </RatingContainer>
            </UserContainer>
        </UserItem1>
        <UserItemContainer2>
            <MembersLink>
                <SpanContainer>
                    <NewSpan>new</NewSpan>
                    <span>컬리멤버스 <small>월 1,900원으로 10배 쿠폰받기 &nbsp;&nbsp;></small></span>
                </SpanContainer>
            </MembersLink>
        </UserItemContainer2>
    </MyPageUser>
    )
}

export default MypageUserBox;


const UserLevel = styled.div`
min-width: 48px;
height: 48px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding: 0px 5px;
border-radius: 100%;
font-weight: normal;
font-size: 14px;
text-align: center;
color: rgb(149, 5, 38);
border: 1px solid rgb(149, 5, 38);
background-color: rgb(255, 255, 255);
`;

const UserItemContainer2 = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
padding-top: 30px;
`;

const MyPageUser = styled.div`
    padding: 30px;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
`;

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 50%;
    min-height: 48px;
    margin-left: 20px;
`;

const UserItem1 = styled.div`
    display: flex;
`;

const Unber = styled.span`
    width: 3px;
    height: 3px;
    margin: 0px 5px;
    border-radius: 100%;
    background-color: rgb(217, 217, 217);
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RatingBtn = styled.button`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: rgb(153, 153, 153);
`;

const MembersLink = styled.a`
    display: flex;
    justify-content: space-between;
    padding: 15px 12px;
    border-radius: 6px;
    font-weight: 500;
    background-color: rgb(247, 247, 247);
    color: rgb(51, 51, 51);
`;

const NewSpan = styled.span`
    width: 40px;
    height: 18px;
    margin-right: 8px;
    border-radius: 13px;
    font-size: 11px;
    letter-spacing: -0.3px;
    background-color: rgb(240, 63, 64);
    color: rgb(255, 255, 255);
    text-align: center;
`;

const SpanContainer = styled.span``;
