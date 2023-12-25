import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import RevwModal from "./RevwModal";
import InsertModal from "./InsertModal";
import axios from "axios";
import React from "react";
import noReview from "./1.png";
function GoodsRevw({ goodsId, goodsName }) {
    const [isLiked, setIsLiked] = useState(false);
    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]); // 리뷰 목록
    const [selectedReview, setSelectedReview] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);
    const [insertModalOpen, setInsertModalOpen] = useState(false); // InsertModal 상태

    // InsertModal을 여는 함수
    const openInsertModal = () => {
        setInsertModalOpen(true);
    };

    // InsertModal을 닫는 함수
    const closeInsertModal = () => {
        setInsertModalOpen(false);
    };

    // URL에서 상품 코드를 가져옵니다.
    const openModal = ({ userId, reviewId, userName, subject, content, createDate }) => {
        setSelectedReview({ userId, reviewId, userName, subject, content, createDate });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);

    };
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
                    `https://server.marketcherry.store/api/goods-review/list-goods?goodsId=${goodsId}`,
                    config
                );

                const imgUrlArray = response.data.content.map((review) => {
                    return `https://kr.object.ncloudstorage.com/cherry-resource/goodReview/${review.userId}/${review.reviewId}/2.jpg`;
                });

                setReviews(response.data.content);
                setImgUrl(imgUrlArray);
                console.log(response.data.content);
            } catch (error) {
                console.error("Error fetching reviews", error);
            }
        };

        fetchReviews(); // 함수 호출
    }, [goodsId]); // goodsId가 변경될 때마다 호출되도록 설정
    const handleImgError = (e) => {
        // 부모 요소를 찾아 display를 none으로 설정
        const parentElement = e.target.parentElement;
        if (parentElement) {
            parentElement.style.display = "none";
        }
    }

    const handleInsertButtonClick = (ordersId) => {
        // orderId가 있는 경우에만 후기 작성 모달 또는 다른 동작을 수행
        if (ordersId) {
            // 여기에 후기 작성 모달 또는 다른 동작을 수행하는 함수를 호출하세요.
            openInsertModal(reviews.ordersId);
            console.log('Insert button clicked for orderId:', ordersId);
        }
    };

    // const ImgUrl = `https://kr.object.ncloudstorage.com/cherry-resource/goodReview/${reviews.userId}/${reviews.reviewId}/2.jpg`;
    return (
        <>
            <section style={{ padding: '72px 0px' }}>
                {/* Content */}
                <GoodsReviewPhotoWrapper>
                    {reviews.map((review, index) => (
                        <GoodsReviewPhotoButton
                            key={review.reviewId}
                            onClick={() => openModal({ userId: review.userId, reviewId: review.reviewId, userName: review.userName, goodsName: review.goodsName, subject: review.subject, content: review.content, createDate: review.createDate })}
                        >
                            {imgUrl[index] && (
                                <GoodsReviewPhotoImage
                                    src={imgUrl[index]}
                                    alt="상품후기 이미지"
                                    onError={handleImgError}
                                />
                            )}
                        </GoodsReviewPhotoButton>
                    ))}
                </GoodsReviewPhotoWrapper>
                {reviews.length === 0 && (
                    <div>
                        <img src={noReview} alt="리뷰 없음" width="100%" height="100%"></img>
                    </div>
                )}

                {reviews.length > 0 && (
                    <div>
                        <GoodsReviewCount><span>{reviews.length === 0 ? null : "총" + reviews.length + "개"}</span></GoodsReviewCount>
                        <GoodsReviewNoticeWrapper>
                            <GoodsReviewNotice>
                                <span>공지</span>
                                <button>상품후기 적립금 정책 안내</button>
                            </GoodsReviewNotice>
                        </GoodsReviewNoticeWrapper>

                        <div>
                            {/* 리뷰 매핑 및 렌더링 */}
                            {reviews.map((review, index) => (
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

                                            {/* imgUrl이 null이 아닐 때만 이미지 박스를 렌더링 */}

                                            {imgUrl[index] && (
                                                <GoodsReviewSmallPhotoWrapper>
                                                    <GoodsReviewSmallPhotoButton
                                                        key={review.reviewId}
                                                        onClick={() => openModal({ userId: review.userId, reviewId: review.reviewId, userName: review.userName, goodsName: review.goodsName, subject: review.subject, content: review.content, createDate: review.createDate })}
                                                    >
                                                        <GoodsReviewSmallPhotoImage
                                                            src={`https://kr.object.ncloudstorage.com/cherry-resource/goodReview/${review.userId}/${review.reviewId}/2.jpg?${Date.now()}`}
                                                            alt="상품후기 이미지"
                                                            onError={handleImgError}
                                                        />
                                                    </GoodsReviewSmallPhotoButton>
                                                </GoodsReviewSmallPhotoWrapper>
                                            )}

                                            <GoodsReviewFooterWrapper>
                                                <div>
                                                    <span style={
                                                        {
                                                            color: 'rgb(153, 153, 153)',
                                                        }
                                                    }>{review.createDate}</span>
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
                            {reviews.some((review) => review.ordersId) && (
                                <GoodsReviewInsertButton onClick={() => handleInsertButtonClick(reviews[0].ordersId)}>
                                    후기 작성
                                </GoodsReviewInsertButton>
                            )}

                            <GoodsPagination>
                                <GoodsLeftButton disabled={true}></GoodsLeftButton>
                                <GoodsRightButton></GoodsRightButton>
                            </GoodsPagination>
                        </div>
                    </div>
                )}
            </section >
            <RevwModal
                isOpen={isModalOpen}
                onClose={closeModal}
                userId={selectedReview?.userId}
                reviewId={selectedReview?.reviewId}
                userName={selectedReview?.userName}
                subject={selectedReview?.subject}
                content={selectedReview?.content}
                createDate={selectedReview?.createDate}
            >
            </RevwModal>
            <InsertModal
                isOpen={insertModalOpen}
                onClose={closeInsertModal}
                goodsId={goodsId}
                goodsName={goodsName}
            />
        </>
    );
}

export default GoodsRevw;

const GoodsReviewInsertButton = styled.button`
            right: 20px;
            bottom: 20px;
            width: 100px;
            height: 40px;
            background-color: rgb(149, 5, 38);
            color: #fff;
            font-size: 14px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            margin-left: auto;
            margin-top: 20px;
            `;

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
                background - image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg); // 이전 페이지가 없을 때
            cursor: default;
}
            `;

const GoodsRightButton = styled.button`
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
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
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
                box - sizing: border-box;
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
                font - size: 14px;
            font-weight: 400;
            line-height: 19px;
            color: rgb(153, 153, 153);
            word-break: break-all;
            white-space: normal;
}
            `;
const GoodsReviewContext = styled.p` {
                padding - top: 12px;
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
& > span {

                font - size: 14px;
            font-weight: 400;
            line-height: 19px;
            color: rgb(153, 153, 153);
}

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
                font - size: 14px;
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
                margin - left: 9px;
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