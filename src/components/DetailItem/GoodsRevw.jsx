import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import RevwModal from "./RevwModal";
import { useParams } from "react-router-dom";
import axios from "axios";

function GoodsRevw({ goodsId }) {
    const [isLiked, setIsLiked] = useState(false);
    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]); // 리뷰 목록
    const [selectedReview, setSelectedReview] = useState(null);
    // URL에서 상품 코드를 가져옵니다.
    const openModal = (userId, reviewId) => {
        setSelectedReview({ userId, reviewId });
        setIsModalOpen(true);

    }
    const closeModal = () => setIsModalOpen(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        // 리뷰 목록을 가져오는 함수
        const fetchReviews = async () => {
            const token = sessionStorage.getItem("accessToken");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            try {
                const response = await axios.get(
                    `https://server.marketcherry.store/api/goods-review/list-goods?goodsId=1`, config
                );
                console.log(goodsId);
                setReviews(response.data.content); // 예시: API 응답에서 실제 리뷰 데이터를 가져와야 합니다.
                console.log(response.data.content);
            } catch (error) {
                console.error("Error fetching reviews", error);
            }
        };
        fetchReviews(); // 함수 호출
    }, [goodsId]); // goodsId가 변경될 때마다 호출되도록 설정
    return (
        <>
            <section style={{ padding: '72px 0px' }}>
                {/* Content */}
                <GoodsReviewText>상품후기</GoodsReviewText>
                <GoodsReviewPhotoWrapper>
                    {reviews.map((review) => (
                        <GoodsReviewPhotoButton onClick={() => openModal(review.userId, review.reviewId)}>

                            <GoodsReviewPhotoImage src={`https://kr.object.ncloudstorage.com/cherry-resource/goodReview/${review.userId}/${review.reviewId}/2.jpg`} alt="상품후기 이미지" />
                        </GoodsReviewPhotoButton>
                    ))}
                </GoodsReviewPhotoWrapper>

                <div>
                    <GoodsReviewCount><span>총3,117개</span></GoodsReviewCount>
                    <GoodsReviewNoticeWrapper>
                        <GoodsReviewNotice>
                            <span>공지</span>
                            <button>상품후기 적립금 정책 안내</button>
                        </GoodsReviewNotice>
                    </GoodsReviewNoticeWrapper>

                    <div>
                        {/* 리뷰 매핑 및 렌더링 */}
                        {reviews.map((review) => (
                            <GoodsReviewWrapper key={review.reviewId}>
                                <GoodsReviewLeft>
                                    <span>{review.userName}</span>
                                </GoodsReviewLeft>
                                <GoodsReviewRight>
                                    <div>
                                        <GoodsReviewItemTitle>
                                            <h3>{review.subject}</h3> { /*리뷰 제목 OR 상품명 */}
                                        </GoodsReviewItemTitle>
                                        <GoodsReviewContext>
                                            {review.content}
                                        </GoodsReviewContext>
                                        <GoodsReviewSmallPhotoWrapper>
                                            <GoodsReviewSmallPhotoButton onClick={() => openModal(review.userId, review.reviewId)}>
                                                <GoodsReviewSmallPhotoImage src={`https://kr.object.ncloudstorage.com/cherry-resource/goodReview/${review.userId}/${review.reviewId}/2.jpg`} alt="상품후기 이미지" />
                                            </GoodsReviewSmallPhotoButton>
                                        </GoodsReviewSmallPhotoWrapper>
                                        <GoodsReviewFooterWrapper>
                                            <div>
                                                <span style={
                                                    {
                                                        color: 'rgb(153, 153, 153)',
                                                    }
                                                }>2022.12.31</span>
                                            </div>
                                            <GoodsReviewLikeButton onClick={handleLikeClick}>
                                                <GoodsReviewLikeButtonIcon>
                                                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                                                </GoodsReviewLikeButtonIcon>
                                                <span>좋아요</span>
                                            </GoodsReviewLikeButton>
                                        </GoodsReviewFooterWrapper>
                                    </div>
                                </GoodsReviewRight>
                            </GoodsReviewWrapper>
                        ))}
                        <GoodsPagination>
                            <GoodsLeftButton disabled={true}></GoodsLeftButton>
                            <GoddsRightButton></GoddsRightButton>
                        </GoodsPagination>
                    </div>
                </div>
            </section>
            <RevwModal isOpen={isModalOpen} onClose={closeModal} userId={selectedReview?.userId} reviewId={selectedReview?.reviewId}></RevwModal>
        </>
    );
}

export default GoodsRevw;

const GoodsPagination = styled.div`
display: flex;
gap: 12px;
-webkit-box-pack: center;
justify-content: center;
padding-top: 20px;
`;

const GoodsLeftButton = styled.button`
width: 44px;
height: 44px;
padding: 0px;
margin: 0px;
border: 0px;
cursor: pointer;
background-color: transparent;
background-repeat: no-repeat;
background-size: cover;
background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg);
&:disabled {
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg); // 이전 페이지가 없을 때
    cursor: default;
}
`;

const GoddsRightButton = styled.button`
width: 44px;
height: 44px;
padding: 0px;
margin: 0px;
border: 0px;
cursor: pointer;
background-color: transparent;
background-repeat: no-repeat;
background-size: cover;
background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg);
`;

const GoodsReviewLikeButton = styled.button`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
min-width: 88px;
height: 32px;
padding: 0px 13px 0px 11px;
border: 1px solid rgb(226, 226, 226);
border-radius: 20px;
font-size: 12px;
line-height: 20px;
color: rgb(153, 153, 153);
`;

const GoodsReviewLikeButtonIcon = styled.span`
width: 15px;
height: 15px;
margin-right: 4px;
`;

const GoodsReviewFooterWrapper = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
width: 100%;
padding-top: 19px;
padding-right: 20px;
`;


const GoodsReviewSmallPhotoImage = styled.img`
display: block;
max-width: 100%;
width: initial;
height: initial;
background: none;
opacity: 1;
border: 0px;
margin: 0px;
padding: 0px;
`;

const GoodsReviewSmallPhotoButton = styled.button`
width: 93px;
height: 93px;
cursor: pointer;
& > span {
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
    max-width: 100%;
}
`;

const GoodsReviewSmallPhotoWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
gap: 3px;
overflow: auto hidden;
padding: 15px 0px 2px;
`;

const GoodsReviewRight = styled.div`
flex: 1 1 0%;
overflow: hidden;
`;

const GoodsReviewItemTitle = styled.div`
display: flex;
flex-direction: column; /* 이 부분을 추가하여 아이템들을 수직으로 정렬 */
align-items: flex-start; /* 왼쪽 정렬로 변경 */
gap: 5px;
padding-right: 20px;
height: 100%;
& > h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: rgb(153, 153, 153);
    word-break: break-all;
    white-space: normal;
}
`;
const GoodsReviewContext = styled.p` {
   padding-top: 12px;
   white-space: pre-wrap;
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   color: rgb(51, 51, 51);
}
`;
const GoodsReviewText = styled.h2`
font-size: 24px;
font-weight: 500;
line-height: 41px;
letter-spacing: -0.5px;
color: rgb(51, 51, 51);
`;

const GoodsReviewPhotoWrapper = styled.div`
position: relative;
display: flex;
-webkit-box-pack: start;
justify-content: start;
-webkit-box-align: center;
align-items: center;
flex-wrap: nowrap;
gap: 3px;
width: 100%;
padding: 20px 0px 30px;
overflow: hidden;
`;

const GoodsReviewPhotoButton = styled.button`
position: relative;
width: 124px;
height: 124px;
overflow: hidden;
background-color: rgb(244, 244, 244);
`;

const GoodsReviewPhotoImage = styled.img`
position: absolute;
inset: 0px;
box-sizing: border-box;
padding: 0px;
border: none;
margin: auto;
display: block;
width: 0px;
height: 0px;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
object-fit: cover;
`;

const GoodsReviewCount = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding-bottom: 16px;
 & > span {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
 }
`;

const GoodsReviewNoticeWrapper = styled.div`
border-top: 1px solid rgb(51, 51, 51);
`;

const GoodsReviewNotice = styled.div`
padding: 21px 20px 20px;
border-bottom: 1px solid rgb(238, 238, 238);
 & > span {
    display: inline-block;
    height: 22px;
    width: 42px;
    border-radius: 4px;
    background-color: rgb(244, 244, 244);
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    color: rgb(102, 102, 102);
    vertical-align: 2px;
 }
 & > button {
    margin-left: 9px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgb(51, 51, 51);
    background-color: transparent;
    cursor: pointer;
 }
`;

const GoodsReviewWrapper = styled.div`
display: flex;
padding: 30px 0px 19px 20px;
border-bottom: 1px solid rgb(244, 244, 244);
font-size: 14px;
font-weight: 400;
line-height: 19px;
height: 100%
`;

const GoodsReviewLeft = styled.div`
flex: 0 0 225px;
 & > span {
    display: inline-block;
    height: 18px;
    border: 1px solid rgb(168, 100, 216);
    border-radius: 3px;
    padding: 3px 4px 3px 5px;
    margin-right: 4px;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    word-break: keep-all;
    background-color: rgb(149, 5, 38);
    color: rgb(255, 255, 255);
    }
`;