import styled from "styled-components";

import { Link } from "react-router-dom";

const MypageMembersBox = () => {
    return (
        <MyPageMembers>
            <MyPageMemberItem>
                <Link to="/mypage/review">
                    <MyPageMemberItemBtn>
                        <MembersItem>
                            상품후기
                            <MyPageMemberItemBtnImage />
                        </MembersItem>
                        <Barogo>작성하기</Barogo>
                    </MyPageMemberItemBtn>
                </Link>
            </MyPageMemberItem>
            <MyPageMemberItem>
                <Link to="/mypage/inquiry/products">
                    <MyPageMemberItemBtn>
                        <MembersItem>
                            상품문의
                            <MyPageMemberItemBtnImage />
                        </MembersItem>
                        <Barogo>확인하기</Barogo>
                    </MyPageMemberItemBtn>
                </Link>
            </MyPageMemberItem>
        </MyPageMembers>
    );
};

export default MypageMembersBox;

const MembersItem = styled.div`
    position: relative;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: rgb(51, 51, 51);
`;

const MyPageMembers = styled.div`
  display: flex;
  column-gap: 4px;
`;

const MyPageMemberItem = styled.div`
  flex: 1 1 0%;
  overflow: hidden;
  background: rgb(255, 255, 255);
`;

const MyPageMemberItemBtn = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 30px;
  cursor: pointer;
  background-color: transparent;
`;

const Barogo = styled.div`
font-weight: 700;
font-size: 20px;
color: rgb(149, 5, 38);
`;

const MyPageMemberItemBtnImage = styled.span`\
    width: 23px;
    height: 23px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/OVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAxYGNhJAM7wjAAAAd0lEQVRYw+3UsQ2AMAwAQQfRsESWiCmp2I+aJagYgZYBaGGItGYEIhQZIf3VVl5OYREAAP4oxRTrvdYUzGzh6EfHYFiss7Ve8pEFnZNpJkmSJEnT/ObGltzSrzl/KTly5PxzIjo5X8501sy1BTODyX657QcAgL8b8j9nkEwifVYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMjJUMDY6NTQ6MTYrMDA6MDClJXo+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTIyVDA2OjU0OjE2KzAwOjAw1HjCggAAAABJRU5ErkJggg==) 50% 50% / cover no-repeat;
`;

const CouponBanner = styled.div`
  display: block;
  width: 1050px;
  overflow: hidden;
  margin: 20px auto 0;
`;

const CouponBannerImage = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
`;
