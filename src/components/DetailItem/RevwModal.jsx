import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

// 모달 컴포넌트 스타일

const ModalReviewLikeButton = styled.button`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
min-width: 40px;
height: 32px;
margin-right: 10px;
padding: 0px 13px 0px 11px;
border: 1px solid rgb(226, 226, 226);
border-radius: 20px;
font-size: 12px;
line-height: 20px;
color: rgb(153, 153, 153);
`;

const ModalReviewLikeButtonIcon = styled.span`
width: 15px;
height: 15px;
margin-right: 4px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 11;
`;

const ModalHeader = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding-bottom: 8px;
margin: 29px 30px 20px;
border-bottom: 1px solid rgb(244, 244, 244);
letter-spacing: -1px;
vertical-align: middle;
& > span {
    display: inline;
    padding: 0px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
    vertical-align: baseline;
}
`;
const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  color : black;
  font-size: 20px;
`;

const ModalBodyWrapper = styled.div`
padding: 0px 30px 30px;
overflow: hidden;
`;

const ModalBody = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr auto;
gap: 20px;
`

const ModalBodyLeft = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
& > span {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 375px;
  height: 488px;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
}
`;

const ModalImg = styled.img`
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

const ModalBodyRight = styled.div`
width: 343px;
overflow: hidden;
`;

const ModalRevwWriter = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
margin-bottom: 11px;
& > span {
  display: inline-block;
  height: 18px;
  border: 1px solid rgb(149, 5, 38);
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
const ModalRevwTitle = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
gap: 3px;
& > span {
  padding-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(153, 153, 153);
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
`;

const ModalRevw = styled.div`
max-height: 343px;
margin-top: 10px;
overflow: hidden scroll;

& > p {
  word-break: break-word;
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgb(51, 51, 51);
}
`;

const ModalRevwFooter = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
width: 100%;
padding-top: 14px;

& > span {
  font-size: 12px;
  line-height: 16px;
  color: rgb(153, 153, 153);
}
`;

// 모달 컴포넌트
function RevwModal({ isOpen, onClose, children }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
      if(isOpen){
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }

      return () => {
          document.body.style.overflow = '';
      }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
            <span>사진 후기</span>
            <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBodyWrapper>
          <ModalBody>
            <ModalBodyLeft>
              <span><ModalImg src="https://kr.object.ncloudstorage.com/cherry-product/0093774/0093774_0.png" alt="상품후기 이미지"/></span>
            </ModalBodyLeft>
            <ModalBodyRight>
              <ModalRevwWriter><span>작성자</span></ModalRevwWriter>
              <div style={{position: 'relative'}}>
                <ModalRevwTitle><span>[KF365] 1+등급 무항생제 대란 20구</span></ModalRevwTitle>
              </div>
              <ModalRevw>
                <p>한개가 깨져서 그줄 4개가 다붙어서 떼내다 다깨졌어요 </p>
              </ModalRevw>
              <ModalRevwFooter>
                <span>2023-12-15</span>
                <ModalReviewLikeButton onClick={handleLikeClick}>
                  <ModalReviewLikeButtonIcon>
                    {isLiked ?  <FaHeart /> : <FaRegHeart />}
                  </ModalReviewLikeButtonIcon>
                  <span>좋아요</span>
                </ModalReviewLikeButton>
              </ModalRevwFooter>
            </ModalBodyRight>
          </ModalBody>
        </ModalBodyWrapper>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default RevwModal;
