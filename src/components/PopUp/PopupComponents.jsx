// PopupComponent.js
import React, { useState, useRef, useEffect } from 'react';
import {
  PopupContainer,
  PopupContent,
  PopupImage,
  CloseButtonContainer,
  CloseButton,
  NeverShowAgainButton,
} from './PopupStyles';

const PopupComponent = ({ imageUrl, externalLink, index, onRemove }) => {
  const [isHidden, setIsHidden] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (imageRef.current) {
      // 이미지가 로드된 후 이미지의 가로 길이를 버튼에 적용
      const imageWidth = imageRef.current.width;
      const closeButton = document.getElementById('closeButton');
      if (closeButton) {
        closeButton.style.width = `${imageWidth / 2}px`;
      }
    }
  }, [imageUrl]);

  const handleClosePopup = () => {
    setIsHidden(true);
  };

  const handleNeverShowAgain = () => {
    setIsHidden(true);
    onRemove(index);
  };

  return (
    <div className='pop_obj'>
      <PopupContainer style={{ display: isHidden ? 'none' : 'flex' }}>
        <PopupContent>
          <p>
            <a
              rel="noopener noreferrer"
              href={externalLink}
            >
              <PopupImage
                ref={imageRef}
                src={imageUrl}
                alt="Popup Image"
              />
            </a>
          </p>
          <CloseButtonContainer>
            <NeverShowAgainButton onClick={handleNeverShowAgain}>
              다시 보지 않기
            </NeverShowAgainButton>
            <CloseButton id="closeButton" onClick={handleClosePopup}>
              닫기
            </CloseButton>
          </CloseButtonContainer>
        </PopupContent>
      </PopupContainer>
    </div>
  );
};

export default PopupComponent;