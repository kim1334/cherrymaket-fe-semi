import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

const InsertModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const InsertModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  width: 100%;
`;

const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ModalInput = styled.textarea`
  margin-bottom: 20px;
  height: 100px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #f1c40f;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

function InsertModal({ isOpen, onClose, goodsId, ordersId }) {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [revwData, setRevwData] = useState([]);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 파일 및 폼 데이터 처리
    // onClose(); // 모달 닫기
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  if (!isOpen) return null;



  const handleFormSubmit = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      const revwData = {
        ordersId: ordersId,
        goodsId: goodsId,
        subject: subject,
        content: content,
      }
      // const formData = new FormData();
      // formData.append('imageFiles', file);

      // // Axios로 파일 및 폼 데이터 서버에 전송
      // await axios.post("https://server.marketcherry.store/api/goods-review/add-image", formData, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      // 다른 필드들에 대한 FormData 생성

      console.log("폼 데이터:", revwData);

      // 나머지 코드...

      // 필요한 경우 추가적인 값 로깅
      console.log("제목:", subject);
      console.log("내용:", content);
      console.log("주문 ID:", ordersId);
      console.log("상품 ID:", goodsId);
      // 두 번째 엔드포인트로 전송
      setRevwData(revwData);
      await axios.post("https://server.marketcherry.store/api/goods-review/add", revwData, config);
      alert("후기가 등록되었습니다. ");

      // 모달 닫기
      // onClose();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert("후기 등록에 실패하였습니다. ");
    }
  };






  return (
    <InsertModalBackground>
      <InsertModalContainer>
        <ModalHeader>후기 작성</ModalHeader>
        <ModalForm onSubmit={handleFormSubmit}>
          <label>제목</label>
          <ModalInput
            type="text"
            name="subject"
            placeholder='제목을 입력해주세요'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required />
          <label>내용</label>
          <ModalInput type="text"
            name="content"
            placeholder='제목을 입력해주세요'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required />
          {/* <label>사진 첨부</label>
          <FileInput type="file" onChange={handleFileChange} /> */}
          <ModalButton type="submit">제출</ModalButton>
          <ModalButton onClick={onClose}>닫기</ModalButton>
        </ModalForm>
      </InsertModalContainer>
    </InsertModalBackground>
  );
}

export default InsertModal;