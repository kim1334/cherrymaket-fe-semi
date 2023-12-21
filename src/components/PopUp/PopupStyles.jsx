// PopupComponentStyles.js
import styled from 'styled-components';

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;


export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px; 
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const PopupImage = styled.img`
  max-width: 500px;
  max-height: auto;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
  width: 50%;
  height: 50px;
`;

export const NeverShowAgainButton = styled.button`
  background: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
  width: 50%;
  height: 50px;
`;
