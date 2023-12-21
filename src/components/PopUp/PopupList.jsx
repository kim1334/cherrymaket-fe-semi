import React, { useState, useEffect } from 'react';
import PopupComponent from './PopupComponents';
import styled from 'styled-components';

const PopupListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PopupList = ({ initialPopupData }) => {
  // 'initialPopupData'가 'undefined'인 경우 빈 배열로 초기화
  const [popupData, setPopupData] = useState(initialPopupData || []);

  useEffect(() => {
    // 로컬 스토리지에서 팝업 데이터를 로드
    const storedPopupData = localStorage.getItem('popupData');
    if (storedPopupData) {
      setPopupData(JSON.parse(storedPopupData));
    }
  }, []);

  const handleRemovePopup = (index) => {
    const updatedPopupData = popupData.filter((_, i) => i !== index);
    setPopupData(updatedPopupData);
    // 업데이트된 데이터를 로컬 스토리지에 저장
    localStorage.setItem('popupData', JSON.stringify(updatedPopupData));
  };

  return (
    <PopupListContainer>
      {/* 'popupData'가 'undefined' 또는 비어 있지 않은 경우에만 'map' 함수 실행 */}
      {popupData && popupData.length > 0 && popupData.map((popup, index) => (
        <PopupComponent
          key={index}
          index={index}
          imageUrl={popup.imageUrl}
          externalLink={popup.externalLink}
          onRemove={handleRemovePopup}
        />
      ))}
    </PopupListContainer>
  );
};

export default PopupList;